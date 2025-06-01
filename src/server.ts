declare global {
  const server: Server;

  /**
   * Changes servers. This will reload the page (the URL will change to match the server given), which means your code will also reload.
   * @param region The region to change to (e.g. ASIA)
   * @param identifier The server identifier to change to (e.g. PVP)
   */
  function change_server<SR extends ServerRegion>(
    region: SR,
    identifier: IdentifierForRegion<SR>
  ): void;
}

export type Server = {
  mode: string;
  pvp: boolean;
  region: ServerRegion;
  id: ServerIdentifier;
};

export type ServerRegion = "ASIA" | "US" | "EU";

export type USServerIdentifier = "I" | "II" | "III" | "PVP";
export type EUServerIdentifier = "I" | "II" | "PVP";
export type ASIAServerIdentifier = "I";

export type ServerIdentifier = USServerIdentifier | EUServerIdentifier | ASIAServerIdentifier;

export type IdentifierForRegion<SR extends ServerRegion> =
  SR extends "US" ? USServerIdentifier :
  SR extends "EU" ? EUServerIdentifier :
  SR extends "ASIA" ? ASIAServerIdentifier :
  never;

export type ServerKey = `ASIA${ASIAServerIdentifier}` | `US${USServerIdentifier}` | `EU${EUServerIdentifier}`;