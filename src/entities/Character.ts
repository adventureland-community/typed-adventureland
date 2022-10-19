export interface GCharacter {
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
  j: number;
  skin: string;
  stype: string;
  updates: number;
  cscale: number;
  in: string;
  map: string;
  hp: number;
  max_hp: number;
  mp: number;
  max_mp: number;
  xp: number;
  attack: number;
  heal: number;
  frequency: number;
  speed: number;
  range: number;
  armor: number;
  resistance: number;
  level: number;
  party?: string | null;
  rip: boolean | number;
  afk: string | boolean;
  s: {
    mluck?: {
      ms: number;
      f: string;
      strong?: boolean;
    };
    rspeed?: {
      ms: number;
      f: string;
    };
    halloween2?: {
      ms: number;
    };
    hopsickness?: {
      ms: number;
      duration: number;
    };
    coop?: {
      ms: number;
      id: string;
      p: number;
    };
    warcry?: {
      ms: number;
      f: string;
    };
    darkblessing?: {
      ms: number;
      f: string;
    };
    newcomersblessing?: {
      undefined: number;
      ms: number;
      f: string;
    };
    halloween1?: {
      ms: number;
    };
    typing?: {
      ms: number;
    };
    energized?: {
      ms: number;
    };
    penalty_cd?: {
      ms: number;
    };
    citizen4aura?: {
      ms: number;
      name: string;
      skin: string;
      citizens: boolean;
      gold: number;
    };
    massproductionpp?: {
      ms: number;
    };
    mshield?: {
      ms: number;
    };
    monsterhunt?: {
      sn: string;
      id: string;
      c: number;
      ms: number;
      dl: boolean;
    };
    invincible?: {
      ms: number;
    };
    sugarrush?: {
      ms: number;
      duration: number;
    };
    notverified?: {
      ms: number;
    };
    massproduction?: {
      ms: number;
    };
    weakness?: {
      ms: number;
    };
    mlifesteal?: {
      ms: number;
    };
    blink?: {
      ms: number;
      in: string;
      map: string;
      x: number;
      y: number;
      d: number;
    };
    citizen0aura?: {
      ms: number;
      name: string;
      skin: string;
      citizens: boolean;
      luck: number;
    };
    magiport?: {
      ms: number;
      x: number;
      y: number;
      f: string;
      in: string;
      map: string;
    };
    charging?: {
      ms: number;
    };
    halloween0?: {
      ms: number;
    };
    holidayspirit?: {
      ms: number;
    };
    xshotted?: {
      duration: number;
      ms: number;
    };
    block?: {
      ms: number;
      f: string;
    };
    poisoned?: {
      duration: number;
      ms: number;
    };
  };
  c: {
    town?: {
      ms: number;
    };
    pickpocket?: {
      ms: number;
      target: string;
    };
  };
  q: {
    compound?: {
      ms: number;
      len: number;
      num: number | string;
      nums: [];
      stale?: boolean;
    };
    upgrade?: {
      ms: number;
      len: number;
      num: number | string;
      stale?: boolean;
    };
    exchange?: {
      ms: number;
      len: number;
      name: string;
      id: string;
      q: number;
      num: number;
      stale?: boolean;
      qs?: string;
    };
  };
  age: number;
  pdps: number | null;
  id: string;
  move_num?: number;
  cid: number;
  stand?: string | boolean;
  controller?: string;
  cx: {
    hair?: string;
    head?: string;
    upper?: string;
    chin?: string;
    hat?: string;
    makeup?: string;
    face?: string;
  };
  slots: {
    ring1: {
      level: number;
      name: string;
      l?: string;
      registry?: {
        "76561198041871962": string;
        "76561199016494300": string;
        "76561198044418993": string;
        "76561198841973606": string;
        "76561198004196810": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198024874460"?: string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561198024917816": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198074385093"?: string;
        "76561198077097097"?: string;
        "76561198010108867"?: string;
        "76561199163789308"?: string;
        "76561199172472357"?: string;
      };
      p?: string;
      v?: string;
    } | null;
    ring2: {
      name: string;
      level: number;
      l?: string;
      p?: string;
      registry?: {
        "76561198129567684"?: string;
        "76561198024874460": string;
        "76561198138460241": string;
        "76561198169821251"?: string;
        "76561198017484541": string;
        "76561199172472357": string;
        "76561198166019050"?: string;
        "76561198333158770"?: string;
        "76561198333629156"?: string;
        "76561198072933236"?: string;
        "76561199197162548"?: string;
        "76561198010108867": string;
        "76561199163789308": string;
        "76561198041871962"?: string;
        "76561199016494300"?: string;
        "76561198044418993"?: string;
        "76561198074385093"?: string;
        "76561198841973606"?: string;
        "76561198009162916"?: string;
        "76561198004196810"?: string;
        "76561198088066244"?: string;
        "76561198024917816"?: string;
        "76561198007507208"?: string;
        "76561198163762805"?: string;
      };
      v?: string;
      ld?: string;
    } | null;
    earring1: {
      name: string;
      level: number;
      l?: string;
      registry?: {
        "76561198041871962": string;
        "76561198024917816": string;
        "76561198074385093": string;
        "76561198841973606": string;
        "76561198004196810": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561199016494300": string;
        "76561198077097097": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
        "76561198010108867": string;
        "76561199163789308": string;
      };
    } | null;
    earring2: {
      name: string;
      level: number;
      l?: string;
      p?: string;
    } | null;
    belt: {
      name: string;
      level: number;
      l?: string;
      registry?: {
        "76561198041871962": string;
        "76561199016494300": string;
        "76561198841973606": string;
        "76561198004196810": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198024874460": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561198024917816": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
      };
      v?: string;
      p?: string;
    } | null;
    mainhand: {
      l?: string;
      name: string;
      level: number;
      acc?: number;
      p?: string;
      ps?: [string];
      ld?: string;
      gift?: number;
      registry?: {
        "76561198041871962": string;
        "76561199016494300": string;
        "76561198044418993": string;
        "76561198841973606": string;
        "76561198024874460": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198004196810": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561199172472357": string;
        "76561198024917816": string;
        "76561198007507208": string;
        "76561198163762805": string;
      };
      ach?: string;
    } | null;
    offhand: null | {
      acc?: number;
      ld?: string;
      name: string;
      level: number;
      l?: string;
      p?: string;
      stat_type?: string;
      registry?: {
        "76561198041871962": string;
        "76561199016494300": string;
        "76561198841973606": string;
        "76561198024874460": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198024170676"?: string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561198024917816": string;
        "76561198004196810": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
        "76561199172472357"?: string;
      };
      ach?: string;
      m?: string;
      gift?: number;
    };
    helmet: {
      name: string;
      level?: number;
      stat_type?: string;
      l?: string;
      acc?: number;
      ld?: string;
      gift?: number;
      p?: string;
    } | null;
    chest: {
      name: string;
      level?: number;
      stat_type?: string;
      ld?: string;
      l?: string;
      p?: string;
      registry?: {
        "76561198041871962": string;
        "76561198024917816": string;
        "76561198841973606": string;
        "76561198024874460": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198004196810": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561199016494300": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
        "76561199172472357"?: string;
        "76561198010108867"?: string;
        "76561199163789308"?: string;
      };
      charges?: number;
    } | null;
    pants: {
      name: string;
      level: number;
      stat_type?: string;
      acc?: number;
      ach?: string;
      l?: string;
      ps?: [string];
      p?: string;
      ld?: string;
      registry?: {
        "76561198041871962": string;
        "76561199016494300": string;
        "76561198841973606": string;
        "76561198024874460"?: string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198004196810": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561198024917816": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
        "76561199163789308"?: string;
        "76561199172472357"?: string;
        "76561198010108867"?: string;
      };
      v?: string;
    } | null;
    shoes: {
      stat_type?: string;
      name: string;
      level: number;
      l?: string;
      ld?: string;
      gift?: number;
      p?: string;
      ps?: [string];
    } | null;
    gloves: {
      level: number;
      stat_type?: string;
      name: string;
      l?: string;
      ld?: string;
      registry?: {
        "76561198041871962": string;
        "76561198024917816": string;
        "76561198044418993": string;
        "76561198841973606": string;
        "76561198024874460": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198004196810": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561199172472357": string;
        "76561199016494300": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198010108867": string;
        "76561199163789308": string;
      };
      p?: string;
      charges?: number;
      v?: string;
    } | null;
    amulet: {
      name: string;
      level?: number;
      l?: string;
      p?: string;
      registry?: {
        "76561198041871962": string;
        "76561198024917816": string;
        "76561198841973606": string;
        "76561198024874460": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198024170676": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561199172472357": string;
        "76561199016494300": string;
        "76561198004196810": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
        "76561198010108867": string;
      };
      v?: string;
    } | null;
    orb: {
      name: string;
      l?: string;
      level: number;
      acc?: number;
      ach?: string;
      p?: string;
      registry?: {
        "76561198129567684": string;
        "76561198041871962": string;
        "76561198074385093": string;
        "76561198169821251": string;
        "76561199197162548": string;
        "76561199131310181": string;
        "76561198024874460": string;
        "76561198017484541": string;
        "76561199172472357": string;
        "76561198333158770": string;
        "76561198333629156": string;
        "76561198072933236": string;
        "76561198010108867": string;
        "76561199163789308": string;
      };
      v?: string;
    } | null;
    elixir: null | {
      expires: string;
      name: string;
      ex: boolean;
    };
    cape: {
      name: string;
      level: number;
      acc?: number;
      ps?: [string];
      ach?: string;
      l?: string;
      p?: string;
      stat_type?: string;
      registry?: {
        "76561198041871962": string;
        "76561198024917816": string;
        "76561198841973606": string;
        "76561198004196810": string;
        "76561198138460241": string;
        "76561198009162916": string;
        "76561198024874460": string;
        "76561198017484541": string;
        "76561198088066244": string;
        "76561199016494300": string;
        "76561198007507208": string;
        "76561198163762805": string;
        "76561198044418993": string;
      };
    } | null;
    trade1?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
    };
    trade2?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
      gift?: number;
      stat_type?: string;
    };
    trade3?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
    };
    trade4?: null | {
      price: number;
      rid: string;
      name: string;
      gift?: number;
      level?: number;
      q?: number;
      b?: boolean;
    };
    trade5?: null | {
      price: number;
      level?: number;
      rid: string;
      name: string;
      q?: number;
      b?: boolean;
      gift?: number;
    };
    trade6?: null | {
      price: number;
      level?: number;
      rid: string;
      name: string;
      q?: number;
      b?: boolean;
    };
    trade7?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      b?: boolean;
      q?: number;
      p?: string;
    };
    trade8?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
      p?: string;
      acc?: number;
    };
    trade9?: null | {
      price: number;
      level?: number;
      rid: string;
      name: string;
      p?: string;
      stat_type?: string;
      q?: number;
    };
    trade10?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      p?: string;
      stat_type?: string;
    };
    trade11?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
    };
    trade12?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
      acc?: number;
    };
    trade13?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      p?: string;
      q?: number;
    };
    trade14?: null | {
      price: number;
      name: string;
      rid: string;
      level: number;
      p?: string;
      b?: boolean;
      q?: number;
      ld?: string;
    };
    trade15?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      stat_type?: string;
      q?: number;
      b?: boolean;
      acc?: number;
    };
    trade16?: null | {
      name: string;
      gift?: number;
      level?: number;
      price: number;
      rid: string;
      stat_type?: string;
      q?: number;
      b?: boolean;
    };
    trade17?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
    };
    trade18?: null | {
      price: number;
      level?: number;
      rid: string;
      name: string;
      q?: number;
      b?: boolean;
    };
    trade19?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      gf?: string;
      registry?: {
        "76561198024917816": string;
        "76561198841973606": string;
        "76561198072933236": string;
        "76561198057454931": string;
        "76561198003547995": string;
        "76561198035286268": string;
        "76561198007507208": string;
        "76561198043403489": string;
      };
      b?: boolean;
    };
    trade20?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
    };
    trade21?: null | {
      price: number;
      level?: number;
      rid: string;
      name: string;
      b?: boolean;
      q?: number;
    };
    trade22?: null | {
      b?: boolean;
      name: string;
      level?: number;
      price: number;
      q?: number;
      rid: string;
    };
    trade23?: null | {
      p?: string;
      price: number;
      name: string;
      rid: string;
      level?: number;
      b?: boolean;
      q?: number;
    };
    trade24?: null | {
      q?: number;
      price: number;
      name: string;
      rid: string;
      level?: number;
      b?: boolean;
    };
    trade25?: {
      name: string;
      level: number;
      price: number;
      gf?: string;
      registry?: {
        "76561198035286268": string;
        "76561198841973606": string;
        "76561198007507208": string;
        "76561198057454931": string;
        "76561198003547995": string;
        "76561198024917816": string;
        "76561198072933236": string;
        "76561198043403489": string;
      };
      rid: string;
    } | null;
    trade26?: {
      price: number;
      name: string;
      rid: string;
      level?: number;
      b?: boolean;
      q?: number;
    } | null;
    trade27?: {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
    } | null;
    trade28?: null | {
      price: number;
      name: string;
      rid: string;
      level?: number;
      q?: number;
      b?: boolean;
    };
    trade29?: {
      price: number;
      level: number;
      rid: string;
      name: string;
      b?: boolean;
      q?: number;
    } | null;
    trade30?: {
      price: number;
      level: number;
      rid: string;
      name: string;
    } | null;
  };
  ctype: string;
  owner: string;
  external: boolean;
  player: boolean;
  pzazz: number;
  last_ms: string;
  cxc: {};
  name: string;
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
  real_alpha: number;
  real_x: number;
  real_y: number;
  type: string;
  base: {
    h: number;
    v: number;
    vn: number;
  };
  awidth: number;
  aheight: number;
  interactive: boolean;
  drawn: boolean;
  resync: boolean;
  engaged_move?: number;
  angle: number;
  a_direction: number;
  direction: number;
  moving: boolean;
  standed?: {
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
    zy: number;
  };
  texture?: {};
  alpha: number;
  code?: boolean;
  target?: string | null;
  focus?: null | string;
  a_angle?: number;
  y_disp?: null;
  ms_walk?: string;
  last_stop?: string;
  last_walking?: number;
  abs?: boolean;
  from_x?: number;
  from_y?: number;
  going_x?: number;
  going_y?: number;
  ref_speed?: number;
  vx?: number;
  vy?: number;
  tp?: boolean;
  dead?: string;
  cursor?: string;
  on_rclick?: boolean;
  rtexture?: boolean;
  ms_clone?: string;
}
