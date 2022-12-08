import { MapKey } from "../types/GTypes/maps";
import { StatusInfo } from "./status-info";

export type EntityChannelInfos = {
  pickpocket?: {
    ms: number;
    target: string;
  };
  town?: {
    ms: number;
  };
  revival?: {
    /** name of the priest trying to revive you. */
    f: string;
  };
  fishing?: {
    ms: number;
    drop: string; //GDrops;
  };
  mining?: {
    ms: number;
    drop: string; //GDrops;
  };
};

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

  // TODO: pickpocket, town, what exactly is .c? some conditions have channeling property
  // Object.entries(G.conditions).filter(([key,condition]) => condition.channel)
  // mining, pickpocket, fishing, town
  // but other things can be channeling as well
  /** Channeling actions
   * some conditions have channeling property
   * `Object.entries(G.conditions).filter(([key,condition]) => condition.channel)`
   * mining, pickpocket, fishing, town
   * but other skills can be channeling as well
   */
  c: EntityChannelInfos;

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
      /** your base skin for example `mwarrior`  */
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

  /** After level 12, only hp/max_hp/xp increases */
  level: number;
  /** The unique id of the instance you are in, else a `MapKey` */
  in: MapKey | string;

  /** The map the character currently is on */
  map: MapKey;

  move_num?: number;
  /** Is the entity currently moving? */
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
}
