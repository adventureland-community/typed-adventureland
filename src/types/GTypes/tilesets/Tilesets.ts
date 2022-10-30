export type TilesetKey =
  | "ash"
  | "beach"
  | "castle"
  | "custom"
  | "custom_a"
  | "custom2"
  | "dark"
  | "doors"
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
  frames?: number;
  frame_width?: number;
  light?: string;
}
