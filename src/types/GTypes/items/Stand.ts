export type StandKey =
  | "stand0" // Merchant Stand
  | "stand1"; // Merchant Stand [Sell+Buy]

export interface GStand {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  explanation: string;
  stand: string;
  /** The skin of the item. */
  skin: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  ignore?: boolean;
}
