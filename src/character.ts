import type { BankPackType } from "./bank";
import { CharacterWithEventsFunctions } from "./character-event";
import type { CharacterEntity } from "./entities/character-entity";
import type { ItemInfo } from "./items";

declare global {
  const character: Character;

  //  TODO: validate we have all properties that CharacterEntity does
  type Character = CharacterWithEventsFunctions &
    CharacterEntity & {
      explanation: "Hey Adventurer! This is your very own character that is a PIXI.Sprite Object. Adventure Land uses PIXI to draw things. You can learn more about it: https://www.pixijs.com/ and draw your own stuff via CODE! (Technical) Since your character is a special object, it doesn't get drawn like other entities, therefore your real character object has static x and y values. The character object in Code is an Object that mimics and extends your actual character Object. It's kinda complicated, but the only difference is that your real character object has different x and y values.";
      proxy_character: boolean;

      bank?: {
        [T in BankPackType]: Array<ItemInfo | null>;
      } & {
        gold: number;
      };

      items: Array<ItemInfo | null>;
      /** Amount of gold the player has in its inventory */
      gold: number;
      /** Amount of shells */
      cash: number;
      ping: number;

      /** A bit of extra range that we can use to attack further monsters. It's variable. If you attack a monster using this extra range, it decreases for the next attack. */
      xrange: number;

      /** the amount of inventory slots left */
      esize: number;

      /** The total amount of inventory slots */
      isize: number;

      stats: {
        str: number;
        dex: number;
        int: number;
        vit: number;
        for: number;
      };

      // TODO: what is m ?
      // m: number

      // what exactly is targets?
      targets: number;

      tax: number;
      /** Code Cost */
      cc: number;

      home: string; // EUI combined server identifier and server region
      friends: Array<any>;

      // TODO: unsure
      // acx: {}
      xcx: string[]; // cosmetics

      // TODO: unsure
      // emx: {}

      // status effects?
      // stoned? verify

      /**  Your vision, it's a 1400X1000 rectangle */
      vision: [number, number];

      // Stats / Attributes
      attack: number;
      heal: number;
      /** Gold multiplier */
      goldm: number;
      /** Luck multiplier. */
      luckm: number;
      xpm: number;
      int: number;
      str: number;
      dex: number;
      vit: number;
      for: number;
      frequency: number;
      speed: number;
      range: number;
      armor: number;
      resistance: number;
      mp_cost: number;
      mp_reduction: number;
      evasion: number;
      miss: number;
      reflection: number;
      lifesteal: number;
      manasteal: number;
      rpiercing: number;
      apiercing: number;
      crit: number;
      critdamage: number;
      dreturn: number;
      pnresistance: number;
      firesistance: number;
      fzresistance: number;
      phresistance: number;
      stresistance: number;
      incdmgamp: number;
      stun: number;
      blast: number;
      explosion: number;
      courage: number;
      mcourage: number;
      pcourage: number;
      fear: number;
      pzazz: number;
    };
}
