import type { SetKey } from "../sets/Sets";

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

export interface GCape {
  a?: boolean;
  action?: string;
  armor?: number;
  cuteness?: number;
  dex?: number;
  evasion?: number;
  explanation?: string;
  extra_stat?: number;
  firesistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** The full display name of an item. */
  name: string;
  onclick?: string;
  pnresistance?: number;
  reflection?: number;
  resistance?: number;
  scroll?: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  speed?: number;
  stat: number;
  str?: number;
  /** The tier of the item. */
  tier?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "cape";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    armor?: number;
    cuteness?: number;
    evasion?: number;
    firesistance?: number;
    pnresistance?: number;
    resistance?: number;
    speed?: number;
    stat: number;
  };
}
