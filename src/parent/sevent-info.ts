import { MapKey } from "../G";
import { BetterUXWrapper } from "../types/GTypes/utils";

/** NOTE: Some event monsters don't have x and y (e.g.: Slenderman) */

export type SMonsterEventLive = {
  /** Is the monster currently available? */
  live: true;
  map: MapKey;

  hp: number;
  max_hp: number;

  /** The character name that the monster is currently attacking */
  target?: string | null;

  /** A date string of when the event will end */
  end?: Date;
};

export type SMonsterEventLiveWithCoordinates = SMonsterEventLive & {
  x: number;
  y: number;
};

// TODO: don't think all events has live / spawn when not live
export type SMonsterEventNotLive = {
  /** Is the monster currently available? */
  live: false;

  /** At what date will the monster spawn? */
  spawn: string;
};

export type SMonsterEvent = BetterUXWrapper<SMonsterEventNotLive | SMonsterEventLive>;
export type SMonsterEventWithCoordinates = BetterUXWrapper<
  SMonsterEventNotLive | SMonsterEventLiveWithCoordinates
>;


export type SEventsInfos = {
  schedule: {
    time_offset: number;
    dailies: Array<number>;
    nightlies: Array<number>;
    night: boolean;
  };
} & {
  /** `wabbit` spawns hourly on a random map and inside a random monster pack. 
   * It's super hard to kill for 5 minutes, which should give you enough time to join the fight! 
   * read more: https://adventure.land/docs/ref/event-egghunt */
  egghunt: boolean;
  wabbit: SMonsterEvent

  /** `pinkgoo` spawns every hour in a random map and inside a random monster pack. 
   * Love Goo is co-op but has 98% avoidance, so it's a bit tricky to land a hit! 
   * read more: https://adventure.land/docs/ref/event-valentines */
  valentines: boolean;
  pinkgoo: SMonsterEvent
  
  /** read more: https://adventure.land/docs/ref/event-lunarnewyear */
  lunarnewyear: boolean;
  /** lunarnewyear: Dragold spanws every 3 hours. Take a chance to capture one of the very rare drops. A unique crown as a cosmetics item and Dragold's chrysalis! (to have a Dragold as a pet!) */
  dragold:SMonsterEventWithCoordinates;
  /** lunarnewyear: The Legendary Tiger appears to players and drops Tiger set items each time you manage to land a hit! Make sure to not hurt this peaceful and giving animal! */
  tiger:SMonsterEvent;

  /** read more https://adventure.land/docs/ref/event-holidayseason */
  holidayseason: boolean;
  grinch: SMonsterEventWithCoordinates;
  /** snowman spawns more often during holiday season */
  snowman: SMonsterEventWithCoordinates;

  /** read more: https://adventure.land/docs/ref/event-halloween */
  halloween: boolean;
  mrpumpkin: SMonsterEventWithCoordinates;
  mrgreen: SMonsterEventWithCoordinates;
  slenderma: SMonsterEvent;

  /** read more: https://adventure.land/docs/ref/event-goobrawl */
  goobrawl: {
    /** A date string of when the event will end */
    end?: string;
  };

  /** read more: https://adventure.land/docs/ref/event-abtesting */
  abtesting: {
    /** A date string of when the event will end */
    end?: string;

    /** A date string of when sign-ups will stop for the event */
    signup_end: string;

    /** How many characters are on team A. TODO: Check that this is actually what it means */
    A: number;
    /** How many characters are on team B. TODO: Check that this is actually what it means */
    B: number;
    /** The event ID. TODO: Do we need this? */
    id: string;
  };

  /**
   * Giga Crab is a challenging server event boss. 
   * As long as there are Huge Crabs around, Giga Crab only receives one damage! 
   * The entire server needs to get together to continually clear all the Huge Crabs that spawn. 
   * The event lasts 40 minutes but as long as Giga Crab is being engaged, the event goes on! 
   * read more: https://adventure.land/docs/ref/event-crabxx */
   crabxx: SMonsterEventWithCoordinates;

   /** read more: https://adventure.land/docs/ref/event-franky */
   franky: SMonsterEventWithCoordinates;
   /**
    * icegolem is located on a closed island, make sure to not get stuck when the event is over. 
    * read more: https://adventure.land/docs/ref/event-icegolem */
   icegolem: SMonsterEventWithCoordinates;
};
