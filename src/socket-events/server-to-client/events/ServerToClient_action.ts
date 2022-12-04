import { ConditionKey, ProjectileKey, SkillKey } from "../../../G";

export type ServerToClient_action_base = {
  attacker: string;
  conditions?: Array<ConditionKey>;
  damage?: number;
  heal?: number;
  eta: number;
  m: number;
  pid: string;
  source: SkillKey;
  target: string;
  type: SkillKey;
  x: number;
  y: number;
};

export type ServerToClient_action_projectile = ServerToClient_action_base & {
  projectile: ProjectileKey;
};

export type ServerToClient_action_ray = ServerToClient_action_base & {
  instant: boolean;
};

export type ServerToClient_action = ServerToClient_action_projectile | ServerToClient_action_ray;
