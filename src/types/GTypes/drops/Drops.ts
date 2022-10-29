import type { ActivatorKey } from "../items/Activator";
import type { AmuletKey } from "../items/Amulet";
import type { BankKeyKey } from "../items/BankKey";
import type { BeltKey } from "../items/Belt";
import type { BoosterKey } from "../items/Booster";
import type { BoxKey } from "../items/Box";
import type { CapeKey } from "../items/Cape";
import type { ChestKey } from "../items/Chest";
import type { ChrysalisKey } from "../items/Chrysalis";
import type { CompoundScrollKey } from "../items/CompoundScroll";
import type { CosmeticKey } from "../items/Cosmetics";
import type { CraftKey } from "../craft/Craft";
import type { DismantleKey } from "../dismantle/Dismantle";
import type { DungeonKeyKey } from "../items/DungeonKey";
import type { EarringKey } from "../items/Earring";
import type { ElixirKey } from "../items/Elixir";
import type { EmotionKey } from "../emotions/Emotions";
import type { GemKey } from "../items/Gem";
import type { GloveKey } from "../items/Gloves";
import type { HelmetKey } from "../items/Helmet";
import type { JarKey } from "../items/Jar";
import type { LicenceKey } from "../items/Licence";
import type { MaterialKey } from "../items/Material";
import type { MiscKey } from "../items/Misc";
import type { MiscOffhandKey } from "../items/MiscOffhand";
import type { OfferingKey } from "../items/Offering";
import type { OrbKey } from "../items/Orb";
import type { PantKey } from "../items/Pants";
import type { PetLicenceKey } from "../items/PetLicence";
import type { PositionKey } from "../positions/Positions";
import type { PotKey } from "../items/Pot";
import type { ProjectileKey } from "../projectiles/Projectiles";
import type { QuestKey } from "../items/Quest";
import type { QuiverKey } from "../items/Quiver";
import type { RingKey } from "../items/Ring";
import type { SetKey } from "../sets/Sets";
import type { ShieldKey } from "../items/Shield";
import type { ShoeKey } from "../items/Shoes";
import type { SkillItemKey } from "../items/SkillItem";
import type { SourceKey } from "../items/Source";
import type { SpawnerKey } from "../items/Spawner";
import type { SpriteKey } from "../sprites/Sprites";
import type { StatScrollKey } from "../items/StatScroll";
import type { ThrowKey } from "../items/Throw";
import type { TokenKey } from "../tokens/Tokens";
import type { ToolKey } from "../items/Tool";
import type { TrackerKey } from "../items/Tracker";
import type { Tuple } from "../utils";
import type { WeaponKey } from "../items/Weapon";
import type { WeaponType } from "../items/index";
import type { XPKey } from "../items/XP";

export type DropKey =
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
  | "gold"
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
  | "maps"
  | "mistletoe"
  | "monsters"
  | "mysterybox"
  | "ornament"
  | "quiver"
  | "redenvelope"
  | "redenvelopev2"
  | "redenvelopev2_shouldhavebeen"
  | "redenvelopev3"
  | "redenvelopev4"
  | "seashell"
  | "skins"
  | "statamulet"
  | "statbelt"
  | "statring"
  | "test"
  | "thrash"
  | "troll"
  | "weaponbox"
  | "weaponofthedead"
  | "xbox"
  | "xN";

export interface GDrop {
  "0"?: Array<number | string>;
  "1"?: Array<number | string>;
  "2"?: Array<number | string>;
  "3"?: Array<number | string>;
  "4"?: Array<number | string>;
  "5"?: Array<number | string>;
  "6"?: Array<number | string>;
  "7"?: Array<number | string>;
  "8"?: Array<number | string>;
  "9"?: Array<number | string>;
  "10"?: Array<number | string>;
  "11"?: Array<number | string>;
  "12"?: Array<number | string>;
  "13"?: Array<number | string>;
  "14"?: Array<number | string>;
  "15"?: Array<number | string>;
  "16"?: Array<number | string>;
  "17"?: Array<number | string>;
  "18"?: Array<number | string>;
  "19"?: Array<number | string>;
  "20"?: Array<number | string>;
  "21"?: Array<number | string>;
  "22"?: Array<number | string>;
  "23"?: Array<number | string>;
  "24"?: Array<number | string>;
  "25"?: Array<number | string>;
  "26"?: Array<number | string>;
  "27"?: Array<number | string>;
  "28"?: Array<number | string>;
  "29"?: Array<number | string>;
  "30"?: Array<number | string>;
  "31"?: Array<number | string>;
  "32"?: Array<number | string>;
  "33"?: Array<number | string>;
  "34"?: Array<number | string>;
  "35"?: Array<number | string>;
  "36"?: Array<number | string>;
  "37"?: Array<number | string>;
  "38"?: Array<number | string>;
  "39"?: Array<number | string>;
  "40"?: Array<number | string>;
  "41"?: Array<number | string>;
  "42"?: Array<number | string>;
  "43"?: Array<number | string>;
  "44"?: Array<number | string>;
  "45"?: Array<number | string>;
  "46"?: Array<number | string>;
  "47"?: Array<number | string>;
  "48"?: Array<number | string>;
  "49"?: Array<number | string>;
  "50"?: Array<number | string>;
  "51"?: Array<number | string>;
  "52"?: Array<number | string>;
  "53"?: Array<number | string>;
  "54"?: Array<number | string>;
  "55"?: Array<number | string>;
  "56"?: Array<number | string>;
  "57"?: Array<number | string>;
  "58"?: Array<number | string>;
  "59"?: Array<number | string>;
  "60"?: Array<number | string>;
  "61"?: Array<number | string>;
  "62"?: Array<number | string>;
  "63"?: Array<number | string>;
  "64"?: Array<number | string>;
  "65"?: Array<number | string>;
  "66"?: Array<number | string>;
  "67"?: Array<number | string>;
  "68"?: Array<number | string>;
  "69"?: Array<number | string>;
  "70"?: Array<number | string>;
  "71"?: Array<number | string>;
  "72"?: Array<number | string>;
  "73"?: Array<number | string>;
  "74"?: Array<number | string>;
  "75"?: Array<number | string>;
  "76"?: Array<number | string>;
  "77"?: Array<number | string>;
  "78"?: Array<number | string>;
  "79"?: Array<number | string>;
  "80"?: Array<number | string>;
  "81"?: Array<number | string>;
  "82"?: Array<number | string>;
  "83"?: Array<number | string>;
  "84"?: Array<number | string>;
  "85"?: Array<number | string>;
  "86"?: Array<number | string>;
  "87"?: Array<number | string>;
  "88"?: Array<number | string>;
  "89"?: Array<number | string>;
  "90"?: Array<number | string>;
  "91"?: Array<number | string>;
  "92"?: Array<number | string>;
  "93"?: Array<number | string>;
  "94"?: Array<number | string>;
  "95"?: Array<number | string>;
  "96"?: Array<number | string>;
  "97"?: Array<number | string>;
  "98"?: Array<number | string>;
  "99"?: Array<number | string>;
  "100"?: Array<number | string>;
  "101"?: Array<number | string>;
  "102"?: Array<number | string>;
  "103"?: Array<number | string>;
  "104"?: Array<number | string>;
  "105"?: Array<number | string>;
  "106"?: Array<number | string>;
  "107"?: Array<number | string>;
  "108"?: Array<number | string>;
  "109"?: Array<number | string>;
  "110"?: Array<number | string>;
  "111"?: Array<number | string>;
  "112"?: Array<number | string>;
  "113"?: Array<number | string>;
  "114"?: Array<number | string>;
  "115"?: Array<number | string>;
  "116"?: Array<number | string>;
  "117"?: Array<number | string>;
  "118"?: Array<number | string>;
  "119"?: Array<number | string>;
  "120"?: Array<number | string>;
  "121"?: Array<number | string>;
  "122"?: [number, MaterialKey];
  "123"?: [number, ThrowKey];
  "124"?: [number, StatScrollKey];
  "125"?: [number, AmuletKey];
  "126"?: [number, PantKey];
  "127"?: [number, OrbKey];
  "128"?: [number, PantKey];
  "129"?: [number, LicenceKey];
  "130"?: [number, WeaponType];
  "131"?: [number, MaterialKey];
  "132"?: [number, QuestKey];
  "133"?: [number, ShieldKey];
  "134"?: [number, OfferingKey];
  "135"?: [number, WeaponKey];
  "136"?: [number, HelmetKey];
  "137"?: [number, WeaponKey];
  "138"?: [number, AmuletKey];
  "139"?: [number, DungeonKeyKey];
  "140"?: [number, WeaponType];
  "141"?: [number, ElixirKey];
  "142"?: [number, WeaponType];
  "143"?: [number, TokenKey];
  "144"?: [number, DismantleKey];
  "145"?: [number, ShoeKey];
  "146"?: [number, OrbKey];
  "147"?: [number, SetKey];
  "148"?: [number, RingKey];
  "149"?: [number, GloveKey];
  "150"?: [number, QuestKey];
  "151"?: [number, StatScrollKey];
  "152"?: [number, ChestKey];
  "153"?: [number, CraftKey];
  "154"?: [number, QuestKey];
  "155"?: [number, OrbKey];
  "156"?: [number, ShoeKey];
  "157"?: [number, BoosterKey];
  "158"?: [number, GloveKey];
  "159"?: [number, BeltKey];
  "160"?: [number, OrbKey];
  "161"?: [number, QuestKey];
  "162"?: [number, ElixirKey];
  "163"?: [number, MiscKey];
  "164"?: [number, OrbKey];
  "165"?: [number, QuestKey];
  "166"?: [number, ShoeKey];
  "167"?: [number, MaterialKey];
  "168"?: [number, EarringKey];
  "169"?: [number, ShieldKey];
  "170"?: [number, ElixirKey];
  "171"?: [number, ElixirKey];
  "172"?: [number, ElixirKey];
  "173"?: [number, WeaponKey];
  "174"?: [number, ElixirKey];
  "175"?: [number, ElixirKey];
  "176"?: [number, ElixirKey];
  "177"?: [number, ElixirKey];
  "178"?: [number, RingKey];
  "179"?: [number, ElixirKey];
  "180"?: [number, EarringKey];
  "181"?: [number, ChestKey];
  "182"?: [number, WeaponKey];
  "183"?: [number, QuiverKey];
  "184"?: [number, CraftKey];
  "185"?: [number, PantKey];
  "186"?: [number, MaterialKey];
  "187"?: [number, GloveKey];
  "188"?: [number, PotKey];
  "189"?: [number, MaterialKey];
  "190"?: [number, ThrowKey];
  "191"?: [number, ChestKey];
  "192"?: [number, MaterialKey];
  "193"?: [number, BankKeyKey];
  "194"?: [number, HelmetKey];
  "195"?: [number, StatScrollKey];
  "196"?: [number, PantKey];
  "197"?: [number, RingKey];
  "198"?: [number, HelmetKey];
  "199"?: [number, ShoeKey];
  "200"?: [number, ChestKey];
  "201"?: [number, ChestKey];
  "202"?: [number, GloveKey];
  "203"?: [number, EarringKey];
  "204"?: [number, GloveKey];
  "205"?: [number, PantKey];
  "206"?: [number, GloveKey];
  "207"?: [number, HelmetKey];
  "208"?: [number, GloveKey];
  "209"?: [number, WeaponType];
  "210"?: [number, ShoeKey];
  "211"?: [number, BankKeyKey];
  "212"?: [number, GloveKey];
  "213"?: [number, ChestKey];
  "214"?: [number, StatScrollKey];
  "215"?: [number, MaterialKey];
  "216"?: [number, PotKey];
  "217"?: [number, CraftKey];
  "218"?: [number, CapeKey];
  "219"?: [number, SourceKey];
  "220"?: [number, SourceKey];
  "221"?: [number, WeaponKey];
  "222"?: [number, HelmetKey];
  "223"?: [number, WeaponType];
  "224"?: [number, GloveKey];
  "225"?: [number, MaterialKey];
  "226"?: [number, AmuletKey];
  "227"?: [number, CapeKey];
  "228"?: [number, MaterialKey];
  "229"?: [number, AmuletKey];
  "230"?: [number, MaterialKey];
  "231"?: [number, PantKey];
  "232"?: [number, MaterialKey];
  "233"?: [number, DismantleKey];
  "234"?: [number, MiscKey];
  "235"?: [number, DismantleKey];
  "236"?: [number, ChestKey];
  "237"?: [number, ElixirKey];
  "238"?: [number, ShoeKey];
  "239"?: [number, AmuletKey];
  "240"?: [number, RingKey];
  "241"?: [number, AmuletKey];
  "242"?: [number, MaterialKey];
  "243"?: [number, HelmetKey];
  "244"?: [number, ElixirKey];
  "245"?: [number, WeaponKey];
  "246"?: [number, CraftKey];
  "247"?: [number, DismantleKey];
  "248"?: [number, OrbKey];
  "249"?: [number, GloveKey];
  "250"?: [number, CraftKey];
  "251"?: [number, ElixirKey];
  "252"?: [number, PetLicenceKey];
  "253"?: [number, DismantleKey];
  "254"?: [number, GemKey];
  "255"?: [number, AmuletKey];
  "256"?: [number, ShoeKey];
  "257"?: [number, MaterialKey];
  "258"?: [number, ElixirKey];
  "259"?: [number, MaterialKey];
  "260"?: [number, MaterialKey];
  "261"?: [number, WeaponType];
  "262"?: [number, MaterialKey];
  "263"?: [number, DismantleKey];
  "264"?: [number, ActivatorKey];
  "265"?: [number, ShieldKey];
  "266"?: [number, MaterialKey];
  "267"?: [number, MaterialKey];
  "268"?: [number, MiscKey];
  "269"?: [number, TokenKey];
  "270"?: [number, StatScrollKey];
  "271"?: [number, OrbKey];
  "272"?: [number, ThrowKey];
  "273"?: [number, ElixirKey];
  "274"?: [number, RingKey];
  "275"?: [number, CapeKey];
  "276"?: [number, DungeonKeyKey];
  "277"?: [number, MaterialKey];
  "278"?: [number, GemKey];
  "279"?: [number, ChestKey];
  "280"?: [number, GemKey];
  "281"?: [number, GemKey];
  "282"?: [number, TokenKey];
  "283"?: [number, MaterialKey];
  "284"?: [number, GloveKey];
  "285"?: [number, StatScrollKey];
  "286"?: [number, ChestKey];
  "287"?: [number, WeaponKey];
  "288"?: [number, QuestKey];
  "289"?: [number, ElixirKey];
  "290"?: [number, GloveKey];
  "291"?: [number, MaterialKey];
  "292"?: [number, ShoeKey];
  "293"?: [number, MaterialKey];
  "294"?: [number, WeaponKey];
  "295"?: [number, MiscOffhandKey];
  "296"?: [number, XPKey];
  "297"?: [number, ShoeKey];
  "298"?: [number, MaterialKey];
  "299"?: [number, ElixirKey];
  "300"?: [number, AmuletKey];
  "301"?: [number, BoosterKey];
  "302"?: [number, MaterialKey];
  "303"?: [number, StatScrollKey];
  "304"?: [number, CapeKey];
  "305"?: [number, CraftKey];
  "306"?: [number, MaterialKey];
  "307"?: [number, HelmetKey];
  "308"?: [number, WeaponKey];
  "309"?: [number, HelmetKey];
  "310"?: [number, ChestKey];
  "311"?: [number, PotKey];
  "312"?: [number, BankKeyKey];
  "313"?: [number, CraftKey];
  "314"?: [number, MaterialKey];
  "315"?: [number, TrackerKey];
  "316"?: [number, WeaponKey];
  "317"?: [number, MaterialKey];
  "318"?: [number, GloveKey];
  "319"?: [number, HelmetKey];
  "320"?: [number, PotKey];
  "321"?: [number, MaterialKey];
  "322"?: [number, GloveKey];
  "323"?: [number, HelmetKey];
  "324"?: [number, WeaponKey];
  "325"?: [number, StatScrollKey];
  "326"?: [number, MaterialKey];
  "327"?: [number, ChestKey];
  "328"?: [number, StatScrollKey];
  "329"?: [number, ChestKey];
  "330"?: [number, MaterialKey];
  "331"?: [number, ChestKey];
  "332"?: [number, ToolKey];
  "333"?: [number, ChestKey];
  "334"?: [number, HelmetKey];
  "335"?: [number, MaterialKey];
  "336"?: [number, RingKey];
  "337"?: [number, SkillItemKey];
  "338"?: [number, RingKey];
  "339"?: [number, StatScrollKey];
  "340"?: [number, BoxKey];
  "341"?: [number, PantKey];
  "342"?: [number, ShoeKey];
  "343"?: [number, ElixirKey];
  "344"?: [number, RingKey];
  "345"?: [number, StatScrollKey];
  "346"?: [number, ElixirKey];
  "347"?: [number, ShoeKey];
  "348"?: [number, WeaponKey];
  "349"?: [number, EarringKey];
  "350"?: [number, QuestKey];
  "351"?: [number, ChestKey];
  "352"?: [number, DismantleKey];
  "353"?: [number, EarringKey];
  "354"?: [number, StatScrollKey];
  "355"?: [number, WeaponType];
  "356"?: [number, AmuletKey];
  "357"?: [number, TokenKey];
  "358"?: [number, HelmetKey];
  "359"?: [number, WeaponKey];
  "360"?: [number, SpawnerKey];
  "361"?: [number, MaterialKey];
  "362"?: [number, CraftKey];
  "363"?: [number, GemKey];
  "364"?: [number, MaterialKey];
  "365"?: [number, GloveKey];
  "366"?: [number, ChestKey];
  "367"?: [number, DismantleKey];
  "368"?: [number, BeltKey];
  "369"?: [number, HelmetKey];
  "370"?: [number, RingKey];
  "371"?: [number, CapeKey];
  "372"?: [number, DismantleKey];
  "373"?: [number, ChestKey];
  "374"?: [number, BoxKey];
  "375"?: [number, HelmetKey];
  "376"?: [number, CosmeticKey];
  "377"?: [number, CosmeticKey];
  "378"?: [number, CraftKey];
  "379"?: [number, CosmeticKey];
  "380"?: [number, ChestKey];
  "381"?: [number, CosmeticKey];
  "382"?: [number, MaterialKey];
  "383"?: [number, BeltKey];
  "384"?: [number, ChestKey];
  "385"?: [number, OfferingKey];
  "386"?: [number, MaterialKey];
  "387"?: [number, DungeonKeyKey];
  "388"?: [number, HelmetKey];
  "389"?: [number, RingKey];
  "390"?: [number, HelmetKey];
  "391"?: [number, RingKey];
  "392"?: [number, PantKey];
  "393"?: [number, OfferingKey];
  "394"?: [number, QuestKey];
  "395"?: [number, MaterialKey];
  "396"?: [number, QuestKey];
  "397"?: [number, QuestKey];
  "398"?: [number, CosmeticKey];
  "399"?: [number, QuestKey];
  "400"?: [number, AmuletKey];
  "401"?: [number, DismantleKey];
  "402"?: [number, StatScrollKey];
  "403"?: [number, DismantleKey];
  "404"?: [number, CompoundScrollKey];
  "405"?: [number, CompoundScrollKey];
  "406"?: [number, CompoundScrollKey];
  "407"?: [number, CompoundScrollKey];
  "408"?: [number, AmuletKey];
  "409"?: [number, WeaponType];
  "410"?: [number, ShoeKey];
  "411"?: [number, ElixirKey];
  "412"?: [number, MaterialKey];
  "413"?: [number, RingKey];
  "414"?: [number, DismantleKey];
  "415"?: [number, QuestKey];
  "416"?: [number, ChestKey];
  "417"?: [number, PotKey];
  "418"?: [number, QuestKey];
  "419"?: [number, MaterialKey];
  "420"?: [number, ChestKey];
  "421"?: [number, GloveKey];
  "422"?: [number, ChestKey];
  "423"?: [number, ChestKey];
  "424"?: [number, ChestKey];
  "425"?: [number, QuestKey];
  "426"?: [number, ChestKey];
  "427"?: [number, StatScrollKey];
  "428"?: [number, GemKey];
  "429"?: [number, GemKey];
  "430"?: [number, ShoeKey];
  "431"?: [number, DismantleKey];
  "432"?: [number, MaterialKey];
  "433"?: [number, OrbKey];
  "434"?: [number, DismantleKey];
  "435"?: [number, ChestKey];
  "436"?: [number, MiscOffhandKey];
  "437"?: [number, ElixirKey];
  "438"?: [number, GemKey];
  "439"?: [number, MaterialKey];
  "440"?: [number, WeaponKey];
  "441"?: [number, WeaponKey];
  "442"?: [number, WeaponKey];
  "443"?: [number, GloveKey];
  "444"?: [number, QuiverKey];
  "445"?: [number, BeltKey];
  "446"?: [number, QuestKey];
  "447"?: [number, ChestKey];
  "448"?: [number, PantKey];
  "449"?: [number, ChestKey];
  "450"?: [number, MiscKey];
  "451"?: [number, MiscKey];
  "452"?: [number, CapeKey];
  "453"?: [number, ElixirKey];
  "454"?: [number, ElixirKey];
  "455"?: [number, PotKey];
  "456"?: [number, EarringKey];
  "457"?: [number, WeaponKey];
  "458"?: [number, AmuletKey];
  "459"?: [number, PantKey];
  "460"?: [number, WeaponType];
  "461"?: [number, WeaponKey];
  "462"?: [number, GemKey];
  "463"?: [number, GemKey];
  "464"?: [number, RingKey];
  "465"?: [number, ShoeKey];
  "466"?: [number, GemKey];
  "467"?: [number, GemKey];
  "468"?: [number, ChestKey];
  "469"?: [number, WeaponKey];
  "470"?: [number, MaterialKey];
  "471"?: [number, EarringKey];
  "472"?: [number, DungeonKeyKey];
  "473"?: [number, MaterialKey];
  "474"?: [number, QuestKey];
  "475"?: [number, PotKey];
  "476"?: [number, WeaponType];
  "477"?: [number, DismantleKey];
  "478"?: [number, OrbKey];
  "479"?: [number, MaterialKey];
  "480"?: [number, StatScrollKey];
  "481"?: [number, MiscKey, number];
  random?: number;
  x10?: number;
  base?: number;
  x50?: number;
  bronze?: [];
  silver?: [string, string];
  gold?: [];
  normal?: [];
  winterland?: [[number, ChestKey], [number, string, DropKey]];
  global?: [];
  halloween?: [
    [number, GloveKey],
    [number, PantKey],
    [number, string, DropKey]
  ];
  mansion?: [[number, PantKey], [number, EarringKey]];
  winter_cave?: [[number, string, DropKey], [number, CapeKey]];
  arena?: [[number, GemKey]];
  maintest?: [[number, RingKey], [number, AmuletKey], [number, BeltKey]];
  cave?: [
    [number, ChestKey],
    [number, GloveKey],
    [number, RingKey],
    [number, AmuletKey],
    [number, BeltKey],
    [number, GemKey],
    [number, DungeonKeyKey]
  ];
  spookytown?: [[number, PantKey], [number, string, DropKey]];
  global_static?: [];
  main?: [
    [number, RingKey],
    [number, AmuletKey],
    [number, BeltKey],
    [number, GemKey],
    [number, HelmetKey],
    [number, ShoeKey]
  ];
  snowman?: [
    [number, ShoeKey],
    [number, WeaponKey],
    [number, ThrowKey],
    [number, ThrowKey],
    [number, SourceKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, OfferingKey],
    [number, MaterialKey]
  ];
  cutebee?: [[number, string, DropKey], [number, TokenKey]];
  wolfie?: [[number, QuestKey]];
  fireroamer?: [[number, OrbKey], [number, OrbKey], [number, DismantleKey]];
  xscorpion?: [
    [number, QuiverKey],
    [number, StatScrollKey],
    [number, MiscKey],
    [number, MaterialKey]
  ];
  icegolem?: [[number, DungeonKeyKey], [number, DismantleKey]];
  booboo?: [[number, MaterialKey], [number, MaterialKey]];
  skeletor?: [
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, BoxKey],
    [number, BoxKey],
    [number, SkillItemKey],
    [number, WeaponType]
  ];
  prat?: [[number, MaterialKey], [number, MaterialKey]];
  mrpumpkin?: [
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, HelmetKey],
    [number, JarKey, number, SpriteKey],
    [number, JarKey, number, string]
  ];
  fvampire?: [
    [number, string, DropKey],
    [number, DismantleKey],
    [number, ChestKey],
    [number, BoxKey],
    [number, StatScrollKey],
    [number, JarKey, number, string],
    [number, OfferingKey],
    [number, AmuletKey]
  ];
  scorpion?: [[number, QuiverKey], [number, MaterialKey]];
  rharpy?: [
    [number, MaterialKey],
    [number, MaterialKey],
    [number, MaterialKey],
    [number, MaterialKey],
    [number, CraftKey],
    [number, DismantleKey],
    [number, DismantleKey]
  ];
  porcupine?: [[number, MaterialKey], [number, CraftKey]];
  bbpompom?: [
    [number, DismantleKey],
    [number, MaterialKey],
    [number, JarKey, number, string],
    [number, JarKey, number, string]
  ];
  slenderman?: [
    [number, JarKey, number, string],
    [number, BeltKey],
    [number, GemKey],
    [number, GemKey]
  ];
  snake?: [[number, PotKey]];
  bat?: [
    [number, SourceKey],
    [number, MaterialKey],
    [number, JarKey, number, string]
  ];
  crabx?: [
    [number, RingKey],
    [number, QuestKey],
    [number, CraftKey],
    [number, MaterialKey]
  ];
  greenfairy?: [[number, MiscKey]];
  target_ar500red?: Tuple<[number, SkillItemKey], 5>;
  oneeye?: [[number, AmuletKey], [number, BeltKey]];
  vbat?: [[number, EarringKey], [number, RingKey]];
  croc?: [[number, MaterialKey]];
  gscorpion?: [[number, QuiverKey]];
  goo?: [
    [number, PositionKey, number],
    [number, CraftKey],
    [number, MaterialKey]
  ];
  mummy?: [[number, string, DropKey], [number, MaterialKey]];
  dknight2?: [[number, ShieldKey], [number, DismantleKey]];
  crabxx?: [
    [number, RingKey],
    [number, QuestKey],
    [number, QuestKey],
    [number, CraftKey],
    [number, MaterialKey],
    [number, TokenKey],
    [number, TokenKey],
    [number, TokenKey],
    [number, TokenKey],
    [number, TokenKey]
  ];
  pinkgoo?: [[number, ProjectileKey], [number, MaterialKey], [number, RingKey]];
  squigtoad?: [[number, QuestKey], [number, MaterialKey]];
  pppompom?: [[number, OrbKey], [number, OrbKey]];
  mvampire?: [
    [number, EarringKey],
    [number, EarringKey],
    [number, EarringKey],
    [number, DismantleKey],
    [number, ChestKey],
    [number, StatScrollKey],
    [number, JarKey, number, string],
    [number, AmuletKey]
  ];
  jr?: [
    [number, GemKey],
    [number, GemKey],
    [number, MaterialKey],
    [number, WeaponKey],
    [number, WeaponKey]
  ];
  stompy?: [
    [number, QuestKey],
    [number, QuestKey],
    [number, QuestKey],
    [number, QuestKey],
    [number, AmuletKey]
  ];
  osnake?: [[number, PotKey], [number, MaterialKey]];
  dragold?: [
    [number, DismantleKey],
    [number, DismantleKey],
    [number, WeaponKey],
    [number, JarKey, number, string],
    [number, ChrysalisKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, OfferingKey]
  ];
  tortoise?: [[number, ShieldKey], [number, QuestKey]];
  harpy?: [
    [number, MaterialKey],
    [number, MaterialKey],
    [number, MaterialKey],
    [number, MaterialKey],
    [number, CraftKey],
    [number, DismantleKey],
    [number, WeaponKey]
  ];
  wolf?: [[number, QuestKey]];
  mrgreen?: [
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, HelmetKey],
    [number, JarKey, number, SpriteKey],
    [number, WeaponKey]
  ];
  boar?: [[number, QuestKey], [number, MaterialKey]];
  franky?: [
    [number, DungeonKeyKey],
    [number, GemKey],
    [number, GloveKey],
    [number, BankKeyKey],
    [number, JarKey, number, string],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, GemKey],
    [number, PantKey]
  ];
  poisio?: [[number, SkillItemKey], [number, MaterialKey]];
  frog?: [[number, QuestKey], [number, MiscKey], [number, MaterialKey]];
  crab?: [
    [number, RingKey],
    [number, QuestKey],
    [number, MaterialKey],
    [number, CraftKey]
  ];
  plantoid?: [[number, DismantleKey], [number, RingKey]];
  hen?: [[number, MaterialKey], [number, MaterialKey]];
  redfairy?: [[number, MiscKey]];
  wabbit?: [
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, DismantleKey],
    [number, string, QuestKey],
    [number, JarKey, number, EmotionKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey],
    [number, string, DropKey]
  ];
  spider?: [[number, MaterialKey], [number, OfferingKey]];
  tiger?: [
    [number, HelmetKey],
    [number, CapeKey],
    [number, OrbKey],
    [number, ShieldKey]
  ];
  armadillo?: [[number, ShieldKey], [number, MaterialKey]];
  xmagex?: [
    [number, RingKey],
    [number, RingKey],
    [number, AmuletKey],
    [number, GloveKey],
    [number, ChestKey],
    [number, PantKey],
    [number, BeltKey]
  ];
  bluefairy?: [[number, MiscKey]];
  bscorpion?: [[number, OfferingKey]];
  iceroamer?: [[number, DismantleKey], [number, DungeonKeyKey]];
  grinch?: [
    [number, RingKey],
    [number, SourceKey],
    [number, CapeKey],
    [number, AmuletKey],
    [number, BankKeyKey],
    [number, ShoeKey],
    [number, ChestKey]
  ];
  bee?: [[number, MaterialKey], [number, CraftKey]];
  pinkgoblin?: [[number, BankKeyKey]];
  minimush?: [
    [number, MaterialKey],
    [number, CraftKey],
    [number, JarKey, number, string],
    [number, JarKey, number, string]
  ];
  squig?: [[number, QuestKey], [number, MaterialKey]];
  tinyp?: [[number, OfferingKey]];
  rooster?: [[number, MaterialKey]];
  rat?: [[number, MaterialKey]];
  mole?: [[number, QuestKey], [number, EarringKey]];
  rudolph?: [[number, MiscKey], [number, HelmetKey], [number, ShoeKey]];
  bgoo?: [[number, TokenKey]];
  ent?: [
    [number, DismantleKey],
    [number, WeaponKey],
    [number, MiscKey],
    [number, MaterialKey]
  ];
  mechagnome?: [
    [number, MaterialKey],
    [number, MaterialKey],
    [number, MaterialKey],
    [number, MaterialKey],
    [number, AmuletKey]
  ];
  stoneworm?: [[number, WeaponKey], [number, MaterialKey]];
  phoenix?: [
    [number, StatScrollKey],
    [number, EarringKey],
    [number, EarringKey],
    [number, EarringKey],
    [number, EarringKey],
    [number, DismantleKey],
    [number, DismantleKey],
    [number, CapeKey],
    [number, OfferingKey],
    [number, JarKey, number, string]
  ];
  arcticbee?: [[number, DismantleKey], [number, MaterialKey]];
  a1?: [
    [number, RingKey],
    [number, OrbKey],
    [number, CapeKey],
    [number, ChestKey],
    [number, ElixirKey]
  ];
  a3?: [
    [number, GloveKey],
    [number, WeaponKey],
    [number, WeaponKey],
    [number, ElixirKey]
  ];
  a2?: [
    [number, RingKey],
    [number, JarKey, number, string],
    [number, WeaponKey],
    [number, WeaponKey],
    [number, ElixirKey]
  ];
  a5?: [
    [number, ShoeKey],
    [number, JarKey, number, string],
    [number, ElixirKey],
    [number, BeltKey]
  ];
  a4?: [
    [number, OrbKey],
    [number, HelmetKey],
    [number, JarKey, number, string],
    [number, ElixirKey]
  ];
  a7?: [[number, SpawnerKey], [number, WeaponKey], [number, ElixirKey]];
  a6?: [
    [number, BeltKey],
    [number, HelmetKey],
    [number, JarKey, number, string],
    [number, ElixirKey]
  ];
  a8?: [
    [number, GloveKey],
    [number, WeaponKey],
    [number, ElixirKey],
    [number, BeltKey]
  ];
  greenjr?: [
    [number, GemKey],
    [number, GemKey],
    [number, MaterialKey],
    [number, WeaponKey],
    [number, WeaponKey]
  ];
  rgoo?: [[number, TokenKey], [number, string, DropKey]];
  ghost?: [[number, WeaponType]];
  cgoo?: [[number, GemKey], [number, SkillItemKey], [number, MaterialKey]];
  bigbird?: [[number, MaterialKey]];
  goldenbat?: [[number, GloveKey], [number, WeaponKey], [number, MaterialKey]];
}
