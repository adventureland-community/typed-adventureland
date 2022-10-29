import type { BoosterKey } from "../items/Booster";
import type { ClassKey } from "../classes/Classes";
import type { ItemKey } from "../items/index";
import type { MapKey } from "../maps/Maps";
import type { OfferingKey } from "../items/Offering";
import type { QubicsKey } from "../items/Qubics";
import type { TokenKey } from "../items/Token";
import type { TomeKey } from "../items/Tome";
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

export type NpcName =
  | "Ace"
  | "Alia"
  | "Angel"
  | "Baron"
  | "Bean"
  | "Bobo"
  | "Caroline"
  | "Christie"
  | "Christina"
  | "Cole"
  | "Crun"
  | "Cue"
  | "Cunn"
  | "Daisy"
  | "Divian"
  | "Ernis"
  | "Faith"
  | "Fredric"
  | "Fvona"
  | "Gabriel"
  | "Gabriella"
  | "Gabrielle"
  | "Garwyn"
  | "Gn. Spence"
  | "Green"
  | "Grundur"
  | "Guard"
  | "Haila"
  | "Jailord"
  | "Jane"
  | "Janet"
  | "Jaqk"
  | "Jayson"
  | "Kane"
  | "Kilgore"
  | "Landon"
  | "Ledia"
  | "Leo"
  | "Lidia"
  | "Lilith"
  | "Lucas"
  | "Lucy"
  | "Marven"
  | "Mine Heathcliff"
  | "Mr. Dworf"
  | "Mr. Rich"
  | "New Year Tree"
  | "Pete"
  | "Pink"
  | "Ponty"
  | "Princess"
  | "Purple"
  | "Reny"
  | "Ron"
  | "Rose"
  | "Santa"
  | "Scarf"
  | "Smith"
  | "Stewart"
  | "Timmy"
  | "Tricksy"
  | "Tristian"
  | "Twig"
  | "Violet"
  | "Warin"
  | "Werdars"
  | "Witch"
  | "Wizard"
  | "Wogue"
  | "Wynifreed"
  | "Wyr"
  | "X10"
  | "X11"
  | "X12"
  | "X13"
  | "X14"
  | "X15"
  | "X16"
  | "X17"
  | "X18"
  | "X19"
  | "X20"
  | "X21"
  | "X22"
  | "X23"
  | "X24"
  | "X25"
  | "X26"
  | "X27"
  | "X28"
  | "X29"
  | "X30"
  | "X31"
  | "X32"
  | "X33"
  | "X34"
  | "X35"
  | "X36"
  | "X37"
  | "X38"
  | "X39"
  | "X40"
  | "X41"
  | "X42"
  | "X43"
  | "X44"
  | "X45"
  | "X46"
  | "X47"
  | "X8"
  | "X9"
  | "Xyn"
  | "Z";

export type NpcRole =
  | "blocker"
  | "bouncer"
  | "citizen"
  | "companion"
  | "compound"
  | "craftsman"
  | "cx"
  | "events"
  | "exchange"
  | "friendtokens"
  | "funtokens"
  | "gold"
  | "guard"
  | "items"
  | "jailer"
  | "locksmith"
  | "lostandfound"
  | "lottery"
  | "mcollector"
  | "merchant"
  | "monstertokens"
  | "newupgrade"
  | "newyear_tree"
  | "petkeeper"
  | "premium"
  | "pvp_announcer"
  | "pvptokens"
  | "quest"
  | "repeater"
  | "resort"
  | "rewards"
  | "santa"
  | "secondhands"
  | "shells"
  | "ship"
  | "shrine"
  | "standmerchant"
  | "tavern"
  | "tease"
  | "thesearch"
  | "transport"
  | "witch";

export interface GNpc {
  allow?: boolean;
  aspeed?: string;
  attack?: number;
  atype?: string;
  aura?: {
    gold?: number;
    luck?: number;
  };
  class?: ClassKey;
  color?: string;
  cx?: {
    face?: string;
    hair?: string;
    hat?: string;
    head?: string;
  };
  delay?: number;
  heal?: number;
  hp?: number;
  id: NpcKey;
  ignore?: boolean;
  interaction?: Array<string>;
  interval?: number;
  items?: Array<ItemKey | null>;
  level?: number;
  modal?: string;
  moving?: boolean;
  name?: NpcName;
  old_items?: [
    BoosterKey,
    BoosterKey,
    QubicsKey,
    null,
    null,
    null,
    BoosterKey,
    null,
    null,
    TomeKey,
    OfferingKey,
    null,
    null,
    null
  ];
  old_role?: NpcRole;
  old_side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  pack?: NpcKey;
  places?: {
    [K in MapKey]: number;
  };
  quest?: string;
  range?: number;
  role: NpcRole;
  says?: Array<string> | string;
  seek?: string;
  side_interaction?: {
    auto: boolean;
    message: string;
    skin: string;
  };
  skin: string;
  slots?: {
    mainhand: {
      level: number;
      name: WeaponType;
    };
  };
  speed?: number;
  stand?: string;
  steps?: number;
  stopframe?: number;
  token?: TokenKey;
  transport?: boolean;
  type?: string;
}
