export type SpawnerKey =
  | "fieldgen0" // Dampening Field Generator
  | "figurine"; // Terracota Army Figurine

export interface GSpawner {
  spawn: string;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  explanation?: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: boolean | number;
  /** The skin of the item. */
  skin: SpawnerKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "spawner";
  ignore?: boolean;
  note?: string;
  action?: string;
}
