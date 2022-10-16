export type ToolKey =
  | "pickaxe" // Pickaxe
  | "rod"; // Fishing Rod

export interface GTool {
  grades: [number, number, number, number];
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
