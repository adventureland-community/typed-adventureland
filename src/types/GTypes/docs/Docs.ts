import type { ActivatorKey } from "../items/Activator";
import type { AnimationKey } from "../animations/Animations";
import type { CosmeticKey } from "../items/Cosmetics";
import type { GeometryKey } from "../geometry/Geometry";
import type { ImagesetKey } from "../imagesets/Imagesets";
import type { NpcKey } from "../npcs/Npcs";
import type { PositionKey } from "../positions/Positions";
import type { SkillKey } from "../skills/Skills";

export type DocKey =
  | "documented"
  | "functions"
  | "guide"
  | "images"
  | "javascript"
  | "references"
  | "rewards"
  | "tasks"
  | "tutorial";

export interface GDoc {
  "0"?:
    | string
    | Array<string>
    | {
        tasks: [];
        key: string;
        title: string;
      };
  "1"?:
    | string
    | Array<string>
    | {
        tasks: [string, string];
        key: string;
        title: string;
      };
  "2"?:
    | string
    | Array<string>
    | {
        tasks: [
          PositionKey,
          PositionKey,
          PositionKey,
          ImagesetKey,
          DocKey,
          string,
          PositionKey,
          SkillKey,
          string
        ];
        key: string;
        title: string;
      };
  "3"?:
    | string
    | Array<string>
    | {
        tasks: [string, string, string];
        key: string;
        title: string;
      };
  "4"?:
    | string
    | Array<string>
    | {
        tasks: [string, NpcKey];
        key: NpcKey;
        title: string;
      };
  "5"?:
    | string
    | Array<string>
    | {
        tasks: [GeometryKey, string, string];
        key: GeometryKey;
        title: string;
      };
  "6"?:
    | string
    | Array<
        | string
        | [
            [
              string,
              string,
              ActivatorKey,
              string,
              [
                [string, string, ActivatorKey, string],
                [string, string, ActivatorKey, string],
                [string, string, ActivatorKey, string]
              ]
            ],
            [
              string,
              string,
              ActivatorKey,
              string,
              [
                [string, string, ActivatorKey, string],
                [string, string, ActivatorKey, string],
                [string, string, ActivatorKey, string]
              ]
            ],
            [string, string, string, string],
            [string, string, string, string],
            [string, string, ImagesetKey, string],
            [string, string, string, string],
            [string, string, ActivatorKey, string],
            [string, string, ActivatorKey, string],
            [
              string,
              string,
              ActivatorKey,
              string,
              [
                [string, string, string, string],
                [string, string, string, string],
                [string, string, string, string]
              ]
            ]
          ]
      >
    | {
        tasks: [string, string];
        key: string;
        title: string;
      };
  "7"?:
    | string
    | Array<string>
    | {
        tasks: [];
        key: string;
        title: string;
      };
  "8"?:
    | string
    | [
        string,
        string,
        ActivatorKey,
        string,
        [[string, string, ActivatorKey, string]]
      ];
  "9"?: string;
  "10"?: string;
  "11"?: string;
  "12"?: string;
  "13"?: string;
  "14"?: string;
  "15"?: string;
  "16"?: string;
  "17"?: string;
  "18"?: string;
  "19"?: string;
  "20"?: string;
  "21"?: string;
  "22"?: string;
  "23"?: string;
  "24"?: NpcKey;
  "25"?: string;
  "26"?: string;
  "27"?: string;
  "28"?: string;
  "29"?: string;
  "30"?: string;
  "31"?: string;
  "32"?: string;
  "33"?: string;
  "34"?: string;
  "35"?: string;
  "36"?: AnimationKey;
  "37"?: string;
  "38"?: string;
  "39"?: string;
  "40"?: string;
  "41"?: string;
  "42"?: string;
  "43"?: string;
  "44"?: string;
  "45"?: string;
  "46"?: string;
  "47"?: string;
  "48"?: string;
  "49"?: string;
  "50"?: string;
  "51"?: string;
  "52"?: string;
  "53"?: string;
  "54"?: string;
  "55"?: string;
  "56"?: string;
  "57"?: string;
  "58"?: string;
  "59"?: string;
  "60"?: string;
  "61"?: string;
  "62"?: string;
  "63"?: AnimationKey;
  "64"?: string;
  "65"?: SkillKey;
  "66"?: string;
  "67"?: string;
  "68"?: string;
  "69"?: string;
  "70"?: string;
  "71"?: string;
  "72"?: string;
  "73"?: string;
  "74"?: string;
  "75"?: string;
  "76"?: string;
  "77"?: string;
  "78"?: string;
  "79"?: string;
  "80"?: string;
  "81"?: string;
  "82"?: string;
  "83"?: string;
  "84"?: string;
  "85"?: string;
  "86"?: string;
  "87"?: string;
  "88"?: string;
  "89"?: string;
  "90"?: string;
  "91"?: string;
  "92"?: string;
  "93"?: string;
  "94"?: string;
  "95"?: string;
  "96"?: string;
  "97"?: string;
  "98"?: string;
  "99"?: string;
  "100"?: string;
  "101"?: string;
  "102"?: string;
  "103"?: string;
  "104"?: string;
  "105"?: string;
  "106"?: string;
  "107"?: string;
  "108"?: string;
  "109"?: string;
  "110"?: string;
  "111"?: string;
  "112"?: string;
  "113"?: string;
  "114"?: string;
  "115"?: string;
  "116"?: string;
  "117"?: string;
  "118"?: string;
  "119"?: string;
  "120"?: string;
  "121"?: string;
  "122"?: string;
  "123"?: string;
  "124"?: string;
  "125"?: string;
  "126"?: string;
  "127"?: string;
  "128"?: string;
  "129"?: string;
  "130"?: string;
  "131"?: string;
  "132"?: string;
  "133"?: SkillKey;
  "134"?: string;
  "135"?: string;
  "136"?: string;
  "137"?: string;
  "138"?: string;
  "139"?: string;
  "140"?: AnimationKey;
  "141"?: string;
  "142"?: string;
  "143"?: string;
  "144"?: string;
  "145"?: string;
  "146"?: string;
  "147"?: string;
  "148"?: string;
  "149"?: string;
  "150"?: string;
  "151"?: string;
  newyear_tree?: {
    url: string;
    width: number;
    height: number;
  };
  upgrade?:
    | {
        url: string;
        width: number;
        height: number;
      }
    | string;
  topleft_character?: {
    url: string;
    width: number;
    height: number;
  };
  character_button?: {
    url: string;
    width: number;
    height: number;
  };
  cue?: {
    url: string;
    width: number;
    height: number;
  };
  topleft_monster?: {
    url: string;
    width: number;
    height: number;
  };
  bank?:
    | {
        url: string;
        width: number;
        height: number;
      }
    | string;
  firstloot?: string;
  code?: string;
  stats?: string;
  buycscroll0?: string;
  settings?: string;
  skills?: string;
  travel?: string;
  character?: string;
  buyscrolls?: string;
  addstats?: string;
  engage?: string;
  inventory?: string;
  compound?: string;
  x?: string;
  store?: string;
  com?: string;
  guide?: string;
  killagoo?: string;
  deposit?: string;
  c0?: [[number, string, CosmeticKey]];
}
