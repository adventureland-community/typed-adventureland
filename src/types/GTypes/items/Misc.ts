export type MiscKey =
  | "5bucks" // Old Paper Money
  | "coal" // Coal
  | "glitch" // A Glitch
  | "ledger" // Ledger
  | "mysterybox" // Mystery Box
  | "stick" // Stick
  | "storagebox" // Storage Box
  | "troll"; // T-Shirt Roll

export interface GMisc {
  s?: number;
  rare?: boolean;
  name: string;
  g: number;
  skin: string;
  e?: number;
  explanation: string;
  type: string;
  a?: boolean;
  compound?: {};
  ignore?: boolean;
  event?: boolean;
  grades?: [number, number, number, number];
  upgrade?: {};
}
