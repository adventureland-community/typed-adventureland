export type PantsKey =
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

export interface GPants {
  a?: boolean | number;
  stat: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  resistance: number;
  /** The tier of the item. */
  tier: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  frequency?: number;
  /** The skin of the item. */
  skin: string;
  crit?: number;
  speed?: number;
  /** An array of classes that can use this item. */
  class?: Array<string>;
  dex?: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    crit?: number,
    armor: number,
    stat: number,
    resistance: number,
    rpiercing?: number,
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  armor: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  scroll: boolean;
  vit?: number;
  extra_stat?: number;
  explanation?: string;
  legacy?: {
    /** The set this item is part of `G.sets.wanderers`. */
    set: null,
    /** An array of classes that can use this item. */
    class: null,
  };
  rpiercing?: number;
}
