import type { TilesetKey } from "../tilesets/Tilesets";
import type { Tuple } from "../utils";

export type GeometryKey =
  | "abtesting"
  | "arena"
  | "bank"
  | "bank_b"
  | "bank_u"
  | "cave"
  | "cgallery"
  | "crypt"
  | "cyberland"
  | "d_a1"
  | "d_a2"
  | "d_b1"
  | "d_e"
  | "d_g"
  | "desertland"
  | "duelland"
  | "dungeon0"
  | "goobrawl"
  | "halloween"
  | "hut"
  | "jail"
  | "level1"
  | "level2"
  | "level2e"
  | "level2n"
  | "level2s"
  | "level2w"
  | "level3"
  | "level4"
  | "main"
  | "mansion"
  | "mtunnel"
  | "resort"
  | "resort_e"
  | "shellsisland"
  | "ship0"
  | "spookytown"
  | "tavern"
  | "test"
  | "tomb"
  | "tunnel"
  | "winter_cave"
  | "winter_cove"
  | "winter_inn"
  | "winter_inn_rooms"
  | "winter_instance"
  | "winterland"
  | "woffice";

export interface GGeometry {
  tiles: Array<
    | Array<TilesetKey | number>
    | [TilesetKey, number, number, number]
    | Array<TilesetKey | number | null>
    | [TilesetKey, number, number, number, number]
    | [TilesetKey, number, number, number, null, number]
  >;
  min_x: number;
  min_y: number;
  default?: number;
  y_lines?: Array<[number, number, number]>;
  points?: {
    Qr60h?: [number, number];
    Ts4we?: [number, number];
    UukHP?: [number, number];
    LTiEP?: [number, number];
    SC2qI?: [number, number];
    gUgGv?: [number, number];
    ppHIq?: [number, number];
    uZD3Z?: [number, number];
    NTdxi?: [number, number];
    laqUE?: [number, number];
    Hei0T?: [number, number];
    adXH8?: [number, number];
    vCMbo?: [number, number];
    OFtXS?: [number, number];
    mbdUO?: [number, number];
    JRk5U?: [number, number];
    J5wek?: [number, number];
    qsoT1?: [number, number];
    aloAL?: [number, number];
    pzVyx?: [number, number];
    aaE1u?: [number, number];
    UXxcG?: [number, number];
    S53JF?: [number, number];
    c1xK6?: [number, number];
    i1VOF?: [number, number];
    v0Tqq?: [number, number];
    Oue3U?: [number, number];
    Oow7e?: [number, number];
    iTqcQ?: [number, number];
    V9W6t?: [number, number];
    PlleZ?: [number, number];
    gmP96?: [number, number];
    rIHqV?: [number, number];
    lsuPA?: [number, number];
    AZMfP?: [number, number];
    hZOtb?: [number, number];
    SGlbh?: [number, number];
    nGgJf?: [number, number];
    eFlxa?: [number, number];
    rPT1e?: [number, number];
    AyAh2?: [number, number];
    ZJIPA?: [number, number];
    MQxun?: [number, number];
    fsNOA?: [number, number];
    G4t0G?: [number, number];
    NMN97?: [number, number];
    Kh4ZT?: [number, number];
    Eb34a?: [number, number];
    tywrx?: [number, number];
    l9GGT?: [number, number];
    dMMXv?: [number, number];
    P1oRT?: [number, number];
    X4Q6N?: [number, number];
    Mk5VS?: [number, number];
    H7XhE?: [number, number];
    QRrwy?: [number, number];
    WXWPD?: [number, number];
    V5Eas?: [number, number];
  };
  lights?: Array<[number, number, number]>;
  x_lines?: Array<[number, number, number]>;
  placements: Array<
    Array<number> | [number, number, number] | Tuple<number, 5>
  >;
  groups?: Array<
    | Array<Array<number | null> | [number, number, number]>
    | [Array<number | null>]
    | Array<Array<number | null>>
    | Array<[number, number, number, null, null, number]>
    | [[number, number, number]]
    | [[number, number, number, null, null, number]]
    | Array<[number, number, number]>
    | [
        [number, number, number, null, null, number],
        [number, number, number],
        [number, number, number]
      ]
  >;
  rectangles?: {
    lTHBy?: [number, number, number, number];
    do5wE?: [number, number, number, number];
    LMHPT?: [number, number, number, number];
    eoiW5?: [number, number, number, number];
    okNyK?: [number, number, number, number];
    ppB3B?: [number, number, number, number];
    Pr315?: [number, number, number, number];
    aUHBN?: [number, number, number, number];
    dCVTp?: [number, number, number, number];
    fD2Mh?: [number, number, number, number];
    QGnha?: [number, number, number, number];
    oTt2e?: [number, number, number, number];
    nuzqX?: [number, number, number, number];
    ARmMX?: [number, number, number, number];
    uN8Da?: [number, number, number, number];
    fhVGh?: [number, number, number, number];
    dJBAk?: [number, number, number, number];
    u5hq1?: [number, number, number, number];
    m9MPz?: [number, number, number, number];
    aMvuo?: [number, number, number, number];
    dJUB0?: [number, number, number, number];
    iwFhs?: [number, number, number, number];
    SJAbi?: [number, number, number, number];
    pcTS4?: [number, number, number, number];
    fPzeD?: [number, number, number, number];
    BJFL1?: [number, number, number, number];
    nx4GP?: [number, number, number, number];
    cT22z?: [number, number, number, number];
    hfI4B?: [number, number, number, number];
    na1li?: [number, number, number, number];
    dlXnT?: [number, number, number, number];
    LJWKT?: [number, number, number, number];
    K6WLm?: [number, number, number, number];
    MNPJG?: [number, number, number, number];
    aE1mA?: [number, number, number, number];
    T0tdL?: [number, number, number, number];
    Ce5Jv?: [number, number, number, number];
    PRymN?: [number, number, number, number];
    IVIsq?: [number, number, number, number];
    JAAH7?: [number, number, number, number];
  };
  max_x: number;
  max_y: number;
  polygons?: {
    VmtUh?: Tuple<[number, number], 60>;
    f1?: Tuple<[number, number], 54>;
    wSkyc?: Tuple<[number, number], 41>;
    VQq5w?: Tuple<[number, number], 54>;
    MXL7C?: Tuple<[number, number], 48>;
    MPQsz?: [
      [number, number],
      [number, number],
      [number, number],
      [number, number]
    ];
  };
  nights?: Tuple<
    [number, number, number, null, null, number, number, number],
    11
  >;
  animations?: Array<
    [number, number, number, number, number, number, string, number]
  >;
}
