import { TradeSlotType } from "../../../entity";
import { ItemKey } from "../../../G";

export type ClientToServer_trade_wishlist = {
  level?: number;
  name: ItemKey;
  price: number;
  q: number;
  slot: TradeSlotType;
};
