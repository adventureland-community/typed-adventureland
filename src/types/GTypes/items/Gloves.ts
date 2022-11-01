import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";

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
  a?: number | boolean;
  ability?: string;
  apiercing?: number;
  armor: number;
  attr0?: number;
  charge?: number;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  crit?: number;
  explanation?: string;
  extra_stat?: number;
  frequency?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  gold?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  int?: number;
  /** The full display name of an item. */
  name: string;
  output?: number;
  resistance: number;
  rpiercing?: number;
  scroll?: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  speed?: number;
  stat?: number;
  str?: number;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "gloves";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    apiercing?: number;
    armor: number;
    attr0?: number;
    frequency?: number;
    gold?: number;
    resistance: number;
    rpiercing?: number;
    stat?: number;
  };
}
