export type ComputerKey =
  | "computer" // Ancient Computer
  | "supercomputer"; // Super Computer

export interface GComputer {
  name: string;
  g: number;
  explanation: string;
  stand: string;
  skin: string;
  type: string;
  special: boolean;
}
