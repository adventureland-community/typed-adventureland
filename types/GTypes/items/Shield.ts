export type ShieldKey =
  | "mshield" // Shield M
  | "shield" // Shield
  | "sshield" // Spiked Shield
  | "tigershield" // Shield of the Tiger
  | "wshield" // Wooden Shield
  | "xshield"; // Shield X

export interface GShield {
  stat?: number;
  grades: Array<unknown>;
  cx?: {
    accent: string,
  };
  skin: string;
  tier: number;
  upgrade: {
    armor?: number,
    stat?: number,
    luck?: number,
    resistance?: number,
    dreturn?: number,
    str?: number,
  };
  name: string;
  g: number;
  armor?: number;
  type: string;
  luck?: number;
  resistance?: number;
  dreturn?: number;
  set?: string;
  speed?: number;
  dex?: number;
  evasion?: number;
  int?: number;
  explanation?: string;
  crit?: number;
  str?: number;
  xp?: number;
}
