import { EntityChannelInfos } from "../../../entities/base-entity";
import {
  CharacterEntityCXInfos,
  CharacterEntityQInfos,
  CharacterEntitySlotsInfos,
} from "../../../entities/character-entity";
import { StatusInfo } from "../../../entities/status-info";
import { ClassKey, MapKey, MonsterKey, NpcKey } from "../../../G";

export type ServerToClient_entities_players = {
  id: string;
  ctype: ClassKey;

  abs?: boolean;
  angle?: number;
  going_x?: number;
  going_y?: number;

  /** The 'pvp' NPC has an extra  */
  allow?: boolean;

  afk?: boolean | "code";
  age?: number;
  armor: number;
  attack?: number;
  c: EntityChannelInfos;
  cid: number;
  code?: boolean | string;
  controller?: string;
  cx: CharacterEntityCXInfos;
  focus?: string | null;
  frequency?: number;
  heal?: number;
  x: number;
  y: number;
  hp: number;
  level: number;
  max_hp: number;
  max_mp?: number;
  move_num?: number;
  moving?: boolean;
  mp?: number;
  /** NPCs have names set, normal players do not */
  name?: string;
  npc?: NpcKey;
  owner: string;
  party?: string;
  // TODO: Figure out what this is
  pdps?: number;
  q: CharacterEntityQInfos;
  range?: number;
  resistance?: number;
  rip?: boolean | number;
  s: StatusInfo;
  skin: string;
  slots?: CharacterEntitySlotsInfos;
  speed: number;
  stand?: boolean | "cstand" | "stand0";
  target?: string | null;
  tp?: boolean;
  xp?: number;
};

export type ServerToClient_entities_monsters = {
  id: string;
  type: MonsterKey;

  angle?: number;
  move_num?: number;
  moving?: boolean;
  x: number;
  y: number;

  armor?: number;
  attack?: number;
  // TODO: Figure out what this is
  cid: number;
  frequency?: number;
  going_x: number;
  going_y: number;
  mp?: number;
  speed?: number;
  resistance?: number;
  s: StatusInfo;
  /** The ID of the target */
  target?: string | null;

  abs?: false;
  hp?: number;
  level?: number;
  max_hp?: number;
  xp?: number;
};

export type ServerToClient_entities = {
  type: "all" | "xy";
  in: string;
  map: MapKey;

  monsters: ServerToClient_entities_monsters[];
  players: ServerToClient_entities_players[];
};
