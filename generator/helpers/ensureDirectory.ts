import { existsSync, mkdirSync } from "fs";

export function ensureDirectory(dirpath: string) {
  if (!existsSync(dirpath)) {
    mkdirSync(dirpath, { recursive: true });
  }
}
