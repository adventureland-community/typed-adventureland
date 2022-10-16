import { Generator } from "./Generator";
import path from "path";

async function main() {
  const generator = new Generator(path.resolve(__dirname, "..", "src", "types"));

  generator.loadConfig(path.resolve(__dirname, "config"));

  await generator.generate();
}

main();
