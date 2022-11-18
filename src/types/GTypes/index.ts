import type { AchievementKey, GAchievement } from "./achievements";
import type { AnimationKey, GAnimation } from "./animations";
import type { ClassKey, GClass } from "./classes";
import type { ConditionKey, GCondition } from "./conditions";
import type { GCosmetic } from "./cosmetics";
import type { CraftKey, GCraft } from "./craft";
import type { DimensionKey, GDimension } from "./dimensions";
import type { DismantleKey, GDismantle } from "./dismantle";
import type { EmotionKey, GEmotion } from "./emotions";
import type { EventKey, GEvent } from "./events";
import type { GameKey, GGame } from "./games";
import type { GeometryKey, GGeometry } from "./geometry";
import type { ImageKey, GImage } from "./images";
import type { ImagesetKey, GImageset } from "./imagesets";
import type { ItemKey, GItem } from "./items";
import type { LevelKey, GLevel } from "./levels";
import type { MapKey, GMap } from "./maps";
import type { MonsterKey, GMonster } from "./monsters";
import type { MultiplierKey, GMultiplier } from "./multipliers";
import type { NpcKey, GNpc } from "./npcs";
import type { ProjectileKey, GProjectile } from "./projectiles";
import type { SetKey, GSet } from "./sets";
import type { SkillKey, GSkill } from "./skills";
import type { SpriteKey, GSprite } from "./sprites";
import type { TilesetKey, GTileset } from "./tilesets";
import type { TitleKey, GTitle } from "./titles";
import type { TokenKey, GToken } from "./tokens";

export type GData = {
  achievements: { [T in AchievementKey]: GAchievement };
  animations: { [T in AnimationKey]: GAnimation };
  classes: { [T in ClassKey]: GClass };
  conditions: { [T in ConditionKey]: GCondition };
  cosmetics: GCosmetic;
  craft: { [T in CraftKey]: GCraft };
  dimensions: { [T in DimensionKey]: GDimension };
  dismantle: { [T in DismantleKey]: GDismantle };
  emotions: { [T in EmotionKey]: GEmotion };
  events: { [T in EventKey]: GEvent };
  games: { [T in GameKey]: GGame };
  geometry: { [T in GeometryKey]: GGeometry };
  images: { [T in ImageKey]: GImage };
  imagesets: { [T in ImagesetKey]: GImageset };
  items: { [T in ItemKey]: GItem };
  levels: { [T in LevelKey]: GLevel };
  maps: { [T in MapKey]: GMap };
  monsters: { [T in MonsterKey]: GMonster };
  multipliers: { [T in MultiplierKey]: GMultiplier };
  npcs: { [T in NpcKey]: GNpc };
  projectiles: { [T in ProjectileKey]: GProjectile };
  sets: { [T in SetKey]: GSet };
  skills: { [T in SkillKey]: GSkill };
  sprites: { [T in SpriteKey]: GSprite };
  tilesets: { [T in TilesetKey]: GTileset };
  titles: { [T in TitleKey]: GTitle };
  tokens: { [T in TokenKey]: GToken };
  version: number;
  base_gold: { [key in MonsterKey]: { [key in MapKey]?: number } };
};

export * from "./achievements";
export * from "./animations";
export * from "./classes";
export * from "./conditions";
export * from "./cosmetics";
export * from "./craft";
export * from "./dimensions";
export * from "./dismantle";
export * from "./emotions";
export * from "./events";
export * from "./games";
export * from "./geometry";
export * from "./images";
export * from "./imagesets";
export * from "./items";
export * from "./levels";
export * from "./maps";
export * from "./monsters";
export * from "./multipliers";
export * from "./npcs";
export * from "./projectiles";
export * from "./sets";
export * from "./skills";
export * from "./sprites";
export * from "./tilesets";
export * from "./titles";
export * from "./tokens";

/** base_gold is attached to the G object from `socket.on('start'` in `game.js` */
export const base_gold = {
  stompy: { winterland: 36724 },
  wolf: { winterland: 6013 },
  arcticbee: { winterland: 78 },
  wolfie: { winterland: 1235 },
  boar: { winterland: 587 },
  iceroamer: { winterland: 196 },
  icegolem: { winterland: 7731924 },
  rat: { mansion: 70 },
  d_wiz: { d2: 16528 },
  bat: { batcave: 569, old_main: 569, cave: 270 },
  mvampire: { batcave: 6740, cave: 6740 },
  xmagefz: { winter_instance: 449998 },
  xmagefi: { winter_instance: 702110 },
  xmagen: { winter_instance: 513598 },
  xmagex: { winter_instance: 24747003 },
  harpy: { winter_cove: 26514 },
  rharpy: { winter_cove: 26957 },
  crab: { main: 28 },
  squig: { main: 61 },
  squigtoad: { main: 809 },
  tortoise: { main: 203 },
  frog: { main: 487 },
  crabx: { main: 118 },
  crabxx: { main: 269568 },
  target: { main: 20 },
  target_a500: { main: 20 },
  target_a750: { main: 20 },
  target_r500: { main: 20 },
  target_r750: { main: 20 },
  target_ar900: { main: 20 },
  target_ar500red: { main: 20 },
  goo: { main: 9, dungeon0: 16, old_main: 9 },
  bee: { main: 26 },
  poisio: { main: 102 },
  croc: { main: 90 },
  armadillo: { main: 85 },
  snake: { main: 44, halloween: 44 },
  bigbird: { main: 899 },
  spider: { main: 506, old_main: 1212 },
  scorpion: { main: 674, old_main: 1538, desertland: 1538 },
  phoenix: { main: 4493, old_main: 4493 },
  greenfairy: { main: 101088 },
  redfairy: { main: 134784 },
  bluefairy: { main: 112320 },
  puppy1: { main: 20, shellsisland: 20 },
  puppy2: { main: 20, shellsisland: 20 },
  puppy3: { main: 20, shellsisland: 20 },
  puppy4: { main: 20, shellsisland: 20 },
  kitty1: { main: 20, shellsisland: 20 },
  kitty2: { main: 20, shellsisland: 20 },
  kitty3: { main: 20, shellsisland: 20 },
  kitty4: { main: 20, shellsisland: 20 },
  hen: { main: 6 },
  rooster: { main: 6 },
  mole: { tunnel: 958 },
  pinkgoblin: { level2e: 79530 },
  osnake: { halloween: 87 },
  greenjr: { halloween: 236 },
  minimush: { halloween: 34 },
  mrpumpkin: { halloween: 2102543 },
  xscorpion: { halloween: 5382 },
  tinyp: { halloween: 158 },
  ghost: { halloween: 588 },
  fvampire: { halloween: 6740 },
  prat: { level1: 734 },
  mummy: { level3: 1995, level4: 1995, spookytown: 1119 },
  bbpompom: { level3: 397, winter_cave: 320 },
  cgoo: { level4: 405, level2s: 405, arena: 405 },
  mechagnome: { cyberland: 25509 },
  dknight2: { old_main: 6283 },
  a1: { crypt: 9537313 },
  a7: { crypt: 161741 },
  a3: { crypt: 76827 },
  a6: { crypt: 71885 },
  a5: { crypt: 51668 },
  a2: { crypt: 94349 },
  a4: { crypt: 210093 },
  a8: { crypt: 125799 },
  vbat: { crypt: 74469 },
  booboo: { spookytown: 281 },
  stoneworm: { spookytown: 65 },
  mrgreen: { spookytown: 2768812 },
  jr: { spookytown: 180 },
  rgoo: { goobrawl: 28080 },
  oneeye: { level2w: 35997 },
  franky: { level2w: 6955164 },
  pppompom: { level2n: 4586 },
  skeletor: { arena: 2247 },
  plantoid: { desertland: 9870 },
  porcupine: { desertland: 287 },
  ent: { desertland: 675949 },
  fireroamer: { desertland: 6535 },
  bscorpion: { desertland: 29315 },
  jrat: { jail: 64 },
  gredpro: { tomb: 190619 },
  ggreenpro: { tomb: 44928 },
  gbluepro: { tomb: 311626 },
  gpurplepro: { tomb: 376650 },
  grinch: { woffice: 673920 },
};

