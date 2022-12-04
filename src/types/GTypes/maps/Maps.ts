import type { GameKey } from "../games/Games";
import type { ImagesetKey } from "../imagesets/Imagesets";
import type { DungeonKeyKey } from "../items";
import type { MonsterKey } from "../monsters/Monsters";
import type { NpcKey } from "../npcs/Npcs";
import type { TilesetKey } from "../tilesets/Tilesets";
import type { Tuple } from "../utils";
import { EventKey } from "../events";
import { GGeometry } from "../geometry";

export type MapKey =
  | "abtesting" // A/B Testing
  | "arena" // Arena
  | "bank" // The Bank
  | "bank_b" // The Bank [Basement]
  | "bank_u" // The Bank [Underground]
  | "batcave" // Cave of Beginnings
  | "cave" // Cave of Darkness
  | "cgallery" // Cosmetics Gallery
  | "crypt" // The Crypt [Cave]
  | "cyberland" // Cyberland
  | "d_a1" // Dungeon
  | "d_a2" // Dungeon
  | "d_b1" // Dungeon
  | "d_e" // Dungeon [Entrance]
  | "d_g" // Dungeon [Gateway]
  | "d2" // Dark World
  | "desertland" // Desertland
  | "duelland" // Duelland
  | "dungeon0" // Dungeon
  | "goobrawl" // Goo Brawl!
  | "halloween" // Spooky Forest
  | "hut" // The Hut
  | "jail" // Jail
  | "level1" // Underground [Entrance]
  | "level2" // Underground [Passing]
  | "level2e" // Underground [East]
  | "level2n" // Underground [North]
  | "level2s" // Underground [South]
  | "level2w" // Underground [West]
  | "level3" // Underground [Deeps]
  | "level4" // Underground [Abyss]
  | "main" // Mainland
  | "mansion" // The Mansion
  | "mtunnel" // Underground [Tunnel]
  | "old_bank" // The Bank
  | "old_main" // Old Town
  | "original_main" // Town
  | "resort" // Holo Resort
  | "resort_e" // Holo Resort
  | "shellsisland" // New Town!
  | "ship0" // The Pirate Ship
  | "spookytown" // Spooky Town
  | "tavern" // The Tavern
  | "test" // Test
  | "tomb" // The Tomb
  | "tunnel" // Mining Tunnel
  | "winter_cave" // Frozen Cave
  | "winter_cove" // Frozen Cove
  | "winter_inn" // Wanderers' Inn
  | "winter_inn_rooms" // Rooms
  | "winter_instance" // Lair of the Dark Mage
  | "winterland" // Winterland
  | "woffice"; // Wizard's Crib

export type MapZoneKey = "fishing" | "mining";

export interface GMap {
  animatables?: {
    the_door?: {
      position: string;
      x: number;
      y: number;
    };
    the_lever?: {
      position: string;
      x: number;
      y: number;
    };
  };
  burn_multiplier?: number;
  code?: string;
  day?: boolean;
  data: GGeometry;
  doors: Array<
    | [number, number, number, number, MapKey, number]
    | [number, number, number, number, MapKey, number, number]
    | [number, number, number, number, MapKey, number, number, "key", DungeonKeyKey]
    | [number, number, number, number, MapKey, number, number, "ulocked", "complicated"]
    | [number, number, number, number, MapKey, number, number, "protected" | "ulocked"]
  >;
  drop_norm?: number;
  // TODO: Should be EventKey but "pirateship" is not in there.
  event?: EventKey | "pirateship";
  freeze_multiplier?: number;
  fx?: string;
  ignore?: boolean;
  instance?: boolean;
  irregular?: boolean;
  key: string;
  loss?: boolean;
  lux?: number;
  machines?: Array<{
    set: ImagesetKey;
    y: number;
    x: number;
    frames: Array<[number, number, number, number]>;
    subframes?: Array<[number, number, number, number]>;
    type: GameKey;
  }>;
  monsters?: Array<{
    boundaries?: Array<[MapKey, number, number, number, number]>;
    boundary?: [number, number, number, number];
    count: number;
    gatekeeper?: boolean;
    grow?: boolean;
    polygon?: Array<[number, number]>;
    position?: [number, number];
    rage?: [number, number, number, number];
    random?: boolean;
    roam?: boolean;
    radius?: number;
    stype?: string;
    special?: boolean;
    type: MonsterKey;
  }>;
  mount?: boolean;
  name: string;
  no_bounds?: boolean;
  npcs: Array<{
    position?: [x: number, y: number] | [number, number, number];
    id: NpcKey;
    name?: string;
    boundary?: [number, number, number, number];
    positions?: [[number, number], [number, number, number]];
  }>;
  old_monsters?: Tuple<
    {
      count: number;
      boundary: [number, number, number, number];
      type: MonsterKey;
    },
    12
  >;
  on_death?: [MapKey, number];
  on_exit?: [MapKey, number];
  outside?: boolean;
  pvp?: boolean;
  quirks?: Array<
    [number, number, number, number, string, string] | [number, number, number, number, string]
  >;
  ref?: {
    c_mid?: [number, number];
    cx?: [number, number, number, number];
    poof?: {
      in: MapKey;
      map: MapKey;
      x: number;
      y: number;
    };
    u_mid?: [number, number];
  };
  safe?: boolean;
  safe_pvp?: boolean;
  small_steps?: boolean;
  spawns: Array<
    [x: number, y: number] | [number, number, number] | [number, number, number, number]
  >;
  traps?: [
    {
      polygon?: Tuple<[number, number], 60>;
      position?: [number, number];
      type: string;
    }
  ];
  unlist?: boolean;
  weather?: string;
  world?: TilesetKey;
  zones?: [
    {
      drop: string;
      polygon: Array<[number, number]>;
      type: MapZoneKey;
    }
  ];
}
