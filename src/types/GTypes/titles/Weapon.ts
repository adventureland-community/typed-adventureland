export type WeaponKey = "fast" | "superfast";

export interface GWeapon {
  source: string;
  frequency: number;
  type: "weapon";
  misc: boolean;
  title: string;
}
