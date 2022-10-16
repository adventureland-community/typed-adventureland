export type StandKey =
  | "stand0" // Merchant Stand
  | "stand1"; // Merchant Stand [Sell+Buy]

export interface GStand {
  name: string;
  g: number;
  explanation: string;
  stand: string;
  skin: string;
  type: string;
  ignore?: boolean;
}
