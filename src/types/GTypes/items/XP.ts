export type XPKey = "bottleofxp"; // Bottle of XP

export interface GXP {
  name: string;
  g: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
  gives: [[string, number]];
}
