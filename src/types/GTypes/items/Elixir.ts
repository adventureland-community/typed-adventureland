import type { SetKey } from "../sets/Sets";

export type ElixirKey =
  | "ale" // Ale
  | "blue" // Blue Horizon
  | "bunnyelixir" // Bunny Energy Drink
  | "cake" // Piece of Cake
  | "candypop" // Candy Pop
  | "eggnog" // Eggnog
  | "elixirdex0" // Elixir of Dexterity
  | "elixirdex1" // Elixir of Greater Dexterity
  | "elixirdex2" // Elixir of Extreme Dexterity
  | "elixirfires" // Elixir of Fire Resistance
  | "elixirfzres" // Elixir of Freeze Resistance
  | "elixirint0" // Elixir of Intelligence
  | "elixirint1" // Elixir of Greater Intelligence
  | "elixirint2" // Elixir of Extreme Intelligence
  | "elixirluck" // Liquid Luck
  | "elixirpnres" // Elixir of Poison Resistance
  | "elixirstr0" // Elixir of Strength
  | "elixirstr1" // Elixir of Greater Strength
  | "elixirstr2" // Elixir of Extreme Strength
  | "elixirvit0" // Elixir of Vitality
  | "elixirvit1" // Elixir of Greater Vitality
  | "elixirvit2" // Elixir of Extreme Vitality
  | "espresso" // Espresso
  | "greenbomb" // Green Bomb
  | "gum" // Gum
  | "hotchocolate" // Hot Chocolate
  | "pico" // Pixel Colada
  | "pumpkinspice" // Pumpkin Spice Latte
  | "swirlipop" // Swirlipop
  | "vblood" // Vampire's Blood
  | "whiskey" // Whiskey On The Rocks
  | "wine" // Red Wine
  | "xshot"; // X-Shot

export interface GElixir {
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  skin_a: ElixirKey;
  str?: number;
  miss?: number;
  /** The skin of the item. */
  skin: ElixirKey;
  duration: number;
  speed?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "elixir";
  /** The full display name of an item. */
  name: string;
  evasion?: number;
  hp?: number;
  vit?: number;
  dex?: number;
  mp?: number;
  explanation?: string;
  eat?: boolean;
  int?: number;
  /** Refers to how many items are needed to exchange (see .quest as well!) */
  e?: number;
  luck?: number;
  a?: boolean;
  firesistance?: number;
  fzresistance?: number;
  pnresistance?: number;
  resistance?: number;
  crit?: number;
  withdrawal?: string;
  reflection?: number;
  armor?: number;
  rpiercing?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  lifesteal?: number;
  apiercing?: number;
}
