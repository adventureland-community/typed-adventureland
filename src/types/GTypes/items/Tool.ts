export type ToolKey =
  | "pickaxe" // Pickaxe
  | "rod"; // Fishing Rod

export type ItemType = "tool";

export type WeaponType = "pickaxe" | "rod";

export interface GTool {
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    breaks: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  /** The tier of the item. */
  tier: number;
  /** The type of `weapon` `wand` `axe` `mace`... */
  wtype: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  breaks: number;
}
