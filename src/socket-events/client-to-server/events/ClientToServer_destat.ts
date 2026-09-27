/**
 * Scrollsmith: strip `stat_type` from inventory[num] and refund pscrolls (`destat_item`).
 * Requires proximity (or computer); costs gold.
 */
export type ClientToServer_destat = {
  num: number;
  request_id?: string;
};
