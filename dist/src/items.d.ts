import { ItemName } from "./generated";
export declare type HealthPotion = "hpot0" | "hpot1" | "hpotx";
export declare type ManaPotion = "mpot0" | "mpot1" | "mpotx";
/** the item instance used different places, your inventory, merchant stand, bank and other places */
export declare type ItemInfo = {
    /** If true, the entity is buying this item */
    b?: boolean;
    /** Set if the item is compoundable or upgradable */
    level?: number;
    name: ItemName;
    /** How many of this item we have. Set if the item is stackable. */
    q?: number;
    /** If set, name == placeholder, and we are upgrading or compounding something */
    p?: {
        chance: number;
        name: ItemName;
        level: number;
        scroll: ItemName;
        nums: number[];
    } | "shiny" | "glitched" | "superfast";
    /** If set, the item is for sale, or purchase */
    rid?: string;
    stat_type?: StatType;
};
export declare type GItem = {
    buy?: boolean;
    /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
    compound?: {
        [T in StatType]?: number;
    };
    /** Refers to how many items are needed to exchange (see .quest as well!) */
    e?: number;
    /** Cost of the item in gold, if an NPC were to sell this item */
    g: number;
    /** The first number refers to what level the item begins being "high" grade, the second for "rare" */
    grades?: [number, number];
    /** The full name of the item */
    name: string;
    id: ItemName;
    /** Indicates the "quest" that this item is needed to complete */
    quest: string;
    /** Indicates how many of this items you can stack. Set if the item is stackable. */
    s: number;
    /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
    upgrade?: {
        [T in StatType | "stat"]?: number;
    };
    type: ItemType;
    wtype: WeaponType;
    gives?: Array<[StatType, number]>;
    skin: string;
    size: number;
    tier?: number;
} & {
    [T in StatType]?: number;
};
export declare type StatType = "armor" | "attack" | "dex" | "for" | "frequency" | "gold" | "xp" | "hp" | "mp" | "int" | "lifesteal" | "luck" | "mp_cost" | "mp_reduction" | "range" | "resistance" | "speed" | "str" | "vit" | "stat" | "evasion" | "reflection" | "manasteal" | "rpiercing" | "apiercing" | "crit" | "dreturn" | "output";
export declare type WeaponType = "axe" | "basher" | "bow" | "crossbow" | "dagger" | "dartgun" | "fist" | "mace" | "pmace" | "rapier" | "short_sword" | "spear" | "staff" | "stars" | "sword" | "wand" | "wblade";
export declare type ItemType = "activator" | "amulet" | "belt" | "booster" | "box" | "cape" | "chest" | "chrysalis" | "computer" | "container" | "cosmetics" | "cscroll" | "earring" | "elixir" | "flute" | "gem" | "gloves" | "helmet" | "jar" | "key" | "licence" | "material" | "misc" | "misc_offhand" | "offering" | "orb" | "pants" | "petlicence" | "placeholder" | "pot" | "pscroll" | "qubics" | "quest" | "quiver" | "ring" | "shield" | "shoes" | "skill_item" | "source" | "spawner" | "stand" | "stone" | "test" | "throw" | "token" | "tome" | "tracker" | "uscroll" | "weapon" | "xp" | "xscroll";
