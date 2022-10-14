export type EventsKey =
  | "egghunt" // Egg Hunt
  | "abtesting" // A/B Testing
  | "valentines" // Valentines
  | "crabxx" // Giga Crab
  | "goobrawl" // Goo Brawl
  | "icegolem" // Ice Golem
  | "franky" // Franky
  | "halloween" // Halloween
  | "lunarnewyear" // Lunar New Year
  | "holidayseason"; // Holiday Season

export interface GEvents {
  duration: number;
  type: string;
  name: string;
  modal: string;
  sprite: string;
  join?: boolean;
}
