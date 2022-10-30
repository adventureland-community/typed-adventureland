import type { ClassKey } from "../classes/Classes";
import type { ItemKey } from "../items/index";
import type { TokenKey } from "../tokens/Tokens";
import type { WeaponType } from "../items/index";

export type NpcKey =
  | "antip2w" // Mr. Dworf
  | "appearance" // Haila
  | "armors"
  | "basics" // Gabriel
  | "bean" // Bean
  | "bouncer" // Wogue
  | "citizen0" // Kane
  | "citizen1" // Kilgore
  | "citizen10" // Caroline
  | "citizen11" // Baron
  | "citizen12" // Marven
  | "citizen13" // Divian
  | "citizen14" // Violet
  | "citizen15" // Timmy
  | "citizen16" // Cunn
  | "citizen2" // Stewart
  | "citizen3" // Reny
  | "citizen4" // Angel
  | "citizen5" // Grundur
  | "citizen6" // Fredric
  | "citizen7" // Lucy
  | "citizen8" // Wyr
  | "citizen9" // Lilith
  | "compound"
  | "craftsman" // Leo
  | "exchange" // Xyn
  | "fancypots" // Ernis
  | "firstc"
  | "fisherman" // Tristian
  | "friendtokens" // Fvona
  | "funtokens" // Tricksy
  | "gemmerchant" // Mine Heathcliff
  | "goldnpc" // Mr. Rich
  | "guard" // Guard
  | "holo" // Z
  | "holo0" // Green
  | "holo1" // Pink
  | "holo2" // Purple
  | "holo3" // Scarf
  | "holo4" // Twig
  | "holo5" // Bobo
  | "items0" // Gabrielle
  | "items1" // Gabriella
  | "items10" // X10
  | "items11" // X11
  | "items12" // X12
  | "items13" // X13
  | "items14" // X14
  | "items15" // X15
  | "items16" // X16
  | "items17" // X17
  | "items18" // X18
  | "items19" // X19
  | "items2" // Ledia
  | "items20" // X20
  | "items21" // X21
  | "items22" // X22
  | "items23" // X23
  | "items24" // X24
  | "items25" // X25
  | "items26" // X26
  | "items27" // X27
  | "items28" // X28
  | "items29" // X29
  | "items3" // Lidia
  | "items30" // X30
  | "items31" // X31
  | "items32" // X32
  | "items33" // X33
  | "items34" // X34
  | "items35" // X35
  | "items36" // X36
  | "items37" // X37
  | "items38" // X38
  | "items39" // X39
  | "items4" // Christie
  | "items40" // X40
  | "items41" // X41
  | "items42" // X42
  | "items43" // X43
  | "items44" // X44
  | "items45" // X45
  | "items46" // X46
  | "items47" // X47
  | "items5" // Christina
  | "items6" // Jane
  | "items7" // Janet
  | "items8" // X8
  | "items9" // X9
  | "jailer" // Jailord
  | "leathermerchant" // Landon
  | "lichteaser"
  | "locksmith" // Smith
  | "lostandfound" // Ron
  | "lotterylady" // Rose
  | "mcollector" // Cole
  | "mistletoe" // Faith
  | "monsterhunter" // Daisy
  | "newupgrade" // Cue
  | "newyear_tree" // New Year Tree
  | "ornaments" // Jayson
  | "pete" // Pete
  | "pots"
  | "premium" // Garwyn
  | "princess" // Princess
  | "pvp" // Ace
  | "pvpblocker"
  | "pvptokens" // Gn. Spence
  | "pwincess" // Wynifreed
  | "rewards" // Werdars
  | "santa" // Santa
  | "scrolls" // Lucas
  | "secondhands" // Ponty
  | "shellsguy" // Mr. Dworf
  | "ship"
  | "shrine"
  | "standmerchant" // Divian
  | "tavern" // Jaqk
  | "tbartender" // Jaqk
  | "thief" // Crun
  | "transporter" // Alia
  | "wbartender" // Warin
  | "weapons"
  | "witch" // Witch
  | "wizardrepeater" // Wizard
  | "wnpc"; // Wizard

export interface GNpc {
  name?: string;
  color?: string;
  cx?: {
    head?: string;
    hat?: string;
    hair?: string;
    face?: string;
  };
  role: string;
  skin: string;
  type?: string;
  id: NpcKey;
  pack?: NpcKey;
  says?: Array<string> | string;
  hp?: number;
  speed?: number;
  interaction?: Array<string>;
  level?: number;
  delay?: number;
  seek?: string;
  class?: ClassKey;
  heal?: number;
  range?: number;
  attack?: number;
  slots?: {
    mainhand: {
      name: WeaponType;
      level: number;
    };
  };
  transport?: boolean;
  side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  items?: Array<ItemKey | null>;
  old_role?: string;
  old_side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  old_items?: Array<ItemKey | null>;
  atype?: string;
  aspeed?: string;
  moving?: boolean;
  allow?: boolean;
  quest?: string;
  token?: TokenKey;
  stand?: string;
  aura?: {
    luck?: number;
    gold?: number;
  };
  steps?: number;
  modal?: string;
  ignore?: boolean;
  interval?: number;
  stopframe?: number;
  places?: {
    winterland: number;
    desertland: number;
    test: number;
    cyberland: number;
    main: number;
    d_e: number;
  };
}
