export type IPosition = {
  /**
   * Contains the name of the map
   */
  map?: import("./generated").MapName;
  x: number;
  y: number;
};
export type PositionReal = IPosition & {
  map: import("./generated").MapName;
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
  map: import("./generated").MapName;
  transport?: boolean;
  i?: number;
  s?: number;
};
