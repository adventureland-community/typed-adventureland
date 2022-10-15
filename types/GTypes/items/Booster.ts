export type BoosterKey =
  | "goldbooster" // Gold Booster
  | "luckbooster" // Luck Booster
  | "xpbooster"; // XP Booster

export interface GBooster {
  gold?: number;
  explanation: string;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    gold?: number,
    luck?: number,
    xp?: number,
  };
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: Array<unknown>;
  legacy?: {
    gold?: number,
    luck?: number,
  };
  skin_a: string;
  /** The skin of the item. */
  skin: string;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  days: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  gain: string;
  luck?: number;
  xp?: number;
}
