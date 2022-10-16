export type SkillItemKey =
  | "poison" // Poison Sack
  | "shadowstone"; // Shadow Stone

export interface GSkillItem {
  name: string;
  g: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
}
