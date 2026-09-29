import { TradeSlotType } from "./entity";
import { MapKey, StandKey } from "./G";
import { TradeItemInfo, ItemInfo } from "./items";
import { XOnlineCharacter, XServerInfos } from "./index";
import { BetterUXWrapper } from "./types/GTypes/utils";
import type { BankPackTypeItemsOnly } from "./bank";
import type { CharacterEntityCXInfos } from "./entities/character-entity";

export interface ServersAndCharactersCodeList {
  [key: string]: [string, number];
}

export interface ServersAndCharactersTutorial {
  step: number;
  completed: string[];
  finished: boolean;
  task: boolean;
  progress: number;
}

export type ServersAndCharactersApiResponse = {
  success: true;
  infs: [
    {
      type: "servers_and_characters";
      servers: XServerInfos[];
      characters: XOnlineCharacter[];
      tutorial: ServersAndCharactersTutorial;
      code_list: ServersAndCharactersCodeList;
      mail: number;
      rewards: any[];
    }
  ];
};

export type FriendsApiResponse = {
  type: "friends";
  chars: unknown[];
};

export type MerchantsApiResponse = {
  type: "merchants";
  chars: Array<{
    map: MapKey;
    /** Cosmetic extras (`cx` object from character info, not a string). */
    cx: CharacterEntityCXInfos;
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

/**
 * HTTP body from `parent.api_call("load_bank")` (account bank snapshot).
 * Only unlocked packs are present; each pack is up to 42 slots.
 */
export type LoadBankApiResponse = {
  success: true;
  gold: number;
  packs: Partial<Record<BankPackTypeItemsOnly, Array<ItemInfo | null>>>;
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

export type PullMessagesResponse = {
  type: "messages" | string;
  messages?: unknown[];
  cursored?: boolean;
  cursor?: string;
  more?: boolean;
};

/** Generic success/fail HTTP body for less-documented api methods. */
export type ApiSuccessFailResponse = {
  success?: boolean;
  failed?: boolean;
  reason?: string;
  [key: string]: unknown;
};

export type RawApiResponse =
  | ServersAndCharactersApiResponse
  | MerchantsApiResponse
  | FriendsApiResponse
  | PullMailResponse
  | PullMessagesResponse;
export type ApiResponse = BetterUXWrapper<RawApiResponse>;

/**
 * Known `parent.api_call` methods used from CODE / the game client.
 *
 * For methods that push `infs` (e.g. `pull_merchants`), the useful payload is also
 * emitted on `game.on("api_response", …)` as {@link ApiResponse}. `load_bank` returns
 * its payload only on the Promise (no `api_response` info record).
 */
export interface ApiCalls {
  /** Full HTTP body still includes `infs` before the client strips them for the event. */
  servers_and_characters: ServersAndCharactersApiResponse;
  /** Account bank snapshot — Promise body only (no `api_response` inf). */
  load_bank: LoadBankApiResponse;
  /** Useful merchant listing arrives on `api_response` (`type: "merchants"`). */
  pull_merchants: MerchantsApiResponse;
  pull_friends: FriendsApiResponse;
  pull_mail: PullMailResponse;
  pull_messages: PullMessagesResponse;
  read_mail: ApiSuccessFailResponse;
  delete_mail: ApiSuccessFailResponse;
  save_code: ApiSuccessFailResponse;
  load_code: ApiSuccessFailResponse;
  list_codes: ApiSuccessFailResponse;
  disconnect_character: ApiSuccessFailResponse;
}

export interface ApiCallRArgs<K extends keyof ApiCalls = keyof ApiCalls> {
  callback?: (data: ApiCalls[K]) => void;

  /** Enables promise mode for the call (live always returns a Promise). */
  promise?: boolean;

  /** Disables log on error */
  silent?: boolean;

  /** Code executed with "smart_eval" on success */
  success?: string;

  /** AJAX timeout in ms */
  timeout?: number;
}
