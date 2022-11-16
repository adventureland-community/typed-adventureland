import { SkillKey } from "./G";
import { Tuple } from "./types/GTypes/utils";

export {}; // Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.

export type SkillTarget = string | { id: string };

declare global {
  function use_skill(name: "use_hp" | "use_mp"): void; // Promise<any>;

  function use_skill(name: "magiport", target: SkillTarget): Promise<any>;

  function use_skill(name: "use_town"): Promise<any>;

  /** For destination, it's an array of [x, y] */
  function use_skill(name: "blink", pos: [x: number, y: number]): Promise<unknown>;

  /** The string is the ID of the target, the number is how much mana to spend on the attack */
  function use_skill(
    name: "cburst",
    targets: [target: SkillTarget, mana: number][]
  ): Promise<unknown>;

  function use_skill(name: "3shot", targets: Tuple<SkillTarget, 1>): Promise<Tuple<unknown, 1>>;
  function use_skill(name: "3shot", targets: Tuple<SkillTarget, 2>): Promise<Tuple<unknown, 2>>;
  function use_skill(name: "3shot", targets: Tuple<SkillTarget, 3>): Promise<Tuple<unknown, 3>>;

  function use_skill(name: "5shot", targets: Tuple<SkillTarget, 1>): Promise<Tuple<unknown, 1>>;
  function use_skill(name: "5shot", targets: Tuple<SkillTarget, 2>): Promise<Tuple<unknown, 2>>;
  function use_skill(name: "5shot", targets: Tuple<SkillTarget, 3>): Promise<Tuple<unknown, 3>>;
  function use_skill(name: "5shot", targets: Tuple<SkillTarget, 4>): Promise<Tuple<unknown, 4>>;
  function use_skill(name: "5shot", targets: Tuple<SkillTarget, 5>): Promise<Tuple<unknown, 5>>;

  function use_skill(name: "throw", target: SkillTarget, inventorySlot: number): Promise<unknown>;

  function use_skill(name: "energize", target: SkillTarget, optionalMP: number): Promise<unknown>;

  // TODO: Skills accepting a target have `G.skills[name].target` set.
  // TODO: G.skills[name].target can be `true`, `"player"` or `"monster"`.

  function use_skill(
    name: Exclude<
      SkillKey,
      | "use_hp"
      | "use_mp"
      | "magiport"
      | "use_town"
      | "blink"
      | "cburst"
      | "3shot"
      | "5shot"
      | "throw"
      | "energize"
    >,
    target?: SkillTarget
  ): Promise<void>;
}
