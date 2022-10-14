export type PotKey =
  | "hpot0" // HP Potion
  | "hpot1" // HP Potion
  | "hpotx" // Super HP Potion
  | "mpot0" // MP Potion
  | "mpot1" // MP Potion
  | "mpotx" // Super MP Potion
  | "snakeoil"; // Snake Oil

export interface GPot {
  name: string;
  g: number;
  s: number;
  cooldown?: number;
  skin: string;
  type: string;
  gives: Array<unknown>;
  debuff?: boolean;
  rare?: boolean;
}
