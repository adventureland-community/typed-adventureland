import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { getGData } from "./getGData";
import { groupBy } from "./helpers/groupBy";
import { ensureDirectory } from "./helpers/ensureDirectory";
import { analyseAll } from "./analysis";
import prettier from "prettier";
import { generateTypes } from "./generateTs";
import { capitalize } from "./helpers/capitalize";

export interface GeneratorConfig {
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

  constructor(targetDir: string) {
    ensureDirectory(targetDir);
    this.targetDir = targetDir;
  }

  loadConfig(configDir: string) {
    const configFiles = readdirSync(configDir).filter((file) => path.extname(file) === ".json");

    for (const configFile of configFiles) {
      const config = JSON.parse(
        readFileSync(path.join(configDir, configFile), "utf-8")
      ) as GeneratorConfig;

      this.configMap.set(path.basename(configFile, ".json"), config);
    }
  }

  async generate() {
    const data = await getGData();
    const tmpDir = path.resolve(__dirname, "..", "tmp");

    for (const config of this.configMap.values()) {
      const { groupKey, GKey } = config;
      const outDir = path.join(this.targetDir, "GTypes", GKey);

      const grouped = groupKey ? groupBy(data[GKey], groupKey) : { [GKey]: data[GKey] };
      const analysis = analyseAll(grouped, config);

      ensureDirectory(outDir);
      ensureDirectory(path.join(tmpDir, GKey));

      writeFileSync(path.join(tmpDir, GKey, "grouped.json"), JSON.stringify(grouped, null, 2));

      for (const val of analysis) {
        writeFileSync(
          path.join(tmpDir, `${GKey}/${val.category}_analysis.json`),
          JSON.stringify(val, null, 2)
        );
        writeFileSync(
          path.join(outDir, `${val.category}.ts`),
          prettier.format(generateTypes(val, groupKey, config), { parser: "babel" })
        );
      }

      // Generate index.ts exporting everything inside the category
      const index = analysis.map((val) => `export * from './${val.category}';`);

      if (groupKey) {
        // Add empty line
        index.push("");

        // Import all keys to generate union
        index.push(
          ...analysis.map((val) => `import type { ${val.category}Key } from './${val.category}';`)
        );

        // Generate union type for all categories
        index.push(`\nexport type ${capitalize(GKey)}Key =`);
        index.push(...analysis.map((val) => `| ${val.category}Key`));
      }

      writeFileSync(
        path.join(outDir, "index.ts"),
        prettier.format(index.join("\n") + ";", { parser: "babel" })
      );
    }
  }
}
