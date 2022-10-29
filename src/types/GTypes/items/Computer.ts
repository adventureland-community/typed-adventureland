import type { PositionKey } from "../positions/Positions";

export type ComputerKey =
  | "computer" // Ancient Computer
  | "supercomputer"; // Super Computer

export interface GComputer {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  explanation: string;
  stand: string;
  /** The skin of the item. */
  skin: PositionKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "computer";
  special: boolean;
}
