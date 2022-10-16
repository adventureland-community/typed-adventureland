export type ContainerKey = "monsterbox"; // Monster Box

export type ItemType = "container";

export interface GContainer {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  grade: number;
  explanation: string;
  ignore: boolean;
  /** The skin of the item. */
  skin: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
}
