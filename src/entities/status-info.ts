import { ConditionKey } from "../types/GTypes/conditions";
import { MapKey } from "../types/GTypes/maps";
import { MonsterKey } from "../types/GTypes/monsters";

export type StatusInfoBase = {
  /** How many ms left before this condition expires */
  ms: number;
};

export type MonsterHuntStatusInfo = {
  /** Number of monsters remaining to kill */
  c: number;
  dl: boolean;
  /** The monster to be killed */
  id: MonsterKey;
  ms: number;
  /** The server where the monster hunt is valid */
  sn: string;
}

export type StatusInfo = {
  [T in ConditionKey]?: StatusInfoBase;
} & {
  blink?: {
    d: number;
    in: string;
    map: string;
    ms: number;
    x: number;
    y: number;
  };
  block?: {
    f: string;
    ms: number;
  };
  burned?: {
    duration: number;
    /** The character ID that caused the burn */
    f: string;
    fid: string;
    /** (Unconfirmed) the damage that the burn will do per second. */
    intensity: number;
    last?: string;
    ms: number;
  };
  cursed?: {
    duration: number;
    ms: number;
  };
  marked?: {
    duration: number;
    ms: number;
  };
  stack?: {
    ms: number;
    s: number;
  };
  citizen0aura: {
    citizens: boolean;
    luck: number;
    ms: number;
    name: string;
    skin: string;
  };
  citizen4aura: {
    citizens: boolean;
    gold: number;
    ms: number;
    name: string;
    skin: string;
  };
  coop?: {
    id: string;
    ms: number;
    p: number;
  };
  darkblessing?: {
    f: string;
    ms: number;
  };
  hopsickness?: {
    duration: number;
    ms: number;
  };
  magiport?: {
    f: string;
    in: MapKey | string;
    map: MapKey;
    ms: number;
    x: number;
    y: number;
  };
  mluck?: {
    f: string;
    ms: number;
    strong?: boolean;
  };
  monsterhunt?: MonsterHuntStatusInfo;
  newcomersblessing?: {
    f: string;
    ms: number;
    undefined: number;
  };
  poisoned?: {
    duration: number;
    ms: number;
  };
  rspeed?: {
    f: string;
    ms: number;
  };
  sugarrush?: {
    duration: number;
    ms: number;
  };
  warcry?: {
    f: string;
    ms: number;
  };
  xshotted?: {
    duration: number;
    ms: number;
  };
};
