export type ServerToClient_chat_log = {
  /* The name of the sending player */
  owner: string;

  /* The message of the sending player */
  message: string;

  /* The ID (name) Of the sending player */
  id: string;

  /* Player */
  p?: boolean;
};
