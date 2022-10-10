export {} // Augmentations for the global scope can only be directly nested in external modules or ambient module declarations.

declare global {
  // function use_skill(name,target,extra_arg)
  // target: object or string (character name or monster ID)
  // for "blink": use_skill("blink",[x,y])
  // for "3shot", "5shot" target can be an array of objects or strings (name or ID)
  // example: use_skill("3shot",[target1,target2,target3])
  // extra_arg is currently for
  //    use_skill("throw",target,inventory_num)
  //    and use_skill("energize",target,optional_mp)
  // Returns a Promise
  // For "3shot", "5shot", "cburst" returns an array of Promise's - one for each target
  // skills are work in progress, promises aren't resolved yet!.
  //   type ShotTarget = Entity | string; // TODO: we need Entity
  function use_skill(name: "use_hp" | "use_mp"): void; // Promise<any>;
  // TODO: we need Entity
  //   function use_skill(name: "3shot", targets: [ShotTarget, ShotTarget | undefined, ShotTarget | undefined]): void; // Promise<any>[];

  // TODO: we need Entity
  //   function use_skill(
  //     name: "5shot",
  //     targets: [
  //       ShotTarget,
  //       ShotTarget | undefined,
  //       ShotTarget | undefined,
  //       ShotTarget | undefined,
  //       ShotTarget | undefined
  //     ]
  //   ): void; // Promise<any>[];

  /** For destination, it's an array of [x, y] */
  function use_skill(
    name: "blink",
    destination: [number, number]
  ): Promise<any>;
  /** The string is the ID of the target, the number is how much mana to spend on the attack */
  function use_skill(name: "cburst", targets: [string, number][]): Promise<any>;
  // TODO: we need Entity
  //   function use_skill(name: "energize", target: Entity, mp: number): Promise<any>;
  function use_skill(name: "magiport", target: string): Promise<any>;
  // TODO: we need Entity
  //   function use_skill(name: "throw", target: Entity, inventoryPostion: number): Promise<any>;
  function use_skill(name: "use_town"): Promise<any>;
  // TODO: we need Entity
  //   function use_skill(name: import("./generated").SkillName, target?: Entity, extraArg?: any): Promise<any>;
}
