export type UpgradeScrollKey =
  | "scroll0" // Upgrade Scroll
  | "scroll1" // High Upgrade Scroll
  | "scroll2" // Rare Upgrade Scroll
  | "scroll3" // Legendary Upgrade Scroll
  | "scroll4"; // Ultimate Upgrade Scroll

export interface GUpgradeScroll {
  name: string;
  g: number;
  grade: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
  a?: boolean;
  markup?: number;
  exclusive?: boolean;
}
