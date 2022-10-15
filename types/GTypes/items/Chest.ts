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
  dreturn?: number;
  int?: number;
  resistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  a?: number | boolean;
  vit?: number;
  /** The skin of the item. */
  skin: string;
  dex?: number;
  /** The full display name of an item. */
  name: string;
  rpiercing?: number;
  armor?: number;
  apiercing?: number;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  stat?: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {
    armor?: number,
    stat?: number,
    resistance?: number,
    hp?: number,
    xp?: number,
    luck?: number,
    lifesteal?: number,
    int?: number,
    dex?: number,
    str?: number,
    speed?: number,
    rpiercing?: number,
    apiercing?: number,
    mp_cost?: number,
    manasteal?: number,
    for?: number,
    vit?: number,
    evasion?: number,
  };
  /** The tier of the item. */
  tier?: number;
  scroll?: boolean;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: string;
  extra_stat?: number;
  hp?: number;
  explanation?: string;
  charisma?: number;
  xp?: number;
  luck?: number;
  lifesteal?: number;
  /** An array of classes that can use this item. */
  class?: [string];
  frequency?: number;
  speed?: number;
  mp?: number;
  mp_cost?: number;
  manasteal?: number;
  ability?: string;
  charge?: number;
  edge?: number;
  evasion?: number;
}
