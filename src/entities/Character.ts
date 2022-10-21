import {
  InventoryExchangeItemInfo,
  InventoryUpgradeCompoundItemInfo,
  ItemInfo,
  TradeItemInfo,
} from "../items";
import { EntityBase } from "./base";
import { SlotType, TradeSlotType } from "./slots";

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
  /**
   * contains equipped gear, as well as items for trade.
   */
  slots: {
    [T in SlotType]: ItemInfo | InventoryExchangeItemInfo | InventoryUpgradeCompoundItemInfo | null;
  } & {
    [T in TradeSlotType]?: TradeItemInfo | null;
    // [T in TradeSlotType]?: ItemInfo & {
    //   /** Number of minutes remaining for giveaway items */
    //   giveaway?: number;
    //   /** List of character IDs that are in the giveaway */
    //   list: string[];
    //   price: number;
    //   rid: string;
    // } | null;
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
