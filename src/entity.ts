export { SlotType, TradeSlotType } from "./entities/slots";
// import { StatusInfo } from "./entities/status-info";
// import { ItemInfo } from "./items";
// import { PositionMovable } from "./position";
// import { ClassKey } from "./types/GTypes/classes";
// import { MonsterKey } from "./types/GTypes/monsters";
// import { NpcKey } from "./types/GTypes/npcs";

import { CharacterEntity } from "./entities/character-entity";
import { MonsterEntity } from "./entities/monster-entity";
import { NpcEntity } from "./entities/npc-entity";
import { BetterUXWrapper } from "./types/GTypes/utils";

export type { CharacterEntity, MonsterEntity, NpcEntity };

// export type EntityBase = {
//   h: number;
//   v: number;
//   vn: number;
// };

// TODO: Get all types (from G?)
export type DamageType = "magical" | "physical";

export type RawEntity = MonsterEntity | CharacterEntity | NpcEntity | Character;
export type Entity = BetterUXWrapper<RawEntity>;
