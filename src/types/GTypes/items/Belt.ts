import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { ItemAbility } from "./index";

export type BeltKey =
  | "anchorbelt" // Anchor Belt
  | "dexbelt" // Belt of Dexterity
  | "groundingstrap" // Grounding Strap
  | "hpbelt" // Belt of HP
  | "intbelt" // Belt of Intelligence
  | "knifebelt" // Knife Belt
  | "koboldbelt" // Kobold's Backbone
  | "lbelt" // Belt
  | "mbelt" // Well-Crafted Belt
  | "mpxbelt" // Belt of MP Reduction
  | "nightmarketsash" // Nightmarket Sash
  | "santasbelt" // Santa's Belt
  | "sbelt" // Belt of Hallowed Trials
  | "strbelt" // Belt of Strength
  | "windbelt"; // Wind Belt

export interface GBelt {
  a?: boolean;
  ability?: ItemAbility;
  armor?: number;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    armor?: number;
    dex?: number;
    dreturn?: number;
    firesistance?: number;
    fzresistance?: number;
    gold?: number;
    hp?: number;
    int?: number;
    mcourage?: number;
    mp_cost?: number;
    mp_reduction?: number;
    pnresistance?: number;
    resistance?: number;
    speed?: number;
    str?: number;
    vit?: number;
  };
  courage?: number;
  cx?: {
    accent: string;
  };
  dex?: number;
  dreturn?: number;
  evasion?: number;
  exclusive?: boolean;
  explanation?: string;
  firesistance?: number;
  for?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  gold?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
  hp?: number;
  int?: number;
  mcourage?: number;
  /** Map-local bonuses while trading as a merchant (e.g. Nightmarket Sash). */
  merchant?: {
    gold?: number;
  };
  mp_cost?: number;
  mp_reduction?: number;
  /** The full display name of an item. */
  name: string;
  pcourage?: number;
  pnresistance?: number;
  resistance?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: BeltKey;
  speed?: number;
  str?: number;
  /** The tier of the item. */
  tier?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "belt";
  vit?: number;
}
