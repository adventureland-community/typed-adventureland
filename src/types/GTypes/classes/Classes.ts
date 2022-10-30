import type { ProjectileKey } from "../projectiles/Projectiles";
import type { WeaponKey } from "../items/Weapon";
import type { OffhandType, WeaponType } from "../items/index";
import { Tuple } from "../utils";

export type ClassKey = "mage" | "merchant" | "paladin" | "priest" | "ranger" | "rogue" | "warrior";

export interface GClass {
  armor: number;
  attack: number;
  bmresistance?: number;
  brave?: boolean;
  damage_type: string;
  description: string;
  frequency: number;
  fzresistance?: number;
  hp: number;
  mp_cost: number;
  mp: number;
  output: number;
  phresistance?: number;
  pnresistance?: number;
  projectile: ProjectileKey;
  range: number;
  resistance: number;
  speed: number;
  stresistance?: number;
  courage: number;
  mcourage: number;
  pcourage: number;
  main_stat: string;
  side_stat?: string;
  // TODO: How to handle "great_sword"? No weapon exists with this type yet.
  doublehand: {
    [Type in WeaponType | "great_sword"]?: {
      frequency?: number;
      miss?: number;
      mp_cost?: number;
      speed?: number;
    };
  };
  offhand: {
    [Type in OffhandType]?: {
      frequency?: number;
      speed?: number;
    };
  };
  mainhand: {
    [K in WeaponType]?: {
      speed?: number;
      frequency?: number;
      output?: number;
      apiercing?: number;
      mp_cost?: number;
    };
  };
  /** Base stats the class starts with. */
  stats: {
    dex: number;
    int: number;
    vit: number;
    str: number;
    for: number;
  };
  /** Gained stats per level. */
  lstats: {
    dex: number;
    int: number;
    vit: number;
    str: number;
    for: number;
  };
  xcx?: Array<string>;
  base_slots: {
    mainhand: {
      name: WeaponKey;
      gift: number;
      level: number;
    };
  };
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
}
