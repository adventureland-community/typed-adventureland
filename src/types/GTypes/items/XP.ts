import type { ItemType } from "./index";

export type XPKey = "bottleofxp"; // Bottle of XP

export interface GXP {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** If the item gives a buff, or effect, like a health potion. */
  gives: [[ItemType, number]];
  /** The full display name of an item. */
  name: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: XPKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "xp";
}
