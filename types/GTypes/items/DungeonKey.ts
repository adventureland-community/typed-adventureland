export type DungeonKeyKey =
  | "cryptkey" // The Crypt Key
  | "frozenkey" // The Frozen Cave Key
  | "stonekey" // The Stone Key
  | "tombkey"; // The Tomb Key

export interface GDungeonKey {
  name: string;
  g: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
  opens: string;
}
