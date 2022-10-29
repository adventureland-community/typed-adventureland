import type { EventKey } from "../events/Events";
import type { MonsterKey } from "../monsters/Monsters";
import type { NpcKey } from "../npcs/Npcs";
import type { SkillKey } from "../skills/Skills";
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
  npcs: Array<{
    position?: Array<number> | [number, number] | [number, number, number];
    id: NpcKey;
    name?: string;
    boundary?: [number, number, number, number];
    positions?: [[number, number], [number, number, number]];
  }>;
  key: string;
  freeze_multiplier?: number;
  name: string;
  lux?: number;
  burn_multiplier?: number;
  drop_norm?: number;
  outside?: boolean;
  quirks?: Array<
    Array<number | string> | [number, number, number, number, string, string]
  >;
  doors: Array<
    | Array<number | string>
    | [number, number, number, number, MapKey, number, number]
  >;
  spawns: Array<Array<number> | [number, number] | [number, number, number]>;
  monsters?: Array<{
    count: number;
    boundary?: [number, number, number, number];
    type: MonsterKey;
    gatekeeper?: boolean;
    rage?: [number, number, number, number];
    random?: boolean;
    roam?: boolean;
    grow?: boolean;
    polygon?: Array<[number, number]>;
    position?: [number, number];
    radius?: number;
    special?: boolean;
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
    stype?: string;
  }>;
  world?: string;
  traps?: [
    {
      type: string;
      polygon?: Tuple<[number, number], 60>;
      position?: [number, number];
    }
  ];
  ignore?: boolean;
  instance?: boolean;
  on_exit?: [MapKey, number];
  irregular?: boolean;
  on_death?: [MapKey, number];
  animatables?: {
    the_door?: {
      y: number;
      x: number;
      position: string;
    };
    the_lever?: {
      y: number;
      x: number;
      position: string;
    };
  };
  zones?: [
    {
      drop: string;
      type: SkillKey;
      polygon: Array<[number, number]>;
    }
  ];
  ref?: {
    cx?: [number, number, number, number];
    u_mid?: [number, number];
    c_mid?: [number, number];
    poof?: {
      y: number;
      map: MapKey;
      x: number;
      in: MapKey;
    };
  };
  pvp?: boolean;
  no_bounds?: boolean;
  safe?: boolean;
  mount?: boolean;
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
  event?: string;
  unlist?: boolean;
  fx?: string;
  weather?: string;
  code?: string;
  small_steps?: boolean;
  old_monsters?: Tuple<
    {
      count: number;
      boundary: [number, number, number, number];
      type: MonsterKey;
    },
    12
  >;
  loss?: boolean;
  day?: boolean;
  safe_pvp?: boolean;
}
