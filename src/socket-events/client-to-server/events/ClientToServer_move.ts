export type ClientToServer_move =
  | {
      going_x: number;
      going_y: number;
      m: number;
      x: number;
      y: number;
    }
  | {
      key: "down" | "left" | "right" | "up";
    };
