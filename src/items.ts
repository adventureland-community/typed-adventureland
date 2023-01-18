import { ElixirKey, ItemKey } from "./types/GTypes/items";

declare global {
  /**
   * Returns the grade of an item.
   * 0 = normal, 1 = high, 2 = rare, 3 = legendary, 4 = exalted
   */
  function item_grade(item: ItemInfo | { name: ItemKey }): -1 | 0 | 1 | 2 | 3 | 4;

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

/** The item instance used different places, your inventory, merchant stand, bank and other places */
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

  /**
   * This item was received through mluck.
   * This property contains the name of the person that generated the item.
   */
  m?: string;

  /**
   * Key of the item in `G.items`
   */
  name: ItemKey;

  /**
   * If this property is set, the item has a special modifier.
   */
  p?: ItemInfoPValues;

  /**
   * Can also have theese apparently abtesting, firehazard, festive, critmonger, glitched, lucky, legacy, fast, gooped, stomped, shiny, superfast, sniper
   */
  ps?: [string]; // TODO: figure out what it is

  /** How many of this item we have. Set if the item is stackable. */
  q?: number;

  /**
   * Players participating in a giveaway for this item.
   * The value being the players name.
   */
  registry?: Record<string, string>;

  /**
   * This item has had a stat scroll applied to it.
   */
  stat_type?: StatType;

  /**
   * Indicates the item being a pvp time, value contains a timestamp.
   */
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
   * Number of minutes remaining for giveaway items. */
  giveaway?: number;

  /** Present on giveaway. Contains a list of the characters signed up to the giveaway. */
  list?: Array<string>;

  /** If set, the item is for sale, or purchase */
  rid: string;
  price: number;
  gf?: string; // TODO figure out.
};

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
