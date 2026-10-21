import { StatType } from "../../../items";
import type { ItemKey } from "../items/index";

export type SetKey =
  | "bunny" // Bunny Set
  | "crookedkeys" // Skeleton Keys
  | "fury" // Rage and Fury
  | "holidays" // Holiday Spirit
  | "homecoming" // Homecoming
  | "legends" // The Legends
  | "mmage" // Monster Hunter Mage
  | "mmerchant" // Monster Hunter Merchant
  | "mpriest" // Monster Hunter Priest
  | "mpx" // MP X
  | "mranger" // Monster Hunter Ranger
  | "mrogue" // Monster Hunter Rogue
  | "mwarrior" // Monster Hunter Warrior
  | "oathkeeper" // Oathkeeper Set
  | "rugged" // Rugged Set
  | "swift" // Swift Judgement
  | "tiger" // Tigers'
  | "vampires" // Vampires
  | "wanderers" // Wanderer's Set
  | "watchers" // Watcher's Eyes
  | "wt3" // Heavy Armor
  | "wt4"; // Darkforge Armor

export type GSet = {
  explanation?: string;
  items: Array<ItemKey>;
  name: string;
} & {
  [Quantity in number]?: {
    [Stat in StatType]?: number;
  };
};
