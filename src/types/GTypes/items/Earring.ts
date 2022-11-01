import type { SetKey } from "../sets/Sets";

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
  a?: boolean;
  apiercing?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    apiercing?: number;
    dex?: number;
    int?: number;
    luck?: number;
    str?: number;
    vit?: number;
  };
  dex?: number;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  edge?: number;
  explanation?: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  int?: number;
  luck?: number;
  /** The full display name of an item. */
  name: string;
  /** Indicates the `quest` that this item is needed to complete. */
  quest?: EarringKey;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: EarringKey;
  speed?: number;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "earring";
  vit?: number;
}
