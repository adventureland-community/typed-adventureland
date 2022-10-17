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
  items: Array<[number, string]>;
  cost: number;
}
