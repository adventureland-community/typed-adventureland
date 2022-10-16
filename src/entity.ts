import { MonstersKey } from "./types/GTypes/monsters";

type EntityBase = {
  h: number;
  v: number;
  vn: number;
};

// TODO: we should split out into different kinds of entities NPC, Monster, Character

export type Entity = import("./position").PositionMovable & {
  width: number;

  height: number;

  mscale?: number;

  /** If set, attacks only do 1 damage */
  "1hp": number;
  /** Only set if the entity is a monster */
  aggro: number;
  apiercing: number;
  armor: number;
  attack: number;
  base: EntityBase;
  cooperative: boolean;
  // ctype: CharacterType | import("./generated").NPCKey; // TODO:
  // damage_type?: DamageType; // TODO:
  /** A percent chance to avoid physical attacks */
  evasion: number;
  /** Related to attack speed, I think it's equal to attacks per second */
  frequency: number;
  hp: number;
  xp: number;
  /** This value is also the key for the object in parent.entities */
  id: string;
  immune: boolean;
  /** When were the ms values last updated? */
  last_ms: Date;
  level: number;
  max_hp: number;
  max_mp: number;
  /** Is the character currently moving? */
  moving: boolean;
  mp: number;
  /** The MP cost for doing an attack */
  mp_cost: number;
  /** how much manacost is reduced */
  mp_reduction: number;
  /** If the entity is a monster, it is set */
  mtype?: MonstersKey;
  /** Contains the full name of the monster */
  name: string;
  /** Is set if the entity is an NPC, undefined otherwise */
  npc?: string;
  /** Attack range */
  range: number;
  real_x: number;
  real_y: number;
  resistance: number;
  /** Only set if the entity is a character. If true, the player is dead. */
  rip?: boolean;
  rpiercing: number;
  //   s: StatusInfo; // TODO: status info
  // TODO: slots
  //   /** Set if the entity is a player */
  //   slots: {
  //     [T in SlotType]: ItemInfo;
  //   } & {
  //     [T in TradeSlotType]?: ItemInfo & {
  //       /** Number of minutes remaining for giveaway items */
  //       giveaway?: number;
  //       /** List of character IDs that are in the giveaway */
  //       list: string[];
  //       price: number;
  //       rid: string;
  //     };
  //   };
  speed: number;
  // TODO: Add the parameters to this object
  /** If set, the merchant has a stand open */
  standed?: any;
  /** Set if we are under the status effect "stoned" */
  stoned?: boolean;
  /** Set if the player or monster is targeting something */
  target: string;
  type: "character" | "monster";
  vx: number;
  vy: number;
  dead?: boolean | string; // monster only attribute
};
