export type EventKey =
  | "abtesting" // A/B Testing
  | "crabxx" // Giga Crab
  | "egghunt" // Egg Hunt
  | "franky" // Franky
  | "goobrawl" // Goo Brawl
  | "halloween" // Halloween
  | "holidayseason" // Holiday Season
  | "icegolem" // Ice Golem
  | "lunarnewyear" // Lunar New Year
  | "valentines" // Valentines
  | "anniversary" // Ten Years of Adventure Land
  | "dreams"; // Cave of Many Dreams (cave / enter — not `join` / not on parent.S)

/**
 * Events the `join()` CODE/socket API actually accepts (`G.events[…].join === true`
 * and handled in the server `join` socket). Seasonal flags like `anniversary` /
 * `halloween` are on {@link EventKey} but are not joinable this way.
 */
export type JoinableEventKey =
  | "abtesting"
  | "goobrawl"
  | "crabxx"
  | "franky"
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
  [key: string]: unknown;
}
