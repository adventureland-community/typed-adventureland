import type { DismantleKey, GDismantle } from "./dismantle";
import type { EventsKey, GEvents } from "./events";
import type { ItemsKey, GItems } from "./items";
import type { MapsKey, GMaps } from "./maps";
import type { MonstersKey, GMonsters } from "./monsters";
import type { NpcsKey, GNpcs } from "./npcs";
import type { SetsKey, GSets } from "./sets";
import type { SkillsKey, GSkills } from "./skills";

export type GData = {
  dismantle: { [T in DismantleKey]: GDismantle };
  events: { [T in EventsKey]: GEvents };
  items: { [T in ItemsKey]: GItems };
  maps: { [T in MapsKey]: GMaps };
  monsters: { [T in MonstersKey]: GMonsters };
  npcs: { [T in NpcsKey]: GNpcs };
  sets: { [T in SetsKey]: GSets };
  skills: { [T in SkillsKey]: GSkills };
};
