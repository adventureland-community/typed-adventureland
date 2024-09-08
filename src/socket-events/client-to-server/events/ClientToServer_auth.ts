export type ClientToServer_auth = {
  /** User auth token (`parent.user_auth`) */
  auth: string;
  /** User ID (`parent.user_id`)*/
  user: string;
  /** Character ID (`parent.X.characters[].id`) */
  character: string;
  /** Only used for test servers */
  passphrase?: string;
  /** Viewport height (NOTE: No longer used) */
  height?: number;
  /** Viewport width (NOTE: No longer used) */
  width?: number;
  /** Viewport scale (NOTE: No longer used) */
  scale?: number;
  no_html?: "" | "1";
  code_slot?: number;
};
