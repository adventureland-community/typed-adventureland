import type { SetKey } from "../sets/Sets";

export type SourceKey =
  | "wbook0" // Book of Knowledge
  | "wbook1" // Book of Secrets
  | "wbookhs"; // Book of Cheer

export interface GSource {
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    dex?: number;
    int?: number;
    reflection?: number;
    resistance?: number;
    vit?: number;
  };
  cx: {
    extension: boolean;
    scale: number;
  };
  dex?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  int?: number;
  /** The full display name of an item. */
  name: string;
  reflection?: number;
  resistance?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: SourceKey;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "source";
  vit?: number;
}
