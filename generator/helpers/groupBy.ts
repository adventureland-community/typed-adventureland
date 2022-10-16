import { DeepObject } from "./DeepObject";

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
export function groupBy<
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
