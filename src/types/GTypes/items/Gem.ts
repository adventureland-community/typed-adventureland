export type GemKey =
  | "candy0" // Rare Candy
  | "candy0v2" // Rare Candy [h2]
  | "candy0v3" // Rare Candy
  | "candy1" // Candy
  | "candy1v2" // Candy [h2]
  | "candy1v3" // Candy
  | "candycane" // Candy Cane
  | "gem0" // Raw Emerald
  | "gem1" // Tiny Ruby
  | "gem2" // Raw Diamond
  | "gem3" // Raw Colourful Diamond
  | "gift0" // Rare Gift
  | "gift1" // Gift
  | "greenenvelope" // Green Envelope
  | "mistletoe" // Mistletoe
  | "redenvelope" // Red Envelope
  | "redenvelopev2" // Red Envelope
  | "redenvelopev3" // Red Envelope
  | "redenvelopev4"; // Red Envelope

export interface GGem {
  a?: number | boolean;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  event?: boolean;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore?: boolean;
  /** The full display name of an item. */
  name: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: GemKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "gem";
}
