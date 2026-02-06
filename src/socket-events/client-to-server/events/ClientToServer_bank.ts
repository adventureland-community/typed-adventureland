import { BankPackTypeItemsOnly } from "../../../bank";

export type ClientToServer_bank =
  | {
      amount: number;
      operation: "deposit" | "withdraw";
    }
  | {
      inv: number;
      operation: "swap";
      pack: BankPackTypeItemsOnly;
      str: number;
    }
  | {
      operation: "move";
      a: number;
      b: number;
      pack: BankPackTypeItemsOnly;
    };
