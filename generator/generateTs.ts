import { AnalysisType, FieldsAnalysis, FullAnalysis, UnionObjectAnalysisType } from "./analysis";
import type { GeneratorConfig } from "./Generator";
import { relative, relativeTo } from "./helpers/filepath";
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
): string {
  switch (type.type) {
    case "object": {
      return makeInterface(type.fields, config, unionRegistry, imports, analysis);
    }
    case "uobject": {
      const importPath = relative(
        { GKey: config.GKey, category: analysis.category },
        type.keys.union
      );

      if (importPath.length) {
        imports.push(`import type { ${type.keys.union.name} } from ${JSON.stringify(importPath)};`);
      }

      return makeUInterface(type, config, unionRegistry, imports, analysis);
    }
    case "array": {
      const elems = type.elements
        .map((e) => {
          const types = e.types.map((type) =>
            typeToTs(type, config, unionRegistry, imports, analysis)
          );

          return types;
        })
        .flat();

      const isTuple = type.lengths.length === 1;
      const isSingleTuple = isTuple && unique(elems).length === 1;

      if (isSingleTuple && elems.length > 4) {
        // Relative to GTypes/utils.ts
        const importPath = relativeTo(
          { GKey: config.GKey, category: analysis.category },
          "utils.ts"
        );
        imports.push(`import type { Tuple } from ${JSON.stringify(importPath)};`);

        return `Tuple<${elems[0]}, ${elems.length}>`;
      }

      return isTuple ? `[${elems.join(", ")}]` : `Array<${unique(elems).join(" | ")}>`;
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

export function makeUInterface(
  type: UnionObjectAnalysisType,
  config: GeneratorConfig,
  unionRegistry: UnionRegistry,
  imports: Array<string>,
  analysis: FullAnalysis
) {
  const lines = ["{"];

  let line = `[K in ${type.keys.union.name}]`;

  if (type.values.optional) {
    line += "?";
  }

  line += ": ";

  line += type.values.types
    .map((type) => typeToTs(type, config, unionRegistry, imports, analysis))
    .join(" | ");

  line += ";";

  lines.push(line);

  lines.push("}");

  return lines.join("\n");
}

export function makeInterface(
  fields: FieldsAnalysis,
  config: GeneratorConfig,
  unionRegistry: UnionRegistry,
  imports: Array<string>,
  analysis: FullAnalysis
) {
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
