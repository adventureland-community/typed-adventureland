import { MapKey } from "./types/GTypes/maps";

export type IPosition = {
  /**
   * Contains the name of the map
   */
  map?: MapKey;
  x: number;
  y: number;
};
export type PositionReal = IPosition & {
  map: MapKey;
  real_x: number;
  real_y: number;
};

export type PositionMovable = PositionReal & {
  from_x?: number;
  from_y?: number;
  going_x: number;
  going_y: number;
};

export type PositionSmart = IPosition & {
  map: MapKey;
  transport?: boolean;
  i?: number;
  s?: number;
};
