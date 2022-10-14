export type CompoundScrollKey =
  | "cscroll0" // Compound Scroll
  | "cscroll1" // High Compound Scroll
  | "cscroll2" // Rare Compound Scroll
  | "cscroll3"; // Legendary Compound Scroll

export interface GCompoundScroll {
  name: string;
  g: number;
  grade: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
  a?: boolean;
  markup?: number;
}
