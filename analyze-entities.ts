import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { groupBy } from "./generator/helpers/groupBy";
import { analyseAll } from "./generator/analysis";
import { GeneratorConfig } from "./generator/Generator";
import { ensureDirectory } from "./generator/helpers/ensureDirectory";
import { UnionRegistry } from "./generator/UnionRegistry";
import prettier from "prettier";
import { generateTypes } from "./generator/generateTs";

const prettierOptions = { parser: "typescript" };

async function main() {
  console.time("process");
  console.time("getData");
  const data = await getData();
  console.timeEnd("getData");

  // TODO: run analyze on it, and output the result
  const grouped = groupBy(data, "type");
  const config: GeneratorConfig = {
    nameOverride: {},
    overrides: {},
    extractedTypes: {},
    description: {},
    GKey: "",
    groupKey: null,
  };

  console.time("analysis");
  const groupCount = Object.keys(grouped).length;
  console.log(`analyzing ${groupCount} types`);
  for (const [key, values] of Object.entries(grouped)) {
    console.log(`${key} has ${Object.keys(values).length} entries`);
  }

  const analysis = analyseAll(grouped, config);
  console.timeEnd("analysis");

  const tmpDir = path.resolve(__dirname, "tmp");
  ensureDirectory(path.join(tmpDir, "entities"));

  console.time("write");
  console.log(`writing files`);
  const unionRegistry = new UnionRegistry();
  for (const val of analysis) {
    writeFileSync(
      path.join(tmpDir, `entities/${val.category}_analysis.json`),
      JSON.stringify(val, null, 2)
    );

    writeFileSync(
      path.join(tmpDir, `entities/${val.category}.ts`),
      prettier.format(generateTypes(val, unionRegistry, config), prettierOptions)
    );
  }
  console.timeEnd("write");
  console.timeEnd("process");
}

async function getData() {
  const data: Record<string, Record<string, unknown>> = {};

  const entitiesDir = path.resolve(__dirname, "tmp", "rawdata", "entities");
  const entitiesFiles = readdirSync(entitiesDir).filter((file) => path.extname(file) === ".json");
  console.log(`${entitiesFiles.length} files found`);
  for (let index = 0; index < entitiesFiles.length; index++) {
    const file = entitiesFiles[index];
    process.stdout.cursorTo(0);
    process.stdout.write(`${index + 1}/${entitiesFiles.length} - ${file}`);

    try {
      const entities = JSON.parse(readFileSync(path.join(entitiesDir, file), "utf-8"));
      for (const [key, entity] of Object.entries(entities)) {
        data[index + key] = entity as Record<string, unknown>;
      }
    } catch (error) {
      process.stdout.write(`   Failed!`);
      console.error(error);
    }
  }
  process.stdout.cursorTo(0);
  process.stdout.write("\n");

  return data;
}

main();
