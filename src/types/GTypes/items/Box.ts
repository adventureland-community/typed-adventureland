export type BoxKey =
  | "apologybox" // Apology Box
  | "armorbox" // Armor Box
  | "bugbountybox" // Bug Bounty Box
  | "jewellerybox" // Jewellery Box
  | "weaponbox"; // Weapon Box

export interface GBox {
  a: number | boolean;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e: number;
  event?: boolean;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore?: boolean;
  /** The full display name of an item. */
  name: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "box";
}
