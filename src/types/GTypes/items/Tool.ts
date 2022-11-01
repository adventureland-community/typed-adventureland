export type ToolKey =
  | "pickaxe" // Pickaxe
  | "rod"; // Fishing Rod

export interface GTool {
  breaks: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: ToolKey;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "tool";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    breaks: number;
  };
  /** The type of `weapon` `wand` `axe` `mace`... */
  wtype: ToolKey;
}
