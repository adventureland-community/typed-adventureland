import type { ChrysalisKey } from "../items/Chrysalis";
import type { ConditionKey } from "../conditions/Conditions";
import type { EventKey } from "../events/Events";
import type { MonsterKey } from "../monsters/Monsters";
import type { NpcKey } from "../npcs/Npcs";
import type { NpcRole } from "../npcs/Npcs";
import type { Tuple } from "../utils";

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
  doors: Array<
    | Array<number | string>
    | [number, number, number, number, MapKey, number, number]
  >;
  drop_norm?: number;
  event?: string;
  freeze_multiplier?: number;
  fx?: string;
  ignore?: boolean;
  instance?: boolean;
  irregular?: boolean;
  key: string;
  loss?: boolean;
  lux?: number;
  machines?: [
    {
      set: string;
      y: number;
      x: number;
      frames: Tuple<[number, number, number, number], 6>;
      subframes: Tuple<[number, number, number, number], 11>;
      type: string;
    },
    {
      frames: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
      x: number;
      set: string;
      type: string;
      y: number;
    },
    {
      frames: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
      x: number;
      set: string;
      type: string;
      y: number;
    }
  ];
  monsters?: Array<{
    boundaries?:
      | [
          [MapKey, number, number, number, number],
          [MapKey, number, number, number, number],
          [MapKey, number, number, number, number],
          [EventKey, number, number, number, number],
          [MapKey, number, number, number, number]
        ]
      | [
          [MapKey, number, number, number, number],
          [MapKey, number, number, number, number]
        ];
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
    position?: Array<number> | [number, number] | [number, number, number];
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
    Array<number | string> | [number, number, number, number, string, string]
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
  spawns: Array<Array<number> | [number, number] | [number, number, number]>;
  traps?: [
    {
      polygon?: Tuple<[number, number], 60>;
      position?: [number, number];
      type: string;
    }
  ];
  unlist?: boolean;
  weather?: string;
  world?: string;
  zones?: [
    {
      drop: string;
      polygon: Array<[number, number]>;
      type: ConditionKey;
    }
  ];
}
