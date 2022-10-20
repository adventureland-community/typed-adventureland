import { MonsterKey, MonsterName } from "../types/GTypes/monsters";
import { EntityBase } from "./base";

export interface MonsterEntity extends EntityBase {
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
  dead?: boolean;
  direction: number;

  dreturn?: number; // TODO: stats, should be on characters as wel?

  evasion?: number;
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

  // s: {
  //   burned?: {
  //     duration: number;
  //     f: string;
  //     fid: string;
  //     intensity: number;
  //     last?: string;
  //     ms: number;
  //   };
  //   cursed?: {
  //     duration: number;
  //     ms: number;
  //   };
  //   healed?: {
  //     ms: number;
  //   };
  //   marked?: {
  //     duration: number;
  //     ms: number;
  //   };
  //   self_healing?: {
  //     ability: boolean;
  //     ms: number;
  //   };
  //   sleeping?: {
  //     ms: number;
  //   };
  //   stack?: {
  //     ms: number;
  //     s: number;
  //   };
  //   young?: {
  //     ms: number;
  //   };
  // };
  // TODO: ItemInstance / Info / Data
  slots?: {
    mainhand: {
      level: number;
      name: string;
    };
  };
  special?: boolean;
  speed: number;
  stype: string;
  target?: null | string;
  texture?: {};
  type: "monster";

  width: number;
}