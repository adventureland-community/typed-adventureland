export type TitleKey =
  | "abtesting"
  | "critmonger"
  | "fast"
  | "festive"
  | "firehazard"
  | "glitched"
  | "gooped"
  | "legacy"
  | "lucky"
  | "shiny"
  | "sniper"
  | "stomped"
  | "superfast";

export interface GTitle {
  type: string;
  for?: number;
  achievement?: TitleKey;
  title: string;
  critdamage?: number;
  luck?: number;
  str?: number;
  source?: string;
  random_stat?: number;
  manual?: boolean;
  misc?: boolean;
  frequency?: number;
  pnresistance?: number;
  improve?: boolean;
  consecutive_200p_range_last_hits?: number;
  attack?: number;
}
