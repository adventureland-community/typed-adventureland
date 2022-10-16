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
  g: number;
  grades: [number, number, number, number];
  a?: number | boolean;
  vit?: number;
  skin: string;
  dex?: number;
  name: string;
  rpiercing?: number;
  armor?: number;
  apiercing?: number;
  str?: number;
  type: string;
  stat?: number;
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
  tier?: number;
  scroll?: boolean;
  set?: string;
  extra_stat?: number;
  hp?: number;
  explanation?: string;
  charisma?: number;
  xp?: number;
  luck?: number;
  lifesteal?: number;
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
