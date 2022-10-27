import { ConditionKey } from "../types/GTypes/conditions";
import { MapKey } from "../types/GTypes/maps";
import { MonsterKey } from "../types/GTypes/monsters";
import { StatusInfo } from "./status-info";

export interface EntityBase {
  a_angle?: number;
  a_direction: number;
  abs?: boolean;
  alpha: number;
  anchor: {
    x: number;
    y: number;
  };
  angle: number;
  animations: {};
  base: {
    h: number;
    v: number | null;
    vn: number;
  };

  // TODO: pickpocket, town, what exactly is .c?
  c: {
    pickpocket?: {
      ms: number;
      target: string;
    };
    town?: {
      ms: number;
    };
  };

  children: [];
  cid: number;

  displayGroup: {
    anchor: {
      x: number;
      y: number;
    };
    children: [];
    group: {
      enableSort: boolean;
    };
    height: number;
    position: {};
    sortPriority: number;
    useDoubleBuffer: boolean;
    visible: boolean;
    width: number;
    x: number;
    y: number;
  };

  drawn: boolean;

  // TODO: figure out what emblems are
  emblems: {
    j1?: {
      alpha: number;
      anchor: {
        x: number;
        y: number;
      };
      children: [];
      cskin: string;
      frame_list: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ];
      frames: number;
      group: {
        enableSort: boolean;
      };
      height: number;
      ms_emblemj1: string;
      parentGroup: {
        anchor: {
          x: number;
          y: number;
        };
        children: [];
        group: {
          enableSort: boolean;
        };
        height: number;
        position: {};
        visible: boolean;
        width: number;
        x: number;
        y: number;
      };
      position: {};
      skin: string;
      stype: string;
      updates: number;
      visible: boolean;
      width: number;
      x: number;
      y: number;
    };
    rr1?: {
      alpha: number;
      anchor: {
        x: number;
        y: number;
      };
      children: [];
      cskin: string;
      frame_list: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ];
      frames: number;
      group: {
        enableSort: boolean;
      };
      height: number;
      ms_emblemrr1: string;
      parentGroup: {
        anchor: {
          x: number;
          y: number;
        };
        children: [];
        group: {
          enableSort: boolean;
        };
        height: number;
        position: {};
        visible: boolean;
        width: number;
        x: number;
        y: number;
      };
      position: {};
      skin: string;
      stype: string;
      updates: number;
      visible: boolean;
      width: number;
      x: number;
      y: number;
    };
  };

  engaged_move?: number;

  from_x?: number;
  from_y?: number;

  fx: {
    attack?: [string, number];
    aaa?: null | number;
  };

  going_x?: number;
  going_y?: number;
  group: {
    enableSort: boolean;
  };

  i: number;
  id: string;
  interactive: boolean;

  last_ms: string;
  last_stop?: string;
  last_walking?: number;
  level: number;
  /** The unique id of the instance you are in, else a `MapKey` */
  in: MapKey | string;

  /** The map the character currently is on */
  map: MapKey;

  move_num?: number;
  /** Is the character currently moving? */
  moving: boolean;
  ms_walk?: string;

  parentGroup: {
    anchor: {
      x: number;
      y: number;
    };
    children: [];
    group: {
      enableSort: boolean;
    };
    height: number;
    position: {};
    sortPriority: number;
    useDoubleBuffer: boolean;
    visible: boolean;
    width: number;
    x: number;
    y: number;
  };

  position: {};

  real_alpha: number;
  real_x: number;
  real_y: number;

  resync: boolean;

  /**
   * Conditions or Buffs
   * G.conditions has stat information on most conditions
   * There are also conditions that might not be present in G.conditions `citizen0aura` being an `G.npcs.citizen0.aura`
   */
  s: StatusInfo;

  skin: string;

  updates: number;
  visible: boolean;
  vx: number;
  vy: number;
  walking: null | number;

  x: number;
  xp: number;
  y: number;
  y_disp?: null;

  // TODO stats
  armor: number;
  attack: number;
  speed: number;
  range: number;
}

// & {
//   burned?: {
//     // (Unconfirmed) the damage that the burn will do per second.
//     intensity: number;
//     // The character ID that caused the burn
//     f: string;
//   };
//   coop?: {
//     id: string;
//     p: number;
//   };
//   mluck?: {
//     /** The ID of the merchant who cast mluck */
//     f: string;
//     /** A flag to show if the mluck was cast by the user's merchant. If false, it can be mlucked by any merchant. */
//     strong: boolean;
//   };
//   monsterhunt?: MonsterHuntStatusInfo;
//   citizen0aura?: {
//     luck: number;
//   };
//   citizen4aura?: {
//     gold: number;
//   };
// }
