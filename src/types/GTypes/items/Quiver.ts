import type { ClassKey } from "../classes/Classes";
import type { ItemAbility } from "./index";

export type QuiverKey =
  | "alloyquiver" // Alloy Quiver
  | "paradequiver" // Parade Quiver
  | "quiver" // Quiver
  | "stormquiver" // Storm Quiver
  | "t2quiver" // Agile Quiver
  | "thistlequiver"; // Thistle Quiver

export interface GQuiver {
  a?: boolean;
  ability?: ItemAbility;
  apiercing?: number;
  armor: number;
  attr0?: number;
  /** An array of classes that can use this item. */
  class?: [ClassKey, ClassKey];
  cx?: {
    accent: string;
  };
  dex: number;
  evasion?: number;
  exclusive?: boolean;
  explanation?: string;
  explosion?: number;
  frequency?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  hp?: number;
  int?: number;
  mp?: number;
  /** The full display name of an item. */
  name: string;
  range: number;
  resistance?: number;
  /** The skin of the item. */
  skin: QuiverKey;
  speed?: number;
  str?: number;
  stresistance?: number;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "quiver";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    apiercing?: number;
    armor: number;
    attr0?: number;
    dex: number;
    explosion?: number;
    range: number;
    resistance?: number;
  };
}
