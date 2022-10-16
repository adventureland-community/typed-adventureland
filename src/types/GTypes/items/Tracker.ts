export type TrackerKey = "tracker"; // Tracktrix

export type ItemType = "tracker";

export interface GTracker {
  acolor: string;
  onclick: string;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  action: string;
  explanation: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  special: boolean;
}
