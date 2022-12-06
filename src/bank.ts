import { MapKey } from "./types/GTypes/maps";

export type BankPacksInfos = Record<
  BankPackTypeItemsOnly,
  [map: MapKey, goldPrice: number, shellPrice: number]
>;

export type BankPackTypeItemsOnly =
  | "items0"
  | "items1"
  | "items10"
  | "items11"
  | "items12"
  | "items13"
  | "items14"
  | "items15"
  | "items16"
  | "items17"
  | "items18"
  | "items19"
  | "items2"
  | "items20"
  | "items21"
  | "items22"
  | "items23"
  | "items24"
  | "items25"
  | "items26"
  | "items27"
  | "items28"
  | "items29"
  | "items3"
  | "items30"
  | "items31"
  | "items32"
  | "items33"
  | "items34"
  | "items35"
  | "items36"
  | "items37"
  | "items38"
  | "items39"
  | "items4"
  | "items40"
  | "items41"
  | "items42"
  | "items43"
  | "items44"
  | "items45"
  | "items46"
  | "items47"
  | "items5"
  | "items6"
  | "items7"
  | "items8"
  | "items9";

/** @deprecated This is not used anywhere anymore. */
export type BankPackType = "gold" | BankPackTypeItemsOnly;

declare global {
  /**
   * Contains information about what bank packs are available.
   * [0]: The map where you can access this bank pack
   * [1]: The cost to unlock this bank pack if you buy with gold
   * [2]: The cost to unlock this bank pack if you buy with shells
   */
  const bank_packs: BankPacksInfos;

  function bank_retrieve(
    pack: BankPackTypeItemsOnly,
    pack_slot: number,
    slot?: number
  ): Promise<void>;

  /**
   * Deposits the given amount of gold in the bank. You must be in the bank to actually deposit gold.
   * @param amount The amount of gold to deposit
   */
  function bank_deposit(amount: number): void;
  /**
   * Deposits the given item in to the given bank. If no `pack` and `packPosition` is given, the game will try to deposit in to the first available slot. You must be in the bank to actually deposit items.
   * @param inventoryPosition The position of the item in your inventory
   * @param pack The bank pack that you want to deposit the item in to
   * @param packPosition The position of the item in the bank pack you want to deposit the item in to
   */
  function bank_store(
    inventoryPosition: number,
    pack?: BankPackTypeItemsOnly,
    packPosition?: number
  ): Promise<void>;
  /**
   * Withdraws the given amount of gold from the bank. You must be in the bank to actually withdraw gold.
   * @param amount The amount of gold to withdraw
   */
  function bank_withdraw(amount: number): void;
}
