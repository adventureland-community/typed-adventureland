import { BankPackType } from "../../../bank";

export type ClientToServer_bank =
  | {
      amount: number;
      operation: "deposit" | "withdraw";
    }
  | {
      inv: number;
      operation: "swap";
      pack: BankPackType;
      str: number;
    }
  | {
      operation: "move";
      a: number;
      b: number;
      pack: BankPackType;
    };
