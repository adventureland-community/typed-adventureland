import { SlotType } from "../../../entity";
import { ItemKey, MonsterKey, SkillKey } from "../../../G";
import { ItemInfo } from "../../../items";
import { ServerToClient_action_projectile } from "./ServerToClient_action";

export type AttackFailedGRDataObject = {
  response: "attack_failed";
  place: "attack";
  id: string;
};

export type BankOperationGRDataObject = {
  response: "data" | "storage_full" | "bank_unavailable";
  place: "bank";
  gold?: number;
  cevent?: true;
  failed?: true;
  success?: true;
};

/** When you try to enter the bank, but another one of your characters is already inside. */
export type BankOPXGRDataObject = {
  response: "bank_opx";
  /** The character that is already inside */
  name: string;
  reason: "mounted";
};

export type BankRestrictionsGRDataObject = {
  response: "bank_restrictions";
  place: string;
};

export type BuySuccessGRDataObject = {
  cevent: "buy";
  response: "buy_success";
  success: boolean;
  place: "buy";
  cost: number;
  /** Inventory slot that the item is now in */
  num: number;
  name: ItemKey;
  /** Note, if you don't specify the quantity in the `buy` socket emit, it will be set to 1 by the server */
  q: number;
};

export type CooldownGRDataObject = {
  response: "cooldown";
  failed: true;
  skill?: SkillKey;
  id?: string;
  place: SkillKey;
  ms: number;
};

export type CraftGRDataObject = {
  response: "craft";
  name: ItemKey;
};

export type SkillSuccessGRDataObject = {
  response: "data";
  place: Exclude<SkillKey, "attack" | "taunt" | "heal" | "curse" | "supershot">;
  success: boolean;
  in_progress?: true;
};

export type ProjectileSkillGRDataObject = {
  response: "data";
  place: Extract<SkillKey, "attack" | "taunt" | "heal" | "curse" | "supershot">;
  dist?: number;
  reason?: string;
  failed?: boolean;
  id?: string;
} & Partial<ServerToClient_action_projectile>;

export type DefeatedByMonsterGRDataObject = {
  response: "defeated_by_a_monster";
  xp: number;
  monster: MonsterKey;
};

export type DisabledGRDataObject = {
  response: "disabled";
  place: SkillKey;
};

export type DismantleGRDataObject = {
  response: "dismantle";
  /** TODO: Name of item dismantled or name of item received? */
  name: ItemKey;
};

/** Called when donating to the goblin.
 * donation < 100k ➡️ low
 * 100k <= donation < 1m ➡️ gum
 * donation >= 1m ➡️ ability to see lost and found */
export type DonateGRDataObject = {
  response: "donate_gum" | "donate_low" | "donate_thx";
  gold: number;
  xprate: number;
};

/** Called when a condition expires */
export type CondExpGRDataObject = {
  response: "ex_condition";
  name: SkillKey;
};

export type GetCloserGRDataObject = {
  response: "get_closer";
  place: "upgrade";
};

export type GoldSentGRDataObject = {
  response: "gold_sent";
  name: string;
  gold: number;
};

export type ItemLockedGRDataObject = {
  response: "item_locked";
  place: "upgrade";
};

export type ItemSentGRDataObject = {
  response: "item_sent";
  name: string;
  item: ItemKey;
  /** TODO: Verify that q is required for all ItemSent responses */
  q: number;
};

export type LostFoundInfoGRDataObject = {
  response: "lostandfound_info";
  gold: number;
};

export type MagiportGRDataObject = {
  response: "magiport_failed" | "magiport_sent";
  id: string;
};

export type TakeMailItemGRDataObject = {
  response: "mail_item_taken";
};

export type NoMPGRDataObject = {
  response: "no_mp";
  place: SkillKey;
  failed: true;
};

export type NoItemGRDataObject = {
  response: "no_item";
  place: "upgrade" | "compound";
  failed: true;
};

export type NoTargetGRDataObject = {
  response: "no_target";
  /** TODO: See what else gets returned */
};

export type NotReadyGRDataObject = {
  response: "not_ready";
  failed: true;
  place: "equip" | "use";
  ms?: number; // TODO: https://github.com/kaansoral/adventureland/pull/154 will add ms to all not_ready responses
};

export type SeashellGRDataObject = {
  response: "seashell_success";
  suffix: string | "";
};

export type SkillStatusGRDataObject = {
  response: "skill_fail" | "skill_success";
  name: SkillKey;
};

export type TargetLockGRDataObject = {
  response: "target_lock";
  monster: MonsterKey;
};

export type TooFarGRDataObject = {
  response: "too_far";
  place: SkillKey;
  id: string;
  dist: number;
};

export type TownGRDataObject =
  | {
      success: false;
      in_progress: true;
      response: "data";
      place: "town";
    }
  | {
      success: false;
      response: "cant_escape";
      place: "town";
    };

export type TransportGRDataObject =
  | {
      success: true;
      response: "data";
      place: "transport";
    }
  | {
      success: false;
      response: "cant_escape";
      place: "transport";
    };

export type UnfriendFailedGRDataObject = {
  response: "unfriend_failed";
  reason: "bank" | "coms failure" | "nouser";
};

export type GoldReceivedGRDataObject = {
  /** TODO: Separate these into separate objects */
  response: "gold_received" | "item_placeholder" | "item_received";
  gold: number;
  name: string;
};

export type EquipGRDataObject = EquipSuccessGRDataObject | EquipFailedGRDataObject;

export type EquipSuccessGRDataObject = {
  response: "data";
  place: "equip";
  success: true;
  slot: SlotType;
  num: number;
};

export type EquipFailedGRDataObject = {
  response: "cant_equip";
  place: "equip";
  failed: true;
};

export type ExchangeNotEnoughGRDataObject = {
  response: "exchange_notenough";
  place: "exchange_buy";
  failed: true;
};

export type UpgradeCompoundGRDataObject = {
  response: "upgrade_success" | "upgrade_fail" | "compound_success" | "compound_fail";
  /** the level attempted */
  level: number;
  /** the inventory slot used as item to upgrade */
  num: number;
};

export type GameResponseDataObject =
  | AttackFailedGRDataObject
  | BankOPXGRDataObject
  | BankRestrictionsGRDataObject
  | BuySuccessGRDataObject
  | CooldownGRDataObject
  | CraftGRDataObject
  | SkillSuccessGRDataObject
  | ProjectileSkillGRDataObject
  | DefeatedByMonsterGRDataObject
  | DisabledGRDataObject
  | DismantleGRDataObject
  | DonateGRDataObject
  | CondExpGRDataObject
  | GetCloserGRDataObject
  | GoldSentGRDataObject
  | ItemLockedGRDataObject
  | ItemSentGRDataObject
  | LostFoundInfoGRDataObject
  | MagiportGRDataObject
  | TakeMailItemGRDataObject
  | NoItemGRDataObject
  | NoMPGRDataObject
  | NoTargetGRDataObject
  | NotReadyGRDataObject
  | SeashellGRDataObject
  | SkillStatusGRDataObject
  | TargetLockGRDataObject
  | TooFarGRDataObject
  | UnfriendFailedGRDataObject
  | GoldReceivedGRDataObject
  | TownGRDataObject
  | TransportGRDataObject
  | EquipGRDataObject
  | ExchangeNotEnoughGRDataObject
  | UpgradeCompoundGRDataObject
  | BankOperationGRDataObject;

export type GameResponseDataString =
  | "bank_restrictions"
  /** When you attempt to place a bet while after you drank an xshot */
  | "bet_xshot"
  /** When you attempt to blink to a spot you can't reach. */
  | "blink_failed"
  | "buy_cant_npc"
  | "buy_cant_space"
  | "buy_cost"
  /** When you're too far from Ponty and try to view Ponty's items */
  | "buy_get_closer"
  /** When you try to use `transport` on a door that needs `enter` */
  | "cant_enter"
  /** When attempting to leave a map you can't use the leave command on
   *
   * When attempting to warp or change maps when you have a lot of targets
   */
  | "cant_escape"
  /** When we try to dash too far */
  | "dash_failed"
  /** Too far away from monster hunt npc */
  | "ecu_get_closer"
  /** When you try to do an emotion but it's not a valid emotion name, or you don't have that emotion */
  | "emotion_cant"
  /** When you try to do an emotion but it's rejected because it's on cooldown */
  | "emotion_cooldown"
  /** We are already exchanging something */
  | "exchange_existing"
  /** The given item requires multiple to exchange */
  | "exchange_notenough"
  /** When you send a friend request for someone you're already friends with */
  | "friend_already"
  /** When you try to accept a friend request, but you took too long (or they never sent one in the first place) */
  | "friend_expired"
  /** When you send a friend request but they aren't on the server to accept the request */
  | "friend_rleft"
  /** When you send a friend request for a valid player name */
  | "friend_rsent"
  /** When you try to sell a locked item */
  | "item_locked"
  /** When you try to loot a chest with items but there's no space in your inventory to loot */
  | "loot_no_space"
  /** When you try to look at the lost and found, but haven't donated enough */
  | "lostandfound_donate"
  /** When a merchant tries to start a monster hunt */
  | "monsterhunt_merchant"
  | "monsterhunt_started"
  /** When you try to use a skill, but you're not a high enough level */
  | "no_level"
  /** When you attack or use a skill with "id" set to "null" */
  | "no_target"
  /** After you use a skill, when the server is done with everything, it will send this in response */
  | "resolve_skill"
  /** When you try to send an item to another character, but they don't have room for it in their inventory */
  | "send_no_space"
  | "skill_cant_incapacitated"
  /** When you try to use a skill that requires a certain item to be equipped, but you don't have that item equipped */
  | "skill_cant_slot"
  /** When you try to use a skill, but you don't have the right weapon type equipped for that skill */
  | "skill_cant_wtype"
  | "skill_too_far"
  /** When you try to list an item for sale/purchase in a slot that already has something listed */
  | "slot_occupied"
  /** When you try to sell an item to another merchant, but there's no space on that merchant */
  | "trade_bspace"
  | "trade_get_closer"
  /** When you try to enter a dungeon, but you don't have a key */
  | "transport_cant_item"
  /** When you try to go through a door you haven't unlocked yet (e.g. lower bank) */
  | "transport_cant_locked"
  /** When you're too far away from a door */
  | "transport_cant_reach"
  /** When you try to upgrade an item that isn't upgradable */
  | "upgrade_cant"
  /** Failed upgrading (to chance) */
  | "upgrade_fail"
  /** We are already upgrading something */
  | "upgrade_in_progress"
  /** We are trying to use a scroll to upgrade something that is a higher grade than the scroll can upgrade */
  | "upgrade_incompatible_scroll"
  /** When you specify an inventory index for the item that is empty */
  | "upgrade_no_item"
  /** When you specify an inventory index for the scroll that is empty */
  | "upgrade_no_scroll"
  /** Successfully upgraded an item */
  | "upgrade_success"
  /** Sucessfully applied a stat scroll to an item */
  | "upgrade_success_stat"
  /** We are trying to use an offering that is not high enough grade to upgrade our item */
  | "upgrade_invalid_offering";

export type GameResponseDataUpgradeChance = {
  response: "compound_chance" | "upgrade_chance";

  /** The chance for a success */
  chance: number;

  /** The item being compounded */
  item: ItemInfo;

  /** The scroll used for the compound calculation */
  scroll: ItemKey;

  /** The offering used for the compound calculation */
  offering: ItemKey;

  /** Related to compound chance */
  grace: number;
};

export type ServerToClient_game_response =
  | GameResponseDataObject
  | GameResponseDataString
  | GameResponseDataUpgradeChance;
