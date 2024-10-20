import { TradeSlotType } from "./entity";
import { MapKey, StandKey } from "./G";
import { TradeItemInfo } from "./items";
import { BetterUXWrapper } from "./types/GTypes/utils";

export type ServersAndCharactersApiResponse = {
  type: "servers_and_characters";
  servers: [];
  characters: [];
};

export type FriendsApiResponse = {
  type: "friends";
  chars: unknown[];
};

export type MerchantsApiResponse = {
  type: "merchants";
  chars: Array<{
    map: MapKey;
    cx: string; // cosmetics
    skin: string;
    slots: Partial<Record<TradeSlotType, TradeItemInfo>>;
    name: string;
    level: number;
    afk: boolean | string;
    server: string;
    stand: StandKey | "cstand" /** computer stand */;
    y: number;
    x: number;
  }>;
};

export interface Mail {
  /** Stringified item */
  item?: string;

  /** Mail sender */
  fro: string;

  /** Mail receiver */
  to: string;

  /** If there is an item, was it retrieved? */
  taken?: boolean;

  /** Body of the mail */
  message: string;

  /** Subject of the mail */
  subject: string;

  /** Id of the mail */
  id: string;

  /** Date the email was sent at */
  sent: string;
}

export type PullMailResponse = Array<{
  cursor: string;
  mail: Array<Mail>;
  type: "mail";
  cursored: boolean;
  more: boolean;
}>;

export type RawApiResponse = ServersAndCharactersApiResponse | MerchantsApiResponse;
export type ApiResponse = BetterUXWrapper<RawApiResponse>;

export interface ApiCalls {
  pull_merchants: MerchantsApiResponse;
  pull_friends: FriendsApiResponse;
  pull_mail: PullMailResponse;
}

export interface ApiCallRArgs<K extends keyof ApiCalls = keyof ApiCalls> {
  callback?: (data: [ApiCalls[K]]) => void;

  /** Enables promise mode for the call */
  promise?: boolean;

  /** Disables log on error */
  silent?: boolean;

  /** Code executed with "smart_eval" on success */
  success?: string;
}
