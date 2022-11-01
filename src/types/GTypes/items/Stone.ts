export type StoneKey =
  | "stoneofgold" // Stone of Riches
  | "stoneofluck" // Stone of Luck
  | "stoneofxp"; // Stone of Wisdom

export interface GStone {
  days: number;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore: boolean;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: StoneKey;
  skin_a: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "stone";
}
