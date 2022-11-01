import type { SetKey } from "../sets/Sets";

export type ShieldKey =
  | "mshield" // Shield M
  | "shield" // Shield
  | "sshield" // Spiked Shield
  | "tigershield" // Shield of the Tiger
  | "wshield" // Wooden Shield
  | "xshield"; // Shield X

export interface GShield {
  armor?: number;
  crit?: number;
  cx?: {
    accent: string;
  };
  dex?: number;
  dreturn?: number;
  evasion?: number;
  explanation?: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  int?: number;
  luck?: number;
  /** The full display name of an item. */
  name: string;
  resistance?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: ShieldKey;
  speed?: number;
  stat?: number;
  str?: number;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "shield";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    armor?: number;
    dreturn?: number;
    luck?: number;
    resistance?: number;
    stat?: number;
    str?: number;
  };
  xp?: number;
}
