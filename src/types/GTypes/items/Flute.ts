export type FluteKey = "flute"; // Flute

export interface GFlute {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: FluteKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "flute";
}
