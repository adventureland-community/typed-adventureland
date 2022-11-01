export type DungeonKeyKey =
  | "cryptkey" // The Crypt Key
  | "frozenkey" // The Frozen Cave Key
  | "stonekey" // The Stone Key
  | "tombkey"; // The Tomb Key

export interface GDungeonKey {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  opens: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: DungeonKeyKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "dungeon_key";
}
