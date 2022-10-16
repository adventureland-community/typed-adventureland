import { ItemsKey } from "./types/GTypes/items";
import { MapsKey } from "./types/GTypes/maps";
import { MonstersKey } from "./types/GTypes/monsters";
import { NpcsKey } from "./types/GTypes/npcs";
import { SkillsKey } from "./types/GTypes/skills";

export {}; // Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.

declare global {
  const G: {
    /** a look with needed xp per level, key is level */
    levels: { [level: number]: number };
    base_gold: {
      [T in MonstersKey]?: {
        /** The base amount of gold this monster drops if you kill it in the given map */
        [T in MapsKey]?: number;
      };
    };
    // TODO: classes
    // classes: {
    //   [T in CharacterType]: {
    //     /** A list of items that the character can equip using both hands */
    //     doublehand: {
    //       [T in WeaponType]?: {
    //         /** Modifier on the given stat for equipping this type of item */
    //         [T in StatType]?: number;
    //       };
    //     };
    //     /** A list of items that the character can equip in its mainhand */
    //     mainhand: {
    //       [T in WeaponType]?: {
    //         /** Modifier on the given stat for equipping this type of item */
    //         [T in StatType]?: number;
    //       };
    //     };
    //     /** A list of items that the character can equip in its offhand */
    //     offhand: {
    //       [T in WeaponType]?: {
    //         /** Modifier on the given stat for equipping this type of item */
    //         [T in StatType]?: number;
    //       };
    //     };
    //   };
    // };
    // TODO: conditions
    // conditions: {
    //   [T in ConditionName]: {
    //     /** Indicates whether the condition is a penalty or not */
    //     bad: boolean;
    //     buff: boolean;
    //     /** The length the condition lasts in ms */
    //     duration: number;
    //   } & {
    //     [T in StatType]?: number;
    //   };
    // };
    dismantle: {
      [T in ItemsKey]?: {
        /** The cost of dismantling the item */
        cost: number;
        /** A list of items you will get if you dismantle. If the number is < 1, it indicates the probability of getting that item. */
        items: [number, ItemsKey][];
      };
    };
    items: { [T in ItemsKey]: import("./items").GItem };
    craft: {
      [T in ItemsKey]: {
        cost: number;
        items: Array<[number, ItemsKey, number]>;
        quest?: NpcsKey;
      };
    };
    // drops also has a bunch of keys for other items, unsure how to type
    drops: {
      monsters: {
        [T in MonstersKey]: Array<
          [number, ItemsKey]
        >;
      };
      f1: Array<
        [number, ItemsKey] | [number, "open", "glitch"]
      >;
    };
    geometry: {
      [T in MapsKey]: {
        max_x: number;
        max_y: number;
        min_x: number;
        min_y: number;
        /* The line is from ([0], [1]) to ([0], [2]) */
        x_lines: [number, number, number][];
        /* The line is from ([1], [0]) to ([2], [0]) */
        y_lines: [number, number, number][];
      };
    };
    maps: {
      [T in MapsKey]: {
        // TODO: DoorInfo
        // doors: DoorInfo[];
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
            MapsKey,
            number,
            number,
            number,
            number
          ][];
          type: MonstersKey;
          stype?: "randomspawn"; // phoenix has this there might be other types
          /** Indicates if the monster can roam, presumeably out of the boundaries */
          roam?: boolean;
        }[];
        /** Not sure what this means. Might mean that only one character of the players can be here at a time. */
        mount: boolean;
        no_bounds?: boolean;
        npcs: GMapsNPC[];
        on_death: number;
        // TODO: IPosition / ref
        // ref: {
        //   [id: string]: IPosition & {
        //     map: MapsKey;
        //     in: MapsKey;
        //     id: string;
        //   };
        // };
        /**
         * [0]: x position where you spawn
         * [1]: y position where you spawn
         * [2]: Direction to face the character when you spawn
         */
        spawns: [number, number, number?][];
        data: GMapData;
      };
    };
    monsters: { [T in MonstersKey]: GMonster };
    npcs: {
      [T in NpcsKey]: {
        id: NpcsKey;
        /** Full name of NPC */
        name: string;
        /** A list of places you can transport to with this NPC. The number is the spawn */
        places?: {
          [T in MapsKey]?: number;
        };
        // role: NPCRole; // TODO: generate npc role
        color?: string;
      };
    };
    // TODO: Get list of quest names
    // TODO: quests
    // quests: {
    //   [T in string]: PositionReal & {
    //     id: NpcsKey;
    //   };
    // };
    skills: {
      [T in SkillsKey]: {
        apiercing?: number;
        // TODO: charactertype "class"
        // class?: CharacterType[];
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
        share?: SkillsKey;
        // TODO: slot
        // /** The item(s) required to use this skill */
        // slot?: [SlotType, ItemsKey][];
        /** Does this skill require a single target? (Don't use an array) */
        target?: boolean;
        /** Does this skill require multiple targets? (Use an array) */
        targets?: boolean;
        // TODO: weapon type
        // /** The weapon type needed to use this skill */
        // wtype?: WeaponType | WeaponType[];
        explanation: string;
        /** Is it a party skill */
        party: boolean;
        // TODO: damage type
        // damage_type: DamageType;
      };
    };
  };
}

// TODO: Get a better name for this.
// TODO: Get a better naming convention for G data
export type GMapsNPC = {
  id: NpcsKey;
  name?: string;
  position: [number, number];
  loop: boolean;
  /** unsure what this is */
  manual: boolean;
};

export type GMonster = {
  name: string;
  type: "monster";
  mtype: MonstersKey;
  skin: string;
  hp: number;
  max_hp: number;
  attack: number;
  // TODO: damgetype
  //   damage_type: DamageType;
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

export enum TileEnum {
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
  Water = "water",
}
