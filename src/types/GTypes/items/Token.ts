import type { AchievementKey } from "../achievements/Achievements";
import type { TokenKey } from "../tokens/Tokens";
export type { TokenKey };

export interface GToken {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  npc?: AchievementKey;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: TokenKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "token";
}
