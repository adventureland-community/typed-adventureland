import type { NpcRole } from "../npcs/Npcs";

export type CosmeticItemKey =
  | "cosmo0" // New Armor
  | "cosmo1" // New Make-up
  | "cosmo2" // New Hairdo
  | "cosmo3" // New Hat
  | "cosmo4"; // New Accessory

export interface GCosmeticItem {
  cash: number;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  /** Indicates the `quest` that this item is needed to complete. */
  quest: NpcRole;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: CosmeticItemKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "cosmetics";
}
