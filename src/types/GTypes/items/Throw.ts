export type ThrowKey =
  | "confetti" // Pack of Confetti's
  | "firecrackers" // Firecracker
  | "smoke" // Pouch of Poof
  | "snowball"; // Snowball

export interface GThrow {
  action?: string;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  onclick?: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: ThrowKey;
  throw?: boolean;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "throw";
}
