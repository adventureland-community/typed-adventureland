export interface GNpc {
  group: {
    enableSort: boolean;
  };
  x: number;
  y: number;
  children: [];
  visible: boolean;
  width: number | null;
  height: number | null;
  anchor: {
    x: number;
    y: number;
  };
  position: {};
  cskin: string | null;
  i: number;
  frame?: number;
  skin: string;
  stype: string;
  updates: number;
  cscale: number;
  in: string;
  map: string;
  hp: number;
  max_hp: number;
  mp: number;
  xp: number | null;
  attack: number;
  speed: number;
  range: number;
  armor: number;
  level: number;
  npc: string;
  s: {
    coop?: {
      ms: number;
      id: string;
      p: number;
    };
    newcomersblessing?: {
      ms: number;
      f: string;
      undefined: number;
    };
  };
  c: {};
  q: {};
  pdps: number;
  id: string;
  cid: number;
  cx: {
    hat?: string;
    hair?: string;
    head?: string;
    face?: string;
  };
  ctype: string;
  owner: string;
  name: string;
  external: boolean;
  player: boolean;
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
    aaa?: number | null;
    attack?: [string, number];
  };
  emblems: {};
  real_alpha: number;
  real_x: number;
  real_y: number;
  type: string;
  base: {
    h: number;
    v: number;
    vn: number;
  };
  role: string;
  says?: string | Array<string>;
  places?: {
    winterland: number;
    desertland: number;
    test: number;
    cyberland: number;
    main: number;
    d_e: number;
  };
  color?: string;
  awidth: number;
  aheight: number;
  hitArea?: {};
  interactive: boolean;
  buttonMode: boolean;
  drawn: boolean;
  resync: boolean;
  angle: number;
  a_direction: number;
  direction: number;
  moving: boolean;
  ms_anim?: string;
  alpha: number;
  j?: number;
  move_num?: number;
  cxc?: {};
  allow?: boolean;
  engaged_move?: number;
  abs?: boolean;
  from_x?: number;
  from_y?: number;
  going_x?: number;
  going_y?: number;
  ref_speed?: number;
  vx?: number;
  vy?: number;
  ms_walk?: string;
  texture?: {};
  quest?: string;
  atype?: string;
  token?: string;
  side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  items?: Array<string | null>;
  stand?: string;
  aspeed?: string;
  old_role?: string;
  old_side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  old_items?: [
    string,
    string,
    string,
    null,
    null,
    null,
    string,
    null,
    null,
    string,
    string,
    null,
    null,
    null
  ];
  last_stop?: string;
  last_walking?: number;
  target?: string;
  focus?: null | string;
  seek?: string;
  class?: string;
  interaction?: Array<string>;
  delay?: number;
  citizen?: boolean;
  a_angle?: number;
  aura?: {
    gold?: number;
    luck?: number;
  };
  modal?: string;
  y_disp?: null;
  pack?: string;
  rip?: boolean;
  rtexture?: boolean;
}
