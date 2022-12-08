import type { ItemKey } from "../items/index";
import { MapKey } from "../maps";
import { MonsterKey } from "../monsters";

export type GDropNormalKey =
  | "5bucks"
  | "abtesting"
  | "abtesting_loser"
  | "apologybox"
  | "armorbox"
  | "armorx"
  | "basicelixir"
  | "basketofeggs"
  | "bugbountybox"
  | "candy0"
  | "candy0v2"
  | "candy0v3"
  | "candy1"
  | "candy1v2"
  | "candy1v3"
  | "candycane"
  | "candypop"
  | "cosmo0"
  | "cosmo1"
  | "cosmo2"
  | "cosmo3"
  | "eastereggs"
  | "f1"
  | "gem0"
  | "gem1"
  | "gem1_old"
  | "gemfragment"
  | "gift0"
  | "gift1"
  | "glitch"
  | "goldenegg"
  | "greenenvelope"
  | "jewellerybox"
  | "konami"
  | "leather"
  | "lglitch"
  | "lightmage"
  | "lostearring0"
  | "lostearring1"
  | "lostearring2"
  | "lostearring3"
  | "lostearring4"
  | "m1"
  | "m2"
  | "mistletoe"
  | "mysterybox"
  | "ornament"
  | "quiver"
  | "redenvelope"
  | "redenvelopev2"
  | "redenvelopev2_shouldhavebeen"
  | "redenvelopev3"
  | "redenvelopev4"
  | "seashell"
  | "statamulet"
  | "statbelt"
  | "statring"
  | "test"
  | "thrash"
  | "troll"
  | "weaponbox"
  | "weaponofthedead"
  | "xN"
  | "xbox";

export type GDropsOpened =
  | "armorbox"
  | "armorx"
  | "basicelixir"
  | "basketofeggs"
  | "eastereggs"
  | "gem0"
  | "lglitch"
  | "lightmage"
  | "statamulet"
  | "statbelt"
  | "statring"
  | "thrash"
  | "weaponbox"
  | "weaponofthedead"
  | "xN";

export type GDropSimple = [weight: number, item: ItemKey];
export type GDropGold = [weight: number, type: "gold", amount: number];
export type GDropOpenBox = [weight: number, type: "open", container: GDropsOpened];
export type GDropCX = [weight: number, type: "cx" | "cxbundle", cosmetic: string];
export type GDropShells = [weight: number, type: "5bucks" | "shells", amount: number];

export type GDropList = Array<GDropSimple | GDropGold | GDropOpenBox | GDropCX | GDropShells>;

export type GDropMonsters = Partial<Record<MonsterKey, GDropList>>;
export type GDropMaps = Partial<Record<MapKey | "global" | "global_static", GDropList>>;

export type GDropNormalDrops = Record<GDropNormalKey, GDropList>;

export type GDrops = GDropNormalDrops & {
  gold: {
    random: number;
    x10: number;
    base: number;
    x50: number;
  };

  // TODO: What are those things?
  skins: {
    bronze: Array<string>;
    silver: Array<string>;
    gold: Array<string>;
    normal: Array<string>;
  };

  monsters: GDropMonsters;
  maps: GDropMaps;
};
