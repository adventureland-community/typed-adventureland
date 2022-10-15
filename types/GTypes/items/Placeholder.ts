export type PlaceholderKey =
  | "placeholder" // Placeholder
  | "placeholder_m"; // Placeholder

export interface GPlaceholder {
  ignore: boolean;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
}
