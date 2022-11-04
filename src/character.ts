import { BankPackType } from "./bank";
import { CharacterEntity } from "./entities/character-entity";
import { ItemInfo } from "./items";
import { MapKey } from "./types/GTypes/maps";
import { SkillKey } from "./types/GTypes/skills";

declare global {
  const character: Character;

  //  TODO: validate we have all properties that CharacterEntity does
  interface Character extends CharacterEntity {
    // /** visual width */
    // awidth: number;
    // /** visual height */
    // aheight: number;
    bank: {
      [T in BankPackType]: ItemInfo[];
    } & {
      gold: number;
    };
    // /** Channeling actions */
    // c: {
    //   [T in SkillKey]?: { ms: number }; // TODO: could probably type it specifically for only channeling actions
    // } & {
    //   revival?: {
    //     /** name of the priest trying to revive you. */
    //     f: string;
    //   };
    //   fishing?: {
    //     drop: any; //GDrops;
    //   };
    // };
    items: Array<import("./items").ItemInfo | null>;
    /** Amount of gold the player has in its inventory */
    gold: number;

    // Stats / Attributes
    /** Gold multiplier */
    goldm: number;
    /** Luck multiplier. */
    luckm: number;
    ping: number;

    /** A bit of extra range that we can use to attack further monsters. It's variable. If you attack a monster using this extra range, it decreases for the next attack. */
    xrange: number;

    /** the amount of inventory slots left */
    esize: number;

    /** The total amount of inventory slots */
    isize: number;
  }
}
