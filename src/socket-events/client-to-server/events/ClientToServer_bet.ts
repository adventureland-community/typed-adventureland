export type ClientToServer_bet =
  | {
      type: "dice";
      dir: "up" | "down";
      num: number;
      gold: number;
      request_id?: string;
    }
  | {
      /** Fortune's Wheel */
      type: "wheel";
      side: "sun" | "moon" | string;
      gold: number;
      request_id?: string;
    }
  | {
      type: "slots";
      request_id?: string;
    };
