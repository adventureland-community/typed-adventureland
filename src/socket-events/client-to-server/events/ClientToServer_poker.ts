/**
 * Tavern Hold'em and related table actions.
 * Public table updates also arrive as `"poker"` game events.
 */
export type ClientToServer_poker = {
  event: "info" | "join" | "leave" | "act" | "sit_out" | "sit_in" | string;
  gold?: number;
  seat?: number;
  action?: "fold" | "check" | "call" | "bet" | "raise" | "allin" | string;
  amount?: number;
  request_id?: string;
};
