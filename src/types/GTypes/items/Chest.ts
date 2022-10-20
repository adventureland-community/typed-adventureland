import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { SkillKey } from "../skills/Skills";

export type ChestKey =
  | "cdragon" // Dragon Armor
  | "coat" // Coat
  | "coat1" // Rugged Coat
  | "epyjamas" // Pyjamas
  | "harmor" // Heavy Armor
  | "luckyt" // Lucky T-Shirt
  | "mcape" // Dracul's Attire
  | "mcarmor" // Armor of the Hunter Merchant
  | "mmarmor" // Armor of the Hunter Mage
  | "mparmor" // Armor of the Hunter Priest
  | "mrarmor" // Armor of the Hunter Rogue
  | "mrnarmor" // Armor of the Hunter Ranger
  | "mwarmor" // Armor of the Hunter Warrior
  | "pyjamas" // Legacy Pyjamas
  | "sweaterhs" // Super Sweater
  | "tshirt0" // T-Shirt
  | "tshirt1" // T-Shirt
  | "tshirt2" // T-Shirt
  | "tshirt3" // T-Shirt
  | "tshirt4" // T-Shirt
  | "tshirt6" // T-Shirt
  | "tshirt7" // T-Shirt
  | "tshirt8" // T-Shirt
  | "tshirt88" // T-Shirt
  | "tshirt9" // T-Shirt
  | "vattire" // Spike's Attire
  | "warpvest" // Warp Vest
  | "wattire" // Wanderer's Attire
  | "xarmor" // Darkforge Armor
  | "xmassweater"; // Xmas Sweater

export interface GChest {
  a?: number | boolean;
  ability?: SkillKey;
  apiercing?: number;
  armor?: number;
  charge?: number;
  charisma?: number;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  dex?: number;
  dreturn?: number;
  edge?: number;
  evasion?: number;
  explanation?: string;
  extra_stat?: number;
  frequency?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  hp?: number;
  int?: number;
  lifesteal?: number;
  luck?: number;
  manasteal?: number;
  mp?: number;
  mp_cost?: number;
  /** The full display name of an item. */
  name: string;
  resistance?: number;
  rpiercing?: number;
  scroll?: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  speed?: number;
  stat?: number;
  str?: number;
  /** The tier of the item. */
  tier?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "chest";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {
    apiercing?: number;
    armor?: number;
    dex?: number;
    evasion?: number;
    for?: number;
    hp?: number;
    int?: number;
    lifesteal?: number;
    luck?: number;
    manasteal?: number;
    mp_cost?: number;
    resistance?: number;
    rpiercing?: number;
    speed?: number;
    stat?: number;
    str?: number;
    vit?: number;
    xp?: number;
  };
  vit?: number;
  xp?: number;
}
