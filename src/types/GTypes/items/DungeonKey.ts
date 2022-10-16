export type DungeonKeyKey =
  | "cryptkey" // The Crypt Key
  | "frozenkey" // The Frozen Cave Key
  | "stonekey" // The Stone Key
  | "tombkey"; // The Tomb Key

export interface GDungeonKey {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  explanation: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  opens: string;
}
