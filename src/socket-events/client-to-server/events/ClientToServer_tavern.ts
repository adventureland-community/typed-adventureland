/** Tavern info request (`get_tavern_info`); replies with house edge and max coverable win. */
export type ClientToServer_tavern = {
  event: "info" | string;
  request_id?: string;
};
