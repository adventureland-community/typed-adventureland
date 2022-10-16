import { ItemName, MapName, NPCKey } from "./generated";
import { ItemInfo } from "./items";

/*
game.all(function(name,data){
	data.event_name=name;
	console.log(data);
});
*/

declare global {
  interface Game {
    on(
      event: "level_up",
      callback?: (data: {
        /** Character name */
        name: string;
        level: number;
      }) => void
    ): void;

    on(
      event: "event",
      callback?: (data: {
        /** snowman, pinkgoo, wabbit, franky, grinch */
        name: string; // TODO: strongly typed names?
        map?: MapName;
        x?: number;
        y?: number;
        // TODO: are there other data types for event?
      }) => void
    ): void;

    on(
      event: "trade",
      callback?: (data: {
        /** Character name */
        seller: string;
        /** Character name */
        buyer: string;
        item: ItemInfo;
        slot: string; //"trade8"; // TODO: trade slots
      }) => void
    ): void;

    on(event: "action", callback?: (data: ActionEvent) => void): void;

    on(event: "hit", callback?: (data: GameHitEvent) => void): void;

    on(
      event: "death",
      callback?: (data: {
        /**
         * Charactername or monster id
         */
        id: string;
      }) => void
    ): void;

    on(
      event: "shutdown",
      callback?: (data: {
        /**
         * Server shutdown in 20 seconds
         */
        seconds: number;
      }) => void
    ): void;

    on(event: "sell", callback?: (data: GameSellEvent) => void): void;

    on(event: "buy", callback?: (data: GameBuyEvent) => void): void;

    on(event: "sbuy", callback?: (data: GamePontyBuy) => void): void;

    on(event: "fbuy", callback?: (data: GameLostAndFoundBuy) => void): void;

    on(
      event: "item_sent",
      callback?: (data: {
        // Player to player item transfer
        sender: string;
        receiver: string;
        item: ItemInfo;
      }) => void
    ): void;

    on(
      event: "gold_sent",
      callback?: (data: {
        // Player to player item transfer
        sender: string;
        receiver: string;
        gold: number;
      }) => void
    ): void;

    on(
      event: "cx_sent",
      callback?: (data: {
        // cosmetics transfer
        sender: string;
        receiver: string;
        cx: string; // hat999 // TODO: cosmetics key?
      }) => void
    ): void;

    on(
      event: "mluck",
      callback?: (data: {
        /** Character Name  */
        name: string;

        item: ItemInfo;

        /** Inventory slot */
        num: number;
      }) => void
    ): void;

    on(
      event: "api_response",
      callback?: (
        data:
          | any
          | {
              type: string; // "servers_and_characters";
              servers: [];
              characters: [];
              // TODO: there is a lot of different types of api responses, depending on api call
            }
      ) => void
    ): void;

    /**
     * Sets up an event listener for the game. See http://adventure.land/docs/code/game/events for more info.
     * @param event The event name to listen to
     * @param callback The function that gets called when the event triggers
     */
    on(event: string, callback?: (data: any) => void): void;
    
    /**
     * Regisers to all events.
     * @param callback
     */
    all(callback?: (name: any, data: any) => void): void;
  }
}

export interface GameHitEvent {
  source: string;
  /** monster id or character name, perhaps NPC name? */
  actor: string;
  /** monster id or character name, perhaps NPC name?  */
  target: string;
  damage?: number;
  /** projectile id */
  pid?: string;
  heal?: number; // Set if the projectile was healing
  crit?: boolean;
  kill?: boolean;
  evade?: boolean;
  miss?: boolean;
  /**
   * Outrunning the projectile
   */
  avoid?: boolean;
  /**
   * Whether the attack poisoned the target
   */
  poison?: boolean;
  /**
   * Whether the attack freezed the target
   */
  freeze?: boolean;
  /**
   * Whether the attack stunned the target
   */
  stun?: boolean;
  /** Reflected damage */
  reflect?: number;
  /**
   * Returned damage
   */
  dreturn?: number;
  trigger?: string; // "sugarrush"; // Set when the attack triggered a condition/buff
  condition?: string; //"curse"; // Could be both a positive or negative condition for the target
  sneak?: boolean; // Set if this was a Rogue sneak attack
  stacked?: string[]; // Array of ID's - If multiple opponents staying in the same spot got hit
  mobbing?: number; // If 4+ monsters target you, their attacks increase the mobbing intensity/damage
  unintentional?: boolean; // true for the non-main targets of a stacked attack
  aoe?: boolean; // true for uncontrollable attacks like cleave and shadowstrike
  // Not all properties are always set, if the value is false, [] or 0 - they are usually not set
}

export interface ActionEvent {
  source: string;
  /** monster id or character name, perhaps NPC name? */
  actor: string;
  /** monster id or character name, perhaps NPC name?  */
  target: string;

  projectile?: string; // momentum, heal, curse
  /** Arrival in ms  */
  eta?: number;
  /** projectile id */
  pid?: string;

  ray?: string;
  instant?: boolean;
}

// export interface GameAttackActionEvent extends ActionEvent {
//   source: "attack";
//   damage: number;
//   projectile: "momentum";
//   /** Arrival in ms */
//   eta: number;
//   /** projectile id */
//   pid: string;
// }

// export interface GameHealActionEvent extends ActionEvent {
//   source: "heal";
//   heal: number;
//   projectile: "heal";
//   /** Arrival in ms */
//   eta: number;
//   /** projectile id */
//   pid: string;
// }

// export interface GameCurseActionEvent extends ActionEvent {
//   source: "curse";
//   projectile: "curse";
//   /** Arrival in ms */
//   eta: number;
//   /** projectile id */
//   pid: string;
// }

// export interface GameBurstActionEvent extends ActionEvent {
//   source: "burst";
//   ray: "burst";
//   instant: boolean;
// }

/**
 * Item bought from an NPC
 */
export interface GameBuyEvent {
  type: "+$";
  id: NPCKey;
  /** character name */
  name: string;
  item: ItemInfo; //{ name: "mpot1"; q: 1 };
  event: "buy";
}
export interface GameSellEvent {
  type: "-$";
  id: NPCKey;
  /** character name */
  name: string;
  item: ItemInfo; //{ name: "strbelt"; level: 0 };
  num: number;
  event: "sell";
}

/**
 * Item bought from Ponty aka secondhand
 */
export interface GamePontyBuy {
  /** Character who triggered the event */
  name: string;
  item: {
    name: ItemName;
    level: number;
    rid: string;
    q: number;
    cash?: boolean;
  };
}

/** Item bought from Lost and Found */
export interface GameLostAndFoundBuy {
  /** Character who triggered the event */
  name: string;
  item: {
    name: ItemName;
    level: number;
    rid: string;
    q: number;
  };
}
