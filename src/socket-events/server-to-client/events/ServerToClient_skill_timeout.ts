import { SkillKey } from "../../../G";

export type ServerToClient_skill_timeout = {
  name: SkillKey;
  ms: number;
  penalty: number;
};
