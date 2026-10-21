/**
 * Duel socket payload (`send_duel_challenge` / `accept_duel_challenge` / `enter_duel`).
 * - `challenge` / `accept`: `name` is the other character
 * - `enter`: `id` is the pending duel id (party members)
 */
export type ClientToServer_duel = {
  event: "challenge" | "accept" | "enter" | string;
  name?: string;
  id?: string;
  request_id?: string;
};
