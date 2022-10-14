export type ToolKey =
  | "pickaxe" // Pickaxe
  | "rod"; // Fishing Rod

export interface GTool {
  grades: Array<unknown>;
  upgrade: {
    breaks: number,
  };
  name: string;
  g: number;
  skin: string;
  tier: number;
  wtype: string;
  type: string;
  breaks: number;
}
