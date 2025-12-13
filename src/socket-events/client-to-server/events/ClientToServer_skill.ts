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
      /**
       * Only the first 3 ids are considered if more are passed.
       * If less than 3 ids are passed, the skill is not used to its full potential.
       * Using the same ID more than once does not result in multiple shots at that target.
       */
      ids: string[];
    }
  | {
      name: Extract<SkillKey, "5shot">;
      /**
       * Only the first 5 ids are considered if more are passed.
       * If less than 5 ids are passed, the skill is not used to its full potential.
       * Using the same ID more than once does not result in multiple shots at that target.
       */
      ids: string[];
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
