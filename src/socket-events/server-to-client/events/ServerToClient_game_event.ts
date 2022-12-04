import { MapKey, MonsterKey } from "../../../G";

export type ServerToClient_game_event = {
  name: MonsterKey;
  map: MapKey;
  x: number;
  y: number;
};
