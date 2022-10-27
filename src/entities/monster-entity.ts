import { MonsterKey, MonsterName } from "../types/GTypes/monsters";
import { EntityBase } from "./base-entity";
import { StatusInfo } from "./status-info";

export interface MonsterEntity extends EntityBase {
  /** If set, attacks only do 1 damage */
  "1hp": number;

  // TODO: what monster abilities are there? and there are probably different ones depending on type of monster.
  abilities?: {
    portal?: {
      cooldown: number;
    };
    self_healing?: {
      cooldown: number;
      heal: number;
    };
  };
  aggro: number;
  avoidance?: number;

  buttonMode: boolean;

  cooperative?: boolean;
  cskin: string;
  cx?: {};
  cxc?: {};
  damage_type: string;
  /** true when the monster is defeated
   * "dead" can have string values too, such as "map" / "vision"
   * Indicating the reason why the monster is as good as dead to you
   */
  dead?: boolean | string;
  direction: number;

  dreturn?: number; // TODO: stats, should be on characters as wel?
  /** A percent chance to avoid physical attacks */
  evasion?: number;
  /** attacks/second */
  frequency: number;

  height: number;
  hit?: string;
  hp: number | null;

  immune?: boolean;

  j: number;

  lifesteal?: number;
  max_hp: number;
  max_mp: number;

  mp: number;
  mtype: MonsterKey;
  name: MonsterName;
  orientation?: number;

  pzazz?: number;
  rage: number;
  range: number;

  ref_speed?: number;
  reflection?: number;
  resistance: number;
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
  speed: number;
  stype: string;
  /** Set if the monster is targeting something */
  target?: null | string;
  texture?: {};
  type: "monster";

  width: number;
}
