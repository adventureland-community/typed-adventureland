import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { ItemAbility } from "./index";

export type EarringKey =
  | "blightcap" // Blightcap Stud
  | "cearring" // Earring of The Crypt
  | "cloverstud" // Clover Stud
  | "dexearring" // Earring of Dexterity
  | "dexearringx" // Enchanted Earring
  | "frostfang" // Frostfang Earring
  | "intearring" // Earring of Intelligence
  | "lostearring" // Gold Earring
  | "mearring" // Mistletoe Earring
  | "molesteeth" // Mole's Teeth
  | "moonshardearring" // Moonshard Earring
  | "mummyhex" // Mummy's Hex
  | "saffronloop" // Saffron Loop
  | "strearring" // Earring of Strength
  | "vitearring" // Earring of Vitality
  | "watchersearring"; // Watcher's Earring

export interface GEarring {
  a?: boolean;
  ability?: ItemAbility;
  apiercing?: number;
  attr0?: number;
  /** An array of classes that can use this item. */
  class?: Array<ClassKey>;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    apiercing?: number;
    attr0?: number;
    crit?: number;
    critdamage?: number;
    dex?: number;
    evasion?: number;
    for?: number;
    gold?: number;
    int?: number;
    luck?: number;
    mp?: number;
    str?: number;
    vit?: number;
  };
  crit?: number;
  critdamage?: number;
  cx?: {
    accent: string;
  };
  dex?: number;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  edge?: number;
  evasion?: number;
  exclusive?: boolean;
  explanation?: string;
  for?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  gold?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  int?: number;
  luck?: number;
  mp?: number;
  /** The full display name of an item. */
  name: string;
  /** Indicates the `quest` that this item is needed to complete. */
  quest?: EarringKey;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: EarringKey;
  speed?: number;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "earring";
  vit?: number;
}
