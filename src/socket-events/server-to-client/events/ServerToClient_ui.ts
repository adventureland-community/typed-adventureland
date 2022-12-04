import { TradeSlotType } from "../../../entity";
import { ItemKey } from "../../../G";
import { ItemInfo } from "../../../items";

export type ServerToClient_ui_buy_sell = {
  type: "-$" | "+$";
  id: string | "basics" | "scrolls";
  name: string;
  item: {
    name: ItemKey;
    q: number;
  };
  num?: string;
};

export type ServerToClient_ui_trade = {
  type: "+$$";
  seller: string;
  buyer: string;
  item: ItemInfo & { price: number };
  slot: TradeSlotType;
  num: number;
  snum: number;
};

export type ServerToClient_ui_fishing_mining = {
  type:
    | "fishing_fail"
    | "fishing_none"
    | "fishing_start"
    | "mining_fail"
    | "mining_none"
    | "mining_start";
  name?: string;
  direction?: number;
};

export type ServerToClient_ui_massproduction = {
  type: "massproduction";
  name: string;
};

export type ServerToClient_ui_mluck = {
  type: "mluck";
  from: string;
  to: string;
};

export type ServerToClient_ui_rspeed = {
  type: "rspeed";
  from: string;
  to: string;
};

export type ServerToClient_ui_aoe = {
  type: "stomp" | "agitate" | "scare";
  name: string;
  ids: Array<string>;
};

export type ServerToClient_ui =
  | ServerToClient_ui_buy_sell
  | ServerToClient_ui_trade
  | ServerToClient_ui_fishing_mining
  | ServerToClient_ui_massproduction
  | ServerToClient_ui_mluck
  | ServerToClient_ui_aoe
  | ServerToClient_ui_rspeed;
