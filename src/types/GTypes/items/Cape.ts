export type CapeKey =
  | "angelwings" // Angel Wings
  | "bcape" // Well-Crafted Cape
  | "cape" // Cape
  | "ecape" // Fluffy Blanket
  | "fcape" // Fiery Cape
  | "gcape" // Grinch's Cape
  | "stealthcape" // Stealth Cape
  | "tigercape" // Cape of the Tiger
  | "vcape"; // Vampiric Cape

export type ItemType = "cape";

export interface GCape {
  stat: number;
  /** The skin of the item. */
  skin: string;
  resistance?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  evasion?: number;
  speed?: number;
  a?: boolean;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    stat: number;
    speed?: number;
    resistance?: number;
    evasion?: number;
    armor?: number;
    cuteness?: number;
    firesistance?: number;
    pnresistance?: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  onclick?: string;
  action?: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  armor?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  cuteness?: number;
  firesistance?: number;
  pnresistance?: number;
  reflection?: number;
  explanation?: string;
  dex?: number;
  str?: number;
  /** The tier of the item. */
  tier?: number;
  extra_stat?: number;
  scroll?: boolean;
}
