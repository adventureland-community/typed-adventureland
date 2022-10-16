export type BankKeyKey =
  | "bkey" // The Bank Key
  | "dkey" // Diamond Key
  | "ukey"; // The Bank Key

export interface GBankKey {
  action: string;
  s: number;
  name: string;
  g: number;
  skin: string;
  unlocks?: string;
  explanation: string;
  onclick: string;
  type: string;
}
