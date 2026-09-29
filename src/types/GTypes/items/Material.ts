export type MaterialKey =
  | "ascale" // Armadillo Scale
  | "ashleaf" // Ash Leaf
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
  | "cave_amber" // Cave Amber
  | "cocoon" // Cocoon
  | "crabclaw" // Crab Claw
  | "cscale" // Croc Scale
  | "cshell" // Crab Shell
  | "drapes" // Drapes
  | "dstones" // Digestive Stones
  | "ectoplasm" // Ectoplasm
  | "electronics" // Electronics
  | "embercore" // Ember Core
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
  | "frostcore" // Frost Core
  | "goldingot" // Gold Ingot
  | "goldnugget" // Gold Nugget
  | "gslime" // Slime Core
  | "ijx" // Irradium
  | "ink" // Ink
  | "lotusf" // Lotus Flower
  | "lspores" // Large Spores
  | "mbones" // Bones
  | "networkcard" // Network Card
  | "nheart" // Heartwood Core
  | "platinumingot" // Platinum Ingot
  | "platinumnugget" // Platinum Nugget
  | "pleather" // Porcupine Leather
  | "pstem" // Pumpkin Stem
  | "rattail" // Rat Tail
  | "reefglass" // Reef Glass
  | "rfangs" // Rat Fangs
  | "rfur" // Rat Fur
  | "rimeglass" // Rimeglass
  | "slice_blueberry" // Blueberry Slice
  | "slice_citrus" // Citrus Slice
  | "slice_honey" // Honey Slice
  | "slice_mint" // Mint Slice
  | "slice_nightberry" // Nightberry Slice
  | "slice_strawberry" // Strawberry Slice
  | "smush" // Small Mushroom
  | "snakefang" // Snake Fang
  | "spidersilk" // Spider Silk
  | "spores" // Spores
  | "sstinger" // Scorpion Stinger
  | "stormfeather" // Storm Feather
  | "svenom" // Scorpion Venom
  | "trinkets" // Trinkets
  | "tshell" // Turtle Shell
  | "verdantcore" // Verdant Core
  | "voidthread" // Void Thread
  | "watercore" // Water Core
  | "whiteegg"; // White Egg

export interface GMaterial {
  action?: string;
  event?: boolean;
  exclusive?: boolean;
  explanation?: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  offering?: number;
  onclick?: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: MaterialKey;
  throw?: boolean;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "material";
}
