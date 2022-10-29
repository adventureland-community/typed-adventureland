import type { ConditionKey } from "../conditions/Conditions";
import type { DimensionKey } from "../dimensions/Dimensions";
import type { ProjectileKey } from "../projectiles/Projectiles";
import type { WeaponKey } from "../items/Weapon";

export type MonsterKey =
  | "a1" // Spike
  | "a2" // Bill
  | "a3" // Lestat
  | "a4" // Orlok
  | "a5" // Elena
  | "a6" // Marceline
  | "a7" // Lucinda
  | "a8" // Angel
  | "arcticbee" // Arctic Bee
  | "armadillo" // Armadillo
  | "bat" // Bat
  | "bbpompom" // Pom Pom
  | "bee" // Bee
  | "bgoo" // Brawl Goo
  | "bigbird" // Hawk
  | "bluefairy" // Fairy
  | "boar" // Wild Boar
  | "booboo" // Boo Boo
  | "bscorpion" // Black Scorpion
  | "cgoo" // Irradiated Goo
  | "chestm" // Angry Chest
  | "crab" // Tiny Crab
  | "crabx" // Huge Crab
  | "crabxx" // Giga Crab
  | "croc" // Croc
  | "cutebee" // Cute Bee
  | "d_wiz" // Dark Wizard
  | "dknight2" // Dark Knight
  | "dragold" // Dragold
  | "eelemental" // Earth Elemental
  | "ent" // Ent
  | "felemental" // Fire Elemental
  | "fieldgen0" // Field Generator
  | "fireroamer" // Fire Spirit
  | "franky" // Franky
  | "frog" // Froggie
  | "fvampire" // Ms. Dracul
  | "gbluepro" // Protector of Frost
  | "ggreenpro" // Protector of Nature
  | "ghost" // Ghost
  | "goblin" // Sneaky Goblin
  | "goldenbat" // Golden Bat
  | "goo" // Goo
  | "gpurplepro" // Protector of Darkness
  | "gredpro" // Protector of Fire
  | "greenfairy" // Fairy
  | "greenjr" // Green Jr.
  | "grinch" // Grinch
  | "gscorpion" // Scorpion
  | "harpy" // Harpy
  | "hen" // Chicken
  | "icegolem" // Ice Golem
  | "iceroamer" // Water Spirit
  | "jr" // Jr.
  | "jrat" // Rat
  | "kitty1" // Kitty
  | "kitty2" // Kitty
  | "kitty3" // Kitty
  | "kitty4" // Kitty
  | "ligerx" // Liger X
  | "mechagnome" // Mech-a Gnome
  | "minimush" // Pom Pom
  | "mole" // Mole
  | "mrgreen" // Mr. Green
  | "mrpumpkin" // Mr. Pumpkin
  | "mummy" // Mummy
  | "mvampire" // Dracul
  | "nelemental" // Nature Elemental
  | "nerfedmummy" // Mummy
  | "oneeye" // One Eye
  | "osnake" // Snake
  | "phoenix" // Phoenix
  | "pinkgoblin" // Pink Goblin
  | "pinkgoo" // Love Goo
  | "plantoid" // Sprawling
  | "poisio" // Poisio
  | "porcupine" // Porcupine
  | "pppompom" // Pom Pom
  | "prat" // Vampire Rat
  | "puppy1" // Puppy
  | "puppy2" // Puppy
  | "puppy3" // Puppy
  | "puppy4" // Puppy
  | "rat" // Rat
  | "redfairy" // Fairy
  | "rgoo" // Rainbow Goo
  | "rharpy" // Rebel Harpy
  | "rooster" // Chicken
  | "rudolph" // Reindeer
  | "scorpion" // Scorpion
  | "skeletor" // Skeletor
  | "slenderman" // Slenderman
  | "snake" // Snake
  | "snowman" // Snowman
  | "spider" // Spider
  | "squig" // Squig
  | "squigtoad" // Squigtoad
  | "stompy" // Stompy
  | "stoneworm" // Stone Worm
  | "target" // Target Automatron
  | "target_a500" // Target Automatron
  | "target_a750" // Target Automatron
  | "target_ar500red" // Target Automatron
  | "target_ar900" // Target Automatron
  | "target_r500" // Target Automatron
  | "target_r750" // Target Automatron
  | "tiger" // Tiger
  | "tinyp" // Fairy
  | "tortoise" // Tortoise
  | "vbat" // Vampireling
  | "wabbit" // Wabbit
  | "welemental" // Water Elemental
  | "wolf" // White Wolf
  | "wolfie" // Dark Hound
  | "xmagefi" // Mage
  | "xmagefz" // Mage
  | "xmagen" // Mage
  | "xmagex" // Dark Mage
  | "xscorpion" // Scorpion
  | "zapper0"; // Zapper

export interface GMonster {
  achievements?: Array<[number, string, string, number]>;
  "1hp"?: boolean;
  name: string;
  rage: number;
  s?: {
    [K in ConditionKey]?: {
      ms: number;
    };
  };
  hp: number;
  respawn: number;
  range: number;
  aggro: number;
  immune?: boolean;
  attack: number;
  frequency: number;
  damage_type: string;
  cooperative?: boolean;
  skin: string;
  announce?: string | boolean;
  xp: number;
  speed: number;
  special?: boolean;
  mp: number;
  aa?: number;
  phresistance?: number;
  cute?: boolean;
  avoidance?: number;
  explanation?: string;
  armor?: number;
  resistance?: number;
  charge?: number;
  abilities?: {
    burn?: {
      unlimited: boolean;
      attr0: number;
    };
    multi_freeze?: {
      cooldown: number;
      damage: number;
    };
    weakness_aura?: {
      cooldown: number;
      radius: number;
      aura: boolean;
      condition: ConditionKey;
    };
    self_healing?: {
      heal: number;
      cooldown: number;
    };
    portal?: {
      cooldown: number;
    };
    multi_burn?: {
      cooldown: number;
      damage: number;
    };
    warp_on_hit?: {
      unlimited: boolean;
      attr0: number;
    };
    degen?: {
      amount: number;
      cooldown: number;
    };
    dampening_aura?: {
      cooldown: number;
      radius: number;
      aura: boolean;
      condition: ConditionKey;
    };
    heal?: {
      heal: number;
      cooldown: number;
    };
    mtangle?: {
      cooldown: number;
    };
    stone?: {
      cooldown: number;
    };
    anger?: {
      cooldown: number;
      radius: number;
    };
    warpstomp?: {
      stun: number;
      cooldown: number;
      radius: number;
    };
    zap?: {
      amount: number;
      cooldown: number;
      radius: number;
      pure: boolean;
    };
    mlight?: {
      cooldown: number;
    };
    deepfreeze?: {
      cooldown: number;
      radius: number;
    };
    tangle?: {
      cooldown: number;
    };
    healing?: {
      heal: number;
      cooldown: number;
    };
    curse_aura?: {
      cooldown: number;
      radius: number;
      aura: boolean;
      condition: ConditionKey;
    };
    putrid?: {
      curse: boolean;
      poison: boolean;
    };
  };
  hit?: string;
  slots?: {
    mainhand: {
      name: WeaponKey;
      level: number;
    };
    offhand?: {
      name: WeaponKey;
      level: number;
    };
  };
  evasion?: number;
  difficulty?: number;
  rpiercing?: number;
  lifesteal?: number;
  cbuff?: [
    [number, ConditionKey],
    [number, ConditionKey],
    [number, ConditionKey]
  ];
  crit?: number;
  poisonous?: boolean;
  charge_skin?: DimensionKey;
  apiercing?: number;
  dreturn?: number;
  stationary?: boolean;
  humanoid?: boolean;
  orientation?: number;
  reflection?: number;
  hide?: boolean;
  pet?: {
    courage: [number, number];
    passion: [number, number];
    exponential: boolean;
    level: {
      evasion: number;
      armor: number;
      hp: number;
      attack: number;
      resistance: number;
      charge: number;
      speed: number;
    };
    xp: number;
    brightness: number;
    chatter: [number, number];
    obedience: [number, number];
    aggression: [number, number];
  };
  size?: number;
  spawns?: [[number, MonsterKey]];
  prefix?: string;
  rbuff?: ConditionKey;
  unlist?: boolean;
  projectile?: ProjectileKey;
  trap?: boolean;
  operator?: boolean;
  respawn_as?: MonsterKey;
  peaceful?: boolean;
  drop_on_hit?: boolean;
  roam?: boolean;
  global?: boolean;
  passive?: boolean;
  goldsteal?: number;
  escapist?: boolean;
  balance?: string;
  article?: string;
  explosion?: number;
  supporter?: boolean;
}
