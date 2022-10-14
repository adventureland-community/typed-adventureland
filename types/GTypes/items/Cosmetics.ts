export type CosmeticsKey =
  | "cosmo0" // New Armor
  | "cosmo1" // New Make-up
  | "cosmo2" // New Hairdo
  | "cosmo3" // New Hat
  | "cosmo4"; // New Accessory

export interface GCosmetics {
  s: number;
  quest: string;
  e?: number;
  name: string;
  g: number;
  skin: string;
  explanation: string;
  type: string;
  cash: number;
}
