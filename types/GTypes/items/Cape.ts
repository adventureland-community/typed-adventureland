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
  stat: number;
  skin: string;
  resistance?: number;
  grades: Array<unknown>;
  evasion?: number;
  speed?: number;
  a?: boolean;
  upgrade: {
    stat: number,
    speed?: number,
    resistance?: number,
    evasion?: number,
    armor?: number,
    cuteness?: number,
    firesistance?: number,
    pnresistance?: number,
  };
  name: string;
  g: number;
  onclick?: string;
  action?: string;
  type: string;
  armor?: number;
  set?: string;
  cuteness?: number;
  firesistance?: number;
  pnresistance?: number;
  reflection?: number;
  explanation?: string;
  dex?: number;
  str?: number;
  tier?: number;
  extra_stat?: number;
  scroll?: boolean;
}
