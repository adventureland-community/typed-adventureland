export type ClientToServer_destroy = {
  /** Inventory slot to destroy */
  num: number;
  /** Number of items to destroy if the item is stackable */
  q?: number;
  statue?: boolean;
};
