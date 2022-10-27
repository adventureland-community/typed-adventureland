import { NpcKey, NpcName, NpcRole } from "../types/GTypes/npcs";
import { EntityBase } from "./base-entity";

export interface NpcEntity extends EntityBase {
  aheight: number;
  allow?: boolean;
  aspeed?: string;
  atype?: string;
  aura?: {
    gold?: number;
    luck?: number;
  };
  awidth: number;
  buttonMode: boolean;
  /** true for moving npcs */
  citizen?: boolean;
  class?: string;
  color?: string;
  cscale: number;
  cskin: string | null;
  ctype: string;
  cx: {
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
  };
  cxc?: {};
  delay?: number;
  direction: number;

  external: boolean;
  focus?: null | string;
  frame?: number;
  height: number | null;
  hitArea?: {};
  hp: number;

  interaction?: Array<string>;
  items?: Array<string | null>;
  j?: number;

  max_hp: number;
  modal?: string;
  mp: number;
  ms_anim?: string;
  name: NpcName;

  npc: NpcKey;
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
  old_role?: string;
  old_side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  owner: string;
  pack?: string;

  pdps: number;
  places?: {
    cyberland: number;
    d_e: number;
    desertland: number;
    main: number;
    test: number;
    winterland: number;
  };
  player: boolean;
  q: {};
  quest?: string;
  range: number;

  ref_speed?: number;
  /** If true, the npc is dead. */
  rip?: boolean;
  role: NpcRole;
  rtexture?: boolean;
  // s: {
  //   coop?: {
  //     id: string;
  //     ms: number;
  //     p: number;
  //   };
  //   newcomersblessing?: {
  //     f: string;
  //     ms: number;
  //     undefined: number;
  //   };
  // };
  says?: string | Array<string>;
  seek?: string;
  side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  speed: number;
  stand?: string;
  stype: string;
  /** Set if the npc is targeting something */
  target?: string;
  texture?: {};
  token?: string;
  type: "npc";

  width: number | null;
}
