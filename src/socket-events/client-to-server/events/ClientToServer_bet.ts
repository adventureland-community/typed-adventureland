export type ClientToServer_bet = {
  type: "dice";
  dir: "up" | "down";
  num: number;
  gold: number;
};
