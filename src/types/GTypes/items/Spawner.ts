export type SpawnerKey =
  | "fieldgen0" // Dampening Field Generator
  | "figurine"; // Terracota Army Figurine

export interface GSpawner {
  action?: string;
  explanation?: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore?: boolean;
  /** The full display name of an item. */
  name: string;
  note?: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: SpawnerKey;
  spawn: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "spawner";
}
