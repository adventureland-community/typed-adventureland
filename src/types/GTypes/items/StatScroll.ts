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

export interface GStatScroll {
  stat: string;
  name: string;
  g: number;
  skin: string;
  explanation: string;
  multiplier?: number;
  type: string;
  s: number;
  evasion?: number;
}
