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

export type ItemType = "belt";

export interface GBelt {
  dex?: number;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    dex?: number;
    hp?: number;
    int?: number;
    armor?: number;
    speed?: number;
    mp_cost?: number;
    mp_reduction?: number;
    resistance?: number;
    str?: number;
  };
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  hp?: number;
  int?: number;
  armor?: number;
  speed?: number;
  explanation?: string;
  a?: boolean;
  mp_cost?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  mp_reduction?: number;
  evasion?: number;
  resistance?: number;
  for?: number;
  str?: number;
}
