export type PlaceholderKey =
  | "placeholder" // Placeholder
  | "placeholder_m"; // Placeholder

export interface GPlaceholder {
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore: boolean;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: PlaceholderKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "placeholder";
}
