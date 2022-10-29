import type { GemKey } from "../items/Gem";
import type { TitleKey } from "../titles/Titles";

export type AchievementKey =
  | "1000boss" // 1000th Boss
  | "100boss" // 100th Boss
  | "abtesting" // 1000 Test Kills
  | "discoverlair" // [Discover] Lair
  | "festive" // Festive
  | "firehazard" // Fire Hazard
  | "gooped" // Gooped
  | "lucky" // Lucky
  | "monsterhunter" // Monster Hunter
  | "reach40" // Become Level 40
  | "reach50" // Become Level 50
  | "reach60" // Become Level 60
  | "reach70" // Become Level 70
  | "reach80" // Become Level 80
  | "reach90" // Is it even possible?!
  | "stomped" // Stomped
  | "upgrade10"; // The Final Frontier

export interface GAchievement {
  count?: number;
  explanation?: string;
  name: string;
  title?: TitleKey;
  rr?: number;
  shells?: number;
  item?: GemKey;
}
