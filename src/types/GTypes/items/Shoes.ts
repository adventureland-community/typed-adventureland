import type { SetKey } from "../sets/Sets";
import type { ClassKey } from "../classes/Classes";

export type ShoeKey =
  | "eslippers" // Fluffy Slippers
  | "hboots" // Heavy Boots
  | "iceskates" // Ice Skates
  | "mcboots" // Boots of the Hunter Merchant
  | "mmshoes" // Shoes of the Hunter Mage
  | "mpshoes" // Shoes of the Hunter Priest
  | "mrboots" // Boots of the Hunter Rogue
  | "mrnboots" // Boots of the Hunter Ranger
  | "mwboots" // Boots of the Hunter Warrior
  | "shoes" // Shoes
  | "shoes1" // Rugged Shoes
  | "snowboots" // Snow Boots
  | "vboots" // Vampiric Boots
  | "wingedboots" // Winged Boots
  | "wshoes" // Wanderer's Shoes
  | "xboots" // Darkforge Boots
  | "xmasshoes"; // Xmas Shoes

export interface GShoe {
  stat: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The tier of the item. */
  tier: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** The skin of the item. */
  skin: ShoeKey;
  cuteness?: number;
  speed: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    cuteness?: number;
    armor: number;
    stat: number;
    speed: number;
    resistance?: number;
    fzresistance?: number;
    frequency?: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  armor: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "shoes";
  scroll: boolean;
  resistance?: number;
  a?: number | boolean;
  extra_stat?: number;
  winterland?: {
    /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
    upgrade: {
      speed: number;
    };
    speed: number;
  };
  explanation?: string;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  for?: number;
  fzresistance?: number;
  dex?: number;
  firesistance?: number;
  str?: number;
  frequency?: number;
  credit?: string;
  vit?: number;
}
