export type QuestKey =
  | "basketofeggs" // Basket of Easter Eggs
  | "egg0" // Easter Egg
  | "egg1" // Easter Egg
  | "egg2" // Easter Egg
  | "egg3" // Easter Egg
  | "egg4" // Easter Egg
  | "egg5" // Easter Egg
  | "egg6" // Easter Egg
  | "egg7" // Easter Egg
  | "egg8" // Easter Egg
  | "gemfragment" // Gem Fragment
  | "goldenegg" // Golden Egg
  | "leather" // Leather
  | "ornament" // Xmas Ornament
  | "seashell" // Seashell
  | "x0" // Quantum Piece
  | "x1" // Quantum Piece
  | "x2" // Quantum Piece
  | "x3" // Quantum Piece
  | "x4" // Quantum Piece
  | "x5" // Quantum Piece
  | "x6" // Quantum Piece
  | "x7" // Quantum Piece
  | "x8" // Quantum Piece
  | "xbox"; // Xmas Box

export interface GQuest {
  e?: number;
  name: string;
  g: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
  quest?: string;
  a?: boolean;
  event?: boolean;
}
