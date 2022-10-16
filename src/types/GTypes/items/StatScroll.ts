export type StatScrollKey =
  | "apiercingscroll" // Armor Piercing Scroll
  | "armorscroll" // Armor Scroll
  | "critscroll" // Critical Hit Scroll
  | "dexscroll" // Dexterity Scroll
  | "dreturnscroll" // Damage Return Scroll
  | "evasionscroll" // Evasion Scroll
  | "forscroll" // Fortitude Scroll
  | "frequencyscroll" // Attack Speed Scroll
  | "goldscroll" // Gold Scroll
  | "intscroll" // Intelligence Scroll
  | "lifestealscroll" // Lifesteal Scroll
  | "luckscroll" // Luck Scroll
  | "manastealscroll" // Manasteal Scroll
  | "mpcostscroll" // MP Cost Reduction Scroll
  | "outputscroll" // Output Increase Scroll
  | "reflectionscroll" // Reflection Scroll
  | "resistancescroll" // Resistance Scroll
  | "rpiercingscroll" // Resistance Piercing Scroll
  | "speedscroll" // Speed Scroll
  | "strscroll" // Strength Scroll
  | "vitscroll" // Vitality Scroll
  | "xpscroll"; // XP Scroll

export type ItemType = "pscroll";

export interface GStatScroll {
  stat: string;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  explanation: string;
  multiplier?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  evasion?: number;
}
