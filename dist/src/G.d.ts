export {};
declare global {
    const G: {
        /** a look with needed xp per level, key is level */
        levels: {
            [level: number]: number;
        };
        base_gold: {
            [T in import("./generated").MonsterName]?: {
                [T in import("./generated").MapName]?: number;
            };
        };
        dismantle: {
            [T in import("./generated").ItemName]?: {
                /** The cost of dismantling the item */
                cost: number;
                /** A list of items you will get if you dismantle. If the number is < 1, it indicates the probability of getting that item. */
                items: [number, import("./generated").ItemName][];
            };
        };
        items: {
            [T in import("./generated").ItemName]: import("./items").GItem;
        };
        craft: {
            [T in import("./generated").ItemName]: {
                cost: number;
                items: Array<[number, import("./generated").ItemName, number]>;
                quest?: import("./generated").NPCKey;
            };
        };
        drops: {
            monsters: {
                [T in import("./generated").MonsterName]: Array<[
                    number,
                    import("./generated").ItemName
                ]>;
            };
            f1: Array<[
                number,
                import("./generated").ItemName
            ] | [number, "open", "glitch"]>;
        };
        geometry: {
            [T in import("./generated").MapName]: {
                max_x: number;
                max_y: number;
                min_x: number;
                min_y: number;
                x_lines: [number, number, number][];
                y_lines: [number, number, number][];
            };
        };
        maps: {
            [T in import("./generated").MapName]: {
                /** The name of the map, if this changes, the map layout probably changed. */
                key: string;
                ignore?: boolean;
                instance?: boolean;
                irregular?: boolean;
                monsters: {
                    count: number;
                    /**
                     * the first two numbers defines top left, the next two numbers defines bottom right
                     * a boundary is actually a "spawner" for a monster,
                     */
                    boundary?: [number, number, number, number];
                    /**
                     * the first two numbers defines top left, the next two numbers defines bottom right
                     * a boundary is actually a "spawner" for a monster, the phoenix has a spawner in main, tthere can only be one, but it can also spawn in cave and halloween
                     */
                    boundaries?: [
                        import("./generated").MapName,
                        number,
                        number,
                        number,
                        number
                    ][];
                    type: import("./generated").MonsterName;
                    stype?: "randomspawn";
                    /** Indicates if the monster can roam, presumeably out of the boundaries */
                    roam?: boolean;
                }[];
                /** Not sure what this means. Might mean that only one character of the players can be here at a time. */
                mount: boolean;
                no_bounds?: boolean;
                npcs: GMapsNPC[];
                on_death: number;
                /**
                 * [0]: x position where you spawn
                 * [1]: y position where you spawn
                 * [2]: Direction to face the character when you spawn
                 */
                spawns: [number, number, number?][];
                data: GMapData;
            };
        };
        monsters: {
            [T in import("./generated").MonsterName]: GMonster;
        };
        npcs: {
            [T in import("./generated").NPCKey]: {
                id: import("./generated").NPCKey;
                /** Full name of NPC */
                name: string;
                /** A list of places you can transport to with this NPC. The number is the spawn */
                places?: {
                    [T in import("./generated").MapName]?: number;
                };
                role: import("./generated").NPCRole;
                color?: string;
            };
        };
        skills: {
            [T in import("./generated").AllSkillNames]: {
                apiercing?: number;
                cooldown: number;
                cooldown_multiplier?: number;
                damage_multiplier?: number;
                level?: number;
                /** an array of lvl and output value */
                levels?: Array<[number, number]>;
                output?: number;
                /** Can we use this skill on monsters? */
                monster?: boolean;
                /** MP Cost for skill */
                mp?: number;
                /** The name of the skill */
                name: string;
                range?: number;
                range_multiplier?: number;
                range_bonus?: number;
                /** For MP use skills on the mage, 1 mp will equal this much damage */
                ratio?: number;
                /** The cooldown this skill shares with another skill */
                share?: import("./generated").AllSkillNames;
                /** Does this skill require a single target? (Don't use an array) */
                target?: boolean;
                /** Does this skill require multiple targets? (Use an array) */
                targets?: boolean;
                explanation: string;
                /** Is it a party skill */
                party: boolean;
            };
        };
    };
}
export declare type GMapsNPC = {
    id: import("./generated").NPCKey;
    name?: string;
    position: [number, number];
    loop: boolean;
    /** unsure what this is */
    manual: boolean;
};
export declare type GMonster = {
    name: string;
    type: "monster";
    mtype: import("./generated").MonsterName;
    skin: string;
    hp: number;
    max_hp: number;
    attack: number;
    frequency: number;
    /** attack range in pixels */
    range: number;
    /** Respawn time in seconds.
     * Can be -1 (e.g. goldenbat), which means it's special.
     * For >200 second respawn monsters, the variance is from 0.6 to 2.2 of their base time (https://discordapp.com/channels/238332476743745536/238332476743745536/729997473484898327) */
    respawn: number;
    /** run speed, pixels/second */
    speed: number;
    xp: number;
    armor: number;
};
export interface GMapData {
    tiles: Array<Array<TileEnum | number>>;
    min_x: number;
    min_y: number;
    default: number;
    y_lines: Array<[number, number, number]>;
    x_lines: Array<[number, number, number]>;
    max_x: number;
    groups: Array<Array<number[]>>;
    polygons: Polygons;
    placements: Array<number[]>;
    max_y: number;
}
export interface Polygons {
    f1: Array<number[]>;
}
export declare enum TileEnum {
    Castle = "castle",
    Custom = "custom",
    Custom2 = "custom2",
    CustomA = "custom_a",
    Doors = "doors",
    Dungeon = "dungeon",
    Fort = "fort",
    House = "house",
    Inside = "inside",
    New = "new",
    Outside = "outside",
    Puzzle = "puzzle",
    Water = "water"
}
