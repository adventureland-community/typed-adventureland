export * from "./Activator";
export * from "./Amulet";
export * from "./BankKey";
export * from "./Belt";
export * from "./Booster";
export * from "./Box";
export * from "./Cape";
export * from "./Chest";
export * from "./Chrysalis";
export * from "./CompoundScroll";
export * from "./Computer";
export * from "./Container";
export * from "./Cosmetics";
export * from "./DungeonKey";
export * from "./Earring";
export * from "./Elixir";
export * from "./Flute";
export * from "./Gem";
export * from "./Gloves";
export * from "./Helmet";
export * from "./Jar";
export * from "./Licence";
export * from "./Material";
export * from "./Misc";
export * from "./MiscOffhand";
export * from "./Offering";
export * from "./Orb";
export * from "./Pants";
export * from "./PetLicence";
export * from "./Placeholder";
export * from "./Pot";
export * from "./Qubics";
export * from "./Quest";
export * from "./Quiver";
export * from "./Ring";
export * from "./Shield";
export * from "./Shoes";
export * from "./SkillItem";
export * from "./Source";
export * from "./Spawner";
export * from "./Stand";
export * from "./StatScroll";
export * from "./Stone";
export * from "./Test";
export * from "./Throw";
export * from "./Token";
export * from "./Tome";
export * from "./Tool";
export * from "./Tracker";
export * from "./UpgradeScroll";
export * from "./Weapon";
export * from "./XP";

import type { BetterUXWrapper } from "../utils";
import type { ActivatorKey, GActivator } from "./Activator";
import type { AmuletKey, GAmulet } from "./Amulet";
import type { BankKeyKey, GBankKey } from "./BankKey";
import type { BeltKey, GBelt } from "./Belt";
import type { BoosterKey, GBooster } from "./Booster";
import type { BoxKey, GBox } from "./Box";
import type { CapeKey, GCape } from "./Cape";
import type { ChestKey, GChest } from "./Chest";
import type { ChrysalisKey, GChrysalis } from "./Chrysalis";
import type { CompoundScrollKey, GCompoundScroll } from "./CompoundScroll";
import type { ComputerKey, GComputer } from "./Computer";
import type { ContainerKey, GContainer } from "./Container";
import type { CosmeticKey, GCosmetic } from "./Cosmetics";
import type { DungeonKeyKey, GDungeonKey } from "./DungeonKey";
import type { EarringKey, GEarring } from "./Earring";
import type { ElixirKey, GElixir } from "./Elixir";
import type { FluteKey, GFlute } from "./Flute";
import type { GemKey, GGem } from "./Gem";
import type { GloveKey, GGlove } from "./Gloves";
import type { HelmetKey, GHelmet } from "./Helmet";
import type { JarKey, GJar } from "./Jar";
import type { LicenceKey, GLicence } from "./Licence";
import type { MaterialKey, GMaterial } from "./Material";
import type { MiscKey, GMisc } from "./Misc";
import type { MiscOffhandKey, GMiscOffhand } from "./MiscOffhand";
import type { OfferingKey, GOffering } from "./Offering";
import type { OrbKey, GOrb } from "./Orb";
import type { PantKey, GPant } from "./Pants";
import type { PetLicenceKey, GPetLicence } from "./PetLicence";
import type { PlaceholderKey, GPlaceholder } from "./Placeholder";
import type { PotKey, GPot } from "./Pot";
import type { QubicsKey, GQubics } from "./Qubics";
import type { QuestKey, GQuest } from "./Quest";
import type { QuiverKey, GQuiver } from "./Quiver";
import type { RingKey, GRing } from "./Ring";
import type { ShieldKey, GShield } from "./Shield";
import type { ShoeKey, GShoe } from "./Shoes";
import type { SkillItemKey, GSkillItem } from "./SkillItem";
import type { SourceKey, GSource } from "./Source";
import type { SpawnerKey, GSpawner } from "./Spawner";
import type { StandKey, GStand } from "./Stand";
import type { StatScrollKey, GStatScroll } from "./StatScroll";
import type { StoneKey, GStone } from "./Stone";
import type { TestKey, GTest } from "./Test";
import type { ThrowKey, GThrow } from "./Throw";
import type { TokenKey, GToken } from "./Token";
import type { TomeKey, GTome } from "./Tome";
import type { ToolKey, GTool } from "./Tool";
import type { TrackerKey, GTracker } from "./Tracker";
import type { UpgradeScrollKey, GUpgradeScroll } from "./UpgradeScroll";
import type { WeaponKey, GWeapon } from "./Weapon";
import type { XPKey, GXP } from "./XP";

export type ItemKey =
  | ActivatorKey
  | AmuletKey
  | BankKeyKey
  | BeltKey
  | BoosterKey
  | BoxKey
  | CapeKey
  | ChestKey
  | ChrysalisKey
  | CompoundScrollKey
  | ComputerKey
  | ContainerKey
  | CosmeticKey
  | DungeonKeyKey
  | EarringKey
  | ElixirKey
  | FluteKey
  | GemKey
  | GloveKey
  | HelmetKey
  | JarKey
  | LicenceKey
  | MaterialKey
  | MiscKey
  | MiscOffhandKey
  | OfferingKey
  | OrbKey
  | PantKey
  | PetLicenceKey
  | PlaceholderKey
  | PotKey
  | QubicsKey
  | QuestKey
  | QuiverKey
  | RingKey
  | ShieldKey
  | ShoeKey
  | SkillItemKey
  | SourceKey
  | SpawnerKey
  | StandKey
  | StatScrollKey
  | StoneKey
  | TestKey
  | ThrowKey
  | TokenKey
  | TomeKey
  | ToolKey
  | TrackerKey
  | UpgradeScrollKey
  | WeaponKey
  | XPKey;

export type GItemRaw =
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
  | GCosmetic
  | GDungeonKey
  | GEarring
  | GElixir
  | GFlute
  | GGem
  | GGlove
  | GHelmet
  | GJar
  | GLicence
  | GMaterial
  | GMisc
  | GMiscOffhand
  | GOffering
  | GOrb
  | GPant
  | GPetLicence
  | GPlaceholder
  | GPot
  | GQubics
  | GQuest
  | GQuiver
  | GRing
  | GShield
  | GShoe
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

export type GItem = BetterUXWrapper<GItemRaw>;

export type ItemType =
  | "activator"
  | "amulet"
  | "bank_key"
  | "belt"
  | "booster"
  | "box"
  | "cape"
  | "chest"
  | "chrysalis"
  | "computer"
  | "container"
  | "cosmetics"
  | "cscroll"
  | "dungeon_key"
  | "earring"
  | "elixir"
  | "flute"
  | "gem"
  | "gloves"
  | "helmet"
  | "jar"
  | "licence"
  | "material"
  | "misc"
  | "misc_offhand"
  | "offering"
  | "orb"
  | "pants"
  | "petlicence"
  | "placeholder"
  | "pot"
  | "pscroll"
  | "qubics"
  | "quest"
  | "quiver"
  | "ring"
  | "shield"
  | "shoes"
  | "skill_item"
  | "source"
  | "spawner"
  | "stand"
  | "stone"
  | "test"
  | "throw"
  | "token"
  | "tome"
  | "tool"
  | "tracker"
  | "uscroll"
  | "weapon"
  | "xp";

export type WeaponType =
  | "axe"
  | "basher"
  | "bow"
  | "crossbow"
  | "dagger"
  | "dartgun"
  | "fist"
  | "great_staff"
  | "mace"
  | "pickaxe"
  | "pmace"
  | "rapier"
  | "rod"
  | "scythe"
  | "short_sword"
  | "spear"
  | "staff"
  | "stars"
  | "sword"
  | "wand"
  | "wblade";

export type OffhandType =
  | "dagger"
  | "fist"
  | "mace"
  | "misc_offhand"
  | "quiver"
  | "shield"
  | "short_sword"
  | "source"
  | "stars"
  | "sword";
