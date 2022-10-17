export type GloveKey =
  | "fierygloves" // Fiery Gloves
  | "gloves" // Gloves
  | "gloves1" // Rugged Gloves
  | "goldenpowerglove" // Golden Power Glove
  | "handofmidas" // Hand of Midas
  | "hgloves" // Heavy Gloves
  | "mcgloves" // Gloves of the Hunter Merchant
  | "mittens" // Mittens
  | "mmgloves" // Gloves of the Hunter Mage
  | "mpgloves" // Gloves of the Hunter Priest
  | "mpxgloves" // Mana Gloves
  | "mrgloves" // Gloves of the Hunter Rogue
  | "mrngloves" // Gloves of the Hunter Ranger
  | "mwgloves" // Gloves of the Hunter Warrior
  | "poker" // Poker
  | "powerglove" // Power Glove
  | "supermittens" // Super Mittens
  | "vgloves" // Vampiric Gloves
  | "wgloves" // Wanderer's Gloves
  | "xgloves"; // Darkforge Gloves

export interface GGlove {
  stat?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  resistance: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  frequency?: number;
  /** The skin of the item. */
  skin: string;
  /** The tier of the item. */
  tier: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    armor: number;
    stat?: number;
    frequency?: number;
    resistance: number;
    rpiercing?: number;
    apiercing?: number;
    gold?: number;
    attr0?: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  armor: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  scroll?: boolean;
  a?: number | boolean;
  extra_stat?: number;
  ability?: string;
  rpiercing?: number;
  apiercing?: number;
  charge?: number;
  gold?: number;
  explanation?: string;
  speed?: number;
  /** An array of classes that can use this item. */
  class?: [string];
  output?: number;
  attr0?: number;
  crit?: number;
  int?: number;
  fzresistance?: number;
  str?: number;
}
