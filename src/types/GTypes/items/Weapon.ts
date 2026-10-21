import { DamageType } from "../../../entity";
import type { ClassKey } from "../classes/Classes";
import type { ProjectileKey } from "../projectiles/Projectiles";
import type { SetKey } from "../sets/Sets";
import type { WeaponType, ItemAbility } from "./index";

export type WeaponKey =
  | "axe3" // T3 Axe
  | "basher" // Basher
  | "bataxe" // Ghastly Battle Axe
  | "blade" // Blade
  | "bow" // Bow
  | "bow4" // T4 Bow
  | "bowofthedead" // Bow of the Dead
  | "brinefang" // Brinefang
  | "broom" // Broom
  | "candycanesword" // Candy Cane Sword
  | "carrotsword" // Carrot Sword
  | "cave_backstabber" // Last Word
  | "cave_blackstaff" // Nightjudge
  | "cave_deepaxe" // Deepvein Axe
  | "cave_locktooth" // Locktooth
  | "cave_reedscythe" // Reed Scythe
  | "cave_tunnelaxe" // Tunnel Axe
  | "cclaw" // Crab Claw
  | "cinderwand" // Cinder Wand
  | "claw" // Claw
  | "concordmace" // Concord Mace
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
  | "ledgerlight" // Ledgerlight
  | "lmace" // Lunar Mace
  | "mace" // Mace
  | "maceofthedead" // Mace of the Dead
  | "merry" // Bow of The Merry Ranger
  | "mushroomstaff" // Mushroom Staff
  | "nighttill" // Night Till
  | "ololipop" // Lolipop Mace
  | "oozingterror" // Oozing Terror
  | "ornamentstaff" // Ornament Staff
  | "pclaw" // Poison Claw
  | "pinkie" // Pink Wand
  | "pmace" // Priest's Mace
  | "pmaceofthedead" // Hand of the Dead
  | "pollenbow" // Pollen Bow
  | "pouchbow" // Poucher
  | "rapier" // Rapier
  | "reunionbow" // Reunion Bow
  | "rimeknuckles" // Rime Knuckles
  | "scythe" // Skeletor's Scythe
  | "slimestaff" // Slime Staff
  | "snowflakes" // Snowflakes
  | "sparkstaff" // Spark Staff
  | "spear" // Spear
  | "spearofthedead" // Spear of the Dead
  | "staff" // Staff
  | "staff2" // T2 Staff
  | "staff3" // T3 Staff
  | "staff4" // T4 Staff
  | "staffofthedead" // Staff of the Dead
  | "stinger" // Stinger
  | "surety" // Surety
  | "swifty" // Swifty
  | "sword" // Short Sword
  | "swordofthedead" // Sword of the Dead
  | "t2bow" // Well-Crafted Bow
  | "t3bow" // Artisan's Bow
  | "threadneedle" // Threadneedle
  | "throwingstars" // Throwing Stars
  | "tollkeeperspike" // Tollkeeper's Pike
  | "valourdirk" // Valour Dirk
  | "vdagger" // Vampiric Dagger
  | "vhammer" // Vampiric Hammer
  | "vstaff" // Vampiric Staff
  | "vsword" // Vampiric Sword
  | "wand" // Wand
  | "waxe" // Wooden Axe
  | "waybill" // Waybill
  | "wbasher" // Wooden Basher
  | "wblade" // Ethereal Blade of Destiny
  | "weaver" // Bow of the Weaver
  | "woodensword" // Wooden Sword
  | "worldrootcrook" // Worldroot Crook
  | "xmace"; // Merry Mace

export interface GWeapon {
  a?: boolean | number;
  ability?: ItemAbility;
  apiercing?: number;
  armor?: number;
  attack: number;
  attr0?: number;
  attr1?: number;
  awesomeness?: number;
  blast?: number;
  charisma?: number;
  /** An array of classes that can use this item. */
  class?: Array<ClassKey>;
  courage?: number;
  crit?: number;
  critdamage?: number;
  cx?: {
    accent?: string;
    border?: number;
    extension?: boolean;
    large?: boolean;
    lightborder?: boolean;
    scale?: number;
  };
  damage_type: DamageType;
  delia?: string;
  dex?: number;
  dreturn?: number;
  evasion?: number;
  event?: boolean;
  exclusive?: boolean;
  explanation?: string;
  explosion?: number;
  firesistance?: number;
  for?: number;
  frequency?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  hp?: number;
  ignore?: boolean;
  int?: number;
  lifesteal?: number;
  luck?: number;
  manasteal?: number;
  mp?: number;
  mp_cost?: number;
  mp_reduction?: number;
  /** The full display name of an item. */
  name: string;
  nopo?: string;
  pnresistance?: number;
  projectile?: ProjectileKey;
  projectile_test?: ProjectileKey;
  range: number;
  reflection?: number;
  resistance?: number;
  rpiercing?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  skin_c?: string;
  skin_r?: string;
  speed?: number;
  str?: number;
  stresistance?: number;
  stun?: number;
  /** The tier of the item. */
  tier: number;
  trex?: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "weapon";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    apiercing?: number;
    armor?: number;
    attack: number;
    attr0?: number;
    attr1?: number;
    awesomeness?: number;
    blast?: number;
    crit?: number;
    critdamage?: number;
    dex?: number;
    dreturn?: number;
    evasion?: number;
    explosion?: number;
    for?: number;
    hp?: number;
    int?: number;
    lifesteal?: number;
    manasteal?: number;
    mp?: number;
    mp_reduction?: number;
    pnresistance?: number;
    range: number;
    reflection?: number;
    resistance?: number;
    rpiercing?: number;
    speed?: number;
    str?: number;
    stun?: number;
    vit?: number;
  };
  vit?: number;
  /** The type of `weapon` `wand` `axe` `mace`... */
  wtype: WeaponType;
}
