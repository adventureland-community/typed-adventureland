declare global {
    const server: Server;
    /**
     * Changes servers. This will reload the page (the URL will change to match the server given), which means your code will also reload.
     * @param region The region to change to (e.g. ASIA)
     * @param identifier The server identifier to change to (e.g. PVP)
     */
    function change_server(region: ServerRegion, identifier: ServerIdentifier): void;
}
export declare type Server = {
    mode: string;
    pvp: boolean;
    region: ServerRegion;
    id: ServerIdentifier;
};
export declare type ServerIdentifier = "I" | "II" | "III" | "PVP";
export declare type ServerRegion = "ASIA" | "US" | "EU";
