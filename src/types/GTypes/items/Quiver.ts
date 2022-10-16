export type QuiverKey =
  | "quiver" // Quiver
  | "t2quiver"; // Agile Quiver

export interface GQuiver {
  dex: number;
  armor: number;
  range: number;
  upgrade: {
    dex: number,
    armor: number,
    range: number,
  };
  name: string;
  g: number;
  skin: string;
  tier: number;
  type: string;
  grades: [number, number, number, number];
  a?: boolean;
  evasion?: number;
}
