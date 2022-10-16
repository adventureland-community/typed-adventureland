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
  s: number;
  e?: number;
  name: string;
  g: number;
  skin: string;
  explanation: string;
  type: string;
  ignore?: boolean;
  event?: boolean;
}
