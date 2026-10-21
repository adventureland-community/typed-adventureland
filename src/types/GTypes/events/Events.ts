export type EventKey =
  | "abtesting" // A/B Testing
  | "anniversary" // Ten Years of Adventure Land
  | "crabxx" // Giga Crab
  | "dreams" // Cave of Many Dreams (cave / enter — not `join` / not on parent.S)
  | "egghunt" // Egg Hunt
  | "franky" // Franky
  | "goobrawl" // Goo Brawl
  | "graveyard" // Graveyard Rising
  | "halloween" // Halloween
  | "holidayseason" // Holiday Season
  | "horseman" // Headless Horseman
  | "icegolem" // Ice Golem
  | "lunarnewyear" // Lunar New Year
  | "trickortreat" // Trick or Treat
  | "valentines" // Valentines
  | "witchcipher"; // Witch's Cipher

/**
 * Events the `join()` CODE/socket API actually accepts (`G.events[…].join === true`
 * and handled in the server `join` socket). Seasonal flags like `anniversary` /
 * `halloween` / `trickortreat` are on {@link EventKey} but are not joinable this way.
 * `witchcipher` uses `brew` / `witch_cipher_info`, not `join()`.
 */
export type JoinableEventKey =
  | "abtesting"
  | "goobrawl"
  | "crabxx"
  | "franky"
  | "graveyard"
  | "horseman"
  | "icegolem";

export interface GEvent {
  name: string;
  modal: string;
  sprite: string;
  type: string;
  /** Present on timed joinable / seasonal events; omitted for open-ended seasons like anniversary. */
  duration?: number;
  /** When true, CODE may `join(name)` / `smart_move` via the join path. */
  join?: boolean;
  /** Season flag this event belongs to (e.g. `"halloween"`). */
  season?: EventKey | string;
  announcement?:
    | false
    | {
        title?: string;
        color?: string;
        accent?: string;
        effect?: string;
        text?: string;
      };
  /** Cave of Many Dreams catalog extras (and similar). */
  disabled?: boolean;
  party?: number;
  vote_ms?: number;
  xp_multiplier?: number;
  /** Witch's Cipher: seconds of gathering before brewing. */
  gathering?: number;
  /** Witch's Cipher: `[ingredient, monsterKeys[]]` loot rows. */
  ingredients?: Array<[string, string[]]>;
  loot?: number;
  slots?: number;
  mixes?: number;
  board?: number;
  payout?: { fits?: number; crack?: number };
  /** Trick or Treat door markers: `[map, x, y]`. */
  doors?: Array<[string, number, number]>;
  knocks?: number;
  treat?: number;
  costume_treat?: number;
  costumes?: string[];
  treats?: Array<[number, string, number]>;
  tricks?: Array<[number, string]>;
  ghost_time?: number;
  stamps?: { parcel?: number; laugh?: number };
  [key: string]: unknown;
}
