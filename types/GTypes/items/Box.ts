export type BoxKey =
  | "apologybox" // Apology Box
  | "armorbox" // Armor Box
  | "bugbountybox" // Bug Bounty Box
  | "jewellerybox" // Jewellery Box
  | "weaponbox"; // Weapon Box

export interface GBox {
  ignore?: boolean;
  a: number | boolean;
  s: number;
  e: number;
  name: string;
  g: number;
  skin: string;
  explanation: string;
  type: string;
  event?: boolean;
}
