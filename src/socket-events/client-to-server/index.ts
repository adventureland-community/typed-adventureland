import type {
  ClientToServer_attack,
  ClientToServer_auth,
  ClientToServer_bank,
  ClientToServer_bet,
  ClientToServer_booster,
  ClientToServer_buy,
  ClientToServer_cm,
  ClientToServer_compound,
  ClientToServer_craft,
  ClientToServer_destroy,
  ClientToServer_dismantle,
  ClientToServer_donate,
  ClientToServer_emotion,
  ClientToServer_enter,
  ClientToServer_equip,
  ClientToServer_eval,
  ClientToServer_exchange,
  ClientToServer_exchange_buy,
  ClientToServer_friend,
  ClientToServer_heal,
  ClientToServer_imove,
  ClientToServer_interaction,
  ClientToServer_join,
  ClientToServer_join_giveaway,
  ClientToServer_leave,
  ClientToServer_loaded,
  ClientToServer_lostandfound,
  ClientToServer_magiport,
  ClientToServer_mail,
  ClientToServer_mail_take_item,
  ClientToServer_merchant,
  ClientToServer_monsterhunt,
  ClientToServer_move,
  ClientToServer_open_chest,
  ClientToServer_party,
  ClientToServer_ping_trig,
  ClientToServer_players,
  ClientToServer_property,
  ClientToServer_respawn,
  ClientToServer_say,
  ClientToServer_sbuy,
  ClientToServer_secondhands,
  ClientToServer_sell,
  ClientToServer_send,
  ClientToServer_send_updates,
  ClientToServer_skill,
  ClientToServer_split,
  ClientToServer_stop,
  ClientToServer_town,
  ClientToServer_tracker,
  ClientToServer_trade_buy,
  ClientToServer_trade_history,
  ClientToServer_trade_sell,
  ClientToServer_trade_wishlist,
  ClientToServer_transport,
  ClientToServer_unequip,
  ClientToServer_upgrade,
  ClientToServer_use,
} from "./events";

export * from "./events";

export interface ClientToServerEvents {
  attack: ClientToServer_attack;
  auth: ClientToServer_auth;
  bank: ClientToServer_bank;
  bet: ClientToServer_bet;
  booster: ClientToServer_booster;
  buy: ClientToServer_buy;
  cm: ClientToServer_cm;
  compound: ClientToServer_compound;
  craft: ClientToServer_craft;
  destroy: ClientToServer_destroy;
  dismantle: ClientToServer_dismantle;
  donate: ClientToServer_donate;
  emotion: ClientToServer_emotion;
  enter: ClientToServer_enter;
  equip: ClientToServer_equip;
  eval: ClientToServer_eval;
  exchange_buy: ClientToServer_exchange_buy;
  exchange: ClientToServer_exchange;
  friend: ClientToServer_friend;
  heal: ClientToServer_heal;
  imove: ClientToServer_imove;
  interaction: ClientToServer_interaction;
  join_giveaway: ClientToServer_join_giveaway;
  join: ClientToServer_join;
  leave: ClientToServer_leave;
  loaded: ClientToServer_loaded;
  lostandfound: ClientToServer_lostandfound;
  magiport: ClientToServer_magiport;
  mail_take_item: ClientToServer_mail_take_item;
  mail: ClientToServer_mail;
  merchant: ClientToServer_merchant;
  monsterhunt: ClientToServer_monsterhunt;
  move: ClientToServer_move;
  open_chest: ClientToServer_open_chest;
  party: ClientToServer_party;
  ping_trig: ClientToServer_ping_trig;
  players: ClientToServer_players;
  property: ClientToServer_property;
  respawn: ClientToServer_respawn;
  say: ClientToServer_say;
  sbuy: ClientToServer_sbuy;
  secondhands: ClientToServer_secondhands;
  sell: ClientToServer_sell;
  send_updates: ClientToServer_send_updates;
  send: ClientToServer_send;
  skill: ClientToServer_skill;
  split: ClientToServer_split;
  stop: ClientToServer_stop;
  town: ClientToServer_town;
  tracker: ClientToServer_tracker;
  trade_buy: ClientToServer_trade_buy;
  trade_history: ClientToServer_trade_history;
  trade_sell: ClientToServer_trade_sell;
  trade_wishlist: ClientToServer_trade_wishlist;
  transport: ClientToServer_transport;
  unequip: ClientToServer_unequip;
  upgrade: ClientToServer_upgrade;
  use: ClientToServer_use;
}
