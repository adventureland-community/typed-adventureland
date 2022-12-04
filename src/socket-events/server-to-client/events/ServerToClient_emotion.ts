import { EmotionKey } from "../../../G";

export type ServerToClient_emotion = {
  /** emotion name */
  name: EmotionKey;

  /** character name that did the emotion */
  player: string;
};
