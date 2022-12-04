import { TradeSlotType } from "../../../entity";

export type ClientToServer_trade_sell = {
  id: string;
  q: number;
  rid: string;
  slot: TradeSlotType;
};
