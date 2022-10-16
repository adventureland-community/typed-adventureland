export type BankKeyKey =
  | "bkey" // The Bank Key
  | "dkey" // Diamond Key
  | "ukey"; // The Bank Key

export type ItemType = "bank_key";

export interface GBankKey {
  action: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  unlocks?: string;
  explanation: string;
  onclick: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
}
