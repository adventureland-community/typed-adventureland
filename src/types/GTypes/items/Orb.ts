import type { PositionKey } from "../positions/Positions";
import type { SetKey } from "../sets/Sets";

export type OrbKey =
  | "charmer" // Charmer
  | "ftrinket" // Trinket of Faith
  | "jacko" // Jack-o Lantern
  | "orbg" // Orb of Beginnings
  | "orbofdex" // Orb of Dexterity
  | "orbofint" // Orb of Intelligence
  | "orbofsc" // Orb of Second Chances
  | "orbofstr" // Orb of Strength
  | "orbofvit" // Orb of Vitality
  | "rabbitsfoot" // Rabbit's Foot
  | "talkingskull" // Yorick the Talking Skull
  | "test_orb" // Orb of Testing
  | "test2" // Test
  | "tigerstone" // Tiger Stone
  | "vorb"; // Vampiric Canine Teeth

export interface GOrb {
  attr0?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades?: [number, number, number, number];
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  vit?: number;
  /** The skin of the item. */
  skin: PositionKey;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    attr0?: number;
    vit?: number;
    armor?: number;
    speed?: number;
    rpiercing?: number;
    int?: number;
    dex?: number;
    str?: number;
    mp?: number;
    luck?: number;
    xp?: number;
    courage?: number;
  };
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "orb";
  event?: boolean;
  ability?: string;
  a?: boolean;
  int?: number;
  explanation?: string;
  speed?: number;
  dex?: number;
  armor?: number;
  str?: number;
  cx?: {
    scale: number;
  };
  rpiercing?: number;
  edge?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  mp?: number;
  luck?: number;
  xp?: number;
  fzresistance?: number;
  firesistance?: number;
  ignore?: boolean;
  for?: number;
  critdamage?: number;
  manasteal?: number;
  courage?: number;
  pcourage?: number;
}
