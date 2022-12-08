import { ClassKey, MapKey } from "../../../G";

export type ServerToClient_players = Array<{
  /** Are they AFK? */
  afk: number;

  /** How many days have passed since this character was created */
  age: number;

  /** What level are they */
  level: number;

  /** Character name */
  name: string;

  /** What map are they on */
  map: MapKey;

  /** What party are they in? */
  party: string;

  /** What type of character are they */
  type: ClassKey;
}>;
