import { SlotType, TradeSlotType } from "../../../entity";
import { TradeWant } from "../../../items";

export type ClientToServer_equip =
  | {
      num: number;
      slot: SlotType;
    }
  | {
      consume: true;
      num: number;
    }
  | {
      /** List inventory item for gold on a trade slot */
      num: number;
      price: number;
      q: number;
      slot: TradeSlotType;
    }
  | {
      /**
       * Item-for-item trade listing (`trade_offer`).
       * Server refuses the listing if `want` is missing/null.
       */
      num: number;
      q: number;
      slot: TradeSlotType;
      want: TradeWant;
    };
