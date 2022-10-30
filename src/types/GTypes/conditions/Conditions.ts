import type { PotKey } from "../items/Pot";

export type ConditionKey =
  | "authfail" // Authorization Failure
  | "blink" // Blinking
  | "block" // PVP Block
  | "burned" // Burned
  | "charging" // Charging
  | "charmed" // Charmed
  | "cursed" // Cursed
  | "dampened" // Dampened
  | "darkblessing" // Dark Blessing
  | "dash" // Dashing
  | "deepfreezed" // Deepfreezed
  | "easterluck" // Easter Luck
  | "eburn" // Burn
  | "eheal" // Rejuvenate
  | "energized" // Energized
  | "fingered" // Deep Meditation
  | "fishing" // Fishing
  | "frozen" // Frozen
  | "fullguard" // Full Guard
  | "fullguardx" // Full Guard
  | "halloween0" // Halloween Spirit
  | "halloween1" // Halloween Spirit
  | "halloween2" // Halloween Spirit
  | "hardshell" // Hard Shell
  | "holidayspirit" // Holiday Spirit
  | "hopsickness" // Hop Sickness
  | "invincible" // Invincible
  | "invis" // Invisible
  | "licenced" // Licenced to Kill
  | "marked" // Marked
  | "massproduction" // Mass Production
  | "massproductionpp" // Mass Production++
  | "mcourage" // Merchant's Courage
  | "mfrenzy" // Merchant's Frenzy
  | "mining" // Mining
  | "mlifesteal" // Lifesteal
  | "mluck" // Good Luck
  | "monsterhunt" // On The Hunt
  | "mshield" // Mana Shield
  | "newcomersblessing" // Newcomers' Blessing
  | "notverified" // Not Verified
  | "penalty_cd" // Penalty Cooldown
  | "phasedout" // Phased Out
  | "pickpocket" // Pickpocket
  | "poisoned" // Poison
  | "poisonous" // Poisonous
  | "power" // Power
  | "purifier" // Purifier
  | "reflection" // Reflective Shield
  | "rspeed" // Rogue Swiftness
  | "sanguine" // Vampiric Aura
  | "shocked" // Shocked
  | "sleeping" // Sleeping
  | "slowness" // Slowness
  | "stack" // Pure Damage
  | "stoned" // Stoned
  | "stunned" // Stunned
  | "sugarrush" // Sugar Rush
  | "tangled" // Tangled
  | "town" // Town
  | "warcry" // War Cry
  | "weakness" // Weakness
  | "withdrawal" // Withdrawal
  | "woven" // Woven
  | "xpower" // Power
  | "xshotted"; // X-Shot

export interface GCondition {
  aura?: boolean;
  ui?: boolean;
  name: string;
  gold?: number;
  skin?: string;
  duration?: number;
  xp?: number;
  persistent?: boolean;
  luck?: number;
  mp_cost?: number;
  frequency?: number;
  output?: number;
  buff?: boolean;
  debuff?: boolean;
  blocked?: boolean;
  explanation?: string;
  str?: number;
  duration_min?: number;
  channel?: boolean;
  incdmgamp?: number;
  speed?: number;
  armor?: number;
  resistance?: number;
  special?: PotKey;
  courage?: number;
  evasion?: number;
  pcourage?: number;
  mcourage?: number;
  intensity?: string;
  interval?: number;
  damage?: number;
  lifesteal?: number;
  attr0?: string;
  technical?: boolean;
  heal?: number;
  miss?: number;
  set_speed?: number;
  dex?: number;
  can_move?: boolean;
  cap_reflection?: number;
  reflection?: number;
  mp?: number;
  healm?: number;
  frequencym?: number;
  potionsm?: number;
}
