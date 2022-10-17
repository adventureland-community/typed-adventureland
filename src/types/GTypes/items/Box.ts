export type BoxKey =
  | "apologybox" // Apology Box
  | "armorbox" // Armor Box
  | "bugbountybox" // Bug Bounty Box
  | "jewellerybox" // Jewellery Box
  | "weaponbox"; // Weapon Box

export interface GBox {
  ignore?: boolean;
  a: number | boolean;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e: number;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  explanation: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  event?: boolean;
}
