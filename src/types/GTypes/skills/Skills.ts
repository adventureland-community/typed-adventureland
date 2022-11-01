import type { ClassKey } from "../classes/Classes";
import type { ConditionKey } from "../conditions/Conditions";
import type { DismantleKey } from "../dismantle/Dismantle";
import type { ItemKey } from "../items/index";
import type { ProjectileKey } from "../projectiles/Projectiles";
import type { ThrowKey } from "../items/Throw";
import type { WeaponType } from "../items/index";

export type SkillKey =
  | "3shot" // 3-Shot
  | "4fingers" // 4 Finger Technique
  | "5shot" // 5-Shot
  | "absorb" // Absorb Sins
  | "agitate" // Agitate
  | "alchemy" // Alchemy
  | "anger" // Anger
  | "attack" // Attack
  | "blink" // Blink
  | "burst" // Mana Burst
  | "cburst" // Controlled Mana Burst
  | "charge" // Charge
  | "charm" // Charm
  | "cleave" // Cleave
  | "curse" // Curse
  | "curse_aura" // Curse
  | "dampening_aura" // Dampening
  | "darkblessing" // Dark Blessing
  | "dash" // Dash
  | "deepfreeze" // Deepfreeze
  | "emotion" // Emotion
  | "energize" // Energize
  | "entangle" // Entangle
  | "esc" // ESC
  | "fireball" // Fireball
  | "fishing" // Fishing
  | "frostball" // Frostball
  | "gm" // GM Abilities
  | "hardshell" // Hard Shell
  | "heal" // Heal
  | "healing" // Healing
  | "huntersmark" // Hunter's Mark
  | "interact" // Interact
  | "invis" // Assassin's Smoke
  | "light" // Light
  | "magiport" // Magiport
  | "massproduction" // Mass Production
  | "massproductionpp" // Mass Production++
  | "mcourage" // Merchant's Courage
  | "mentalburst" // Mental Burst
  | "mfrenzy" // Merchant's Frenzy
  | "mining" // Mining
  | "mlight" // Light
  | "mluck" // Merchant's Luck
  | "move_down" // Move Down
  | "move_left" // Move Left
  | "move_right" // Move Right
  | "move_up" // Move Up
  | "mshield" // Mana Shield
  | "mtangle" // Tangle
  | "multi_burn" // Multi Burn
  | "multi_freeze" // Multi Freeze
  | "open_snippet" // Open Snippet
  | "partyheal" // Party Heal
  | "pcoat" // A Poisonous Touch
  | "phaseout" // Phase Out
  | "pickpocket" // Pickpocket
  | "piercingshot" // Piercing Shot
  | "poisonarrow" // Poison Arrow
  | "portal" // Portal
  | "power" // Power
  | "pure_eval" // Pure Eval
  | "purify" // Purify
  | "quickpunch" // Quick Punch
  | "quickstab" // Quick Stab
  | "reflection" // Reflective Shield
  | "regen_hp" // Regenerate HP
  | "regen_mp" // Regenerate MP
  | "revive" // Revive!
  | "rspeed" // Rogue Swiftness
  | "scare" // Scare
  | "self_healing" // Healing
  | "selfheal" // Heal
  | "shadowstrike" // Shadow Strike
  | "smash" // Smash
  | "snippet" // Snippet
  | "snowball" // Snowball
  | "stack" // Stacked Damage
  | "stomp" // Stomp
  | "stone" // Stone
  | "stop" // Stop
  | "supershot" // Supershot
  | "tangle" // Tangle
  | "taunt" // Taunt
  | "throw" // Throw Stuff
  | "toggle_character" // Toggle Character
  | "toggle_code" // Toggle Code
  | "toggle_inventory" // Toggle Inventory
  | "toggle_run_code" // Engage/Disengage Code
  | "toggle_stats" // Toggle Stats
  | "track" // Track
  | "travel" // Travel!
  | "use_hp" // Use HP Potion
  | "use_mp" // Use MP Potion
  | "use_town" // Town
  | "warcry" // War Cry
  | "warp" // Warp
  | "warpstomp" // Warpstomp
  | "weakness_aura" // Weakness
  | "xpower" // Power
  | "zap" // Zap
  | "zapperzap"; // Zap

export interface GSkill {
  action?: string;
  apiercing?: number;
  aura?: boolean;
  class?: ClassKey[];
  code?: boolean | string;
  complementary?: string;
  condition?: ConditionKey;
  consume?: ItemKey;
  cooldown?: number;
  cooldown_multiplier?: number;
  damage?: number;
  damage_multiplier?: number;
  damage_type?: string;
  duration?: number;
  duration_max?: number;
  duration_min?: number;
  explanation?: string;
  global?: boolean;
  heal?: boolean;
  hostile?: boolean;
  inventory?: [ThrowKey];
  kill_buff?: ConditionKey;
  level?: number;
  levels?: Array<[number, number]>;
  list?: boolean;
  max?: number;
  merchant_use?: boolean;
  monsters?: boolean;
  mp?: number;
  multi?: boolean;
  name: string;
  negative?: [DismantleKey];
  nprop?: [SkillKey, string];
  output?: number;
  party?: boolean;
  passive?: boolean;
  persistent?: boolean;
  pierces_immunity?: boolean;
  positive?: [DismantleKey];
  procs?: boolean;
  projectile?: ProjectileKey;
  range?: number;
  range_bonus?: number;
  range_multiplier?: number;
  ratio?: number;
  requirements?: {
    int: number;
  };
  reuse_cooldown?: number;
  set_speed?: number;
  share?: SkillKey;
  skin?: string;
  skins?: [string, string, string];
  slot?: Array<[string, ItemKey]>;
  target?: boolean | string;
  toggle?: boolean;
  type?: string;
  ui?: boolean;
  use_range?: boolean;
  variance?: number;
  warning?: string;
  wtype?: Array<WeaponType> | WeaponType;
}
