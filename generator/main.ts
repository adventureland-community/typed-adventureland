import { Generator } from "./Generator";
import path from "path";
import { root } from "./helpers/filepath";

async function main() {
  const generator = new Generator(root);

  generator.loadConfig(path.resolve(__dirname, "config"));

  await generator.generate();
}

main();
