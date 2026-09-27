import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { ItemAbility } from "./index";

export type RingKey =
  | "armorring" // Ring of Armor
  | "canopener" // The Can Opener
  | "cdarktristone" // Dark Tri-Stone
  | "cring" // Ring of The Crypt
  | "ctristone" // Tri-Stone
  | "darktristone" // Legacy Dark Tri-Stone
  | "dexring" // Ring of Dexterity
  | "emberseal" // Ember Seal
  | "glacierseal" // Glacier Seal
  | "goldring" // Ring of Gold
  | "intring" // Ring of Intelligence
  | "resistancering" // Ring of Resistance
  | "ringhs" // Ring of Holidays
  | "ringofluck" // Ring of Luck
  | "ringsj" // Ring of Small Joys
  | "scorpionseal" // Scorpion Seal
  | "solitaire" // Solitaire Ring
  | "stonegaze" // Stonegaze Ring
  | "strring" // Ring of Strength
  | "suckerpunch" // Sucker Punch
  | "trigger" // The Trigger
  | "tristone" // Legacy Tri-Stone
  | "venomband" // Venom Band
  | "vitring" // Ring of Vitality
  | "vring" // Vampiring
  | "zapper"; // The Zapper

export interface GRing {
  a?: boolean;
  ability?: ItemAbility;
  action?: string;
  apiercing?: number;
  armor?: number;
  attr0?: number;
  bling?: number;
  /** An array of classes that can use this item. */
  class?: [ClassKey, ClassKey, ClassKey];
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    apiercing?: number;
    armor?: number;
    attr0?: number;
    bling?: number;
    crit?: number;
    dex?: number;
    dreturn?: number;
    gold?: number;
    int?: number;
    lifesteal?: number;
    luck?: number;
    reflection?: number;
    resistance?: number;
    rpiercing?: number;
    str?: number;
    stun?: number;
    vit?: number;
  };
  courage?: number;
  crit?: number;
  cx?: {
    accent: string;
  };
  dex?: number;
  dreturn?: number;
  edge?: number;
  evasion?: number;
  event?: boolean;
  exclusive?: boolean;
  explanation?: string;
  firesistance?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  gold?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  ignore?: boolean;
  int?: number;
  lifesteal?: number;
  luck?: number;
  /** The full display name of an item. */
  name: string;
  onclick?: string;
  paladin?: {
    armor: number;
    str: number;
  };
  pnresistance?: number;
  resistance?: number;
  rogue?: {
    crit: number;
    dex: number;
  };
  rpiercing?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  skin_a?: string;
  str?: number;
  stun?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "ring";
  vit?: number;
  warrior?: {
    apiercing: number;
    str: number;
  };
}
