import path from "path";

export const root = path.resolve(__dirname, "..", "..", "src", "types", "GTypes");

/** Active emit root; set via setGTypesRoot when generating into a temp dir. */
let gTypesRoot = root;

export function setGTypesRoot(dir: string) {
  gTypesRoot = path.resolve(dir);
}

export function getGTypesRoot() {
  return gTypesRoot;
}

export function filepath(GKey: string, category: string) {
  return path.resolve(gTypesRoot, GKey, `${category}.ts`);
}

export function filedir(GKey: string, category: string) {
  return path.dirname(filepath(GKey, category));
}

export function relative(
  from: { GKey: string; category: string },
  to: { GKey: string; category: string }
) {
  const fromPath = filepath(from.GKey, from.category);
  const toPath = filepath(to.GKey, to.category);

  const relativePath = path
    .relative(fromPath, toPath)
    .replaceAll("\\", "/")
    .replace(".ts", "")
    .replace(/^\.\.\//, "")
    .replace(/^([^.])/, "./$1");

  return relativePath;
}

export function relativeTo(from: { GKey: string; category: string }, to: string) {
  const fromPath = filepath(from.GKey, from.category);
  const toPath = path.resolve(gTypesRoot, to);

  const relativePath = path
    .relative(fromPath, toPath)
    .replaceAll("\\", "/")
    .replace(".ts", "")
    .replace(/^\.\.\//, "")
    .replace(/^([^.])/, "./$1");

  return relativePath;
}
