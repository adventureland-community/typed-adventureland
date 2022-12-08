import { AnimationKey, ProjectileKey, SkillKey } from "../../../G";

export type ServerToClient_hit = {
  anim?: AnimationKey | "miss" | "reflect";
  /** If this is true, the hit was due to an aoe attack */
  aoe?: boolean;
  /** If this is set, we avoided the projectile (by running?) */
  avoid?: boolean;
  /** If set, the projectile has inflicted burn on the target */
  burn?: boolean;
  damage?: number;
  evade?: boolean;
  heal?: number;
  hid?: string;
  id?: string;
  /** Did the entity die from this hit? */
  kill?: boolean;
  lifesteal?: number;
  manasteal?: number;
  miss?: boolean;
  /** TODO: What does this number mean? */
  mobbing?: number;
  /** UI Related. Skips drawing line to target (used for cleave, for example) */
  no_lines?: boolean;
  pid?: string;
  projectile?: ProjectileKey;
  reflect?: number;
  /** If set, this was a sneak attack by a rogue */
  sneak?: boolean;
  source?: SkillKey | "burn";
  /** If this is set, these IDs are too close to each other and are receiving additional damage on each hit */
  stacked?: string[];
  /** If set, the character is stunned with this attack */
  stun?: boolean;
};
