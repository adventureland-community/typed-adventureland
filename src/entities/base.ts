import { MapKey } from "../types/GTypes/maps";

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
  in: string;
  interactive: boolean;

  last_ms: string;
  last_stop?: string;
  last_walking?: number;
  level: number;

  map: MapKey;

  move_num?: number;
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

  s: {}; // TODO: buffs, conditions? seems like G.conditions

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
