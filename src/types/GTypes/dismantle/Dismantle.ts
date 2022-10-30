import type { ItemKey } from "../items/index";

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
  items: Array<[quantity: number, item: ItemKey]>;
  cost: number;
}
