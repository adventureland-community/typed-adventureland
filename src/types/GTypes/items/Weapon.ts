import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { WeaponType } from "./index";

export type WeaponKey =
  | "axe3" // T3 Axe
  | "basher" // Basher
  | "bataxe" // Ghastly Battle Axe
  | "blade" // Blade
  | "bow" // Bow
  | "bow4" // T4 Bow
  | "bowofthedead" // Bow of the Dead
  | "broom" // Broom
  | "candycanesword" // Candy Cane Sword
  | "carrotsword" // Carrot Sword
  | "cclaw" // Crab Claw
  | "claw" // Claw
  | "crossbow" // Crossbow
  | "cupid" // Cupid's Bow
  | "dagger" // Dagger
  | "daggerofthedead" // Dagger of the Dead
  | "dartgun" // Golden Dart Gun
  | "dragondagger" // Dragon Dagger
  | "fclaw" // Frozen Claw
  | "fireblade" // Fiery Blade
  | "firebow" // Fire Bow
  | "firestaff" // Fiery Staff
  | "firestars" // Fiery Throwing Stars
  | "frostbow" // Frost Bow
  | "froststaff" // Frost Staff
  | "fsword" // Frozen Sword
  | "gbow" // Bow of the Feared Ranger
  | "glolipop" // Lolipop Mace
  | "gstaff" // Blaster
  | "hammer" // Hammer
  | "harbringer" // Harbringer
  | "harpybow" // Harpy Bow
  | "hbow" // Hunting Bow
  | "hdagger" // Dagger of Hallowing
  | "heartwood" // Heartwood
  | "lmace" // Lunar Mace
  | "mace" // Mace
  | "maceofthedead" // Mace of the Dead
  | "merry" // Bow of The Merry Ranger
  | "mushroomstaff" // Mushroom Staff
  | "ololipop" // Lolipop Mace
  | "oozingterror" // Oozing Terror
  | "ornamentstaff" // Ornament Staff
  | "pinkie" // Pink Wand
  | "pmace" // Priest's Mace
  | "pmaceofthedead" // Hand of the Dead
  | "pouchbow" // Poucher
  | "rapier" // Rapier
  | "scythe" // Skeletor's Scythe
  | "slimestaff" // Slime Staff
  | "snowflakes" // Snowflakes
  | "spear" // Spear
  | "spearofthedead" // Spear of the Dead
  | "staff" // Staff
  | "staff2" // T2 Staff
  | "staff3" // T3 Staff
  | "staff4" // T4 Staff
  | "staffofthedead" // Staff of the Dead
  | "stinger" // Stinger
  | "swifty" // Swifty
  | "sword" // Short Sword
  | "swordofthedead" // Sword of the Dead
  | "t2bow" // Well-Crafted Bow
  | "t3bow" // Artisan's Bow
  | "throwingstars" // Throwing Stars
  | "vdagger" // Vampiric Dagger
  | "vhammer" // Vampiric Hammer
  | "vstaff" // Vampiric Staff
  | "vsword" // Vampiric Sword
  | "wand" // Wand
  | "wbasher" // Wooden Basher
  | "wblade" // Ethereal Blade of Destiny
  | "weaver" // Bow of the Weaver
  | "woodensword" // Wooden Sword
  | "xmace"; // Merry Mace

export interface GWeapon {
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  cx?: {
    large?: boolean;
    accent?: string;
    lightborder?: boolean;
    scale?: number;
    extension?: boolean;
    border?: number;
  };
  damage_type: string;
  /** The skin of the item. */
  skin: string;
  /** The tier of the item. */
  tier: number;
  reflection?: number;
  a?: boolean | number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    range: number;
    attack: number;
    armor?: number;
    speed?: number;
    stun?: number;
    crit?: number;
    evasion?: number;
    apiercing?: number;
    vit?: number;
    attr0?: number;
    int?: number;
    explosion?: number;
    blast?: number;
    rpiercing?: number;
    dex?: number;
    str?: number;
    reflection?: number;
    awesomeness?: number;
    resistance?: number;
    attr1?: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The type of `weapon` `wand` `axe` `mace`... */
  wtype: WeaponType;
  attack: number;
  ignore?: boolean;
  range: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "weapon";
  armor?: number;
  stun?: number;
  delia?: string;
  projectile?: string;
  vit?: number;
  speed?: number;
  crit?: number;
  str?: number;
  explanation?: string;
  evasion?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  ability?: string;
  dex?: number;
  skin_c?: string;
  charisma?: number;
  apiercing?: number;
  event?: boolean;
  skin_r?: string;
  int?: number;
  attr0?: number;
  explosion?: number;
  blast?: number;
  rpiercing?: number;
  trex?: string;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  firesistance?: number;
  luck?: number;
  nopo?: string;
  projectile_test?: string;
  awesomeness?: number;
  mp_cost?: number;
  mp_reduction?: number;
  for?: number;
  resistance?: number;
  critdamage?: number;
  lifesteal?: number;
  exclusive?: boolean;
  attr1?: number;
}
