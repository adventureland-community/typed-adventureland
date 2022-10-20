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
  a?: boolean;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  event?: boolean;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  /** Indicates the `quest` that this item is needed to complete. */
  quest?: QuestKey;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: QuestKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "quest";
}
