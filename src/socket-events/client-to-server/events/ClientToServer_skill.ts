import { SkillKey } from "../../../G";
import {
  SkillKey_CoordinatesNeeded,
  SkillKey_ItemAndTargetNeeded,
  SkillKey_ItemNeeded,
  SkillKey_NoParameter,
  SkillKey_TargetParameter,
} from "../../../skills";

export type ClientToServer_skill =
  /** Skills that don't take any parameters */
  | {
      name: SkillKey_NoParameter;
    }
  /** Skills that target an entity */
  | {
      name: SkillKey_TargetParameter;
      id: string;
    }
  /** Skills that use an item */
  | {
      name: SkillKey_ItemNeeded;
      num: number;
    }
  /** Skills that target an entity and use an item */
  | {
      name: SkillKey_ItemAndTargetNeeded;
      id: string;
      num: number;
    }
  /** Skills that need coordinates */
  | {
      name: SkillKey_CoordinatesNeeded;
      x: number;
      y: number;
    }
  /** Other special skills */
  | {
      name: Extract<SkillKey, "3shot">;
      ids: [string, string, string];
    }
  | {
      name: Extract<SkillKey, "5shot">;
      ids: [string, string, string, string, string];
    }
  | {
      name: Extract<SkillKey, "cburst">;
      targets: [string, number][];
    }
  | {
      name: Extract<SkillKey, "energize">;
      id: string;
      mp: number;
    };
