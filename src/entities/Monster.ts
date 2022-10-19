export interface GMonster {
  group: {
    enableSort: boolean;
  };
  x: number;
  y: number;
  children: [];
  visible: boolean;
  width: number;
  height: number;
  anchor: {
    x: number;
    y: number;
  };
  position: {};
  cskin: string;
  i: number;
  j: number;
  skin: string;
  stype: string;
  updates: number;
  type: string;
  mtype: string;
  in: string;
  map: string;
  hp: number | null;
  max_hp: number;
  mp: number;
  max_mp: number;
  speed: number;
  xp: number;
  attack: number;
  frequency: number;
  rage: number;
  aggro: number;
  damage_type: string;
  respawn: number;
  range: number;
  name: string;
  armor: number;
  resistance: number;
  id: string;
  cid: number;
  s: {
    self_healing?: {
      ms: number;
      ability: boolean;
    };
    sleeping?: {
      ms: number;
    };
    healed?: {
      ms: number;
    };
    stack?: {
      ms: number;
      s: number;
    };
    cursed?: {
      ms: number;
      duration: number;
    };
    marked?: {
      ms: number;
      duration: number;
    };
    burned?: {
      ms: number;
      intensity: number;
      fid: string;
      duration: number;
      f: string;
      last?: string;
    };
    young?: {
      ms: number;
    };
  };
  last_ms: string;
  displayGroup: {
    group: {
      enableSort: boolean;
    };
    x: number;
    y: number;
    children: [];
    visible: boolean;
    width: number;
    height: number;
    anchor: {
      x: number;
      y: number;
    };
    position: {};
    sortPriority: number;
    useDoubleBuffer: boolean;
  };
  parentGroup: {
    group: {
      enableSort: boolean;
    };
    x: number;
    y: number;
    children: [];
    visible: boolean;
    width: number;
    height: number;
    anchor: {
      x: number;
      y: number;
    };
    position: {};
    sortPriority: number;
    useDoubleBuffer: boolean;
  };
  walking: null | number;
  animations: {};
  fx: {
    aaa?: null | number;
    attack?: [string, number];
  };
  emblems: {
    j1?: {
      group: {
        enableSort: boolean;
      };
      x: number;
      y: number;
      children: [];
      visible: boolean;
      width: number;
      height: number;
      anchor: {
        x: number;
        y: number;
      };
      position: {};
      cskin: string;
      skin: string;
      stype: string;
      updates: number;
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
      parentGroup: {
        group: {
          enableSort: boolean;
        };
        x: number;
        y: number;
        children: [];
        visible: boolean;
        width: number;
        height: number;
        anchor: {
          x: number;
          y: number;
        };
        position: {};
      };
      alpha: number;
      ms_emblemj1: string;
    };
    rr1?: {
      group: {
        enableSort: boolean;
      };
      x: number;
      y: number;
      children: [];
      visible: boolean;
      width: number;
      height: number;
      anchor: {
        x: number;
        y: number;
      };
      position: {};
      cskin: string;
      skin: string;
      stype: string;
      updates: number;
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
      parentGroup: {
        group: {
          enableSort: boolean;
        };
        x: number;
        y: number;
        children: [];
        visible: boolean;
        width: number;
        height: number;
        anchor: {
          x: number;
          y: number;
        };
        position: {};
      };
      alpha: number;
      ms_emblemrr1: string;
    };
  };
  c: {};
  real_alpha: number;
  real_x: number;
  real_y: number;
  vx: number;
  vy: number;
  level: number;
  orientation?: number;
  interactive: boolean;
  buttonMode: boolean;
  base: {
    h: number;
    v: number | null;
    vn: number;
  };
  drawn: boolean;
  resync: boolean;
  angle: number;
  a_direction: number;
  direction: number;
  moving: boolean;
  texture?: {};
  alpha: number;
  immune?: boolean;
  move_num?: number;
  target?: null | string;
  engaged_move?: number;
  evasion?: number;
  abilities?: {
    portal?: {
      cooldown: number;
    };
    self_healing?: {
      heal: number;
      cooldown: number;
    };
  };
  reflection?: number;
  dreturn?: number;
  abs?: boolean;
  from_x?: number;
  from_y?: number;
  going_x?: number;
  going_y?: number;
  ref_speed?: number;
  ms_walk?: string;
  last_stop?: string;
  last_walking?: number;
  a_angle?: number;
  cooperative?: boolean;
  hit?: string;
  lifesteal?: number;
  y_disp?: null;
  special?: boolean;
  slots?: {
    mainhand: {
      name: string;
      level: number;
    };
  };
  pzazz?: number;
  cx?: {};
  cxc?: {};
  dead?: boolean;
  avoidance?: number;
}
