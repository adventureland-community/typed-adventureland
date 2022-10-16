export type RingKey =
  | "armorring" // Ring of Armor
  | "cdarktristone" // Dark Tri-Stone
  | "cring" // Ring of The Crypt
  | "ctristone" // Tri-Stone
  | "darktristone" // Legacy Dark Tri-Stone
  | "dexring" // Ring of Dexterity
  | "goldring" // Ring of Gold
  | "intring" // Ring of Intelligence
  | "resistancering" // Ring of Resistance
  | "ringhs" // Ring of Holidays
  | "ringofluck" // Ring of Luck
  | "ringsj" // Ring of Small Joys
  | "solitaire" // Solitaire Ring
  | "strring" // Ring of Strength
  | "suckerpunch" // Sucker Punch
  | "trigger" // The Trigger
  | "tristone" // Legacy Tri-Stone
  | "vitring" // Ring of Vitality
  | "vring" // Vampiring
  | "zapper"; // The Zapper

export type ItemType = "ring";

export interface GRing {
  a?: boolean;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  armor?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    armor?: number,
    dreturn?: number,
    dex?: number,
    vit?: number,
    rpiercing?: number,
    int?: number,
    apiercing?: number,
    str?: number,
    gold?: number,
    resistance?: number,
    reflection?: number,
    luck?: number,
    bling?: number,
    crit?: number,
    lifesteal?: number,
    stun?: number,
  };
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  int?: number;
  vit?: number;
  dex?: number;
  rpiercing?: number;
  evasion?: number;
  apiercing?: number;
  str?: number;
  edge?: number;
  onclick?: string;
  ignore?: boolean;
  skin_a?: string;
  action?: string;
  gold?: number;
  resistance?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  ability?: string;
  attr0?: number;
  luck?: number;
  bling?: number;
  explanation?: string;
  event?: boolean;
  lifesteal?: number;
  crit?: number;
  stun?: number;
  dreturn?: number;
  pnresistance?: number;
  courage?: number;
}
