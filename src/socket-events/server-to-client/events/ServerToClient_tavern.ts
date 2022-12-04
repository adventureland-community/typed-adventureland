export type ServerToClient_tavern = {
  event: "lost" | "won" | "bet";
  name: string;
  type: "dice";
  num: number;
  gold: number;
  dir: "up" | "down";
};
