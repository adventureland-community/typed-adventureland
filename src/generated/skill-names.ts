
export type AbilitySkillName = 
| 'attack' // Attack
| 'regen_hp' // Regenerate HP
| 'regen_mp' // Regenerate MP
| 'stop' // Stop
| 'travel' // Travel!
| 'use_hp' // Use HP Potion
| 'use_mp' // Use MP Potion
| 'use_town' // Town

export type GmSkillName = 
| 'gm' // GM Abilities

export type MageSkillName = 
| 'alchemy' // Alchemy
| 'blink' // Blink
| 'burst' // Mana Burst
| 'cburst' // Controlled Mana Burst
| 'energize' // Energize
| 'entangle' // Entangle
| 'light' // Light
| 'magiport' // Magiport
| 'reflection' // Reflective Shield

export type MerchantSkillName = 
| 'fishing' // Fishing
| 'massproduction' // Mass Production
| 'massproductionpp' // Mass Production++
| 'mcourage' // Merchant's Courage
| 'mfrenzy' // Merchant's Frenzy
| 'mining' // Mining
| 'mluck' // Merchant's Luck
| 'throw' // Throw Stuff

export type MonsterSkillName = 
| 'anger' // Anger
| 'curse_aura' // Curse
| 'dampening_aura' // Dampening
| 'deepfreeze' // Deepfreeze
| 'fireball' // Fireball
| 'frostball' // Frostball
| 'healing' // Healing
| 'mlight' // Light
| 'mtangle' // Tangle
| 'multi_burn' // Multi Burn
| 'multi_freeze' // Multi Freeze
| 'portal' // Portal
| 'self_healing' // Healing
| 'stone' // Stone
| 'warpstomp' // Warpstomp
| 'weakness_aura' // Weakness
| 'zap' // Zap

export type PaladinSkillName = 
| 'mshield' // Mana Shield
| 'purify' // Purify
| 'selfheal' // Heal
| 'smash' // Smash

export type PriestSkillName = 
| 'absorb' // Absorb Sins
| 'curse' // Curse
| 'darkblessing' // Dark Blessing
| 'heal' // Heal
| 'partyheal' // Party Heal
| 'phaseout' // Phase Out
| 'revive' // Revive!

export type RangerSkillName = 
| '3shot' // 3-Shot
| '4fingers' // 4 Finger Technique
| '5shot' // 5-Shot
| 'huntersmark' // Hunter's Mark
| 'piercingshot' // Piercing Shot
| 'poisonarrow' // Poison Arrow
| 'supershot' // Supershot
| 'track' // Track

export type RogueSkillName = 
| 'invis' // Assassin's Smoke
| 'mentalburst' // Mental Burst
| 'pcoat' // A Poisonous Touch
| 'pickpocket' // Pickpocket
| 'quickpunch' // Quick Punch
| 'quickstab' // Quick Stab
| 'rspeed' // Rogue Swiftness
| 'shadowstrike' // Shadow Strike
| 'stack' // Stacked Damage

export type SkillName = 
| 'charm' // Charm
| 'power' // Power
| 'scare' // Scare
| 'snowball' // Snowball
| 'tangle' // Tangle
| 'warp' // Warp
| 'xpower' // Power
| 'zapperzap' // Zap

export type UndefinedSkillName = 
| 'toggle_code' // Toggle Code
| 'toggle_run_code' // Engage/Disengage Code

export type UtilitySkillName = 
| 'emotion' // Emotion
| 'esc' // ESC
| 'interact' // Interact
| 'move_down' // Move Down
| 'move_left' // Move Left
| 'move_right' // Move Right
| 'move_up' // Move Up
| 'open_snippet' // Open Snippet
| 'pure_eval' // Pure Eval
| 'snippet' // Snippet
| 'toggle_character' // Toggle Character
| 'toggle_inventory' // Toggle Inventory
| 'toggle_stats' // Toggle Stats

export type WarriorSkillName = 
| 'agitate' // Agitate
| 'charge' // Charge
| 'cleave' // Cleave
| 'dash' // Dash
| 'hardshell' // Hard Shell
| 'stomp' // Stomp
| 'taunt' // Taunt
| 'warcry' // War Cry

 export type AllSkillNames = 
| AbilitySkillName
| GmSkillName
| MageSkillName
| MerchantSkillName
| MonsterSkillName
| PaladinSkillName
| PriestSkillName
| RangerSkillName
| RogueSkillName
| SkillName
| UndefinedSkillName
| UtilitySkillName
| WarriorSkillName
