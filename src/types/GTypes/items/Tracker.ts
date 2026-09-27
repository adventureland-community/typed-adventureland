export type TrackerKey = "tracker"; // Tracktrix

export interface GTracker {
  acolor: string;
  action: string;
  cavalry: {
    cooldown_base: number;
    cooldown_per_level: number;
    duration: number;
    max_targets: number;
    min_level: number;
    newcomer_duration: number;
    newcomer_level: number;
    newcomer_targets: number;
    range: number;
    veteran_range: number;
  };
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
