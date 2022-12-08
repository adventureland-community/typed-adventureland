import { CharacterBankInfos } from "../../../character";
import { EntityChannelInfos } from "../../../entities/base-entity";
import {
  CharacterEntity,
  CharacterEntityCXInfos,
  CharacterEntityQInfos,
  CharacterEntitySlotsInfos,
} from "../../../entities/character-entity";
import { StatusInfo } from "../../../entities/status-info";
import { ClassKey, EmotionKey, MapKey } from "../../../G";
import { ItemInfo } from "../../../items";
import { ServerToClient_eval } from "./ServerToClient_eval";
import { ServerToClient_game_response } from "./ServerToClient_game_response";

export type ServerToClient_player = CharacterEntity & {
  hp: number;
  max_hp: number;
  mp: number;
  max_mp: number;
  attack: number;
  heal: number;
  fear: number;
  courage: number;
  mcourage: number;
  pcourage: number;
  frequency: number;
  speed: number;
  range: number;
  armor: number;
  resistance: number;
  level: number;
  rip: boolean;
  afk: boolean | string | "afk";
  s: StatusInfo;
  c: EntityChannelInfos;
  q: CharacterEntityQInfos;
  /** TODO: What is this? */
  abs?: boolean;
  age: number;
  angle?: number;
  blast: number;
  pdps: number;
  id: string;
  name?: string;
  x: number;
  y: number;
  going_x?: number;
  going_y?: number;
  moving?: boolean;
  stand?: boolean | "cstand" | "stand0";
  skin: string;
  slots: CharacterEntitySlotsInfos;
  ctype: ClassKey;
  owner: string;
  party?: string;
  explosion: number;
  firesistance: number;
  fzresistance: number;
  mp_reduction: number;
  pnresistance: number;
  stun: number;
  int: number;
  str: number;
  dex: number;
  vit: number;
  for: number;
  mp_cost: number;
  max_xp: number;
  goldm: number;
  xpm: number;
  xp: number;
  luckm: number;
  map: MapKey;
  in: string;
  /** The size of the character's inventory */
  isize: number;
  /** The number of empty inventory slots */
  esize: number;
  gold: number;
  cash: number;
  /** This number is the number of monsters currently targeting you */
  targets: number;
  target?: string;
  m: number;
  evasion: number;
  miss: number;
  move_num?: number;
  reflection: number;
  lifesteal: number;
  manasteal: number;
  rpiercing: number;
  apiercing: number;
  crit: number;
  critdamage: number;
  dreturn: number;
  emx?: {
    [T in EmotionKey]?: number;
  };
  tax: number;
  xrange: number;
  items: Array<ItemInfo | null>;
  cc: number;

  // (Probably) GUI Related things
  cid: number;
  controller?: string;
  cx: CharacterEntityCXInfos;

  ipass?: string;
  friends?: Array<string>;
  // TODO: Figure this out
  acx?: object;
  xcx?: Array<string>;
  /** Extra events (e.g. ["game_response", {response: "upgrade_success", level: 4, num: 8}]) */
  hitchhikers?: Array<[string, ServerToClient_game_response | ServerToClient_eval]>;
  /** Holds bank information when the character is inside the bank */
  user?: CharacterBankInfos;
  /** (GUI Related) Set if you move inventory items. Flag for reopening player's inventory. */
  reopen?: boolean;
};
