export type ChrysalisKey =
  | "chrysalis0" // Dragold's Chrysalis
  | "kitty1" // Egg
  | "puppy1"; // Egg

export interface GChrysalis {
  ignore: boolean;
  a: boolean;
  name: string;
  g: number;
  skin: string;
  grade: number;
  type: string;
  monster: string;
  explanation?: string;
}
