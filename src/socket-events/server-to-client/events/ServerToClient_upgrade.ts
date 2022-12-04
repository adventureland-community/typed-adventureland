export type ServerToClient_upgrade = {
  type: "compound" | "exchange" | "upgrade";

  /** 0 = fail, 1 = success */
  success: 0 | 1;
};
