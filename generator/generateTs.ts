import { AnalysisType, FieldsAnalysis, FullAnalysis } from "./analysis";
import type { GeneratorConfig } from "./Generator";
import { singular } from "./helpers/singular";
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
  const singularCategory = singular(analysis.category);

  const keys = [
    `export type ${singularCategory}Key =`,
    ...analysis.ids.map((id) => {
      let line = `| "${id}"`;

      if (analysis.nameMapping[id]) {
        line += ` // ${analysis.nameMapping[id]}`;
      }

      return line;
    }),
  ].join("\n");

  // declaration merging does not seem to work
  // https://lightrun.com/answers/microsoft-typescript-can-not-declaration-merging-for-default-exported-class
  // seems to indicate the issue being default export not working and us having to use named exports
  // const extractedTypes: string[] = [];
  // if (config.extractedTypes) {
  //   Object.entries(config.extractedTypes).forEach(([field, typeName]) => {
  //     const values = analysis.fields[field]?.values;
  //     if (values) {
  //       extractedTypes.push(`\nexport type ${typeName} = `);
  //       extractedTypes.push(...values.sort().map((val) => `| "${val}"`));
  //     }
  //   });
  // }

  const terface = `export interface G${singularCategory} ${makeInterface(
    analysis.fields,
    config
  )};`;

  // return [keys, extractedTypes.join("\n"), terface].join("\n\n");
  return [keys, terface].join("\n\n");
}
