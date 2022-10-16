export type SpawnerKey =
  | "fieldgen0" // Dampening Field Generator
  | "figurine"; // Terracota Army Figurine

export interface GSpawner {
  spawn: string;
  name: string;
  g: number;
  explanation?: string;
  s: boolean | number;
  skin: string;
  type: string;
  ignore?: boolean;
  note?: string;
  action?: string;
}
