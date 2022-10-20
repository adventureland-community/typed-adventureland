export type MiscOffhandKey =
  | "exoarm" // Exoskeletal Arm
  | "lantern"; // The Lantern

export interface GMiscOffhand {
  armor?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound: {
    evasion?: number;
    int?: number;
    resistance?: number;
    str?: number;
  };
  cx: {
    scale?: number;
  };
  evasion?: number;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  int?: number;
  /** The full display name of an item. */
  name: string;
  resistance?: number;
  /** The skin of the item. */
  skin: MiscOffhandKey;
  str?: number;
  /** The tier of the item. */
  tier: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "misc_offhand";
}
