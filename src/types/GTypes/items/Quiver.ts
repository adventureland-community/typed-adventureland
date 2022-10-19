export type QuiverKey =
  | "quiver" // Quiver
  | "t2quiver"; // Agile Quiver

export interface GQuiver {
  dex: number;
  armor: number;
  range: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    dex: number;
    armor: number;
    range: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: QuiverKey;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "quiver";
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  a?: boolean;
  evasion?: number;
}
