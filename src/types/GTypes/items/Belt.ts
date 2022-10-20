import type { SetKey } from "../sets/Sets";

export type BeltKey =
  | "dexbelt" // Belt of Dexterity
  | "hpbelt" // Belt of HP
  | "intbelt" // Belt of Intelligence
  | "lbelt" // Belt
  | "mbelt" // Well-Crafted Belt
  | "mpxbelt" // Belt of MP Reduction
  | "santasbelt" // Santa's Belt
  | "sbelt" // Belt of Hallowed Trials
  | "strbelt"; // Belt of Strength

export interface GBelt {
  a?: boolean;
  armor?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    armor?: number;
    dex?: number;
    hp?: number;
    int?: number;
    mp_cost?: number;
    mp_reduction?: number;
    resistance?: number;
    speed?: number;
    str?: number;
  };
  dex?: number;
  evasion?: number;
  explanation?: string;
  for?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  hp?: number;
  int?: number;
  mp_cost?: number;
  mp_reduction?: number;
  /** The full display name of an item. */
  name: string;
  resistance?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: BeltKey;
  speed?: number;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "belt";
}
