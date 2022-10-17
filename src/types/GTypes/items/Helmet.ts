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
  /** The tier of the item. */
  tier?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
  protection?: boolean;
  vit?: number;
  /** The skin of the item. */
  skin: string;
  cuteness?: number;
  /** The full display name of an item. */
  name: string;
  a?: number | boolean;
  extra_stat?: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {
    cuteness?: number;
    armor: number;
    stat: number;
    resistance: number;
    evasion?: number;
    crit?: number;
    apiercing?: number;
    reflection?: number;
    rpiercing?: number;
    dex?: number;
    str?: number;
    int?: number;
    vit?: number;
  };
  evasion?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  armor?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  scroll?: boolean;
  pnresistance?: number;
  int?: number;
  mcourage?: number;
  dex?: number;
  pcourage?: number;
  str?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  legacy?: {
    /** The set this item is part of `G.sets.wanderers`. */
    set: null;
    /** An array of classes that can use this item. */
    class: null;
  };
  crit?: number;
  /** An array of classes that can use this item. */
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
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    cuteness: number;
    range: number;
  };
  rogue?: {
    crit: number;
    /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
    upgrade: {
      crit: number;
    };
  };
  speed?: number;
  hp?: number;
  xscroll?: boolean;
  xcx?: [string];
}
