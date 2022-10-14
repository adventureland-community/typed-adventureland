export type PlaceholderKey =
  | "placeholder" // Placeholder
  | "placeholder_m"; // Placeholder

export interface GPlaceholder {
  ignore: boolean;
  type: string;
  name: string;
  g: number;
  skin: string;
}
