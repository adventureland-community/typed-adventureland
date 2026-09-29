/**
 * Merge live-generated GTypes (tmp) into src/types/GTypes without clobbering
 * hand-strengthened interfaces.
 *
 * - Appends missing Key-union members (keeps existing member order + comments)
 * - Reports new interface properties found in gen but missing in src
 * - Never replaces existing interface property types
 * - Never deletes properties
 *
 * Usage: ts-node ./generator/mergeGTypes.ts [--from=.tmp_gen/GTypes]
 */
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import { root } from "./helpers/filepath";

const fromArg = process.argv.find((a) => a.startsWith("--from="));
const fromRoot = path.resolve(fromArg ? fromArg.slice("--from=".length) : ".tmp_gen/GTypes");

type Member = { value: string; comment: string; raw: string };

function listTsFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }

  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...listTsFiles(full));
    } else if (entry.endsWith(".ts")) {
      out.push(full);
    }
  }
  return out;
}

function parseKeyUnion(text: string): { name: string; members: Member[]; block: string } | null {
  const m = text.match(/export type (\w+Key) =\n((?:\s*\|[^\n]+\n)+)/);
  if (!m) {
    return null;
  }

  const name = m[1];
  const block = m[0];
  const members: Member[] = [];

  for (const line of m[2].split("\n")) {
    const lm = line.match(/^\s*\|\s*"([^"]+)"(.*)$/);
    if (!lm) {
      continue;
    }
    const value = lm[1];
    const rest = lm[2] ?? "";
    const comment = (rest.match(/\/\/\s*(.*)$/) || [])[1]?.trim() ?? "";
    members.push({ value, comment, raw: line.replace(/;?\s*$/, "") });
  }

  return { name, members, block };
}

function mergeKeyUnions(srcText: string, genText: string): { text: string; added: string[] } {
  const srcUnion = parseKeyUnion(srcText);
  const genUnion = parseKeyUnion(genText);

  if (!srcUnion || !genUnion || srcUnion.name !== genUnion.name) {
    return { text: srcText, added: [] };
  }

  const existing = new Set(srcUnion.members.map((m) => m.value));
  const addedMembers = genUnion.members.filter((m) => !existing.has(m.value));

  if (addedMembers.length === 0) {
    return { text: srcText, added: [] };
  }

  // Drop trailing semicolon on previous last member, append new members, end with ;
  const srcLines = srcUnion.block.split("\n");
  // Find last member line index inside block
  let lastMemberIdx = -1;
  for (let i = 0; i < srcLines.length; i++) {
    if (/^\s*\|\s*"/.test(srcLines[i])) {
      lastMemberIdx = i;
    }
  }

  if (lastMemberIdx >= 0) {
    srcLines[lastMemberIdx] = srcLines[lastMemberIdx].replace(/;(\s*\/\/.*)?$/, "$1");
  }

  const newLines = addedMembers.map((m, i) => {
    const isLast = i === addedMembers.length - 1;
    const comment = m.comment ? ` // ${m.comment}` : "";
    return `  | "${m.value}"${isLast ? ";" : ""}${comment}`;
  });

  // Ensure previous last member has no semicolon; new last has semicolon
  const mergedBlock = [...srcLines.slice(0, lastMemberIdx + 1), ...newLines].join("\n");

  return {
    text: srcText.replace(srcUnion.block, mergedBlock),
    added: addedMembers.map((m) => m.value),
  };
}

function interfaceProps(text: string): Map<string, string> {
  const props = new Map<string, string>();
  const m = text.match(/export interface (\w+)\s*\{/);
  if (!m) {
    return props;
  }

  const start = text.indexOf("{", m.index!);
  let depth = 0;
  let end = start;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "{") depth++;
    if (text[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }

  const body = text.slice(start + 1, end);
  // Only top-level props (ignore nested object/type bodies).
  depth = 0;
  let i = 0;
  while (i < body.length) {
    const c = body[i];
    if (c === "{") {
      depth++;
      i++;
      continue;
    }
    if (c === "}") {
      depth--;
      i++;
      continue;
    }
    if (depth !== 0) {
      i++;
      continue;
    }

    const slice = body.slice(i);
    const pm = slice.match(/^(\s*)(?:\/\*\*[\s\S]*?\*\/\s*)?("?[\w]+"?)\??:\s*/);
    if (!pm) {
      i++;
      continue;
    }

    const name = pm[2].replace(/"/g, "");
    i += pm[0].length;
    const typeStart = i;
    // type ends at semicolon at depth 0 relative to type start
    let tDepth = 0;
    while (i < body.length) {
      if (body[i] === "{" || body[i] === "(" || body[i] === "[") tDepth++;
      if (body[i] === "}" || body[i] === ")" || body[i] === "]") tDepth--;
      if (body[i] === ";" && tDepth <= 0) {
        props.set(name, body.slice(typeStart, i).trim().replace(/\s+/g, " "));
        i++;
        break;
      }
      i++;
    }
  }
  return props;
}

function main() {
  if (!existsSync(fromRoot)) {
    console.error(`Generated tree not found: ${fromRoot}`);
    console.error("Run: npm run generate:tmp");
    process.exit(1);
  }

  const genFiles = listTsFiles(fromRoot);
  let filesTouched = 0;
  const newPropsReport: string[] = [];
  const missingFiles: string[] = [];

  for (const genPath of genFiles) {
    const rel = path.relative(fromRoot, genPath).replace(/\\/g, "/");
    const srcPath = path.join(root, rel);

    if (!existsSync(srcPath)) {
      missingFiles.push(rel);
      // Copy new category files wholesale (new item type groups, etc.)
      mkdirSync(path.dirname(srcPath), { recursive: true });
      writeFileSync(srcPath, readFileSync(genPath));
      filesTouched++;
      console.log(`+ new file ${rel}`);
      continue;
    }

    const srcText = readFileSync(srcPath, "utf-8");
    const genText = readFileSync(genPath, "utf-8");

    const { text, added } = mergeKeyUnions(srcText, genText);
    if (added.length) {
      writeFileSync(srcPath, text);
      filesTouched++;
      console.log(`~ ${rel} +keys: ${added.join(", ")}`);
    }

    const srcProps = interfaceProps(text);
    const genProps = interfaceProps(genText);
    if (srcProps.size === 0) {
      // Hand-shaped type alias (e.g. GSet / GMap) — do not spam nested gen fields.
      continue;
    }
    for (const [name, genType] of genProps) {
      if (/^\d+$/.test(name)) {
        continue;
      }
      if (!srcProps.has(name)) {
        newPropsReport.push(`${rel}  + ${name}?: ${genType}`);
      }
    }
  }

  if (missingFiles.length) {
    console.log(`\nCopied ${missingFiles.length} new file(s) from generate output.`);
  }

  if (newPropsReport.length) {
    console.log("\nNew interface properties in generate output (not auto-merged — review & add by hand):");
    for (const line of newPropsReport) {
      console.log(`  ${line}`);
    }
  } else {
    console.log("\nNo new interface properties vs src.");
  }

  console.log(`\nDone. Touched ${filesTouched} file(s). Run: npm run build`);
  console.log("Hand-strengthened interfaces were preserved. Add reported props manually with strong types.");
}

main();
