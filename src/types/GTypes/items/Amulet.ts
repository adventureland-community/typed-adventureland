import type { SetKey } from "../sets/Sets";

export type AmuletKey =
  | "amuletofm" // Amulet of Mystery
  | "bfangamulet" // Ghastly Bat Fang
  | "dexamulet" // Amulet of Dexterity
  | "hpamulet" // Amulet of HP
  | "intamulet" // Amulet of Intelligence
  | "mpxamulet" // Amulet of MP
  | "northstar" // The North Star
  | "sanguine" // Sanguine Amulet
  | "skullamulet" // Skull Amulet
  | "snring" // Stompy's Nose Ring
  | "spookyamulet" // Amulet of Spooks
  | "stramulet" // Amulet of Strength
  | "t2dexamulet" // Amulet of the Stubborn Ranger
  | "t2intamulet" // Amulet of the Fierce Mage
  | "t2stramulet" // Amulet of the Eager Warrior
  | "warmscarf"; // Warm Scarf

export interface GAmulet {
  dex?: number;
  dreturn?: number;
  reflection?: number;
  evasion?: number;
  int?: number;
  hp?: number;
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    dex?: number;
    dreturn?: number;
    int?: number;
    str?: number;
    evasion?: number;
    crit?: number;
    hp?: number;
    armor?: number;
    critdamage?: number;
    lifesteal?: number;
    apiercing?: number;
    mp_cost?: number;
    mp_reduction?: number;
    xp?: number;
    attr0?: number;
    for?: number;
    vit?: number;
    resistance?: number;
  };
  /** The full display name of an item. */
  name: string;
  armor?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  a?: boolean;
  str?: number;
  /** The skin of the item. */
  skin: AmuletKey;
  crit?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "amulet";
  manasteal?: number;
  lifesteal?: number;
  critdamage?: number;
  apiercing?: number;
  mp_cost?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  mp_reduction?: number;
  xp?: number;
  attr0?: number;
  aura?: AmuletKey;
  for?: number;
  gold?: number;
  luck?: number;
  edge?: number;
  vit?: number;
  resistance?: number;
  explanation?: string;
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {
    apiercing: number;
    rpiercing: number;
  };
  rpiercing?: number;
}
