import { SlotType, TradeSlotType } from "../../../entity";

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
      num: number;
      price: number;
      q: number;
      slot: TradeSlotType;
    };
