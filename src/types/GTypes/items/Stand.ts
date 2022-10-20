export type StandKey =
  | "stand0" // Merchant Stand
  | "stand1"; // Merchant Stand [Sell+Buy]

export interface GStand {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore?: boolean;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: StandKey;
  stand: StandKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "stand";
}
