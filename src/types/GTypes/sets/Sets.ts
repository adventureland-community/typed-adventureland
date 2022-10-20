import type { ItemKey } from "../items/index";

export type SetKey =
  | "bunny" // Bunny Set
  | "fury" // Rage and Fury
  | "holidays" // Holiday Spirit
  | "legends" // The Legends
  | "mmage" // Monster Hunter Mage
  | "mmerchant" // Monster Hunter Merchant
  | "mpriest" // Monster Hunter Priest
  | "mpx" // MP X
  | "mranger" // Monster Hunter Ranger
  | "mrogue" // Monster Hunter Rogue
  | "mwarrior" // Monster Hunter Warrior
  | "rugged" // Rugged Set
  | "swift" // Swift Judgement
  | "tiger" // Tigers'
  | "vampires" // Vampires
  | "wanderers" // Wanderer's Set
  | "wt3" // Heavy Armor
  | "wt4"; // Darkforge Armor

export interface GSet {
  "1": {
    for?: number;
  };
  "2": {
    courage?: number;
    dex?: number;
    for?: number;
    hp?: number;
    int?: number;
    luck?: number;
    mcourage?: number;
    mp?: number;
    pcourage?: number;
    str?: number;
    vit?: number;
  };
  "3"?: {
    armor?: number;
    dex?: number;
    for?: number;
    int?: number;
    lifesteal?: number;
    mp?: number;
    range?: number;
    resistance?: number;
    rpiercing?: number;
    speed?: number;
    str?: number;
    vit?: number;
  };
  "4"?: {
    apiercing?: number;
    evasion?: number;
    for?: number;
    gold?: number;
    luck?: number;
    rpiercing?: number;
    speed?: number;
  };
  "5"?: {
    courage?: number;
    crit?: number;
    cuteness?: number;
    for?: number;
    luck?: number;
    mcourage?: number;
    mp?: number;
    pcourage?: number;
    phresistance?: number;
    resistance?: number;
    speed?: number;
    stresistance?: number;
    vit?: number;
  };
  "6"?: {
    vit?: number;
  };
  "7"?: {};
  explanation?: string;
  items: Array<ItemKey>;
  name: string;
}
