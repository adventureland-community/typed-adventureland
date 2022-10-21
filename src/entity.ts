import { SlotType, TradeSlotType } from "./entities/slots";
import { ItemInfo } from "./items";
import { PositionMovable } from "./position";
import { ClassKey } from "./types/GTypes/classes";
import { MonsterKey } from "./types/GTypes/monsters";
import { NpcKey } from "./types/GTypes/npcs";

export type EntityBase = {
  h: number;
  v: number;
  vn: number;
};

// TODO: we should split out into different kinds of entities NPC, Monster, Character

export type Entity = PositionMovable & {
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
  ctype: ClassKey | NpcKey; // TODO:
  damage_type?: DamageType;
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
  mtype?: MonsterKey;
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
  /** Set if the entity is a player */
  slots: {
    [T in SlotType]: ItemInfo;
  } & {
    [T in TradeSlotType]?: ItemInfo & {
      /** Number of minutes remaining for giveaway items */
      giveaway?: number;
      /** List of character IDs that are in the giveaway */
      list: string[];
      price: number;
      rid: string;
    };
  };
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

export type StatusInfoBase = {
  /** How many ms left before this condition expires */
  ms: number;
};

export type StatusInfo = {
  [T in ConditionName]?: StatusInfoBase;
} & {
  burned?: {
    // (Unconfirmed) the damage that the burn will do per second.
    intensity: number;
    // The character ID that caused the burn
    f: string;
  };
  coop?: {
    id: string;
    p: number;
  };
  mluck?: {
    /** The ID of the merchant who cast mluck */
    f: string;
    /** A flag to show if the mluck was cast by the user's merchant. If false, it can be mlucked by any merchant. */
    strong: boolean;
  };
  monsterhunt?: MonsterHuntStatusInfo;
  citizen0aura?: {
    luck: number;
  };
  citizen4aura?: {
    gold: number;
  };
};

export type MonsterHuntStatusInfo = StatusInfoBase & {
  /** The server ID where the monster hunt is valid */
  sn: string;
  /** Number of monsters remaining to kill */
  c: number;
  /** What monster we have to kill */
  id: MonsterKey;
};

// TODO: Get all types (from G?)
export type CharacterType =
  | "mage"
  | "merchant"
  | "paladin"
  | "priest"
  | "ranger"
  | "rogue"
  | "warrior";

// TODO: Get all types (from G?)
export type DamageType = "magical" | "physical";

export type ConditionName =
  | "authfail"
  | "blink"
  | "burned"
  | "charging"
  | "charmed"
  | "dampened"
  | "darkblessing"
  | "easterluck"
  | "eburn"
  | "eheal"
  | "energized"
  | "fingered"
  | "frozen"
  | "fullguard"
  | "hardshell"
  | "healed"
  | "holidayspirit"
  | "invincible"
  | "licenced"
  | "marked"
  | "mcourage"
  | "mlifesteal"
  | "mluck"
  | "monsterhunt"
  | "massproduction"
  | "massproductionpp"
  | "notverified"
  | "phasedout"
  | "poisoned"
  | "poisonous"
  | "power"
  | "reflection"
  | "rspeed"
  | "shocked"
  | "slowness"
  | "stack"
  | "stoned"
  | "stunned"
  | "sugarrush"
  | "tangled"
  | "warcry"
  | "weakness"
  | "withdrawal"
  | "xpower"
  | "xshotted"
  | "invis";
