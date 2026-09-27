import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { ItemAbility } from "./index";

export type OrbKey =
  | "cave_loaded_die" // Loaded Die
  | "charmer" // Charmer
  | "ftrinket" // Trinket of Faith
  | "graveglass" // Graveglass Lens
  | "harpyecho" // Harpy's Echo
  | "jacko" // Jack-o Lantern
  | "mimicgrin" // Mimic's Grin
  | "orba" // Orb of Adventures
  | "orbg" // Orb of Beginnings
  | "orbofdex" // Orb of Dexterity
  | "orboffire" // Orb of Fire
  | "orboffrost" // Orb of Frost
  | "orbofint" // Orb of Intelligence
  | "orbofplague" // Orb of Plague
  | "orbofresolve" // Orb of Resolve
  | "orbofsc" // Orb of Second Chances
  | "orbofstr" // Orb of Strength
  | "orboftemporal" // Orb of Temporal Forces
  | "orbofvit" // Orb of Vitality
  | "rabbitsfoot" // Rabbit's Foot
  | "sapstone" // Sapstone
  | "stillwaterlens" // Stillwater Lens
  | "talkingskull" // Yorick the Talking Skull
  | "test_orb" // Orb of Testing
  | "test2" // Test
  | "tigerstone" // Tiger Stone
  | "vorb"; // Vampiric Canine Teeth

export interface GOrb {
  a?: boolean;
  ability?: ItemAbility;
  armor?: number;
  attr0?: number;
  cave?: {
    int: number;
    rpiercing: number;
  };
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    armor?: number;
    attr0?: number;
    courage?: number;
    dex?: number;
    evasion?: number;
    firesistance?: number;
    fzresistance?: number;
    gold?: number;
    int?: number;
    luck?: number;
    mp?: number;
    phresistance?: number;
    pnresistance?: number;
    rpiercing?: number;
    speed?: number;
    str?: number;
    vit?: number;
    xp?: number;
  };
  courage?: number;
  crit?: number;
  critdamage?: number;
  crypt?: {
    int: number;
    rpiercing: number;
  };
  cx?: {
    accent?: string;
    scale?: number;
  };
  dex?: number;
  edge?: number;
  evasion?: number;
  event?: boolean;
  exclusive?: boolean;
  explanation?: string;
  firesistance?: number;
  for?: number;
  frequency?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  gold?: number;
  grade?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
  halloween?: {
    int: number;
    rpiercing: number;
  };
  ignore?: boolean;
  int?: number;
  luck?: number;
  manasteal?: number;
  mp?: number;
  /** The full display name of an item. */
  name: string;
  pcourage?: number;
  phresistance?: number;
  pnresistance?: number;
  resistance?: number;
  rpiercing?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  speed?: number;
  spookytown?: {
    int: number;
    rpiercing: number;
  };
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "orb";
  vit?: number;
  xp?: number;
}
