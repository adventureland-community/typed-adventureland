import { TradeSlotType } from "../../../entity";

export type ClientToServer_join_giveaway = {
  slot: TradeSlotType;
  id: string;
  rid: string;
};
