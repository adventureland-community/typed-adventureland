import type { SetKey } from "../sets/Sets";

export type OrbKey =
  | "charmer" // Charmer
  | "ftrinket" // Trinket of Faith
  | "jacko" // Jack-o Lantern
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
  | "talkingskull" // Yorick the Talking Skull
  | "test_orb" // Orb of Testing
  | "test2" // Test
  | "tigerstone" // Tiger Stone
  | "vorb"; // Vampiric Canine Teeth

export interface GOrb {
  a?: boolean;
  ability?: string;
  armor?: number;
  attr0?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    armor?: number;
    attr0?: number;
    courage?: number;
    dex?: number;
    firesistance?: number;
    fzresistance?: number;
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
  critdamage?: number;
  cx?: {
    scale: number;
  };
  dex?: number;
  edge?: number;
  event?: boolean;
  explanation?: string;
  firesistance?: number;
  for?: number;
  fzresistance?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
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
  rpiercing?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: string;
  speed?: number;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "orb";
  vit?: number;
  xp?: number;
}
