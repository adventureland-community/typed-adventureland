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
      /** Bank pack slot index */
      str: number;
    }
  | {
      operation: "move";
      a: number;
      b: number;
      pack: BankPackTypeItemsOnly;
    }
  | {
      /** Unlock / purchase a bank pack (`open_bank_pack`) */
      operation: "unlock";
      pack: BankPackTypeItemsOnly;
      gold?: number;
      shells?: number;
      request_id?: string;
    };
