import { TradeSlotType } from "./entity";
import { MapKey, StandKey } from "./G";
import { TradeItemInfo } from "./items";
import { BetterUXWrapper } from "./types/GTypes/utils";

export type ServersAndCharactersApiResponse = {
  type: "servers_and_characters";
  servers: [];
  characters: [];
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
export type RawApiResponse = ServersAndCharactersApiResponse | MerchantsApiResponse;
export type ApiResponse = BetterUXWrapper<RawApiResponse>;
