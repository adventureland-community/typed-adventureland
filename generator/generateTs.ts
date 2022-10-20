import { AnalysisType, FieldsAnalysis, FullAnalysis } from "./analysis";
import type { GeneratorConfig } from "./Generator";
import { relative } from "./helpers/filepath";
import { singular } from "./helpers/singular";
import { unique } from "./helpers/unique";
import { Union, UnionRegistry } from "./UnionRegistry";

export function unionString(union: Union) {
  return [
    `export type ${union.name} =`,
    ...union.values
      .sort((a, b) => a.localeCompare(b))
      .map((val) => {
        let line = `| "${val}"`;

        if (union.comments[val]) {
          line += ` // ${union.comments[val]}`;
        }

        return line;
      }),
  ].join("\n");
}

export function typeToTs(
  type: AnalysisType,
  config: GeneratorConfig,
  unionRegistry: UnionRegistry,
  imports: Array<string>,
  analysis: FullAnalysis
) {
  switch (type.type) {
    case "object": {
      return makeInterface(type.fields, config, unionRegistry, imports, analysis);
    }
    case "array": {
      const elems = type.elements.map((e) => {
        const types = e.types.map((type) =>
          typeToTs(type, config, unionRegistry, imports, analysis)
        );

        return types;
      });

      return type.lengths.length === 1
        ? `[${elems.join(", ")}]`
        : `Array<${unique(elems.flat()).join(" | ")}>`;
    }
    case "union": {
      const importPath = relative({ GKey: config.GKey, category: analysis.category }, type.union);

      if (importPath.length) {
        imports.push(`import type { ${type.union.name} } from ${JSON.stringify(importPath)};`);
      }

      return type.union.name;
    }
    default:
      return type.type;
  }
}

export function makeInterface(
  fields: FieldsAnalysis,
  config: GeneratorConfig,
  unionRegistry: UnionRegistry,
  imports: Array<string>,
  analysis: FullAnalysis
) {
  const entries = Object.entries(fields).sort(([name, entry],[name2, entry2]) => name.localeCompare(name2));
  const lines = ["{"];

  for (const [name, entry] of entries) {
    const description = config.description ? config.description[name] : null;

    const descriptionComment = description ? `/** ${description} */\n` : "";

    let line = `${descriptionComment}"${name}"`;

    if (entry.optional) {
      line += "?";
    }

    line += ": ";

    if (name === config.groupKey) {
      line += JSON.stringify(analysis.group);
    } else {
      line += entry.types
        .map((type) => typeToTs(type, config, unionRegistry, imports, analysis))
        .join(" | ");
    }

    line += ";";

    lines.push(line);
  }

  lines.push("}");

  return lines.join("\n");
}

export function generateTypes(
  analysis: FullAnalysis,
  unionRegistry: UnionRegistry,
  config: GeneratorConfig
) {
  const { GKey } = config;
  const singularCategory = singular(analysis.category);
  const imports: Array<string> = [];
  const unions: Array<string> = [];

  for (const union of unionRegistry.unions.values()) {
    if (union.GKey === GKey && union.category === analysis.category && !union.doNotWrite) {
      unions.push(unionString(union));
    }
  }

  const terface = `export interface G${singularCategory} ${makeInterface(
    analysis.fields,
    config,
    unionRegistry,
    imports,
    analysis
  )};`;

  return [
    unique(imports)
      .sort((a, b) => a.localeCompare(b))
      .join("\n"),
    ...unions,
    terface,
  ].join("\n\n");
}
