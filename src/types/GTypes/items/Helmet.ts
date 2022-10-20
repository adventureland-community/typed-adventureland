import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";

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
  a?: number | boolean;
  apiercing?: number;
  armor?: number;
  /** An array of classes that can use this item. */
  class?: Array<ClassKey>;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    cuteness: number;
    range: number;
  };
  crit?: number;
  cuteness?: number;
  dex?: number;
  evasion?: number;
  explanation?: string;
  extra_stat?: number;
  firesistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
  hat?: string;
  hp?: number;
  ignore?: boolean;
  int?: number;
  legacy?: {
    /** An array of classes that can use this item. */
    class: null;
    /** The set this item is part of `G.sets.wanderers`. */
    set: null;
  };
  lifesteal?: number;
  luck?: number;
  mcourage?: number;
  /** The full display name of an item. */
  name: string;
  output?: number;
  pcourage?: number;
  pnresistance?: number;
  protection?: boolean;
  range?: number;
  reflection?: number;
  resistance?: number;
  rogue?: {
    crit: number;
    /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
    upgrade: {
      crit: number;
    };
  };
  rpiercing?: number;
  scroll?: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: HelmetKey;
  speed?: number;
  stat?: number;
  str?: number;
  /** The tier of the item. */
  tier?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "helmet";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {
    apiercing?: number;
    armor: number;
    crit?: number;
    cuteness?: number;
    dex?: number;
    evasion?: number;
    int?: number;
    reflection?: number;
    resistance: number;
    rpiercing?: number;
    stat: number;
    str?: number;
    vit?: number;
  };
  vit?: number;
  xcx?: [string];
  xscroll?: boolean;
}
