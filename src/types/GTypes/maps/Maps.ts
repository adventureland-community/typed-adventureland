export type MapsKey =
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
  | "d2" // Dark World
  | "d_a1" // Dungeon
  | "d_a2" // Dungeon
  | "d_b1" // Dungeon
  | "d_e" // Dungeon [Entrance]
  | "d_g" // Dungeon [Gateway]
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

export interface GMaps {
  npcs: Array<
    | {
        position: Array<number>;
        id: string;
        name?: string;
        boundary?: [number, number, number, number];
      }
    | {
        position: [number, number];
        name?: string;
        id: string;
      }
    | {
        positions?: [[number, number], [number, number, number]];
        id: string;
        position?: [number, number];
      }
    | {
        position: [number, number];
        id: string;
      }
    | {
        position: [number, number];
        id: string;
        name?: string;
      }
    | {
        position: [number, number];
        boundary: [number, number, number, number];
        id: string;
      }
    | {
        position: [number, number, number];
        id: string;
      }
    | {
        position: Array<number>;
        id: string;
        name?: string;
      }
    | {
        position?: Array<number>;
        id: string;
        positions?: [[number, number], [number, number, number]];
      }
  >;
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
    | [number, number, number, number, string, number, number]
  >;
  spawns: Array<Array<number> | [number, number] | [number, number, number]>;
  monsters?: Array<
    | {
        count: number;
        boundary?: [number, number, number, number];
        type: string;
        gatekeeper?: boolean;
        rage?: [number, number, number, number];
        random?: boolean;
        roam?: boolean;
        grow?: boolean;
        polygon?: Array<[number, number]>;
        position?: [number, number];
        radius?: number;
        special?: boolean;
      }
    | {
        count: number;
        boundary?: [number, number, number, number];
        type: string;
        roam?: boolean;
        grow?: boolean;
        position?: [number, number];
        radius?: number;
        rage?: [number, number, number, number];
        special?: boolean;
      }
    | {
        count: number;
        boundary: [number, number, number, number];
        type: string;
      }
    | {
        count: number;
        boundary: [number, number, number, number];
        type: string;
        grow: boolean;
      }
    | {
        count: number;
        boundary?: [number, number, number, number];
        type: string;
        grow?: boolean;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
      }
    | {
        boundaries: [
          [string, number, number, number, number],
          [string, number, number, number, number],
          [string, number, number, number, number],
          [string, number, number, number, number],
          [string, number, number, number, number]
        ];
        count: number;
        type: string;
        stype: string;
      }
    | {
        count: number;
        boundary?: [number, number, number, number];
        type: string;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
      }
    | {
        count: number;
        boundary?: [number, number, number, number];
        type: string;
        grow?: boolean;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
        special?: boolean;
      }
    | {
        count: number;
        boundary?: [number, number, number, number];
        type: string;
        special?: boolean;
        position?: [number, number];
        radius?: number;
        roam?: boolean;
        boundaries?: [
          [string, number, number, number, number],
          [string, number, number, number, number]
        ];
        stype?: string;
      }
    | {
        count: number;
        boundary: [number, number, number, number];
        type: string;
        roam?: boolean;
      }
    | {
        count: number;
        boundary: [number, number, number, number];
        type: string;
        grow?: boolean;
        roam?: boolean;
      }
  >;
  world?: string;
  traps?: [
    {
      type: string;
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
    }
  ];
  ignore?: boolean;
  instance?: boolean;
  on_exit?: [string, number];
  irregular?: boolean;
  on_death?: [string, number];
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
      type: string;
      polygon: Array<[number, number]>;
    }
  ];
  ref?: {
    cx?: [number, number, number, number];
    u_mid?: [number, number];
    c_mid?: [number, number];
    poof?: {
      y: number;
      map: string;
      x: number;
      in: string;
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
      frames: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
      ];
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
  old_monsters?: [
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    },
    {
      count: number;
      boundary: [number, number, number, number];
      type: string;
    }
  ];
  loss?: boolean;
  day?: boolean;
  safe_pvp?: boolean;
}
