import { GMonsterAbilities, MonsterKey, MonsterName } from "../types/GTypes/monsters";
import { EntityBase } from "./base-entity";
import { StatusInfo } from "./status-info";

export interface MonsterEntity extends EntityBase {
  // Attributes
  /** Damage Return. */
  dreturn?: number; // TODO: stats, should be on characters as wel?
  hp: number | null;
  max_hp: number;
  mp: number;
  max_mp: number;
  /** A percent chance to avoid physical attacks. */
  evasion?: number;
  pzazz?: number;
  range: number;
  reflection?: number;
  resistance: number;
  lifesteal?: number;
  speed: number;
  /** Attacks/second. */
  frequency: number;
  armor: number;
  attack: number;

  /** If set, attacks only do 1 damage */
  "1hp": number;

  abilities?: GMonsterAbilities;
  /**
   * Chance to aggro on sight.
   * 0,5 would be 50% chance.
   */
  aggro: number;
  avoidance?: number;

  buttonMode: boolean;

  /** Does coop rules apply */
  cooperative?: boolean;
  cskin: string;
  cx?: {};
  cxc?: {};
  damage_type: string;
  /** true when the monster is defeated
   * "dead" can have string values too, such as "map" / "vision"
   * Indicating the reason why the monster is as good as dead to you.
   */
  dead?: boolean | string;
  direction: number;

  height: number;
  hit?: string;

  immune?: boolean;

  j: number;

  /** The level of the monster
   * After level 12, only hp/max_hp/xp increases. */
  level: number;

  mtype: MonsterKey;
  name: MonsterName;
  orientation?: number;

  /**
   * Chance to target the player on attack.
   * 0.5 would be 50% chance.
   */
  rage: number;

  ref_speed?: number;
  /** Average seconds it takes for mob to respawn.
   * A value of 10 would be every 10 seconds.
   */
  respawn: number;

  s: StatusInfo & {
    self_healing?: {
      ability: boolean;
      ms: number;
    };
    young?: {
      ms: number;
    };
  };
  slots?: {
    mainhand: {
      level: number;
      name: string;
    };
  };
  special?: boolean;

  stype: string;
  /** Set if the monster is targeting something */
  target?: null | string;
  texture?: {};
  type: "monster";

  width: number;
}
