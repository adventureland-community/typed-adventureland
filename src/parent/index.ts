import { BankPacksInfos } from "../bank";
import { CharacterEntity, MonsterEntity, NpcEntity } from "../entity";
import { PartyCharacter } from "../functions";
import { EventKey, GDropList, GDropMaps, GDropMonsters, GDropNormalDrops, ItemKey, MapKey, MonsterKey, SkillKey } from "../G";
import { PositionReal } from "../position";
import { ServerIdentifier, ServerRegion } from "../server";
import { SocketWithEventsFunctions } from "../socket-events";
import { BetterUXWrapper } from "../types/GTypes/utils";

/** Tracktrix informations */
export interface Tracker {
  /** How many points you have for each monster for the given character */
  monsters: Partial<Record<MonsterKey, number>>;

  /** How many points behind this character is from your character that has the most points for this monster */
  monsters_diff: Partial<Record<MonsterKey, number>>;

  /** How many exchanges this character has done for the various given items */
  exchanges: Partial<
    Record<
      ItemKey | "lostearring0" | "lostearring1" | "lostearring2" | "lostearring3" | "lostearring4",
      number
    >
  >;

  /** Contains drop information */
  maps: GDropMaps;

  /** For the "open" items in maps, this table has a list of the drops that could occur */
  tables: GDropNormalDrops;

  /** Contains information about your characters with the max points */
  max: {
    monsters: Partial<Record<MonsterKey, [score: number, char: string]>>;
  };

  drops: GDropMonsters;

  // TODO: What's the difference between the global here, and the one in 'maps'?
  global: GDropList;

  // TODO: What's the difference between the global_static here, and the one in 'maps'?
  global_static: GDropList;
}

export interface XOnlineCharacter {
  x: number;
  y: number;
  map: MapKey;
  in: string;
  name: string;
  level: number;
  skin: string;
  server: string;
  secret: string;
  cx?: {
    head?: string;
    hair?: string;
  };
  online: number;
  type: string;
  id: string;
}

export interface XServerInfos {
  addr: string;
  key: string;
  name: string;
  players: number;
  port: number;
  region: string;
}

export type SMonsterEventLive = {
  /** Is the monster currently available? */
  live: true;

  /** NOTE: Some event monsters don't have x and y (e.g.: Slenderman) */
  x?: number;
  y?: number;
  map: MapKey;

  hp: number;
  max_hp: number;

  /** The character name that the monster is currently attacking */
  target?: string | null;
  end?: Date;
};

// TODO: don't think all events has live / spawn when not live
export type SMonsterEventNotLive = {
  /** Is the monster currently available? */
  live: false;

  /** At what date will the monster spawn? */
  spawn: string;
};

export type SMonsterEvent = BetterUXWrapper<SMonsterEventNotLive | SMonsterEventLive>;

export type SEventBooleanKeys =
  | "egghunt"
  | "halloween"
  | "holidayseason"
  | "lunarnewyear"
  | "valentines";

export type SPartialEventBoolean = Partial<Record<Extract<SEventBooleanKeys, EventKey>, boolean>>;

// TODO: should we just use MonsterKey?
export type SPartialEventMonsterEvent = Partial<
  Record<Exclude<EventKey, SEventBooleanKeys | "abtesting" | "goobrawl">, SMonsterEvent>
>;
export type SPartialHolidaySeasonMonsters = Partial<Record<"grinch" | "snowman", SMonsterEvent>>;
export type SPartialHalloweenMonsters = Partial<
  Record<"mrpumpkin" | "mrgreen" | "slenderman", SMonsterEvent>
>;

export type SPartialABTesting = Partial<
  Record<
    "abtesting",
    {
      /** A date string of when the event will end */
      end?: string;

      /** A date string of when sign-ups will stop for the event */
      signup_end: string;
      /** How many characters are on team A. TODO: Check that this is actually what it means */
      A: number;
      /** How many characters are on team B. TODO: Check that this is actually what it means */
      B: number;
      /** The event ID. TODO: Do we need this? */
      id: string;
    }
  >
>;

export type SPartialGooBrawlEventInfo = Partial<
  Record<
    "abtesting",
    {
      /** A date string of when the event will end */
      end?: string;
    }
  >
>;

export type SEventsInfos = {
  schedule: {
    time_offset: number;
    dailies: Array<number>;
    nightlies: Array<number>;
    night: boolean;
  };
} & SPartialEventBoolean &
  SPartialEventMonsterEvent &
  SPartialHolidaySeasonMonsters &
  SPartialHalloweenMonsters &
  SPartialABTesting &
  SPartialGooBrawlEventInfo;

export {}; // this is done to make parent a module
declare global {
  /** When you access parent via game code, this is what you have access to. */
  interface Window {
    $: JQueryStatic;
    clear_game_logs(): void;
    close_merchant(): void;
    //   distance(from: IPosition | PositionReal, to: IPosition | PositionReal): number;
    exchange(inventoryPosition: number): void;
    open_merchant(standInventoryPostion: number): void;
    start_runner(): void;
    stop_runner(): void;

    /** show a modal, TODO: investigate paramters */
    show_modal(arg1: any, arg2: any): any;

    sprite_image(name: string, args?: any): string;

    smart_eval(code: string): void;
    render_item(selector: string, args: any): string | undefined;
    render_computer(): string | undefined;

    open_chest(id: string | number): Promise<void>;
    d_text(message: string, entity: CharacterEntity, args?: { color: string }): void;

    X: {
      characters: Array<XOnlineCharacter>;
      servers: Array<XServerInfos>;
    };

    chests: {
      [id: string]: ChestInfo;
    };

    entities: { [id: string]: BetterUXWrapper<CharacterEntity | MonsterEntity | NpcEntity> };
    next_skill: { [T in SkillKey]?: Date };
    //   npcs: GMapsNPC[];

    /** @deprecated Prefer `get_party()` */
    party: Record<string, PartyCharacter>;

    /** Contains the name of every character in your party */
    party_list: string[];
    /** Contains a list of the last 40 ping response times */
    pings: number[];

    server_identifier: ServerIdentifier;
    server_region: ServerRegion;

    socket: Omit<SocketIO.Socket, keyof SocketWithEventsFunctions> & SocketWithEventsFunctions;

    tracker: Record<string, never> | Tracker;

    bank_packs: BankPacksInfos;

    /** PIXI element for the game map */
    map: PIXI.Container;

    /** Contains user drawings for cleanup */
    drawings: Array<PIXI.Graphics>;

    S: SEventsInfos;
  }
}

export type ChestInfo = PositionReal & {
  alpha: number;
  skin: "chest3" | string;
};
