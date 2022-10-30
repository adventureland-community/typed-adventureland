export type AnimationKey =
  | "acid"
  | "arrow_hit"
  | "arrow1"
  | "block"
  | "burst"
  | "carrow"
  | "confetti"
  | "crackle"
  | "cuarrow"
  | "curse"
  | "curse_new"
  | "curse_projectile"
  | "dampened"
  | "egg"
  | "exchange"
  | "explode_a"
  | "explode_b"
  | "explode_c"
  | "explode_p"
  | "explode_up"
  | "failure"
  | "firearrow"
  | "fireball"
  | "flare_blue"
  | "flare_yellow"
  | "fog"
  | "frostarrow"
  | "frostball"
  | "garrow"
  | "gburst"
  | "gm"
  | "gold"
  | "gold_anim"
  | "hardshell"
  | "heal"
  | "heal_projectile"
  | "hearts_single"
  | "icecrack"
  | "invincible"
  | "light"
  | "magic0"
  | "magic1"
  | "magic2"
  | "magic3"
  | "magic4"
  | "mblob"
  | "mblob_purplish"
  | "mblob_red"
  | "mluck"
  | "party_heal"
  | "pblob"
  | "pinky"
  | "poucharrow"
  | "rain"
  | "reflection"
  | "revival"
  | "rspeed"
  | "slash"
  | "slash0"
  | "slash1"
  | "slash2"
  | "slash3"
  | "snow"
  | "snowball"
  | "snowball_hit"
  | "snowflake"
  | "spark0"
  | "starkiller"
  | "stunned"
  | "success"
  | "superarrow"
  | "supershot"
  | "tangle"
  | "taunt"
  | "tiling_burst"
  | "tiling_burst_g"
  | "tiling_burstj"
  | "transport"
  | "typing"
  | "wandy"
  | "wslash";

export interface GAnimation {
  frames: number;
  file: string;
  alpha?: number;
  aspeed?: string;
  tiling?: boolean;
  fade?: boolean;
  directional?: boolean;
  framefps?: number;
  continuous?: boolean;
  speed?: number;
  scale?: number;
  proportional?: boolean;
  front?: boolean;
  speeding?: boolean;
  bubble?: boolean;
  y?: number;
  exact?: boolean;
  size?: number;
}
