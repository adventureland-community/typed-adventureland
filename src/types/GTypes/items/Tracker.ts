export type TrackerKey = "tracker"; // Tracktrix

export interface GTracker {
  acolor: string;
  action: string;
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  onclick: string;
  /** The skin of the item. */
  skin: TrackerKey;
  special: boolean;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "tracker";
}
