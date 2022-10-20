import { EntityBase } from "./base";

export interface CharacterEntity extends EntityBase {
  afk: string | boolean;
  age: number;
  aheight: number;
  awidth: number;
  code?: boolean;
  controller?: string;
  cscale: number;
  cskin: string | null;
  ctype: string;
  cursor?: string;
  cx: {
    chin?: string;
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
    makeup?: string;
    upper?: string;
  };
  cxc: {};
  dead?: string;
  direction: number;

  external: boolean;
  focus?: null | string;
  frequency: number;

  heal: number;
  height: number | null;
  hp: number;

  j: number;

  max_hp: number;
  max_mp: number;
  mp: number;
  ms_clone?: string;

  name: string;
  on_rclick?: boolean;
  owner: string;

  party?: string | null;
  pdps: number | null;
  player: boolean;

  pzazz: number;
  q: {
    compound?: {
      len: number;
      ms: number;
      num: number | string;
      nums: [];
      stale?: boolean;
    };
    exchange?: {
      id: string;
      len: number;
      ms: number;
      name: string;
      num: number;
      q: number;
      qs?: string;
      stale?: boolean;
    };
    upgrade?: {
      len: number;
      ms: number;
      num: number | string;
      stale?: boolean;
    };
  };
  range: number;

  ref_speed?: number;
  resistance: number;
  rip: boolean | number;
  rtexture?: boolean;
  // s: {
  //   blink?: {
  //     d: number;
  //     in: string;
  //     map: string;
  //     ms: number;
  //     x: number;
  //     y: number;
  //   };
  //   block?: {
  //     f: string;
  //     ms: number;
  //   };
  //   charging?: {
  //     ms: number;
  //   };
  //   citizen0aura?: {
  //     citizens: boolean;
  //     luck: number;
  //     ms: number;
  //     name: string;
  //     skin: string;
  //   };
  //   citizen4aura?: {
  //     citizens: boolean;
  //     gold: number;
  //     ms: number;
  //     name: string;
  //     skin: string;
  //   };
  //   coop?: {
  //     id: string;
  //     ms: number;
  //     p: number;
  //   };
  //   darkblessing?: {
  //     f: string;
  //     ms: number;
  //   };
  //   energized?: {
  //     ms: number;
  //   };
  //   halloween0?: {
  //     ms: number;
  //   };
  //   halloween1?: {
  //     ms: number;
  //   };
  //   halloween2?: {
  //     ms: number;
  //   };
  //   holidayspirit?: {
  //     ms: number;
  //   };
  //   hopsickness?: {
  //     duration: number;
  //     ms: number;
  //   };
  //   invincible?: {
  //     ms: number;
  //   };
  //   magiport?: {
  //     f: string;
  //     in: string;
  //     map: string;
  //     ms: number;
  //     x: number;
  //     y: number;
  //   };
  //   massproduction?: {
  //     ms: number;
  //   };
  //   massproductionpp?: {
  //     ms: number;
  //   };
  //   mlifesteal?: {
  //     ms: number;
  //   };
  //   mluck?: {
  //     f: string;
  //     ms: number;
  //     strong?: boolean;
  //   };
  //   monsterhunt?: {
  //     c: number;
  //     dl: boolean;
  //     id: string;
  //     ms: number;
  //     sn: string;
  //   };
  //   mshield?: {
  //     ms: number;
  //   };
  //   newcomersblessing?: {
  //     f: string;
  //     ms: number;
  //     undefined: number;
  //   };
  //   notverified?: {
  //     ms: number;
  //   };
  //   penalty_cd?: {
  //     ms: number;
  //   };
  //   poisoned?: {
  //     duration: number;
  //     ms: number;
  //   };
  //   rspeed?: {
  //     f: string;
  //     ms: number;
  //   };
  //   sugarrush?: {
  //     duration: number;
  //     ms: number;
  //   };
  //   typing?: {
  //     ms: number;
  //   };
  //   warcry?: {
  //     f: string;
  //     ms: number;
  //   };
  //   weakness?: {
  //     ms: number;
  //   };
  //   xshotted?: {
  //     duration: number;
  //     ms: number;
  //   };
  // };
  // TODO: ItemInstance / Info / Data
  slots: {
    amulet: {
      l?: string;
      level?: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      v?: string;
    } | null;
    belt: {
      l?: string;
      level: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      v?: string;
    } | null;
    cape: {
      acc?: number;
      ach?: string;
      l?: string;
      level: number;
      name: string;
      p?: string;
      ps?: [string];
      registry?: {
        [key: string]: string;
      };
      stat_type?: string;
    } | null;
    chest: {
      charges?: number;
      l?: string;
      ld?: string;
      level?: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      stat_type?: string;
    } | null;
    earring1: {
      l?: string;
      level: number;
      name: string;
      registry?: {
        [key: string]: string;
      };
    } | null;
    earring2: {
      l?: string;
      level: number;
      name: string;
      p?: string;
    } | null;
    elixir: null | {
      ex: boolean;
      expires: string;
      name: string;
    };
    gloves: {
      charges?: number;
      l?: string;
      ld?: string;
      level: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      stat_type?: string;
      v?: string;
    } | null;
    helmet: {
      acc?: number;
      gift?: number;
      l?: string;
      ld?: string;
      level?: number;
      name: string;
      p?: string;
      stat_type?: string;
    } | null;
    mainhand: {
      acc?: number;
      ach?: string;
      gift?: number;
      l?: string;
      ld?: string;
      level: number;
      name: string;
      p?: string;
      ps?: [string];
      registry?: {
        [key: string]: string;
      };
    } | null;
    offhand: null | {
      acc?: number;
      ach?: string;
      gift?: number;
      l?: string;
      ld?: string;
      level: number;
      m?: string;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      stat_type?: string;
    };
    orb: {
      acc?: number;
      ach?: string;
      l?: string;
      level: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      v?: string;
    } | null;
    pants: {
      acc?: number;
      ach?: string;
      l?: string;
      ld?: string;
      level: number;
      name: string;
      p?: string;
      ps?: [string];
      registry?: {
        [key: string]: string;
      };
      stat_type?: string;
      v?: string;
    } | null;
    ring1: {
      l?: string;
      level: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      v?: string;
    } | null;
    ring2: {
      l?: string;
      ld?: string;
      level: number;
      name: string;
      p?: string;
      registry?: {
        [key: string]: string;
      };
      v?: string;
    } | null;
    shoes: {
      gift?: number;
      l?: string;
      ld?: string;
      level: number;
      name: string;
      p?: string;
      ps?: [string];
      stat_type?: string;
    } | null;
    trade1?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade10?: null | {
      level?: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
      stat_type?: string;
    };
    trade11?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade12?: null | {
      acc?: number;
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade13?: null | {
      level?: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade14?: null | {
      b?: boolean;
      ld?: string;
      level: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade15?: null | {
      acc?: number;
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
      stat_type?: string;
    };
    trade16?: null | {
      b?: boolean;
      gift?: number;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
      stat_type?: string;
    };
    trade17?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade18?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade19?: null | {
      b?: boolean;
      gf?: string;
      level?: number;
      name: string;
      price: number;
      q?: number;
      registry?: {
        [key: string]: string;
      };
      rid: string;
    };
    trade2?: null | {
      b?: boolean;
      gift?: number;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
      stat_type?: string;
    };
    trade20?: null | {
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade21?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade22?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade23?: null | {
      b?: boolean;
      level?: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade24?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade25?: {
      gf?: string;
      level: number;
      name: string;
      price: number;
      registry?: {
        [key: string]: string;
      };
      rid: string;
    } | null;
    trade26?: {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    } | null;
    trade27?: {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    } | null;
    trade28?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade29?: {
      b?: boolean;
      level: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    } | null;
    trade3?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade30?: {
      level: number;
      name: string;
      price: number;
      rid: string;
    } | null;
    trade4?: null | {
      b?: boolean;
      gift?: number;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade5?: null | {
      b?: boolean;
      gift?: number;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade6?: null | {
      b?: boolean;
      level?: number;
      name: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade7?: null | {
      b?: boolean;
      level?: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade8?: null | {
      acc?: number;
      b?: boolean;
      level?: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
    };
    trade9?: null | {
      level?: number;
      name: string;
      p?: string;
      price: number;
      q?: number;
      rid: string;
      stat_type?: string;
    };
  };
  speed: number;
  stand?: string | boolean;
  standed?: {
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
    zy: number;
  };
  stype: string;
  target?: string | null;
  texture?: {};
  tp?: boolean;
  type: "character";

  width: number | null;
}
