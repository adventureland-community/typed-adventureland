import { CharacterEntityQInfos } from "../../../entities/character-entity";
import { ItemKey } from "../../../G";

export type ServerToClient_q_data = {
  num: number;
  p: {
    chance: number;
    level: number;
    name: ItemKey;
    nums: Array<number>;
    scroll: ItemKey;
    failure?: true;
    success?: true;
  };
  q: CharacterEntityQInfos;
};
