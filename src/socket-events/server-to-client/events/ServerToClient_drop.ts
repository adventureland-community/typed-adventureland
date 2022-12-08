import { MapKey } from "../../../G";

export type ServerToClient_drop = {
  chest: string;
  id: string;
  items: number;
  map: MapKey;
  party: string;
  x: number;
  y: number;
};
