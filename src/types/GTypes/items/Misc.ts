export type MiscKey =
  | "5bucks" // Old Paper Money
  | "coal" // Coal
  | "glitch" // A Glitch
  | "ledger" // Ledger
  | "mysterybox" // Mystery Box
  | "stick" // Stick
  | "storagebox" // Storage Box
  | "troll"; // T-Shirt Roll

export interface GMisc {
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s?: number;
  rare?: boolean;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: MiscKey;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  explanation: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "misc";
  a?: boolean;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {};
  ignore?: boolean;
  event?: boolean;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {};
}
