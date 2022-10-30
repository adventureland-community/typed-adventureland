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

export type GSet = {
  name: string;
  items: Array<ItemKey>;
  explanation?: string;
} & {
  [Key in number]?: {
    apiercing?: number;
    armor?: number;
    courage?: number;
    crit?: number;
    cuteness?: number;
    dex?: number;
    evasion?: number;
    for?: number;
    gold?: number;
    hp?: number;
    int?: number;
    lifesteal?: number;
    luck?: number;
    mcourage?: number;
    mp?: number;
    pcourage?: number;
    phresistance?: number;
    range?: number;
    resistance?: number;
    rpiercing?: number;
    speed?: number;
    str?: number;
    stresistance?: number;
    vit?: number;
  };
};
