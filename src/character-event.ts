import { ItemName, MapName } from "./generated";
import { ItemInfo } from "./items";

export interface LootedItem {
  name: ItemName;

  /** Name of the character the item is for */
  looter: string | null;
  level?: number;

  q?: number;

  /** Lost */
  lostandfound?: boolean;

  /** pvp_loot flag is set if the chest was a character drop at pvp */
  pvp_loot?: boolean;
}

export interface HitData {
  /** Can be positive or negative */
  source: string;

  /** Monster ID or Character ID */
  actor: string;

  /** Monster ID or Character ID */
  target: string;
  damage: number;

  damage_type?: string;

  /** Projectile ID */
  pid: string;

  /** Set if the projectile was healing */
  heal: number;
  crit: boolean;
  kill: boolean;
  evade: boolean;
  miss: boolean;

  projectile?: string;

  /** Outrunning the projectile */
  avoid: boolean;

  /** Whether the attack poisoned the target */
  poison: boolean;

  /** Whether the attack freezed the target */
  freeze: boolean;

  /** Whether the attack stunned the target */
  stun: boolean;

  /** Reflected damage */
  reflect: number;

  /** Returned damage */
  dreturn: number;

  /** Set when the attack triggered a condition/buff */
  trigger: string;

  /** Could be both a positive or negative condition for the target */
  condition: string;

  /** Set if this was a Rogue sneak attack */
  sneak: boolean;

  /** Array of ID's - If multiple opponents staying in the same spot got hit */
  stacked: Array<string>;

  /** If 4+ monsters target you, their attacks increase the mobbing intensity/damage */
  mobbing: number;

  /** true for the non-main targets of a stacked attack */
  unintentional: boolean;

  /** true for uncontrollable attacks like cleave and shadowstrike */
  aoe: boolean;
  // Not all properties are always set, if the value is false, [] or 0 - they are usually not set
}

export interface CharacterEvents {
  death: {
    /** True when your code executes with a dead character */
    past: boolean;
  };
  respawn: {
    // You respawned
  };
  cm: {
    /** Name of the character who sent the code message */
    name: string;

    /** Can be a string, array, any serializable object */
    message: unknown; // TODO: see codemessage.ts for a generic version where you can type T

    /** The date the message was sent */
    date: Date; // TODO: is this really a date or a string?
    /** Whether the message was sent locally */
    local: boolean;
  };
  gold_sent:
    | {
        /** Receiver Name */
        to: string;
        amount: number;
      }
    | {
        response: "gold_sent";
        place: "send";
        success: boolean;

        /** Receiver Name */
        name: string;
        gold: number;
      };
  gold_received:
    | {
        /** Sender Name */
        from: string;
        amount: number;
      }
    | {
        response: "gold_received";

        /** Sender Name */
        name: string;

        gold: number;
      };
  buy: {
    name: ItemName;

    /** Inventory slot */
    num: number;

    /** Quantity */
    q: number;

    /** Gold spent */
    cost: number;
  };
  sell: {
    success: boolean;
    response: string;
    place: string;

    item: ItemInfo;

    /** Gold earned */
    gold: number;
  };
  loot: {
    id: string;

    /** Character who opened the chest */
    opener: string;

    /** Character who opened the chest had +20% Gold */
    goldm: number;

    /** Set if the opener was far away from the chest */
    dry: boolean;

    /** Set if the chest was unopened for more than 30 minutes */
    stale: boolean;
    // If the dry or stale flags are set, goldm is 1

    /** You looted 87 gold */
    gold: number;

    /** The chest was looted by a party */
    party: boolean;

    /** Items found in chest */
    items: Array<LootedItem>;
  };
  target_hit: HitData;
  hit: HitData;
  level_up: {
    /** New level */
    level: number;
  };
  new_map: {
    /** The identifier used for accessing `G.maps` for exampple `G.maps.main` */
    name: MapName;

    /** Either the map name you are on, or the unique ID of an instance you are inside. */
    in: string;
  };
  mluck: {
    /** Character Name  */
    name: string;

    item: ItemInfo;

    /** Inventory slot */
    num: number;
  };
  // TODO: could perhaps share an interface for item send/receive
  item_received: {
    /** Character name that sent you the item */
    name: string;
    item: ItemName;
    q: number;
    /** The inventory #*/
    num: number;
  };
  item_sent: {
    /** Character name that sent you the item */
    name: string;
    item: ItemName;
    q: number;
    /** The inventory #*/
    num: number;
  };
  mail_sent: {
    to: string;
    // There's also a "mail_failed" with a reason
  };
  mail_failed: {
    // TODO: but what mail failed?
    reason: string;
  };
  craft: {
    name: ItemName;
    /** Inventory index */
    num: number;
  };
  dismantle: {
    name: ItemName;
  };
  sale: {
    /** character name */
    buyer: string;
    item: { name: "staff"; level: 9 }; // ItemInfo?
    slot: string; // TODO: trade slot type, e.g. trade8
  };
  exchange_buy: {
    // Token Exchange
    /** Inventory index */
    num: number;
  };
  /**
   * If you target 4+ monsters, they start dealing increased damage
   * This behaviour is called "mobbing"
   */
  mobbing: {
    /** The intensity increases with each hit */
    intensity: number;
  };
  /**
   * If you place your characters on top of each other
   * Monsters deal stacked/increasing damage to all the stacked characters
   * When this event is triggered, scatter your characters
   */
  stacked: {
    /**
     * A list of characternames that are stacked.
     */
    ids: string[]; //["CharacterName1","CharacterName2","..."],
  };
}

// export interface TypedEventEmitter<
//     Events,
//     VoidKeys extends KeysOfType<Events, void> = KeysOfType<Events, void>,
//     NotVoidKeys extends Exclude<keyof Events, VoidKeys> = Exclude<keyof Events, VoidKeys>,
// > {
//     on<K extends NotVoidKeys>(eventName: K, callback: (payload: Events[K]) => void): void;
//     on<K extends VoidKeys>(eventName: K, callback: () => void): void;

//     once<K extends NotVoidKeys>(eventName: K, callback: (payload: Events[K]) => void): void;
//     once<K extends VoidKeys>(eventName: K, callback: () => void): void;

//     emit<K extends NotVoidKeys>(eventName: K, payload: Events[K]): void;
//     emit<K extends VoidKeys>(eventName: K): void;
// }

// export type StrictEventEmitter<Events, EventEmitter> = TypedEventEmitter<Events> &
//     PickMembers<EventEmitter, Exclude<keyof EventEmitter, keyof TypedEventEmitter<Events>>>;

// export type StrictEventEmitterPicked<
//     Events,
//     EventEmitter,
//     Picked extends keyof TypedEventEmitter<Events>,
//     TEE extends TypedEventEmitter<Events> = TypedEventEmitter<Events>,
// > = PickMembers<TEE, Extract<keyof TEE, Picked>> &
//     PickMembers<EventEmitter, Exclude<keyof EventEmitter, keyof Pick<TEE, Picked>>>;
// // used like this
// const character: ICharacter & Pick<TypedEventEmitter<CharacterEvents>, "on">;

// https://www.npmjs.com/package/@telokys/ts-meta-types
