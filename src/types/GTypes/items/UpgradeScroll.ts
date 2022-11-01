export type UpgradeScrollKey =
  | "scroll0" // Upgrade Scroll
  | "scroll1" // High Upgrade Scroll
  | "scroll2" // Rare Upgrade Scroll
  | "scroll3" // Legendary Upgrade Scroll
  | "scroll4"; // Ultimate Upgrade Scroll

export interface GUpgradeScroll {
  a?: boolean;
  exclusive?: boolean;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  grade: number;
  markup?: number;
  /** The full display name of an item. */
  name: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: UpgradeScrollKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "uscroll";
}
