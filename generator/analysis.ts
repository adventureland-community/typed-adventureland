import { DeepObject } from "./helpers/DeepObject";
import { capitalize } from "./helpers/capitalize";
import { isArray, isObject } from "./helpers/typeCheck";
import type { GeneratorConfig } from "./Generator";

export type AnalysisType =
  | {
      type: "string" | "number" | "boolean" | "null";
    }
  | {
      type: "object";
      fields: FieldsAnalysis;
    }
  | {
      type: "array";
      lengths: Array<number>;
      elements: Array<FieldAnalysis>;
    };

export type FieldAnalysis = {
  optional: boolean;
  types: AnalysisType[];
};

export type FieldsAnalysis = Record<string, FieldAnalysis>;

/**
 * Tries to understand the fields of all objects passed in `arr`.
 * A field will be marked optional if at least one element doesn't
 *   have it.
 * The `types` array will contain all types encountered for this
 *   property across all elements.
 *
 * @param arr Array of objects to analyse
 * @returns A mapping where keys are the fields names and values
 *  are the type behavior.
 */
export function analyseFields<T extends DeepObject<1> | Array<unknown>>(
  arr: Array<T>
): FieldsAnalysis {
  const seenFields = new Set(arr.flatMap((o) => Object.keys(o)));
  const fields: FieldsAnalysis = Object.fromEntries(
    [...seenFields.values()].map((n) => [n, { optional: false, types: [] }])
  );

  for (const obj of arr) {
    for (const seenField of seenFields) {
      if (!(seenField in obj)) {
        fields[seenField].optional = true;
        continue;
      }

      const value = obj[seenField];
      let type = value === null ? "null" : typeof value;

      if (isArray(value)) {
        type = "array";
      }

      if (!fields[seenField].types.find((t) => t.type === type)) {
        if (type === "array") {
          const allArrays = arr
            .filter((o) => o[seenField] && isArray(o[seenField]))
            .map((o) => o[seenField] as Array<unknown>);
          const lengths = [...new Set(allArrays.map((a) => a.length))];

          const elementsAnalysisAsObject = analyseFields(allArrays);
          const elements = Object.entries(elementsAnalysisAsObject)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([, field]) => field);

          fields[seenField].types.push({
            type: "array",
            lengths,
            elements,
          });
        } else if (type === "object") {
          fields[seenField].types.push({
            type: "object",
            fields: analyseFields(
              arr
                .filter((o) => o[seenField] && isObject(o[seenField]))
                .map((o) => o[seenField] as DeepObject<1>)
            ),
          });
        } else if (
          type === "string" ||
          type === "boolean" ||
          type === "number" ||
          type === "null"
        ) {
          fields[seenField].types.push({
            type,
          });
        } else {
          throw new Error(`Case not handled yet: ${type}.`);
        }
      }
    }
  }

  return fields;
}

export interface FullAnalysis {
  category: string;
  group: string;
  ids: Array<string>;
  fields: FieldsAnalysis;
  nameMapping: Record<string, string | null>;
}

export function analyseAll<T extends DeepObject<3>>(data: T, config: GeneratorConfig) {
  const entries = Object.entries(data);
  const analysis: Array<FullAnalysis> = [];

  for (const [category, values] of entries) {
    try {
      const fields = analyseFields(Object.values(values));
      const ids = Object.keys(values).sort();

      analysis.push({
        category: config.nameOverride[category] ?? capitalize(category),
        group: category,
        ids: ids,
        fields,
        nameMapping: Object.fromEntries(
          ids.map((id) => [id, (values[id].name ?? null) as null | string])
        ),
      });
    } catch (err) {
      console.error("For", category);
    }
  }

  analysis.sort((a, b) => a.category.localeCompare(b.category));

  return analysis;
}
