export type ThrowKey =
  | "confetti" // Pack of Confetti's
  | "firecrackers" // Firecracker
  | "smoke" // Pouch of Poof
  | "snowball"; // Snowball

export interface GThrow {
  onclick?: string;
  s: number;
  name: string;
  g: number;
  skin: string;
  action?: string;
  explanation: string;
  type: string;
  throw?: boolean;
}
