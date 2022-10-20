import type { NpcKey } from "../npcs/Npcs";

export type TokenKey =
  | "friendtoken" // Friend Token
  | "funtoken" // Fun Token
  | "monstertoken" // Monster Token
  | "pvptoken"; // PVP Token

export interface GToken {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  npc?: NpcKey;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: TokenKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "token";
}
