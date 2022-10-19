import type { ClassKey } from "../classes/Classes";
import type { DismantleKey } from "../dismantle/Dismantle";
import type { ItemKey } from "../items/index";
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
  explanation?: string;
  cooldown?: number;
  type?: string;
  name: string;
  skin?: string;
  class?: [ClassKey];
  level?: number;
  wtype?: Array<WeaponType> | WeaponType;
  persistent?: boolean;
  range?: number;
  mp?: number;
  duration_max?: number;
  duration_min?: number;
  reuse_cooldown?: number;
  share?: SkillKey;
  cooldown_multiplier?: number;
  duration?: number;
  condition?: string;
  ui?: boolean;
  code?: boolean | string;
  skins?: [string, string, string];
  passive?: boolean;
  hostile?: boolean;
  aura?: boolean;
  consume?: ItemKey;
  output?: number;
  levels?: Array<[number, number]>;
  party?: boolean;
  action?: string;
  variance?: number;
  damage_type?: string;
  multi?: boolean;
  projectile?: string;
  heal?: boolean;
  damage_multiplier?: number;
  pierces_immunity?: boolean;
  use_range?: boolean;
  procs?: boolean;
  target?: boolean | string;
  damage?: number;
  merchant_use?: boolean;
  inventory?: [ThrowKey];
  ratio?: number;
  list?: boolean;
  warning?: string;
  requirements?: {
    int: number;
  };
  range_multiplier?: number;
  range_bonus?: number;
  slot?: Array<[string, ItemKey]>;
  nprop?: [SkillKey, string];
  positive?: [DismantleKey];
  negative?: [DismantleKey];
  monsters?: boolean;
  toggle?: boolean;
  set_speed?: number;
  apiercing?: number;
  max?: number;
  kill_buff?: string;
  global?: boolean;
  complementary?: string;
}
