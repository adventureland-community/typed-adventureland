export type SetsKey =
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

export interface GSets {
  1: {
    for?: number,
  };
  2: {
    hp?: number,
    for?: number,
    vit?: number,
    str?: number,
    dex?: number,
    int?: number,
    courage?: number,
    pcourage?: number,
    mcourage?: number,
    luck?: number,
    mp?: number,
  };
  3?: {
    mp?: number,
    for?: number,
    lifesteal?: number,
    dex?: number,
    speed?: number,
    int?: number,
    vit?: number,
    str?: number,
    armor?: number,
    range?: number,
    resistance?: number,
    rpiercing?: number,
  };
  4?: {
    gold?: number,
    for?: number,
    apiercing?: number,
    rpiercing?: number,
    luck?: number,
    speed?: number,
    evasion?: number,
  };
  5?: {
    luck?: number,
    for?: number,
    phresistance?: number,
    resistance?: number,
    stresistance?: number,
    crit?: number,
    courage?: number,
    pcourage?: number,
    mcourage?: number,
    mp?: number,
    speed?: number,
    cuteness?: number,
    vit?: number,
  };
  6?: {
    vit?: number,
  };
  7?: {};
  name: string;
  items: Array<string>;
  explanation?: string;
}
