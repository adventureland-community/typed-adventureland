import type { ProjectileKey } from "../projectiles/Projectiles";
import type { WeaponKey } from "../items/Weapon";
import type { OffhandType, WeaponType } from "../items/index";
import { Tuple } from "../utils";

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
  // TODO: How to handle "great_sword"? No weapon exists with this type yet.
  doublehand: {
    [Type in WeaponType | "great_sword"]?: {
      frequency?: number;
      miss?: number;
      mp_cost?: number;
      speed?: number;
    };
  };
  frequency: number;
  fzresistance?: number;
  hp: number;
  looks: Tuple<
    [
      string,
      {
        hair?: string;
        head: string;
        hat?: string;
        chin?: string;
        makeup?: string;
      }
    ],
    4
  >;
  /** Gained stats per level. */
  lstats: {
    dex: number;
    for: number;
    int: number;
    str: number;
    vit: number;
  };
  main_stat: string;
  mainhand: {
    [K in WeaponType]?: {
      apiercing?: number;
      frequency?: number;
      mp_cost?: number;
      output?: number;
      speed?: number;
    };
  };
  mcourage: number;
  mp: number;
  mp_cost: number;
  offhand: {
    [Type in OffhandType]?: {
      frequency?: number;
      speed?: number;
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
  /** Base stats the class starts with. */
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
