export type StandKey =
  | "stand0" // Merchant Stand
  | "stand1"; // Merchant Stand [Sell+Buy]

export interface GStand {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  explanation: string;
  stand: StandKey;
  /** The skin of the item. */
  skin: StandKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "stand";
  ignore?: boolean;
}
