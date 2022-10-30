import type { Tuple } from "../utils";
import { ItemKey } from "../items";

export type GameKey = "dice" | "slots" | "tarot" | "wheel";

export interface GGame {
  gold?: number;
  slices?: Array<[string, "gold", number, string] | [string, "item", ItemKey, string]>;
  cards?: Tuple<string, 78>;
  hours?: number;
  npc?: string;
  glyphs?: Tuple<string, 10>;
}
