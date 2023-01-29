import { CodeMessageEvent } from "./codemessage";
import { ItemInfo } from "./items";
import { TypedEventEmitter } from "./TypedEventEmitter";
import { ItemKey } from "./types/GTypes/items";
import { MapKey } from "./types/GTypes/maps";
import { BetterUXWrapper } from "./types/GTypes/utils";

export type CharacterWithEventsFunctions = Pick<
  TypedEventEmitter<CharacterEvents>,
  "on" | "once" | "off"
> & {
  on<T>(event: "cm", callback?: (data: CodeMessageEvent<T>) => void): void;
  once<T>(event: "cm", callback?: (data: CodeMessageEvent<T>) => void): void;
  off<T>(event: "cm", callback?: (data: CodeMessageEvent<T>) => void): void;

  all(callback?: (name: any, data: any) => void): void;
};

export interface LootEvent {
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
}

export interface SellEvent {
  success: boolean;
  response: string;
  place: string;

  item: ItemInfo;

  /** Gold earned */
  gold: number;
}

export interface BuyEvent {
  name: ItemKey;

  /** Inventory slot */
  num: number;

  /** Quantity */
  q: number;

  /** Gold spent */
  cost: number;
}

export type GoldSentEvent =
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

export type GoldReceivedEvent =
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

export interface LootedItem {
  name: ItemKey;

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
  gold_sent: GoldSentEvent;
  gold_received: GoldReceivedEvent;
  buy: BuyEvent;
  sell: SellEvent;
  loot: LootEvent;
  target_hit: HitData;
  hit: HitData;
  level_up: {
    /** New level */
    level: number;
  };
  new_map: {
    /** The identifier used for accessing `G.maps` for exampple `G.maps.main` */
    name: MapKey;

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
  item_received: BetterUXWrapper<
    | {
        /** This is the one you should rely on. */
        response: "item_received";

        /** Item name */
        item: ItemKey;

        /** Character Name  */
        name: string;

        /** Quantity */
        q?: number;

        /** Inventory slot */
        num: number;
      }
    | {
        /** Item name */
        name: ItemKey;

        /** Character Name  */
        from: string;

        /** Quantity */
        q?: number;

        /** Inventory slot */
        num: number;
      }
  >;
  item_sent: {
    /** Character name that sent you the item */
    name: string;
    item: ItemKey;
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
    name: ItemKey;
    /** Inventory index */
    num: number;
  };
  dismantle: {
    name: ItemKey;
  };
  sale: {
    /** character name */
    buyer: string;
    item: ItemInfo; // { name: "staff"; level: 9 };
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
