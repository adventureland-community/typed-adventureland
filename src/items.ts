import { ElixirKey, ItemKey } from "./types/GTypes/items";

declare global {
  /** 0 = normal, 1 = high, 2 = rare */
  function item_grade(item: ItemInfo | { name: ItemKey }): -1 | 0 | 1 | 2;

  /** Returns the inventory position of the item, or -1 if it's not found */
  function locate_item(item: ItemKey): number; // should this live in "inventory"?
}

export type HealthPotion = "hpot0" | "hpot1" | "hpotx";

export type ManaPotion = "mpot0" | "mpot1" | "mpotx";

// TODO: each category should have its own type

// ItemInfo should be seperated out into specific types, so we can be clear if there is a quantity or not.

// gift is an item we got gifted from the start, gifts can only be sold for 1 gold, if you add items to a gift stack, they also becomes gifts.

export type ItemInfoPValues =
  | "festive"
  | "firehazard"
  | "glitched"
  | "gooped"
  | "legacy"
  | "lucky"
  | "shiny"
  | "superfast";

/** the item instance used different places, your inventory, merchant stand, bank and other places */
export type ItemInfo = {
  acc?: number;
  ach?: string; // TODO: achievement from G.achievements?
  charges?: number; // only seen on chests

  /** If item was gifted to you making your initial characters, sell value is 1 gold */
  gift?: 1;

  /** Checked to determine Ponty prices. */
  cash?: number;

  /** Unique id used for trading. */
  rid?: string;

  l?: string; // TODO: figure out what this is.
  ld?: string; // TODO: figure out what this is.
  /** Set if the item is compoundable or upgradable */
  level?: number;
  m?: string; // TODO: figure out what this is
  name: ItemKey;
  /** Is this item a special item? */
  p?: ItemInfoPValues;
  // can also have theese apparently abtesting, firehazard, festive, critmonger, glitched, lucky, legacy, fast, gooped, stomped, shiny, superfast, sniper
  ps?: [string]; // TODO: figure out what it is
  /** How many of this item we have. Set if the item is stackable. */
  q?: number;

  /**
   * Players participating in a giveaway for this item.
   * the value being the players name
   * */
  registry?: {
    [key: string]: string;
  };
  stat_type?: StatType;
  /** indicates the item being a pvp time, value contains a timestamp */
  v?: string;
};

export type EquippedElixirItemInfo = {
  name: ElixirKey;
  ex?: boolean; // on elixirs, not optional, unsure of what the value indicates
  expires?: string; // on elixirs, not optional, when the elixir expires.
};

export type InventoryExchangeItemInfo = {
  name: "placeholder";
};

export type InventoryUpgradeCompoundItemInfo = ItemInfo & {
  name: "placeholder";
  /**
   * Upgrading or compounding item
   */
  p?: {
    chance: number;
    name: ItemKey;
    level: number;
    scroll: ItemKey;
    nums: [number, number];
  };
};

export type TradeItemInfo = ItemInfo & {
  /** If true, the entity is buying this item */
  b?: boolean;
  /** TODO: Verify this property belongs on trade items and how they are different.
   * Number of minutes remaining for giveaway items */
  giveaway?: number;
  /** If set, the item is for sale, or purchase */
  rid: string;
  price: number;
  gf?: string; // TODO figure out.
};

//   export type GItem = {
//     // class: CharacterType[]; // TODO: fix type
//     buy?: boolean;
//     /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
//     compound?: {
//       [T in StatType]?: number;
//     };
//     // damage?: DamageType; // TODO: fix type
//     /** Refers to how many items are needed to exchange (see .quest as well!) */
//     e?: number;
//     /** Cost of the item in gold, if an NPC were to sell this item */
//     g: number;
//     /** The first number refers to what level the item begins being "high" grade, the second for "rare" */
//     grades?: [number, number];
//     /** The full name of the item */
//     name: string;
//     id: ItemKey;
//     // TODO: Add a type for quests
//     /** Indicates the "quest" that this item is needed to complete */
//     quest: string;
//     /** Indicates how many of this items you can stack. Set if the item is stackable. */
//     s: number;
//     /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
//     upgrade?: {
//       [T in StatType | "stat"]?: number;
//     };
//     type: ItemType;
//     wtype: WeaponType;
//     gives?: Array<[StatType, number]>;
//     skin:string;
//     size:number;
//     tier?:number;
//   } & { [T in StatType]?: number };

// TODO: Get all stat types
export type StatType =
  | "armor"
  | "attack"
  | "dex"
  | "for"
  | "frequency"
  | "gold"
  | "xp"
  | "hp"
  | "mp"
  | "int"
  | "lifesteal"
  | "luck"
  | "mp_cost"
  | "mp_reduction"
  | "range"
  | "resistance"
  | "speed"
  | "str"
  | "vit"
  | "stat"
  | "evasion"
  | "reflection"
  | "manasteal"
  | "rpiercing"
  | "apiercing"
  | "crit"
  | "dreturn"
  | "output";
