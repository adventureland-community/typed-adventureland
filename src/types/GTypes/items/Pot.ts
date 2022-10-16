export type PotKey =
  | "hpot0" // HP Potion
  | "hpot1" // HP Potion
  | "hpotx" // Super HP Potion
  | "mpot0" // MP Potion
  | "mpot1" // MP Potion
  | "mpotx" // Super MP Potion
  | "snakeoil"; // Snake Oil

export interface GPot {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  cooldown?: number;
  /** The skin of the item. */
  skin: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  /** If the item gives a buff, or effect, like a health potion. */
  gives: [[string, number]];
  debuff?: boolean;
  rare?: boolean;
}
