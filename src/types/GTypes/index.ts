import type { EventsKey, GEvents } from "./events";
import type {
  ItemsKey,
  GActivator,
  GAmulet,
  GBankKey,
  GBelt,
  GBooster,
  GBox,
  GCape,
  GChest,
  GChrysalis,
  GCompoundScroll,
  GComputer,
  GContainer,
  GCosmetics,
  GDungeonKey,
  GEarring,
  GElixir,
  GFlute,
  GGem,
  GGloves,
  GHelmet,
  GJar,
  GLicence,
  GMaterial,
  GMisc,
  GMiscOffhand,
  GOffering,
  GOrb,
  GPants,
  GPetLicence,
  GPlaceholder,
  GPot,
  GQubics,
  GQuest,
  GQuiver,
  GRing,
  GShield,
  GShoes,
  GSkillItem,
  GSource,
  GSpawner,
  GStand,
  GStatScroll,
  GStone,
  GTest,
  GThrow,
  GToken,
  GTome,
  GTool,
  GTracker,
  GUpgradeScroll,
  GWeapon,
  GXP,
} from "./items";
import type { MapsKey, GMaps } from "./maps";
import type { MonstersKey, GMonsters } from "./monsters";
import type { NpcsKey, GNpcs } from "./npcs";
import type { SetsKey, GSets } from "./sets";
import type { SkillsKey, GSkills } from "./skills";

export type GData = {
  events: { [T in EventsKey]: GEvents };
  items: {
    [T in ItemsKey]:
      | GActivator
      | GAmulet
      | GBankKey
      | GBelt
      | GBooster
      | GBox
      | GCape
      | GChest
      | GChrysalis
      | GCompoundScroll
      | GComputer
      | GContainer
      | GCosmetics
      | GDungeonKey
      | GEarring
      | GElixir
      | GFlute
      | GGem
      | GGloves
      | GHelmet
      | GJar
      | GLicence
      | GMaterial
      | GMisc
      | GMiscOffhand
      | GOffering
      | GOrb
      | GPants
      | GPetLicence
      | GPlaceholder
      | GPot
      | GQubics
      | GQuest
      | GQuiver
      | GRing
      | GShield
      | GShoes
      | GSkillItem
      | GSource
      | GSpawner
      | GStand
      | GStatScroll
      | GStone
      | GTest
      | GThrow
      | GToken
      | GTome
      | GTool
      | GTracker
      | GUpgradeScroll
      | GWeapon
      | GXP;
  };
  maps: { [T in MapsKey]: GMaps };
  monsters: { [T in MonstersKey]: GMonsters };
  npcs: { [T in NpcsKey]: GNpcs };
  sets: { [T in SetsKey]: GSets };
  skills: { [T in SkillsKey]: GSkills };
};
