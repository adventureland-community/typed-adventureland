export type EventKey =
  | "abtesting" // A/B Testing
  | "crabxx" // Giga Crab
  | "egghunt" // Egg Hunt
  | "franky" // Franky
  | "goobrawl" // Goo Brawl
  | "halloween" // Halloween
  | "holidayseason" // Holiday Season
  | "icegolem" // Ice Golem
  | "lunarnewyear" // Lunar New Year
  | "valentines"; // Valentines

export interface GEvent {
  duration: number;
  join?: boolean;
  modal: string;
  name: string;
  sprite: string;
  type: string;
}
