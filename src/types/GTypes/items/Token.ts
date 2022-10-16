export type TokenKey =
  | "friendtoken" // Friend Token
  | "funtoken" // Fun Token
  | "monstertoken" // Monster Token
  | "pvptoken"; // PVP Token

export interface GToken {
  name: string;
  g: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
  npc?: string;
}
