import type { ChrysalisKey } from "../items/Chrysalis";
import type { EventKey } from "../events/Events";
import type { MonsterKey } from "../monsters/Monsters";
import type { NpcKey } from "../npcs/Npcs";
import type { NpcRole } from "../npcs/Npcs";
import type { SkillKey } from "../skills/Skills";

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
      frames: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
      set: string;
      subframes: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
      type: string;
      x: number;
      y: number;
    },
    {
      frames: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
      set: string;
      type: string;
      x: number;
      y: number;
    },
    {
      frames: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
      set: string;
      type: string;
      x: number;
      y: number;
    }
  ];
  monsters?: Array<
    | {
        boundary?: [number, number, number, number];
        count: number;
        gatekeeper?: boolean;
        grow?: boolean;
        polygon?: Array<[number, number]>;
        position?: [number, number];
        radius?: number;
        rage?: [number, number, number, number];
        random?: boolean;
        roam?: boolean;
        special?: boolean;
        type: MonsterKey;
      }
    | {
        boundary?: [number, number, number, number];
        count: number;
        grow?: boolean;
        position?: [number, number];
        radius?: number;
        rage?: [number, number, number, number];
        roam?: boolean;
        special?: boolean;
        type: MonsterKey;
      }
    | {
        boundary: [number, number, number, number];
        count: number;
        type: MonsterKey;
      }
    | {
        boundary: [number, number, number, number];
        count: number;
        grow: boolean;
        type: MonsterKey;
      }
    | {
        boundary?: [number, number, number, number];
        count: number;
        grow?: boolean;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
        type: MonsterKey;
      }
    | {
        boundaries: [
          [MapKey, number, number, number, number],
          [MapKey, number, number, number, number],
          [MapKey, number, number, number, number],
          [EventKey, number, number, number, number],
          [MapKey, number, number, number, number]
        ];
        count: number;
        stype: string;
        type: MonsterKey;
      }
    | {
        boundary?: [number, number, number, number];
        count: number;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
        type: MonsterKey;
      }
    | {
        boundary: [number, number, number, number];
        count: number;
        type: ChrysalisKey;
      }
    | {
        boundary?: [number, number, number, number];
        count: number;
        grow?: boolean;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
        special?: boolean;
        type: MonsterKey;
      }
    | {
        boundaries?: [
          [MapKey, number, number, number, number],
          [MapKey, number, number, number, number]
        ];
        boundary?: [number, number, number, number];
        count: number;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
        special?: boolean;
        stype?: string;
        type: MonsterKey;
      }
    | {
        boundary: [number, number, number, number];
        count: number;
        roam?: boolean;
        type: MonsterKey;
      }
    | {
        boundary: [number, number, number, number];
        count: number;
        grow?: boolean;
        roam?: boolean;
        type: MonsterKey;
      }
  >;
  mount?: boolean;
  name: string;
  no_bounds?: boolean;
  npcs: Array<
    | {
        boundary?: [number, number, number, number];
        id: NpcKey;
        name?: string;
        position: Array<number>;
      }
    | {
        id: NpcKey;
        name?: string;
        position: [number, number];
      }
    | {
        id: NpcKey;
        position?: [number, number];
        positions?: [[number, number], [number, number, number]];
      }
    | {
        id: NpcKey;
        position: [number, number];
      }
    | {
        id: NpcRole;
        position: [number, number];
      }
    | {
        boundary: [number, number, number, number];
        id: NpcKey;
        position: [number, number];
      }
    | {
        id: NpcRole;
        position: [number, number, number];
      }
    | {
        id: NpcKey;
        name?: string;
        position: Array<number>;
      }
    | {
        id: NpcKey;
        position?: Array<number>;
        positions?: [[number, number], [number, number, number]];
      }
  >;
  old_monsters?: [
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    },
    {
      boundary: [number, number, number, number];
      count: number;
      type: MonsterKey;
    }
  ];
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
      polygon?: [
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number]
      ];
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
      type: SkillKey;
    }
  ];
}
