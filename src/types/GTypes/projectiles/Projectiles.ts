import type { AnimationKey } from "../animations/Animations";

export type ProjectileKey =
  | "acid"
  | "arrow"
  | "bigmagic"
  | "burst"
  | "crossbowarrow"
  | "cupid"
  | "curse"
  | "firearrow"
  | "fireball"
  | "frostarrow"
  | "frostball"
  | "garrow"
  | "gburst"
  | "magic"
  | "magic_divine"
  | "magic_purple"
  | "mentalburst"
  | "mmagic"
  | "momentum"
  | "partyheal"
  | "pinky"
  | "plight"
  | "pmagic"
  | "poisonarrow"
  | "pouch"
  | "purify"
  | "quickpunch"
  | "quickstab"
  | "sburst"
  | "smash"
  | "snowball"
  | "stone"
  | "stone_k"
  | "supershot"
  | "wandy"
  | "wmomentum";

export interface GProjectile {
  hit_animation?: AnimationKey;
  animation?: AnimationKey;
  speed?: number;
  instant?: boolean;
  ray?: AnimationKey;
  hit_text?: [string, string];
  kill_text?: [string, string];
  pure?: boolean;
}
