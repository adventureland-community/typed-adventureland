import { TradeSlotType } from "../../../entity";

export type ClientToServer_trade_buy = {
  id: string;

  // TODO: Confirm that 'q' is a string
  q: string;
  rid: string;
  slot: TradeSlotType;
};
