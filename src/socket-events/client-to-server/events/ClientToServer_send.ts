export type ClientToServer_send =
  | {
      gold: number;
      name: string;
    }
  | {
      name: string;
      num: number;
      q: number;
    };
