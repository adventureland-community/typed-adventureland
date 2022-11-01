export type TomeKey = "xptome"; // Tome of Protection

export interface GTome {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  reward: number;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: TomeKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "tome";
}
