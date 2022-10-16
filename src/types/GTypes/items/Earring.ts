export type EarringKey =
  | "cearring" // Earring of The Crypt
  | "dexearring" // Earring of Dexterity
  | "dexearringx" // Enchanted Earring
  | "intearring" // Earring of Intelligence
  | "lostearring" // Gold Earring
  | "mearring" // Mistletoe Earring
  | "molesteeth" // Mole's Teeth
  | "strearring" // Earring of Strength
  | "vitearring"; // Earring of Vitality

export interface GEarring {
  g: number;
  grades: [number, number, number, number];
  edge?: number;
  name: string;
  str?: number;
  skin: string;
  int?: number;
  compound: {
    int?: number,
    str?: number,
    dex?: number,
    luck?: number,
    apiercing?: number,
    vit?: number,
  };
  type: string;
  dex?: number;
  speed?: number;
  luck?: number;
  explanation?: string;
  quest?: string;
  a?: boolean;
  e?: number;
  set?: string;
  apiercing?: number;
  vit?: number;
}
