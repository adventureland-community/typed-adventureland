export type MainhandKey = "critmonger" | "firehazard" | "sniper";

export interface GMainhand {
  type: "mainhand";
  str?: number;
  title: string;
  critdamage?: number;
  achievement?: MainhandKey;
  consecutive_200p_range_last_hits?: number;
  attack?: number;
  source?: string;
}
