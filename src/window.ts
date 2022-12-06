import { BankPackType } from "./bank";
import { CharacterEntity } from "./entities/character-entity";
import { MonsterEntity } from "./entities/monster-entity";
import { NpcEntity } from "./entities/npc-entity";
import { PartyCharacter } from "./functions";
import { MapKey } from "./G";
import { PositionReal } from "./position";
import { SocketWithEventsFunctions } from "./socket-events";
import { SkillKey } from "./types/GTypes/skills";
import { BetterUXWrapper } from "./types/GTypes/utils";

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

export type SMonsterEvent = {
  /** Is the monster currently available? */
  live: boolean;

  /** At what date will the monster spawn? */
  spawn: string;
};

export type SEventsInfos = {
  schedule: {
    time_offset: number;
    dailies: Array<number>;
    nightlies: Array<number>;
    night: boolean;
  };
} & {
  // Christmas
  holidayseason?: boolean;
  grinch?: SMonsterEvent;
  snowman?: SMonsterEvent;
};

export type BankPacksInfos = Record<
  Exclude<BankPackType, "gold" | "character">,
  [map: MapKey, goldPrice: number, shellPrice: number]
>;

export {}; // this is done to make window a module
declare global {
  interface Window {
    //   $: JQueryStatic;
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
    //   is_disabled(entity: Entity): boolean;

    X: {
      characters: Array<XOnlineCharacter>;
      servers: Array<XServerInfos>;
    };

    //   character: CharacterEntity;
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
    //   server_identifier: ServerIdentifier;
    //   server_region: ServerRegion;
    socket: /* SocketIO.Socket &*/ SocketWithEventsFunctions;

    bank_packs: BankPacksInfos;

    S: SEventsInfos;

    //   S: {
    //     [T in EventName]?: IPosition & {
    //       map: string;
    //       live: boolean;
    //       hp: number;
    //       max_hp: number;
    //       /** The character name that the monster is currently attacking */
    //       target?: string;
    //       x?:number;
    //       y?:number
    //     };
    //   } & {
    //     valentines?: boolean;
    //   };
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
