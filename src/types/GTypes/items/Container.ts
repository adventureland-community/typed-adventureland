import type { BoxKey } from "./Box";

export type ContainerKey = "monsterbox"; // Monster Box

export interface GContainer {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  grade: number;
  ignore: boolean;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: BoxKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "container";
}
