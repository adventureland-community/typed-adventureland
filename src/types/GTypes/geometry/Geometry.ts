import type { TilesetKey } from "../tilesets/Tilesets";
import type { Tuple } from "../utils";

export type GeometryKey =
  | "abtesting"
  | "arena"
  | "bank"
  | "bank_b"
  | "bank_u"
  | "cave"
  | "cgallery"
  | "crypt"
  | "cyberland"
  | "d_e"
  | "desertland"
  | "duelland"
  | "dungeon0"
  | "gateway"
  | "goobrawl"
  | "halloween"
  | "hut"
  | "jail"
  | "level1"
  | "level2"
  | "level2e"
  | "level2n"
  | "level2s"
  | "level2w"
  | "level3"
  | "level4"
  | "main"
  | "mansion"
  | "mforest"
  | "mtunnel"
  | "resort"
  | "resort_e"
  | "shellsisland"
  | "ship0"
  | "spider_instance"
  | "spookytown"
  | "tavern"
  | "test"
  | "tomb"
  | "tunnel"
  | "ucliffs"
  | "uhills"
  | "winter_cave"
  | "winter_cove"
  | "winter_inn"
  | "winter_inn_rooms"
  | "winter_instance"
  | "winterland"
  | "woffice";

export interface GGeometry {
  tiles: Array<
    | [TilesetKey, number, number, number]
    | [TilesetKey, number, number, number, number]
    | [TilesetKey, number, number, number, null, number]
  >;
  min_x: number;
  min_y: number;
  default?: number;
  y_lines?: Array<[number, number, number]>;
  points?: Record<string, [number, number]>;
  lights?: Array<[number, number, number]>;
  x_lines?: Array<[number, number, number]>;
  placements: Array<[number, number, number] | Tuple<number, 5>>;
  groups?: Array<Array<[number, number, number] | [number, number, number, null, null, number]>>;
  rectangles?: Record<string, [number, number, number, number]>;
  max_x: number;
  max_y: number;
  polygons?: Record<string, Array<[number, number]>>;
  nights?: Array<[number, number, number, null, null, number, number, number]>;
  animations?: Array<[number, number, number, number, number, number, string, number]>;
}
