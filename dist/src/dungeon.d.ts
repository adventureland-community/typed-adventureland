declare global {
    function enter(dungeon: string, instance?: string): Promise<any>;
}
export declare type DungeonName = "duelland" | "crypt" | "winter_instance";
