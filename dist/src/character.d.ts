declare global {
    const character: {
        /**
         * Sets up an event listener for the character. See http://adventure.land/docs/code/character/events for more info.
         * @param event The event name to listen to
         * @param callback The function that gets called when the event triggers
         */
        on(event: string, callback?: (data: any) => void): void;
        all(callback?: (name: any, data: any) => void): void;
    } & CharacterEntity;
}
/**
 * For the current character
 */
export declare type CharacterEntity = import("./entity").Entity & {
    /** visual width */
    awidth: number;
    /** visual height */
    aheight: number;
    /** Channeling actions */
    c: {
        [T in import("./generated").SkillName]?: {
            ms: number;
        };
    } & {
        revival?: {
            /** name of the priest trying to revive you. */
            f: string;
        };
        fishing?: {
            drop: any;
        };
    };
    items: Array<import("./items").ItemInfo | null>;
    /** Amount of gold the player has in its inventory */
    gold: number;
    /** Gold multiplier */
    goldm: number;
    /** Luck multiplier. */
    luckm: number;
    ping: number;
    /**
     * the name of the current open stand or false
     */
    stand: string | boolean;
    q: {
        compound?: {};
        upgrade?: {
            ms: number;
            len: number;
            num: number;
        };
        exchange?: {};
    };
    /** A bit of extra range that we can use to attack further monsters. It's variable. If you attack a monster using this extra range, it decreases for the next attack. */
    xrange: number;
    /**
     * The name of the current party leader
     */
    party?: string;
    /** the amount of inventory slots left */
    esize: number;
    /** The total amount of inventory slots */
    isize: number;
    /** The team you are on in the abtesting event. */
    team: "A" | "B";
    /**
     * Which instance your character is in
     * If you are in a dungeon, it's a unique ID, otherwise it's the map you are in
     * */
    in: import("./generated").MapName | string;
};
