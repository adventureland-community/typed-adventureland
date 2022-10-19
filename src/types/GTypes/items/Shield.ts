import type { SetKey } from "../sets/Sets";

export type ShieldKey =
  | "mshield" // Shield M
  | "shield" // Shield
  | "sshield" // Spiked Shield
  | "tigershield" // Shield of the Tiger
  | "wshield" // Wooden Shield
  | "xshield"; // Shield X

export interface GShield {
  stat?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  cx?: {
    accent: string;
  };
  /** The skin of the item. */
  skin: ShieldKey;
  /** The tier of the item. */
  tier: number;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade: {
    armor?: number;
    stat?: number;
    luck?: number;
    resistance?: number;
    dreturn?: number;
    str?: number;
  };
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  armor?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "shield";
  luck?: number;
  resistance?: number;
  dreturn?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  speed?: number;
  dex?: number;
  evasion?: number;
  int?: number;
  explanation?: string;
  crit?: number;
  str?: number;
  xp?: number;
}
