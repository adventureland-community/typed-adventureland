export type SourceKey =
  | "wbook0" // Book of Knowledge
  | "wbook1" // Book of Secrets
  | "wbookhs"; // Book of Cheer

export interface GSource {
  int?: number;
  grades: [number, number, number, number];
  cx: {
    scale: number,
    extension: boolean,
  };
  name: string;
  g: number;
  skin: string;
  tier: number;
  compound: {
    int?: number,
    reflection?: number,
    vit?: number,
    dex?: number,
    resistance?: number,
  };
  type: string;
  vit?: number;
  reflection?: number;
  set?: string;
  resistance?: number;
  dex?: number;
}
