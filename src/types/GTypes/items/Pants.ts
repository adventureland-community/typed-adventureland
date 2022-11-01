import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";

export type PantKey =
  | "fallen" // Pants of the Fallen Master
  | "frankypants" // Franky Pants
  | "hpants" // Heavy Underarmor
  | "mcpants" // Pants of the Hunter Merchant
  | "mmpants" // Pants of the Hunter Mage
  | "mppants" // Pants of the Hunter Priest
  | "mrnpants" // Pants of the Hunter Ranger
  | "mrpants" // Pants of the Hunter Rogue
  | "mwpants" // Underarmor of the Hunter Warrior
  | "pants" // Pants
  | "pants1" // Rugged Pants
  | "starkillers" // Star Killer's Pants
  | "wbreeches" // Wanderer's Breeches
  | "xmaspants" // Xmas Pants
  | "xpants"; // Darkforge Underarmor

export interface GPant {
  a?: boolean | number;
  armor: number;
  /** An array of classes that can use this item. */
  class?: Array<ClassKey>;
  crit?: number;
  dex?: number;
  explanation?: string;
  extra_stat?: number;
  frequency?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  legacy?: {
    /** An array of classes that can use this item. */
    class: null;
    /** The set this item is part of `G.sets.wanderers`. */
    set: null;
  };
  /** The full display name of an item. */
  name: string;
  resistance: number;
  rpiercing?: number;
  scroll: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: PantKey;
  speed?: number;
  stat: number;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "pants";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    armor: number;
    crit?: number;
    resistance: number;
    rpiercing?: number;
    stat: number;
  };
  vit?: number;
}
