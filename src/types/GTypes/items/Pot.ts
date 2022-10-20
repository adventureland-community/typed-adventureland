export type PotKey =
  | "hpot0" // HP Potion
  | "hpot1" // HP Potion
  | "hpotx" // Super HP Potion
  | "mpot0" // MP Potion
  | "mpot1" // MP Potion
  | "mpotx" // Super MP Potion
  | "snakeoil"; // Snake Oil

export interface GPot {
  cooldown?: number;
  debuff?: boolean;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** If the item gives a buff, or effect, like a health potion. */
  gives: [[string, number]];
  /** The full display name of an item. */
  name: string;
  rare?: boolean;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: PotKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "pot";
}
