export type MaterialKey =
  | "ascale" // Armadillo Scale
  | "bandages" // Bandages
  | "bcandle" // Burning Candle
  | "beewings" // Bee Wings
  | "bfang" // Bat Fang
  | "bfur" // Bee Fur
  | "bronzeingot" // Bronze Ingot
  | "bronzenugget" // Bronze Nugget
  | "brownegg" // Brown Egg
  | "btusk" // Boar Tusk
  | "bwing" // Bat Wing
  | "carrot" // Carrot
  | "cocoon" // Cocoon
  | "crabclaw" // Crab Claw
  | "cscale" // Croc Scale
  | "cshell" // Crab Shell
  | "drapes" // Drapes
  | "dstones" // Digestive Stones
  | "ectoplasm" // Ectoplasm
  | "electronics" // Electronics
  | "emptyheart" // Empty Heart
  | "essenceofether" // Ethereal Essence
  | "essenceoffire" // Essence of Fire
  | "essenceoffrost" // Essence of Frost
  | "essenceofgreed" // Essence of Greed
  | "essenceoflife" // Essence of Life
  | "essenceofnature" // Essence of Nature
  | "feather0" // Magical Feather
  | "feather1" // Harpy Feather
  | "frogt" // Frog Tongue
  | "goldingot" // Gold Ingot
  | "goldnugget" // Gold Nugget
  | "gslime" // Slime Core
  | "ijx" // Irradium
  | "ink" // Ink
  | "lotusf" // Lotus Flower
  | "lspores" // Large Spores
  | "mbones" // Mummy Bones
  | "networkcard" // Network Card
  | "nheart" // Heartwood Core
  | "platinumingot" // Platinum Ingot
  | "platinumnugget" // Platinum Nugget
  | "pleather" // Porcupine Leather
  | "pstem" // Pumpkin Stem
  | "rattail" // Rat Tail
  | "rfangs" // Rat Fangs
  | "rfur" // Rat Fur
  | "smush" // Small Mushroom
  | "snakefang" // Snake Fang
  | "spidersilk" // Spider Silk
  | "spores" // Spores
  | "sstinger" // Scorpion Stinger
  | "svenom" // Scorpion Venom
  | "trinkets" // Trinkets
  | "tshell" // Turtle Shell
  | "watercore" // Water Core
  | "whiteegg"; // White Egg

export type ItemType = "material";

export interface GMaterial {
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: string;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: string;
  offering?: number;
  explanation?: string;
  event?: boolean;
  onclick?: string;
  action?: string;
  throw?: boolean;
}
