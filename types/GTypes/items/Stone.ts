export type StoneKey =
  | "stoneofgold" // Stone of Riches
  | "stoneofluck" // Stone of Luck
  | "stoneofxp"; // Stone of Wisdom

export interface GStone {
  ignore: boolean;
  skin_a: string;
  g: number;
  skin: string;
  explanation: string;
  type: string;
  days: number;
  name: string;
}
