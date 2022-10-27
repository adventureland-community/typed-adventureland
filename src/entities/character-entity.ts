import {
  InventoryExchangeItemInfo,
  InventoryUpgradeCompoundItemInfo,
  ItemInfo,
  TradeItemInfo,
} from "../items";
import { ClassKey } from "../types/GTypes/classes";
import { ItemKey, StandKey } from "../types/GTypes/items";
import { EntityBase } from "./base-entity";
import { SlotType, TradeSlotType } from "./slots";

export interface CharacterEntity extends EntityBase {
  afk: string | boolean;
  /** Age in days */
  age: number;
  aheight: number;
  awidth: number;
  code?: boolean;
  /** The character name that controls the character, assuming it being run in an iframe. */
  controller?: string;
  cscale: number;
  cskin: string | null;
  ctype: ClassKey;
  cursor?: string;
  /** Cosmetics */
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
  /** Secondary, manual focus/target */
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
  /**  Owner ID - Available If a character isn't private, "" otherwise */
  owner: string;

  /** The character name of the party leader */
  party?: string | null;
  pdps: number | null;
  player: boolean;

  pzazz: number;
  /** Progressed actions */
  q: {
    compound?: {
      len: number;
      ms: number;
      /** inventory position being compounded */
      num: number | string;
      nums: [];
      stale?: boolean;
    };
    exchange?: {
      id: string;
      len: number;
      ms: number;
      name: ItemKey; // TODO: should only be exchangeable items here.
      /** inventory position */
      num: number;
      q: number;
      qs?: string;
      stale?: boolean;
    };
    upgrade?: {
      len: number;
      ms: number;
      /** inventory position being upgraded */
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
  stand?: StandKey | string | boolean;
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
  /** 
   * ID of the monster you are targeting
   * or the name of the character you are targeting
   */
  target?: string | null;
  texture?: {};
  tp?: boolean;
  type: "character";

  width: number | null;
}
