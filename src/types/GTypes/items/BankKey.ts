import type { MapKey } from "../maps/Maps";

export type BankKeyKey =
  | "bkey" // The Bank Key
  | "dkey" // Diamond Key
  | "ukey"; // The Bank Key

export interface GBankKey {
  action: string;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  onclick: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: BankKeyKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "bank_key";
  unlocks?: MapKey;
}
