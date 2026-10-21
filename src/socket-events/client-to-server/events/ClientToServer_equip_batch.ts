import { SlotType } from "../../../entity";

/** Batch equip; each entry needs inventory `num`, `slot` optional like `equip`. Max 15. */
export type ClientToServer_equip_batch = Array<{
  num: number;
  slot?: SlotType;
}>;
