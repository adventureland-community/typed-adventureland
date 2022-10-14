export type BoosterKey =
  | "goldbooster" // Gold Booster
  | "luckbooster" // Luck Booster
  | "xpbooster"; // XP Booster

export interface GBooster {
  gold?: number;
  explanation: string;
  compound: {
    gold?: number,
    luck?: number,
    xp?: number,
  };
  grades: Array<unknown>;
  legacy?: {
    gold?: number,
    luck?: number,
  };
  skin_a: string;
  skin: string;
  name: string;
  g: number;
  days: number;
  type: string;
  gain: string;
  luck?: number;
  xp?: number;
}
