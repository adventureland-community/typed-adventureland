export type CosmeticsKey =
  | "cosmo0" // New Armor
  | "cosmo1" // New Make-up
  | "cosmo2" // New Hairdo
  | "cosmo3" // New Hat
  | "cosmo4"; // New Accessory

export type ItemType = "cosmetics";

export interface GCosmetics {
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** Indicates the `quest` that this item is needed to complete. */
  quest: string;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  explanation: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  cash: number;
}
