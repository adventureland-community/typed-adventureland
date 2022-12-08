import { CharacterEntityCXInfos } from "../../../entities/character-entity";
import { ClassKey, MapKey } from "../../../G";

export type ServerToClient_party_update = {
  list: string[];
  message?: string;
  party: {
    [T in string]: {
      gold: number;
      in: string;
      // TODO: What is this?
      l: number;
      level: number;
      luck: number;
      map: MapKey;
      share: number;
      pdps: number;
      skin: string;
      type: ClassKey;
      x: number;
      xp: number;
      y: number;
      cx?: CharacterEntityCXInfos;
    };
  };
};
