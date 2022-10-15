export type MiscOffhandKey =
  | "exoarm" // Exoskeletal Arm
  | "lantern"; // The Lantern

export interface GMiscOffhand {
  int?: number;
  explanation: string;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    int?: number,
    str?: number,
    resistance?: number,
    evasion?: number,
  };
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: Array<unknown>;
  cx: {
    scale?: number,
  };
  /** The skin of the item. */
  skin: string;
  /** The tier of the item. */
  tier: number;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  armor?: number;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  resistance?: number;
  evasion?: number;
}
