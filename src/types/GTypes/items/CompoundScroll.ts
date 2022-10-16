export type CompoundScrollKey =
  | "cscroll0" // Compound Scroll
  | "cscroll1" // High Compound Scroll
  | "cscroll2" // Rare Compound Scroll
  | "cscroll3"; // Legendary Compound Scroll

export type ItemType = "cscroll";

export interface GCompoundScroll {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  grade: number;
  explanation: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  a?: boolean;
  markup?: number;
}
