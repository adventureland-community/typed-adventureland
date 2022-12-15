import { BankPacksInfos } from "./bank";
import { CharacterEntity } from "./entities/character-entity";
import { MonsterEntity } from "./entities/monster-entity";
import { NpcEntity } from "./entities/npc-entity";
import { PartyCharacter } from "./functions";
import {
  MapKey,
  GDropList,
  GDropMaps,
  GDropMonsters,
  GDropNormalDrops,
  ItemKey,
  MonsterKey,
  EventKey,
} from "./G";
import { IPosition, PositionReal } from "./position";
import { ServerIdentifier, ServerRegion } from "./server";
import { SocketWithEventsFunctions } from "./socket-events";
import { SkillKey } from "./types/GTypes/skills";
import { BetterUXWrapper } from "./types/GTypes/utils";

export * from "./socket-events";

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

export type SMonsterEvent = IPosition & {
  /** Is the monster currently available? */
  live: boolean;

  /** At what date will the monster spawn? */
  spawn: string;

  hp: number;
  max_hp: number;
  /** The character name that the monster is currently attacking */
  target?: string;
};

export type SEventsInfos = {
  schedule: {
    time_offset: number;
    dailies: Array<number>;
    nightlies: Array<number>;
    night: boolean;
  };
} & Partial<Record<EventKey, SMonsterEvent>> & {
    // Christmas
    holidayseason?: boolean; // unsure if this will override the above general purpose EventKey
  } & Partial<Record<"grinch" | "snowman", SMonsterEvent>> & {
    valentines?: boolean;
  } & {
    // halloween
    halloween?: boolean; // unsure if this will override the above general purpose EventKey
  } & Partial<Record<"mrpumpkin" | "mrgreen", SMonsterEvent>>;

export {}; // this is done to make window a module
declare global {
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

  /* eslint-disable no-var, vars-on-top */
  var handle_command: undefined | ((command: string, args: string) => void);
  var on_cm: undefined | ((from: string, data: any) => void);
  // var on_map_click: undefined | ((x: number, y: number) => boolean);
  var on_party_invite: undefined | ((from: string) => void);
  var on_party_request: undefined | ((from: string) => void);
  /* eslint-enable no-var, vars-on-top */
}

export type ChestInfo = PositionReal & {
  alpha: number;
  skin: "chest3" | string;
};
