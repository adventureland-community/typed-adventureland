export type ShoesKey =
  | "eslippers" // Fluffy Slippers
  | "hboots" // Heavy Boots
  | "iceskates" // Ice Skates
  | "mcboots" // Boots of the Hunter Merchant
  | "mmshoes" // Shoes of the Hunter Mage
  | "mpshoes" // Shoes of the Hunter Priest
  | "mrboots" // Boots of the Hunter Rogue
  | "mrnboots" // Boots of the Hunter Ranger
  | "mwboots" // Boots of the Hunter Warrior
  | "shoes" // Shoes
  | "shoes1" // Rugged Shoes
  | "snowboots" // Snow Boots
  | "vboots" // Vampiric Boots
  | "wingedboots" // Winged Boots
  | "wshoes" // Wanderer's Shoes
  | "xboots" // Darkforge Boots
  | "xmasshoes"; // Xmas Shoes

export interface GShoes {
  stat: number;
  set?: string;
  tier: number;
  grades: [number, number, number, number];
  skin: string;
  cuteness?: number;
  speed: number;
  upgrade: {
    cuteness?: number,
    armor: number,
    stat: number,
    speed: number,
    resistance?: number,
    fzresistance?: number,
    frequency?: number,
  };
  name: string;
  g: number;
  armor: number;
  type: string;
  scroll: boolean;
  resistance?: number;
  a?: number | boolean;
  extra_stat?: number;
  winterland?: {
    upgrade: {
      speed: number,
    },
    speed: number,
  };
  explanation?: string;
  class?: [string];
  for?: number;
  fzresistance?: number;
  dex?: number;
  firesistance?: number;
  str?: number;
  frequency?: number;
  credit?: string;
  vit?: number;
}
