import type { MonsterKey } from "../monsters/Monsters";
import type { QuestKey } from "./Quest";

export type ChrysalisKey =
  | "chrysalis0" // Dragold's Chrysalis
  | "kitty1" // Egg
  | "puppy1"; // Egg

export interface GChrysalis {
  ignore: boolean;
  a: boolean;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: QuestKey;
  grade: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "chrysalis";
  monster: MonsterKey;
  explanation?: string;
}
