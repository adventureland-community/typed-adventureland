import axios from "axios";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import prettier from "prettier";

type DeepObject<Depth extends number, Key extends number | string = string> = DeepObject_<
  Depth,
  Key,
  []
>;
type DeepObject_<
  Depth extends number,
  Key extends number | string,
  Sentry extends unknown[] = unknown[]
> = Depth extends Sentry["length"]
  ? unknown
  : Record<Key, DeepObject_<Depth, Key, [Depth, ...Sentry]>>;

type RawData = DeepObject<3>;

/**
 * Ensures the first character of a tring is in upper case.
 */
function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

let cachedData: RawData | null = null;

/**
 * Retrieves the G json object from the game servers.
 */
async function getData() {
  if (cachedData) {
    return cachedData;
  }

  console.log("Downloading data.js");

  const response = await axios.get<string>("https://adventure.land/data.js");

  const js = response.data.trim();
  const data = js.substring(6, js.length - 1);
  const json = JSON.parse(data);
  json.timestamp = Date.now();

  console.log(`data.js v${json.version} fetched`);

  cachedData = json;
  writeFileSync(`./tmp/__data.json`, JSON.stringify(json, null, 1));

  return json as RawData;
}

/**
 * Adds a depth level to group the values of `obj` based on `key`.
 *
 * @param obj Object with string keys and (object with string keys and unknown values) values.
 * @param key A key common to all values of `obj`.
 *
 * @example
   groupBy({
    first: {
     type: "simple"
    },
    second: {
     type: "hard"
    },
    third: {
     type: "simple"
    }
   }, "type");
  
  // Will return ==>
  {
    simple: {
      first: {
        type: "simple"
      },
      third: {
        type: "simple"
      }
    },
    hard: {
      second: {
        type: "hard"
      }
    }
  }
 */
function groupBy<
  T extends DeepObject<2>,
  K extends keyof T[string] & string = keyof T[string] & string
>(obj: T, key: K) {
  const sorted: Record<string | number, Array<[string, DeepObject<1>]>> = {};
  const entries = Object.entries(obj);

  for (const [k, v] of entries) {
    if (!(key in v)) {
      throw new Error(`Key ${key} not found in ${k}.`);
    }

    const filterValue = v[key] as string | number;

    if (!(filterValue in sorted)) {
      sorted[filterValue] = [];
    }

    sorted[filterValue].push([k, v]);
  }

  const sortedEntries = Object.entries(sorted).sort(([a], [b]) => a.localeCompare(b));

  return Object.fromEntries(
    sortedEntries.map(([k, v]) => [k, Object.fromEntries(v.sort(([a], [b]) => a.localeCompare(b)))])
  );
}

type FieldsAnalysis = Record<
  string,
  {
    optional: boolean;
    types: string[];
  }
>;

/**
 * Tries to understand the fields of all objects passed in `arr`.
 * A field will be marked optional if at least one element doesn't
 *   have it.
 * The `types` array will contain all types encountered for this
 *   property across all elements.
 *
 * @param arr Array of objects to analyse
 * @returns A mapping where keys are the fields names and values
 *  are the type behavior.
 */
function analyseFields<T extends DeepObject<1>>(arr: Array<T>): FieldsAnalysis {
  const seenFields = new Set(arr.flatMap((o) => Object.keys(o)));
  const fields: FieldsAnalysis = Object.fromEntries(
    [...seenFields.values()].map((n) => [n, { optional: false, types: [] as Array<string> }])
  );

  for (const obj of arr) {
    for (const seenField of seenFields) {
      if (!(seenField in obj)) {
        fields[seenField].optional = true;
        continue;
      }

      const value = obj[seenField];
      const type = typeof value;

      if (Array.isArray(value) || type === "object") {
        throw new Error("Case not handled yet.");
      }

      if (!fields[seenField].types.includes(type)) {
        fields[seenField].types.push(type);
      }
    }
  }

  return fields;
}

const nameOverride = {
  cscroll: "CompoundScroll",
  uscroll: "UpgradeScroll",
  pscroll: "StatScroll",
  skill_item: "SkillItem",
  dungeon_key: "DungeonKey",
  bank_key: "BankKey",
  petlicence: "PetLicence",
  misc_offhand: "MiscOffhand",
  xp: "XP",
};

interface FullAnalysis {
  category: string;
  group: string;
  ids: Array<string>;
  fields: FieldsAnalysis;
  nameMapping: Record<string, string | null>;
}

function analyseAll<T extends DeepObject<3>>(data: T) {
  const entries = Object.entries(data);
  const analysis: Array<FullAnalysis> = [];

  for (const [category, values] of entries) {
    try {
      const fields = analyseFields(Object.values(values));
      const ids = Object.keys(values);

      analysis.push({
        category: nameOverride[category] ?? capitalize(category),
        group: category,
        ids: ids,
        fields,
        nameMapping: Object.fromEntries(
          ids.map((id) => [id, (values[id].name ?? null) as null | string])
        ),
      });
    } catch (err) {
      console.error("=================================================");
      console.error("");
      console.error("For", category);
      console.error(err);
      console.error("");
      console.error("=================================================");
    }
  }

  analysis.sort((a, b) => a.category.localeCompare(b.category));

  return analysis;
}

function generateTypes(analysis: FullAnalysis, groupKey: string | null) {
  const keys = [
    `type ${analysis.category}Key =`,
    ...analysis.ids.map((id) => {
      let line = `| "${id}"`;

      if (analysis.nameMapping[id]) {
        line += ` // ${analysis.nameMapping[id]}`;
      }

      return line;
    }),
  ].join("\n");

  const fieldsEntries = Object.entries(analysis.fields);

  const terface = [
    `interface G${analysis.category} {`,
    ...fieldsEntries.map(([prop, { optional, types }]) => {
      const left = prop + (optional ? "?" : "");
      const right =
        groupKey && prop === groupKey ? JSON.stringify(analysis.group) : types.join(" | ");

      return `${left}: ${right};`;
    }),
    "};",
  ].join("\n");

  return keys + "\n\n" + terface;
}

async function process(gProp: string, groupKey: string | null) {
  const data = await getData();
  const grouped = groupKey ? groupBy(data[gProp], groupKey) : { [gProp]: data[gProp] };
  const analysis = analyseAll(grouped);

  writeFileSync(`./tmp/${gProp}_grouped.json`, JSON.stringify(grouped, null, 2));

  for (const val of analysis) {
    writeFileSync(`./tmp/${gProp}_${val.category}_analysis.json`, JSON.stringify(val, null, 2));
    writeFileSync(
      `./tmp/${gProp}_${val.category}_type.ts`,
      prettier.format(generateTypes(val, groupKey), { parser: "babel" })
    );
  }
}

async function main() {
  if (!existsSync("./tmp")) {
    mkdirSync("./tmp");
  }

  await process("items", "type");
  await process("events", null);
}

main();

// npm run generate
