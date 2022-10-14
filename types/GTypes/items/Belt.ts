export type BeltKey =
  | "dexbelt" // Belt of Dexterity
  | "hpbelt" // Belt of HP
  | "intbelt" // Belt of Intelligence
  | "lbelt" // Belt
  | "mbelt" // Well-Crafted Belt
  | "mpxbelt" // Belt of MP Reduction
  | "santasbelt" // Santa's Belt
  | "sbelt" // Belt of Hallowed Trials
  | "strbelt"; // Belt of Strength

export interface GBelt {
  dex?: number;
  name: string;
  g: number;
  skin: string;
  grades: Array<unknown>;
  compound: {
    dex?: number,
    hp?: number,
    int?: number,
    armor?: number,
    speed?: number,
    mp_cost?: number,
    mp_reduction?: number,
    resistance?: number,
    str?: number,
  };
  type: string;
  hp?: number;
  int?: number;
  armor?: number;
  speed?: number;
  explanation?: string;
  a?: boolean;
  mp_cost?: number;
  set?: string;
  mp_reduction?: number;
  evasion?: number;
  resistance?: number;
  for?: number;
  str?: number;
}
