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

export interface GRing {
  a?: boolean;
  grades: [number, number, number, number];
  name: string;
  g: number;
  skin: string;
  armor?: number;
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
