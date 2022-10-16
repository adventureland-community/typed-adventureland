export type MiscOffhandKey =
  | "exoarm" // Exoskeletal Arm
  | "lantern"; // The Lantern

export interface GMiscOffhand {
  int?: number;
  explanation: string;
  compound: {
    int?: number,
    str?: number,
    resistance?: number,
    evasion?: number,
  };
  grades: [number, number, number, number];
  cx: {
    scale?: number,
  };
  skin: string;
  tier: number;
  name: string;
  g: number;
  armor?: number;
  str?: number;
  type: string;
  resistance?: number;
  evasion?: number;
}
