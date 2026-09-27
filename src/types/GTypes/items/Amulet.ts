import type { ClassKey } from "../classes/Classes";
import type { SetKey } from "../sets/Sets";
import type { ItemAbility } from "./index";

export type AmuletKey =
  | "amuletofm" // Amulet of Mystery
  | "bfangamulet" // Ghastly Bat Fang
  | "dexamulet" // Amulet of Dexterity
  | "gloampendant" // Gloam Pendant
  | "gnomecap" // Gnomish Capacitor
  | "heartwoodlocket" // Heartwood Locket
  | "hpamulet" // Amulet of HP
  | "intamulet" // Amulet of Intelligence
  | "keepsakependant" // Keepsake Pendant
  | "mpxamulet" // Amulet of MP
  | "northstar" // The North Star
  | "paleclaw" // Paleclaw Totem
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
  a?: boolean;
  ability?: ItemAbility;
  apiercing?: number;
  armor?: number;
  attr0?: number;
  attr1?: number;
  aura?: AmuletKey;
  /** An array of classes that can use this item. */
  class?: [ClassKey];
  /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
  compound?: {
    apiercing?: number;
    armor?: number;
    attr0?: number;
    attr1?: number;
    crit?: number;
    critdamage?: number;
    dex?: number;
    dreturn?: number;
    evasion?: number;
    for?: number;
    frequency?: number;
    gold?: number;
    hp?: number;
    int?: number;
    lifesteal?: number;
    luck?: number;
    mp?: number;
    mp_cost?: number;
    mp_reduction?: number;
    reflection?: number;
    resistance?: number;
    str?: number;
    vit?: number;
    xp?: number;
  };
  crit?: number;
  critdamage?: number;
  cx?: {
    accent: string;
  };
  dex?: number;
  dreturn?: number;
  edge?: number;
  evasion?: number;
  exclusive?: boolean;
  explanation?: string;
  for?: number;
  frequency?: number;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  gold?: number;
  /** The first number refers to what level the item begins being `high` grade, the second for `rare`. */
  grades: [number, number, number, number];
  hp?: number;
  int?: number;
  lifesteal?: number;
  luck?: number;
  manasteal?: number;
  mp?: number;
  mp_cost?: number;
  mp_reduction?: number;
  /** The full display name of an item. */
  name: string;
  reflection?: number;
  resistance?: number;
  rpiercing?: number;
  /** The set this item is part of `G.sets.wanderers`. */
  set?: SetKey;
  /** The skin of the item. */
  skin: AmuletKey;
  str?: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "amulet";
  /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
  upgrade?: {
    apiercing: number;
    rpiercing: number;
  };
  vit?: number;
  xp?: number;
}
