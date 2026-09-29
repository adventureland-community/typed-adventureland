import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { ItemAbility } from "./index";

export type ShieldKey =
  | "candleward" // Candleward
  | "cave_counterweight" // Counterweight
  | "dawnwardaegis" // Dawnward Aegis
  | "lanternshield" // Lantern Shield
  | "mshield" // Shield M
  | "ratkingbuckler" // Ratking Buckler
  | "shield" // Shield
  | "sshield" // Spiked Shield
  | "tigershield" // Shield of the Tiger
  | "turtleshard" // Turtle Shard
  | "wshield" // Wooden Shield
  | "xshield"; // Shield X

export interface GShield {
  ability?: ItemAbility;
  armor?: number;
  /** An array of classes that can use this item. */
  class?: Array<ClassKey>;
  courage?: number;
  crit?: number;
  cx: {
    accent: string;
  };
  dex?: number;
  dreturn?: number;
  evasion?: number;
  exclusive?: boolean;
  explanation?: string;
  firesistance?: number;
  for?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  hp?: number;
  int?: number;
  luck?: number;
  mp?: number;
  /** The full display name of an item. */
  name: string;
  phresistance?: number;
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
    for?: number;
    hp?: number;
    luck?: number;
    mp?: number;
    resistance?: number;
    stat?: number;
    str?: number;
    vit?: number;
  };
  vit?: number;
  xp?: number;
}
