export type All_itemKey = "glitched" | "legacy" | "lucky" | "shiny";

export interface GAll_item {
  source?: string;
  type: "all_items";
  random_stat?: number;
  title: string;
  manual?: boolean;
  misc?: boolean;
  luck?: number;
  improve?: boolean;
}
