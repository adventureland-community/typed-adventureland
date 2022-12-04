import { MapKey } from "../../../G";

/** Character used 'blink' */
export type ServerToClient_disappear_blink = {
  /** Blink animation will be used */
  effect: "blink";
  /** Character name */
  id: string;
  reason: "transport";
  /** [x, y, orientation (up/down/left/right)] */
  s?: [x: number, y: number, orientation: number];
  to?: MapKey;
};

/** Character (rogue) went invisible */
export type ServerToClient_disappear_invis = {
  /** Character name */
  id: string;
  invis: true;
  reason: "invis";
};

/** Character disconnected */
export type ServerToClient_disappear_disconnect = {
  /** Character name */
  id: string;
  reason: "disconnect";
};

/** Character used 'magiport' */
export type ServerToClient_disappear_magiport = {
  effect: "magiport";
  /** Character name */
  id: string;
  reason: "transport";
  s?: [number, number];
  to?: MapKey;
};

/** Character went through a door */
export type ServerToClient_disappear_door = {
  effect?: undefined;
  /** Character name */
  id: string;
  reason: "transport";
  s?: number;
  to?: MapKey | string;
};

/** Character used a 'town' teleport */
export type ServerToClient_disappear_town = {
  // TODO: Confirm that characters wearing a stealth cape using 'town' still have 'effect:1'
  effect: 1;
  /** Character name */
  id: string;
  reason: "transport";
  s?: number;
  to?: MapKey;
};

export type ServerToClient_disappear =
  | ServerToClient_disappear_blink
  | ServerToClient_disappear_invis
  | ServerToClient_disappear_disconnect
  | ServerToClient_disappear_magiport
  | ServerToClient_disappear_door
  | ServerToClient_disappear_town;
