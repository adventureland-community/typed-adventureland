import { DeepObject } from "./helpers/DeepObject";
import { capitalize } from "./helpers/capitalize";
import { isArray, isObject } from "./helpers/typeCheck";
import { unique, uniqueBy } from "./helpers/unique";
import type { GeneratorConfig } from "./Generator";
import { Union } from "./UnionRegistry";

export type ArrayAnalysisType = {
  type: "array";
  lengths: Array<number>;
  elements: Array<FieldAnalysis>;
};

export type StringAnalysisType = {
  type: "string";
  values: Array<string>;
};

export type UnionAnalysisType = {
  type: "union";
  union: Union;
};

export type ObjectAnalysisType = {
  type: "object";
  keys: StringAnalysisType;
  fields: FieldsAnalysis;
};

export type UnionObjectAnalysisType = {
  type: "uobject";
  keys: UnionAnalysisType;
  values: FieldAnalysis;
};

export type SimpleAnalysisType = {
  type: "number" | "boolean" | "null";
};

export type AnalysisType =
  | SimpleAnalysisType
  | StringAnalysisType
  | UnionAnalysisType
  | ObjectAnalysisType
  | ArrayAnalysisType
  | UnionObjectAnalysisType;

export type FieldAnalysis = {
  optional: boolean;
  types: AnalysisType[];
};

export type FieldsAnalysis = Record<string, FieldAnalysis>;

export function typeSignature(type: AnalysisType) {
  switch (type.type) {
    case "boolean":
    case "number":
    case "null": {
      return type.type;
    }
    case "string": {
      return `string(${type.values.join("|:|")})`;
    }
    case "union": {
      return `union_${type.union.name}`;
    }
    case "array": {
      return `array[${type.lengths.join(",")}](${type.elements
        .flatMap((e) => e.types.map(typeSignature))
        .join("|:|")})`;
    }
    case "object": {
      return `object(${Object.entries(type.fields)
        .map(([key, val]) => `{${key}:${val.types.map(typeSignature).join("|")}}`)
        .join("|:|")})`;
    }
    case "uobject": {
      return `uobject(${typeSignature(type.keys)}:${type.values.types
        .map(typeSignature)
        .join("|")})`;
    }
  }
}

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
          let elements = Object.entries(elementsAnalysisAsObject)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([, field]) => field);

          fields[seenField].types.push({
            type: "array",
            lengths,
            elements,
          });
        } else if (type === "object") {
          const objects = arr
            .filter((o) => o[seenField] && isObject(o[seenField]))
            .map((o) => o[seenField] as DeepObject<1>);

          fields[seenField].types.push({
            type: "object",
            keys: {
              type: "string",
              values: unique(objects.flatMap((o) => Object.keys(o))),
            },
            fields: analyseFields(objects),
          });
        } else if (type === "string") {
          // Store the actual values for extractedTypes
          let values = arr
            .filter((o) => o[seenField] && typeof o[seenField] === "string")
            .map((o) => o[seenField] as string);

          fields[seenField].types.push({
            type: "string",
            values: unique(values),
          });
        } else if (type === "boolean" || type === "number" || type === "null") {
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

type Replacer = (type: AnalysisType) => AnalysisType | null;

export function replaceType(field: FieldAnalysis, replacer: Replacer) {
  for (let i = 0; i < field.types.length; i++) {
    const type = field.types[i];

    switch (type.type) {
      case "array": {
        for (let j = 0; j < type.elements.length; j++) {
          const element = type.elements[j];

          replaceType(element, replacer);
        }

        const replaced = replacer(type);

        if (replaced) {
          field.types[i] = replaced;
        }
        break;
      }
      case "object": {
        const fieldsKeys = Object.keys(type.fields);

        for (const fieldsKey of fieldsKeys) {
          const element = type.fields[fieldsKey];

          replaceType(element, replacer);
        }

        const replaced = replacer(type);

        if (replaced) {
          field.types[i] = replaced;
        }
        break;
      }
      default: {
        const replaced = replacer(type);

        if (replaced) {
          field.types[i] = replaced;
        }
        break;
      }
    }
  }
}

export function reduceTypes(field: FieldAnalysis) {
  field.types = uniqueBy(field.types, typeSignature);

  field.types = field.types.reduce<Array<AnalysisType>>((all, elem) => {
    if (
      elem.type === "string" ||
      elem.type === "number" ||
      elem.type === "boolean" ||
      elem.type === "null"
    ) {
      const found = all.findIndex((v) => v.type === elem.type);

      if (found >= 0) {
        // If string, we need to add the values
        if (elem.type === "string") {
          // @ts-ignore I know values will be available
          all[found].values.push(...elem.values);
        }
        return all;
      }
    } else if (elem.type === "array") {
      const signature = typeSignature(elem);
      const found = all.find((v) => typeSignature(v) === signature) as
        | undefined
        | ArrayAnalysisType;

      if (found) {
        // console.log(typeSignature(found));
        // process.exit();
        // found.keys.values = unique([...found.keys.values, ...elem.keys.values]);
        // for (let key in elem.fields) {
        //   if (key in found.fields) {
        //     found.fields[key].optional ||= elem.fields[key].optional;
        //     found.fields[key].types.push(...elem.fields[key].types);
        //   } else {
        //     found.fields[key] = elem.fields[key];
        //     found.fields[key].optional = true;
        //   }
        // }
        // for (let key in found.fields) {
        //   if (!(key in elem.fields)) {
        //     found.fields[key].optional = true;
        //   }
        //   reduceTypes(found.fields[key]);
        // }
        // return all;
      } else {
        for (let j = 0; j < elem.elements.length; j++) {
          const element = elem.elements[j];

          reduceTypes(element);
        }
      }
    } else if (elem.type === "object") {
      const found = all.find((v) => v.type === "object") as undefined | ObjectAnalysisType;

      if (found) {
        found.keys.values = unique([...found.keys.values, ...elem.keys.values]);

        for (let key in elem.fields) {
          if (key in found.fields) {
            found.fields[key].optional ||= elem.fields[key].optional;
            found.fields[key].types.push(...elem.fields[key].types);
          } else {
            found.fields[key] = elem.fields[key];
            found.fields[key].optional = true;
          }
        }

        for (let key in found.fields) {
          if (!(key in elem.fields)) {
            found.fields[key].optional = true;
          }

          reduceTypes(found.fields[key]);
        }

        return all;
      } else {
        for (let key in elem.fields) {
          const element = elem.fields[key];

          reduceTypes(element);
        }
      }
    } else if (elem.type === "uobject") {
      reduceTypes(elem.values);
    }

    all.push(elem);

    return all;
  }, []);
}

export interface FullAnalysis {
  category: string;
  group: string;
  ids: Array<string>;
  fields: FieldsAnalysis;
  nameMapping: Record<string, string | null>;
}

function isSameArray(model: ArrayAnalysisType, type: AnalysisType): type is ArrayAnalysisType {
  return (
    type.type === model.type &&
    type.lengths.length === model.lengths.length &&
    type.elements.length === model.elements.length &&
    type.elements.every(
      (elem1, index1) =>
        elem1.types.length === model.elements[index1].types.length &&
        elem1.types.every(
          (elem2, index2) =>
            elem2.type === model.elements[index1].types[index2].type &&
            (["string", "number", "boolean", "null"].includes(elem2.type) ||
              (elem2.type === "array" && isSameArray(elem2, model.elements[index1].types[index2])))
        )
    )
  );
}

function arrayCleaner(type: ArrayAnalysisType): ArrayAnalysisType | null {
  const { lengths, elements } = type;

  // If we have multiple lengths, we won't generate a tuple
  // so we collapse all types to unify them (all strings become a single string)
  if (lengths.length > 1) {
    const collapsed = elements
      .flatMap((elem) => elem.types)
      .reduce<Array<AnalysisType>>((all, elem) => {
        if (elem.type === "string") {
          const found = all.findIndex((v) => v.type === "string");

          if (found >= 0) {
            // @ts-ignore I know values will be available
            all[found].values.push(...elem.values);
            return all;
          }
        } else if (elem.type === "array") {
          const found = all.findIndex((v) => isSameArray(elem, v));

          if (found >= 0) {
            for (let index = 0; index < elem.elements.length; index++) {
              const element = elem.elements[index];

              if (element.optional) {
                // @ts-ignore I know elements will be available
                all[found].elements[index].optional = true;
              }

              // @ts-ignore I know elements will be available
              all[found].elements[index].types.push(...element.types);
            }
            return all;
          }
        }

        all.push(elem);

        return all;
      }, []);

    return {
      type: "array",
      lengths,
      elements: [
        {
          optional: false,
          types: collapsed.map((val) => {
            if (val.type === "string") {
              val.values = unique(val.values);
            }

            return val;
          }),
        },
      ],
    };
  }

  return null;
}

export function cleanAnalysis(analysis: Array<FullAnalysis>) {
  const makeReplacer =
    (wantedType: AnalysisType["type"], replacer: Replacer) => (type: AnalysisType) => {
      if (type.type === wantedType) {
        return replacer(type);
      }

      return null;
    };

  for (const analys of analysis) {
    for (const field of Object.values(analys.fields)) {
      for (let i = 0; i < 10; i++) {
        replaceType(field, makeReplacer("array", arrayCleaner as Replacer));
        reduceTypes(field);
      }
    }
  }
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

  cleanAnalysis(analysis);

  return analysis;
}
