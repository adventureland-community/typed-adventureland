import { ItemInfo } from "../../../items";
import { TradeSlotType } from "../../../entity";

/**
 * Accept an item-for-item merchant offer (`trade_swap`).
 * `item` is the inventory item as this client saw it (like upgrade's clevel guard).
 */
export type ClientToServer_trade_swap = {
  slot: TradeSlotType;
  /** Target merchant entity id */
  id: string;
  rid: string;
  /** Inventory slot of the item you give */
  num: number;
  item: ItemInfo | null;
};
