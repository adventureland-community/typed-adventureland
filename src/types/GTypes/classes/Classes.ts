import type { WeaponKey } from "../items/Weapon";
import type { WeaponType } from "../items/index";

export type ClassKey =
  | "mage"
  | "merchant"
  | "paladin"
  | "priest"
  | "ranger"
  | "rogue"
  | "warrior";

export interface GClass {
  armor: number;
  attack: number;
  base_slots: {
    mainhand: {
      gift: number;
      level: number;
      name: WeaponKey;
    };
  };
  bmresistance?: number;
  brave?: boolean;
  courage: number;
  damage_type: string;
  description: string;
  doublehand: {
    axe?: {
      frequency?: number;
      mp_cost?: number;
      speed: number;
    };
    basher?: {
      frequency?: number;
      mp_cost?: number;
      speed: number;
    };
    bow?: {
      frequency: number;
      miss: number;
      speed: number;
    };
    dagger?: {};
    fist?: {};
    great_staff?: {
      frequency: number;
      mp_cost: number;
      speed: number;
    };
    great_sword?: {
      frequency: number;
      mp_cost: number;
      speed: number;
    };
    pickaxe?: {
      speed: number;
    };
    rapier?: {
      frequency: number;
      miss?: number;
      mp_cost?: number;
    };
    rod?: {
      speed: number;
    };
    scythe?: {
      frequency: number;
      mp_cost: number;
      speed: number;
    };
    short_sword?: {};
    spear?: {
      frequency: number;
      speed: number;
    };
    wand?: {
      frequency: number;
    };
  };
  frequency: number;
  fzresistance?: number;
  hp: number;
  looks: [
    [
      string,
      {
        chin?: string;
        hair?: string;
        hat?: string;
        head: string;
      }
    ],
    [
      string,
      {
        hair?: string;
        head: string;
        makeup?: string;
      }
    ],
    [
      string,
      {
        chin?: string;
        hair?: string;
        hat?: string;
        head: string;
      }
    ],
    [
      string,
      {
        hair?: string;
        head: string;
        makeup?: string;
      }
    ]
  ];
  lstats: {
    dex: number;
    for: number;
    int: number;
    str: number;
    vit: number;
  };
  main_stat: string;
  mainhand: {
    [K in WeaponType]?:
      | {
          frequency?: number;
          speed?: number;
        }
      | {
          speed?: number;
        }
      | {
          frequency?: number;
          speed?: number;
        }
      | {
          speed: number;
        }
      | {
          output?: number;
          speed?: number;
        }
      | {
          speed: number;
        }
      | {}
      | {
          speed: number;
        }
      | {
          frequency?: number;
          output?: number;
          speed: number;
        }
      | {
          speed: number;
        }
      | {
          apiercing: number;
          frequency: number;
        }
      | {
          frequency: number;
        }
      | {
          speed: number;
        }
      | {
          frequency: number;
          mp_cost: number;
        };
  };
  mcourage: number;
  mp: number;
  mp_cost: number;
  offhand: {
    dagger?: {};
    fist?: {
      frequency?: number;
    };
    mace?: {
      frequency: number;
      speed: number;
    };
    misc_offhand?: {
      frequency?: number;
      speed?: number;
    };
    quiver?: {
      speed?: number;
    };
    shield?: {
      speed: number;
    };
    short_sword?: {
      speed: number;
    };
    source?: {};
    stars?: {};
    sword?: {
      speed: number;
    };
  };
  output: number;
  pcourage: number;
  phresistance?: number;
  pnresistance?: number;
  projectile: string;
  range: number;
  resistance: number;
  side_stat?: string;
  speed: number;
  stats: {
    dex: number;
    for: number;
    int: number;
    str: number;
    vit: number;
  };
  stresistance?: number;
  xcx?: Array<string>;
}
