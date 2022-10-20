export type ComputerKey =
  | "computer" // Ancient Computer
  | "supercomputer"; // Super Computer

export interface GComputer {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: string;
  special: boolean;
  stand: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "computer";
}
