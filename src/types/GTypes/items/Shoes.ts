import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";

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
  a?: number | boolean;
  armor: number;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  credit?: string;
  cuteness?: number;
  dex?: number;
  explanation?: string;
  extra_stat?: number;
  firesistance?: number;
  for?: number;
  frequency?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** The full display name of an item. */
  name: string;
  resistance?: number;
  scroll: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: ShoeKey;
  speed: number;
  stat: number;
  str?: number;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "shoes";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    armor: number;
    cuteness?: number;
    frequency?: number;
    fzresistance?: number;
    resistance?: number;
    speed: number;
    stat: number;
  };
  vit?: number;
  winterland?: {
    speed: number;
    /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
    upgrade: {
      speed: number;
    };
  };
}
