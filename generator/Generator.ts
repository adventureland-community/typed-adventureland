import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { getGData, RawData } from "./getGData";
import { groupBy } from "./helpers/groupBy";
import { ensureDirectory } from "./helpers/ensureDirectory";
import { analyseAll, AnalysisType, cleanAnalysis, FullAnalysis, replaceType } from "./analysis";
import prettier from "prettier";
import { generateTypes, unionString } from "./generateTs";
import { capitalize } from "./helpers/capitalize";
import { singular } from "./helpers/singular";
import { UnionRegistry } from "./UnionRegistry";
import { unique } from "./helpers/unique";
import { filedir, filepath } from "./helpers/filepath";

const prettierOptions = { parser: "typescript" };

export interface GeneratorConfig {
  /** true if the config is disabled */
  disabled?: boolean;

  /** Overrides the generated type for specific fields. */
  overrides: Record<string, string>;

  /** Extracts all values of the key into a type union named as the value. */
  extractedTypes: Record<string, string>;

  /** Extracts all values of the key into a type union named as the value. */
  description: Record<string, string>;

  /** Mapping to override the generated category names. */
  nameOverride: Record<string, string>;

  /** The key in G that this config is used for. Should match the config file name. */
  GKey: string;

  /** The key that should be used to group elements before analysing them. null disables grouping. */
  groupKey: string | null;
}

export class Generator {
  configMap = new Map<string, GeneratorConfig>();
  targetDir: string;
  private configDir?: string;
  private unionRegistry = new UnionRegistry();

  constructor(targetDir: string) {
    ensureDirectory(targetDir);
    this.targetDir = targetDir;
  }

  loadConfig(configDir: string) {
    this.configDir = configDir;
    const configFiles = readdirSync(configDir).filter((file) => path.extname(file) === ".json");

    for (const configFile of configFiles) {
      const config = JSON.parse(
        readFileSync(path.join(configDir, configFile), "utf-8")
      ) as GeneratorConfig;

      this.configMap.set(config.GKey, config);
    }
  }

  generateDefaultConfigs(data: RawData) {
    for (const GKey of Object.keys(data)) {
      if (GKey === "version") {
        continue;
      }

      if (this.configMap.has(GKey)) {
        continue;
      }

      if (this.configDir) {
        const defaultConfig: GeneratorConfig = {
          disabled: true,
          GKey: GKey,
          groupKey: null,
          nameOverride: {},
          overrides: {},
          extractedTypes: {},
          description: {},
        };

        writeFileSync(
          path.join(this.configDir, `${GKey}.json`),
          JSON.stringify(defaultConfig, null, 2)
        );
      }
    }
  }

  collapseStringsToUnions(analysis: Array<FullAnalysis>) {
    const replacer = (type: AnalysisType): AnalysisType | null => {
      if (type.type === "string") {
        const union = this.unionRegistry.lookup(type.values);

        if (union) {
          return {
            type: "union",
            union: union,
          };
        }
      }

      if (type.type === "object" && type.keys.values.length) {
        const union = this.unionRegistry.lookup(type.keys.values);

        if (union) {
          const allFields = Object.values(type.fields);

          return {
            type: "uobject",
            keys: {
              type: "union",
              union: union,
            },
            values: {
              optional: allFields.some((f) => f.optional),
              types: allFields.flatMap((f) => f.types),
            },
          };
        }
      }

      return null;
    };

    for (const analys of analysis) {
      for (const field of Object.values(analys.fields)) {
        replaceType(field, replacer);
      }
    }
  }

  generateStringUnions(data: RawData) {
    for (const config of this.configMap.values()) {
      const { groupKey, GKey, disabled, extractedTypes } = config;

      if (disabled) {
        continue;
      }

      const grouped = groupKey ? groupBy(data[GKey], groupKey) : { [GKey]: data[GKey] };
      const allAnalysis = analyseAll(grouped, config);

      // Register the basic union for all entries
      for (const analysis of allAnalysis) {
        const singularCategory = singular(analysis.category);

        this.unionRegistry.register({
          name: `${singularCategory}Key`,
          GKey: GKey,
          category: analysis.category,
          values: analysis.ids,
          comments: analysis.nameMapping,
          doNotWrite: false,
        });
      }

      // We need to register another union: the one containing all sub unions.
      // It is a "doNotWrite" union because we don't want to write it like that.
      if (groupKey) {
        const capitalizedGKey = capitalize(GKey);
        const singularGKey = singular(capitalizedGKey);

        this.unionRegistry.register({
          name: `${singularGKey}Key`,
          GKey: GKey,
          category: "index",
          values: allAnalysis.flatMap(
            (analysis) => this.unionRegistry.unions.get(`${singular(analysis.category)}Key`)!.values
          ),
          comments: {},
          doNotWrite: true,
        });
      }

      // Register the extracted unions
      for (const [key, union] of Object.entries(extractedTypes)) {
        const allWithStringKey = Object.values(data[GKey]).filter(
          (val) => typeof val[key] === "string"
        );

        const allValues = allWithStringKey.map((val) => val[key] as string);
        const groups = unique(
          allWithStringKey.map((val) => (groupKey ? val[groupKey] : GKey) as string)
        );

        // If there is only one group with all values, we will put the union in there
        const category =
          groups.length === 1 ? config.nameOverride[groups[0]] ?? capitalize(groups[0]) : "index";

        this.unionRegistry.register({
          name: union,
          GKey: GKey,
          category: category,
          values: unique(allValues).sort(),
          comments: {},
          doNotWrite: false,
        });
      }
    }
  }

  async generate() {
    const data = await getGData();
    const tmpDir = path.resolve(__dirname, "..", "tmp");

    // Generate disabled config files for each missing G key
    this.generateDefaultConfigs(data);

    // Register all string unions
    this.generateStringUnions(data);

    ensureDirectory(tmpDir);

    writeFileSync(
      path.join(tmpDir, "__unions.json"),
      JSON.stringify([...this.unionRegistry.unions.values()], null, 2)
    );

    const gTypesIndex: string[] = [];
    const gDataType: string[] = ["\nexport type GData = {"];

    for (const config of this.configMap.values()) {
      const { groupKey, GKey, disabled } = config;

      if (disabled) {
        continue;
      }

      const grouped = groupKey ? groupBy(data[GKey], groupKey) : { [GKey]: data[GKey] };
      const analysis = analyseAll(grouped, config);

      // Deduce where unions should be used instead of strings
      this.collapseStringsToUnions(analysis);
      cleanAnalysis(analysis);

      ensureDirectory(path.join(tmpDir, GKey));

      writeFileSync(path.join(tmpDir, GKey, "grouped.json"), JSON.stringify(grouped, null, 2));

      for (const val of analysis) {
        ensureDirectory(filedir(GKey, val.category));

        writeFileSync(
          path.join(tmpDir, `${GKey}/${val.category}_analysis.json`),
          JSON.stringify(val, null, 2)
        );

        writeFileSync(
          filepath(GKey, val.category),
          prettier.format(generateTypes(val, this.unionRegistry, config), prettierOptions)
        );
      }

      // Generate index.ts exporting everything inside the category
      const index = analysis.map((val) => `export * from './${val.category}';`);

      const capitalizedGKey = capitalize(GKey);
      const singularGKey = singular(capitalizedGKey);
      const gKeyType = `G${singularGKey}`;

      if (groupKey) {
        // Add empty line
        index.push("");

        // Import all keys and GItem to generate union
        index.push(`import type { BetterUXWrapper } from '../utils'`);
        index.push(
          ...analysis.map(
            (val) =>
              `import type { ${singular(val.category)}Key, G${singular(val.category)} } from './${
                val.category
              }';`
          )
        );

        // Generate union type for all category keys e.g. ItemsKey
        index.push(`\nexport type ${singularGKey}Key =`);
        index.push(...analysis.map((val) => `| ${singular(val.category)}Key`));
        index.push(`;`);

        // Generate union type for all category G definitions e.g. GItems
        index.push(`\nexport type ${gKeyType}Raw =`);
        index.push(...analysis.map((val) => `| G${singular(val.category)}`));
        index.push(`;`);

        index.push(`\nexport type ${gKeyType} = BetterUXWrapper<${gKeyType}Raw>`);
      }

      for (const union of this.unionRegistry.unions.values()) {
        if (union.GKey === GKey && union.category === "index" && !union.doNotWrite) {
          index.push("");
          index.push(unionString(union));
        }
      }

      // Import GTypes for GTypes/index.ts
      gTypesIndex.push(`import type { ${singularGKey}Key, ${gKeyType} } from './${GKey}';`);

      // Generate GData interface
      gDataType.push(`${GKey}: {[T in ${singularGKey}Key]: ${gKeyType}};`);

      writeFileSync(
        filepath(GKey, "index"),
        prettier.format(index.join("\n") + ";", prettierOptions)
      );
    }

    // End the gDataType definition
    gDataType.push("}");

    // Generate index.ts for GTypes
    gTypesIndex.push(gDataType.join("\n"));

    writeFileSync(
      path.join(this.targetDir, "index.ts"),
      prettier.format(`${gTypesIndex.join("\n")}`, prettierOptions)
    );
  }
}
