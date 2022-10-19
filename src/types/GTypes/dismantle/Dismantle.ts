import type { ItemKey } from "../items/index";
import type { MaterialKey } from "../items/Material";

export type DismantleKey =
  | "bowofthedead"
  | "bronzeingot"
  | "daggerofthedead"
  | "essenceoffire"
  | "essenceoffrost"
  | "essenceoflife"
  | "essenceofnature"
  | "fireblade"
  | "firestaff"
  | "firestars"
  | "goldenegg"
  | "goldingot"
  | "lostearring"
  | "maceofthedead"
  | "molesteeth"
  | "platinumingot"
  | "pmaceofthedead"
  | "spearofthedead"
  | "staffofthedead"
  | "swordofthedead";

export interface GDismantle {
  items: Array<[number, ItemKey] | [number, MaterialKey]>;
  cost: number;
}
