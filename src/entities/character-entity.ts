import {
  InventoryExchangeItemInfo,
  InventoryUpgradeCompoundItemInfo,
  ItemInfo,
  TradeItemInfo,
} from "../items";
import { EntityBase } from "./base-entity";
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
  /** 
   * "dead" can have string values too, such as "map" / "vision"
   * Indicating the reason why the monster is as good as dead to you
   */
  dead?: "invis"| "transport" | "disconnect" | string;
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
  /** If true, the player is dead. */
  rip: boolean | number;
  rtexture?: boolean;

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
  /** If set, the merchant has a stand open */
  stand?: string | boolean;
  /** If set, the merchant has a stand open */
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
  stype: string; // full
  /** Set if the player is targeting something */
  target?: string | null;
  texture?: {};
  tp?: boolean;
  type: "character";

  width: number | null;
}
