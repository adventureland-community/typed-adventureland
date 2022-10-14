export type GlovesKey =
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

export interface GGloves {
  stat?: number;
  set?: string;
  resistance: number;
  grades: Array<unknown>;
  frequency?: number;
  skin: string;
  tier: number;
  upgrade: {
    armor: number,
    stat?: number,
    frequency?: number,
    resistance: number,
    rpiercing?: number,
    apiercing?: number,
    gold?: number,
    attr0?: number,
  };
  name: string;
  g: number;
  armor: number;
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
  class?: Array<unknown>;
  output?: number;
  attr0?: number;
  crit?: number;
  int?: number;
  fzresistance?: number;
  str?: number;
}
