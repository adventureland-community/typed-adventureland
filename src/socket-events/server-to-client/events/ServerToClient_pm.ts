export type ServerToClient_pm = {
  /* The name of the sending player */
  owner: string;

  /* The player the message is being sent to */
  to: string;

  /* The message of the sending player */
  message: string;

  /* The ID (name) Of the sending player */
  id: string;

  /* Denotes whether this message has been sent cross server */
  xserver?: string;
};
