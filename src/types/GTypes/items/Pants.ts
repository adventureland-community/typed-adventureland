export type PantsKey =
  | "fallen" // Pants of the Fallen Master
  | "frankypants" // Franky Pants
  | "hpants" // Heavy Underarmor
  | "mcpants" // Pants of the Hunter Merchant
  | "mmpants" // Pants of the Hunter Mage
  | "mppants" // Pants of the Hunter Priest
  | "mrnpants" // Pants of the Hunter Ranger
  | "mrpants" // Pants of the Hunter Rogue
  | "mwpants" // Underarmor of the Hunter Warrior
  | "pants" // Pants
  | "pants1" // Rugged Pants
  | "starkillers" // Star Killer's Pants
  | "wbreeches" // Wanderer's Breeches
  | "xmaspants" // Xmas Pants
  | "xpants"; // Darkforge Underarmor

export interface GPants {
  a?: boolean | number;
  stat: number;
  set?: string;
  resistance: number;
  tier: number;
  grades: [number, number, number, number];
  frequency?: number;
  skin: string;
  crit?: number;
  speed?: number;
  class?: Array<string>;
  dex?: number;
  upgrade: {
    crit?: number,
    armor: number,
    stat: number,
    resistance: number,
    rpiercing?: number,
  };
  name: string;
  g: number;
  armor: number;
  type: string;
  scroll: boolean;
  vit?: number;
  extra_stat?: number;
  explanation?: string;
  legacy?: {
    set: null,
    class: null,
  };
  rpiercing?: number;
}
