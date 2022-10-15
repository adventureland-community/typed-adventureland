export type EarringKey =
  | "cearring" // Earring of The Crypt
  | "dexearring" // Earring of Dexterity
  | "dexearringx" // Enchanted Earring
  | "intearring" // Earring of Intelligence
  | "lostearring" // Gold Earring
  | "mearring" // Mistletoe Earring
  | "molesteeth" // Mole's Teeth
  | "strearring" // Earring of Strength
  | "vitearring"; // Earring of Vitality

export interface GEarring {
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  edge?: number;
  /** The full display name of an item. */
  name: string;
  str?: number;
  /** The skin of the item. */
  skin: string;
  int?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    int?: number,
    str?: number,
    dex?: number,
    luck?: number,
    apiercing?: number,
    vit?: number,
  };
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  dex?: number;
  speed?: number;
  luck?: number;
  explanation?: string;
  /** Indicates the `quest` that this item is needed to complete. */
  quest?: string;
  a?: boolean;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  apiercing?: number;
  vit?: number;
}
