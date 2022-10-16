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
  g: number;
  s: number;
  skin_a: string;
  str?: number;
  miss?: number;
  skin: string;
  duration: number;
  speed?: number;
  type: string;
  name: string;
  evasion?: number;
  hp?: number;
  vit?: number;
  dex?: number;
  mp?: number;
  explanation?: string;
  eat?: boolean;
  int?: number;
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
  set?: string;
  lifesteal?: number;
  apiercing?: number;
}
