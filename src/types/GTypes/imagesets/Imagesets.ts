export type ImagesetKey = "custom" | "pack_1a" | "pack_20" | "skills";

export interface GImageset {
  rows: number;
  file: string;
  columns: number;
  size: number;
  load?: boolean;
}
