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
  compound?: {
    dex?: number,
    dreturn?: number,
    int?: number,
    str?: number,
    evasion?: number,
    crit?: number,
    hp?: number,
    armor?: number,
    critdamage?: number,
    lifesteal?: number,
    apiercing?: number,
    mp_cost?: number,
    mp_reduction?: number,
    xp?: number,
    attr0?: number,
    for?: number,
    vit?: number,
    resistance?: number,
  };
  name: string;
  armor?: number;
  grades: [number, number, number, number];
  g: number;
  a?: boolean;
  str?: number;
  skin: string;
  crit?: number;
  type: string;
  manasteal?: number;
  lifesteal?: number;
  critdamage?: number;
  apiercing?: number;
  mp_cost?: number;
  set?: string;
  mp_reduction?: number;
  xp?: number;
  attr0?: number;
  aura?: string;
  for?: number;
  gold?: number;
  luck?: number;
  edge?: number;
  vit?: number;
  resistance?: number;
  explanation?: string;
  upgrade?: {
    apiercing: number,
    rpiercing: number,
  };
  rpiercing?: number;
}
