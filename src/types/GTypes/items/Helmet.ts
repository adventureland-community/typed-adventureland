export type HelmetKey =
  | "bunnyears" // Legacy Bunny Ears
  | "cyber" // Cybernetic Implants
  | "eears" // Bunny Ears
  | "fury" // Band of Fury
  | "ghatb" // Hat of Generosity
  | "ghatp" // Hat of Generosity
  | "gphelmet" // Green Pumpkin Head
  | "helmet" // Helmet
  | "helmet1" // Rugged Helmet
  | "hhelmet" // Heavy Helmet
  | "mageshood" // Mage's Hood
  | "mchat" // Hat of the Hunter Merchant
  | "mmhat" // Hat of the Hunter Mage
  | "mphat" // Hat of the Hunter Priest
  | "mrhood" // Hood of the Hunter Rogue
  | "mrnhat" // Hat of the Hunter Ranger
  | "mwhelmet" // Helmet of the Hunter Warrior
  | "oxhelmet" // OX Helmet
  | "partyhat" // Party Hat
  | "phelmet" // Pumpkin Head
  | "rednose" // Rudolph's Red Nose
  | "tigerhelmet" // Helmet of the Tiger
  | "wcap" // Wanderer's Cap
  | "xhelmet" // Darkforge Helmet
  | "xmashat"; // Xmas Hat

export interface GHelmet {
  stat?: number;
  resistance?: number;
  tier?: number;
  grades?: [number, number, number, number];
  protection?: boolean;
  vit?: number;
  skin: string;
  cuteness?: number;
  name: string;
  a?: number | boolean;
  extra_stat?: number;
  upgrade?: {
    cuteness?: number,
    armor: number,
    stat: number,
    resistance: number,
    evasion?: number,
    crit?: number,
    apiercing?: number,
    reflection?: number,
    rpiercing?: number,
    dex?: number,
    str?: number,
    int?: number,
    vit?: number,
  };
  evasion?: number;
  g: number;
  armor?: number;
  type: string;
  scroll?: boolean;
  pnresistance?: number;
  int?: number;
  mcourage?: number;
  dex?: number;
  pcourage?: number;
  str?: number;
  set?: string;
  legacy?: {
    set: null,
    class: null,
  };
  crit?: number;
  class?: Array<string>;
  apiercing?: number;
  explanation?: string;
  hat?: string;
  reflection?: number;
  lifesteal?: number;
  rpiercing?: number;
  luck?: number;
  ignore?: boolean;
  firesistance?: number;
  output?: number;
  range?: number;
  compound?: {
    cuteness: number,
    range: number,
  };
  rogue?: {
    crit: number,
    upgrade: {
      crit: number,
    },
  };
  speed?: number;
  hp?: number;
  xscroll?: boolean;
  xcx?: [string];
}
