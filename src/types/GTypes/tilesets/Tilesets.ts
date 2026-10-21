export type TilesetKey =
  | "ash"
  | "beach"
  | "biocaves"
  | "castle"
  | "custom"
  | "custom_a"
  | "custom2"
  | "dark"
  | "doors"
  | "dreamsv3"
  | "dungeon"
  | "fort"
  | "house"
  | "inside"
  | "jungle"
  | "licht"
  | "lights"
  | "new"
  | "outside"
  | "puzzle"
  | "ruins"
  | "ship"
  | "stands"
  | "tree"
  | "water"
  | "winter";

export interface GTileset {
  file: string;
  frame_width?: number;
  frames?: number;
  light?: string;
}
