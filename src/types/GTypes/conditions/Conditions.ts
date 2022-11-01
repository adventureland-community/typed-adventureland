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
  armor?: number;
  attr0?: string;
  aura?: boolean;
  blocked?: boolean;
  buff?: boolean;
  can_move?: boolean;
  cap_reflection?: number;
  channel?: boolean;
  courage?: number;
  damage?: number;
  debuff?: boolean;
  dex?: number;
  duration?: number;
  duration_min?: number;
  evasion?: number;
  explanation?: string;
  frequency?: number;
  frequencym?: number;
  gold?: number;
  heal?: number;
  healm?: number;
  incdmgamp?: number;
  intensity?: string;
  interval?: number;
  lifesteal?: number;
  luck?: number;
  mcourage?: number;
  miss?: number;
  mp?: number;
  mp_cost?: number;
  name: string;
  output?: number;
  pcourage?: number;
  persistent?: boolean;
  potionsm?: number;
  reflection?: number;
  resistance?: number;
  set_speed?: number;
  skin?: string;
  special?: PotKey;
  speed?: number;
  str?: number;
  technical?: boolean;
  ui?: boolean;
  xp?: number;
}
