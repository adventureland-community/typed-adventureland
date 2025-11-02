type Base = { calculate?: boolean; clevel: number; item_num: number };
export type ClientToServer_upgrade = Base &
  ({ offering_num: number; scroll_num?: number } | { offering_num?: number; scroll_num: number });
