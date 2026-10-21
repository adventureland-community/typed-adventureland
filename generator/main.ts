import { Generator } from "./Generator";
import path from "path";
import { root } from "./helpers/filepath";

async function main() {
  const outArg = process.argv.find((a) => a.startsWith("--out="));
  const outDir = outArg ? path.resolve(outArg.slice("--out=".length)) : root;

  if (outDir !== root) {
    console.log(`Generating into ${outDir} (src GTypes left untouched)`);
  } else {
    console.warn(
      "WARNING: writing directly into src/types/GTypes. Prefer: npm run generate:tmp && npm run merge:gtypes"
    );
  }

  const generator = new Generator(outDir);

  generator.loadConfig(path.resolve(__dirname, "config"));

  await generator.generate();
}

main();
