export type FluteKey = "flute"; // Flute

export interface GFlute {
  explanation: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "flute";
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: FluteKey;
}
