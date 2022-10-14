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
  grades?: Array<unknown>;
  g: number;
  name: string;
  vit?: number;
  skin: string;
  compound?: {
    attr0?: number,
    vit?: number,
    armor?: number,
    speed?: number,
    rpiercing?: number,
    int?: number,
    dex?: number,
    str?: number,
    mp?: number,
    luck?: number,
    xp?: number,
    courage?: number,
  };
  type: string;
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
    scale: number,
  };
  rpiercing?: number;
  edge?: number;
  set?: string;
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
