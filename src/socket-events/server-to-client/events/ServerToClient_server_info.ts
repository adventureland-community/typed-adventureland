import { MapKey, MonsterKey } from "../../../G";

export type ServerToClient_server_info_event = {
  /** A date string of when the event will end */
  end?: string;
};

export type ServerToClient_server_info_live = {
  hp: number;
  live: true;
  map: MapKey;
  max_hp: number;
  target?: string;
  /** NOTE: Some event monsters don't have x and y (e.g.: Slenderman) */
  x?: number;
  y?: number;
};

export type ServerToClient_server_info_notlive = {
  live: false;
  /** When the monster will spawn next */
  spawn: string;
};

export type ServerToClient_server_info = Partial<
  Record<
    MonsterKey,
    | ServerToClient_server_info_live
    | ServerToClient_server_info_notlive
    | ServerToClient_server_info_event
  >
> & {
  egghunt?: boolean;
  halloween?: boolean;
  holidayseason?: boolean;
  lunarnewyear?: boolean;
  valentines?: boolean;
} & {
  goobrawl?: ServerToClient_server_info_event;
} & {
  abtesting?:
    | ServerToClient_server_info_event
    | {
        /** A date string of when sign-ups will stop for the event */
        signup_end: string;
        /** How many characters are on team A. TODO: Check that this is actually what it means */
        A: number;
        /** How many characters are on team B. TODO: Check that this is actually what it means */
        B: number;
        /** The event ID. TODO: Do we need this? */
        id: string;
      };
};
