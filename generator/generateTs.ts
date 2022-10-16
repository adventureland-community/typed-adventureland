import { AnalysisType, FieldsAnalysis, FullAnalysis } from "./analysis";
import type { GeneratorConfig } from "./Generator";
import { unique } from "./helpers/unique";

export function typeToTs(type: AnalysisType, config: GeneratorConfig) {
  switch (type.type) {
    case "object": {
      return makeInterface(type.fields, config);
    }
    case "array": {
      const elems = type.elements.map((e) => {
        const types = e.types.map((type) => typeToTs(type, config));

        return types;
      });

      return type.lengths.length === 1
        ? `[${elems.join(", ")}]`
        : `Array<${unique(elems.flat()).join(" | ")}>`;
    }
    default:
      return type.type;
  }
}

export function makeInterface(fields: FieldsAnalysis, config: GeneratorConfig) {
  const entries = Object.entries(fields);
  const lines = ["{"];

  for (const [name, entry] of entries) {
    const description = config.description ? config.description[name] : null;

    const descriptionComment = description ? `/** ${description} */\n` : "";

    let line = `${descriptionComment}"${name}"`;

    if (entry.optional) {
      line += "?";
    }

    line += ": ";
    line += entry.types.map((type) => typeToTs(type, config)).join(" | ");
    line += ";";

    lines.push(line);
  }

  lines.push("}");

  return lines.join("\n");
}

export function generateTypes(
  analysis: FullAnalysis,
  groupKey: string | null,
  config: GeneratorConfig
) {
  const keys = [
    `export type ${analysis.category}Key =`,
    ...analysis.ids.map((id) => {
      let line = `| "${id}"`;

      if (analysis.nameMapping[id]) {
        line += ` // ${analysis.nameMapping[id]}`;
      }

      return line;
    }),
  ].join("\n");

  const terface = `export interface G${analysis.category} ${makeInterface(
    analysis.fields,
    config
  )};`;

  return keys + "\n\n" + terface;
}
