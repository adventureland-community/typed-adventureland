export type ClientToServer_auth = {
  // TODO: Find out where to get this auth string
  auth: string;

  /** NOTE: This is not the name of the player. It's a long number, encoded as a string. */
  user: string;

  /** NOTE: This is not the name of the character. It's a long number, encoded as a string. */
  character: string;
  passphrase: string;

  height: number;
  width: number;
  scale: number;

  no_html: "" | "1";
  no_graphics: "" | "True";

  code_slot?: number;
};
