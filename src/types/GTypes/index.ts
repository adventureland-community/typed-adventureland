import type { ClassKey, GClass } from "./classes";
import type { ConditionKey, GCondition } from "./conditions";
import type { DismantleKey, GDismantle } from "./dismantle";
import type { EventKey, GEvent } from "./events";
import type { ItemKey, GItem } from "./items";
import type { MapKey, GMap } from "./maps";
import type { MonsterKey, GMonster } from "./monsters";
import type { NpcKey, GNpc } from "./npcs";
import type { SetKey, GSet } from "./sets";
import type { SkillKey, GSkill } from "./skills";

export type GData = {
  classes: { [T in ClassKey]: GClass };
  conditions: { [T in ConditionKey]: GCondition };
  dismantle: { [T in DismantleKey]: GDismantle };
  events: { [T in EventKey]: GEvent };
  items: { [T in ItemKey]: GItem };
  maps: { [T in MapKey]: GMap };
  monsters: { [T in MonsterKey]: GMonster };
  npcs: { [T in NpcKey]: GNpc };
  sets: { [T in SetKey]: GSet };
  skills: { [T in SkillKey]: GSkill };
};
