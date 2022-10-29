import type { DropKey } from "../drops/Drops";
import type { LevelKey } from "../levels/Levels";
import type { MiscKey } from "../items/Misc";
import type { TokenKey } from "../tokens/Tokens";
import type { Tuple } from "../utils";

export type GameKey = "dice" | "slots" | "tarot" | "wheel";

export interface GGame {
  gold?: number;
  slices?: [
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, string, MiscKey, string],
    [string, string, TokenKey, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey],
    [string, DropKey, number, DropKey]
  ];
  cards?: Tuple<string, 78>;
  hours?: number;
  npc?: string;
  glyphs?: [
    LevelKey,
    LevelKey,
    LevelKey,
    LevelKey,
    LevelKey,
    LevelKey,
    LevelKey,
    LevelKey,
    string,
    string
  ];
}
