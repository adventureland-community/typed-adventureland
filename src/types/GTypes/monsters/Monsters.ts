
import type { ConditionKey } from "../conditions/Conditions";
import type { ProjectileKey } from "../projectiles/Projectiles";
import type { WeaponKey } from "../items/Weapon";
import type { SpriteKey } from "../sprites";

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

export type MonsterName =
  | "Angel"
  | "Angry Chest"
  | "Arctic Bee"
  | "Armadillo"
  | "Bat"
  | "Bee"
  | "Bill"
  | "Black Scorpion"
  | "Boo Boo"
  | "Brawl Goo"
  | "Chicken"
  | "Croc"
  | "Cute Bee"
  | "Dark Hound"
  | "Dark Knight"
  | "Dark Mage"
  | "Dark Wizard"
  | "Dracul"
  | "Dragold"
  | "Earth Elemental"
  | "Elena"
  | "Ent"
  | "Fairy"
  | "Field Generator"
  | "Fire Elemental"
  | "Fire Spirit"
  | "Franky"
  | "Froggie"
  | "Ghost"
  | "Giga Crab"
  | "Golden Bat"
  | "Goo"
  | "Green Jr."
  | "Grinch"
  | "Harpy"
  | "Hawk"
  | "Huge Crab"
  | "Ice Golem"
  | "Irradiated Goo"
  | "Jr."
  | "Kitty"
  | "Lestat"
  | "Liger X"
  | "Love Goo"
  | "Lucinda"
  | "Mage"
  | "Marceline"
  | "Mech-a Gnome"
  | "Mole"
  | "Mr. Green"
  | "Mr. Pumpkin"
  | "Ms. Dracul"
  | "Mummy"
  | "Nature Elemental"
  | "One Eye"
  | "Orlok"
  | "Phoenix"
  | "Pink Goblin"
  | "Poisio"
  | "Pom Pom"
  | "Porcupine"
  | "Protector of Darkness"
  | "Protector of Fire"
  | "Protector of Frost"
  | "Protector of Nature"
  | "Puppy"
  | "Rainbow Goo"
  | "Rat"
  | "Rebel Harpy"
  | "Reindeer"
  | "Scorpion"
  | "Skeletor"
  | "Slenderman"
  | "Snake"
  | "Sneaky Goblin"
  | "Snowman"
  | "Spider"
  | "Spike"
  | "Sprawling"
  | "Squig"
  | "Squigtoad"
  | "Stompy"
  | "Stone Worm"
  | "Target Automatron"
  | "Tiger"
  | "Tiny Crab"
  | "Tortoise"
  | "Vampire Rat"
  | "Vampireling"
  | "Wabbit"
  | "Water Elemental"
  | "Water Spirit"
  | "White Wolf"
  | "Wild Boar"
  | "Zapper";

export type GMonsterAbilities = {
  anger?: {
    cooldown: number;
    radius: number;
  };
  burn?: {
    attr0: number;
    unlimited: boolean;
  };
  curse_aura?: {
    aura: boolean;
    condition: ConditionKey;
    cooldown: number;
    radius: number;
  };
  dampening_aura?: {
    aura: boolean;
    condition: ConditionKey;
    cooldown: number;
    radius: number;
  };
  deepfreeze?: {
    cooldown: number;
    radius: number;
  };
  degen?: {
    amount: number;
    cooldown: number;
  };
  heal?: {
    cooldown: number;
    heal: number;
  };
  healing?: {
    cooldown: number;
    heal: number;
  };
  mlight?: {
    cooldown: number;
  };
  mtangle?: {
    cooldown: number;
  };
  multi_burn?: {
    cooldown: number;
    damage: number;
  };
  multi_freeze?: {
    cooldown: number;
    damage: number;
  };
  portal?: {
    cooldown: number;
  };
  putrid?: {
    curse: boolean;
    poison: boolean;
  };
  self_healing?: {
    cooldown: number;
    heal: number;
  };
  stone?: {
    cooldown: number;
  };
  tangle?: {
    cooldown: number;
  };
  warp_on_hit?: {
    attr0: number;
    unlimited: boolean;
  };
  warpstomp?: {
    cooldown: number;
    radius: number;
    stun: number;
  };
  weakness_aura?: {
    aura: boolean;
    condition: ConditionKey;
    cooldown: number;
    radius: number;
  };
  zap?: {
    amount: number;
    cooldown: number;
    pure: boolean;
    radius: number;
  };
};

export interface GMonster {
  "1hp"?: boolean;
  abilities?: GMonsterAbilities;
  // TODO: stat should be of type stat in the future.
  achievements?: Array<[kills: number, effectType: "stat", stat: string, amount: number]>;
  aggro: number;
  announce?: string | boolean;
  apiercing?: number;
  armor?: number;
  article?: string;
  attack: number;
  avoidance?: number;
  balance?: string;
  cbuff?: Array<[number, ConditionKey]>;
  charge?: number;
  charge_skin?: string;
  cooperative?: boolean;
  crit?: number;
  cute?: boolean;
  damage_type: string;
  /** A multiplier for monsters' gold drops */
  difficulty?: number;
  dreturn?: number;
  drop_on_hit?: boolean;
  escapist?: boolean;
  evasion?: number;
  explanation?: string;
  explosion?: number;
  frequency: number;
  global?: boolean;
  goldsteal?: number;
  hide?: boolean;
  hit?: string;
  hp: number;
  humanoid?: boolean;
  immune?: boolean;
  lifesteal?: number;
  mp: number;
  name: MonsterName;
  operator?: boolean;
  orientation?: number;
  passive?: boolean;
  peaceful?: boolean;
  pet?: {
    aggression: [number, number];
    brightness: number;
    chatter: [number, number];
    courage: [number, number];
    exponential: boolean;
  
    level: {
      armor: number;
      attack: number;
      charge: number;
      evasion: number;
      hp: number;
      resistance: number;
      speed: number;
    };
    obedience: [number, number];
    passion: [number, number];
    xp: number;
  };
  phresistance?: number;
  poisonous?: boolean;
  prefix?: string;
  projectile?: ProjectileKey;
  rage: number;
  range: number;
  rbuff?: ConditionKey;
  reflection?: number;
  resistance?: number;
  respawn: number;
  respawn_as?: MonsterKey;
  roam?: boolean;
  rpiercing?: number;
  s?: {
    [K in ConditionKey]?: {
      ms: number;
    };
  };
  size?: number;
  skin: string;
  slots?: {
    mainhand: {
    
      level: number;
      name: WeaponKey;
    };
    offhand?: {
    
      level: number;
      name: WeaponKey;
    };
  };
  spawns?: [[number, MonsterKey]];
  special?: boolean;
  speed: number;
  stationary?: boolean;
  supporter?: boolean;
  trap?: boolean;
  unlist?: boolean;
  xp: number;
  aa?: number;
}
