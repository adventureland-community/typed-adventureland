import axios from "axios";
import { writeFileSync } from "fs";
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

/**
 * Retrieves the G json object from the game servers.
 */
async function getData() {
  console.log("Downloading data.js");

  const response = await axios.get<string>("https://adventure.land/data.js");

  const js = response.data.trim();
  const data = js.substring(6, js.length - 1);
  const json = JSON.parse(data);
  json.timestamp = Date.now();

  console.log(`data.js v${json.version} fetched`);

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
  type: string;
  ids: Array<string>;
  fields: FieldsAnalysis;
  nameMapping: Record<string, string>;
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
        type: category,
        ids: ids,
        fields,
        nameMapping: Object.fromEntries(ids.map((id) => [id, values[id].name as string])),
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

function generateTypes(analysis: FullAnalysis) {
  const keys = [
    `type ${analysis.category}Key =`,
    ...analysis.ids.map((id) => `| "${id}" // ${analysis.nameMapping[id]}`),
  ].join("\n");

  const fieldsEntries = Object.entries(analysis.fields);

  const terface = [
    `interface G${analysis.category} {`,
    ...fieldsEntries.map(([prop, { optional, types }]) => {
      const left = prop + (optional ? "?" : "");
      const right = prop === "type" ? JSON.stringify(analysis.type) : types.join(" | ");

      return `${left}: ${right};`;
    }),
    "};",
  ].join("\n");

  return keys + "\n\n" + terface;
}

async function main() {
  const data = await getData();
  const groupedItems = groupBy(data.items, "type");
  const analysis = analyseAll(groupedItems);

  writeFileSync("./tmp_grouped_items.json", JSON.stringify(groupedItems, null, 2));

  for (const val of analysis) {
    writeFileSync(`./tmp_analysis_${val.category}.json`, JSON.stringify(val, null, 2));
    writeFileSync(
      `./tmp_type_${val.category}.ts`,
      prettier.format(generateTypes(val), { parser: "babel" })
    );
  }
}

main();

// npm run generate
