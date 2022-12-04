export type ServerToClient_game_log_string =
  | string
  | "Already partying"
  | "Can't respawn yet."
  | "Invitation expired"
  /** Sent when you chat with { code: true } */
  | "You can't chat this fast with Code yet. The interval is 15 seconds.";

export type ServerToClient_game_log =
  | ServerToClient_game_log_string
  | {
      color: string;
      message: ServerToClient_game_log_string;
    };
