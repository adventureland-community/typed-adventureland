/**
 *
 * Main contributor:
 * MIT License

Copyright (c) 2019 Kent Rasmussen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 *
 *
*/
export {};

declare global {

  const game: {
    // TODO: Get a list of events
    /**
     * Sets up an event listener for the game. See http://adventure.land/docs/code/game/events for more info.
     * @param event The event name to listen to
     * @param callback The function that gets called when the event triggers
     */
    on(event: string, callback?: (data: any) => void): void;
    all(callback?: (name: any, data: any) => void): void;
    /** indicator if the game is using graphics and we can use PIXI.Graphics for example */
    graphics: boolean;
  };
  /**
   *
   * @param x
   * @param y
   * @param x2
   * @param y2
   * @param thickness defaults to 1
   * @param color defaults to 0xF38D00
   */
  function draw_line(
    x: number,
    y: number,
    x2: number,
    y2: number,
    thickness?: number,
    color?: string | number // TODO: should really be a number
  ): { destroy: () => void }; // returns PIXI.Graphics
  /**
   *
   * @param x
   * @param y
   * @param radius
   * @param thickness defaults to 1
   * @param color defaults to 0x00F33E
   */
  function draw_circle(
    x: number,
    y: number,
    radius: number,
    thickness?: number,
    color?: string
  ): { destroy: () => void }; // returns PIXI.Graphics

  function open_stand(inventoryIndex?: number): Promise<any>;
  function close_stand(): Promise<any>;

  // function draw_circle(x: number, y: number, radius: number, size: number, color: number): any;
  function unmap_key(key: string): void;
  function map_key(key: string, thing: string, arg?: string): void;
  function load_code(nameOrSlot: string | number, onerror?: any): void;
  /**
   * Accept a magiport request from a mage
   * @param name The name of the mage offering a magiport
   */
  function accept_magiport(name: string): void;
  /**
   * Accept the party invititation of another character (i.e. join their party)
   * @param name The name of the character offering a party invite
   */
  function accept_party_invite(name: string): void;
  /**
   * Accept the request of another character to join your party (i.e. let them join your party)
   * @param name The name of the character to allow in to your party
   */
  function accept_party_request(name: string): void;
  /**
   * Activate an item (likely a booster)
   * @param inventoryPosition The position of the item in your inventory
   */
  function activate(inventoryPosition: number): void;
  /**
   * Attack another monster or a player with your normal attack
   * @param target The target entity to attack (`parent.entities`)
   * @returns A promise containing information about the attack, such as the projectile, or a promise cointaining the error why the attack didn't work
   */
  // TODO: Change the "any" to the promise that this function returns
  function attack(target: Entity): Promise<any>;
  /**
   * Crafts the given item if you can craft that item, you have the required items, and you have enough gold.
   * @param name The name of the item to craft (`G.craft`)
   * @returns A string containing the basic reason it failed, or nothing upon success
   */
  function auto_craft(name: ItemName): string | void;

  /**
   * Buy an item from an NPC. This function can buy things with gold or shells.
   * @param item The name of the item you wish to purchase (`G.items`)
   * @param quantity How many items to buy. The default is to buy one item
   */
  // TODO: Change the "any" to the promise that this function returns
  function buy(item: ItemName, quantity?: number): Promise<any>;
  /**
   * Buy an item from an NPC using only gold. If you want to buy things with shells, use `buy_with_shells`.
   * @param item The name of the item you wish to purchase (`G.items`)
   * @param quantity How many items to buy. The default is to buy one item
   */
  // TODO: Change the "any" to the promise that this function returns
  function buy_with_gold(item: ItemName, quantity?: number): Promise<any>;
  /**
   * Buy an item from an NPC using only shells. If you want to buy things with gold, use `buy_with_gold`
   * @param item The name of the item you wish to purchase (`G.items`)
   * @param quantity How many items to buy. The default is to buy one item
   */
  // TODO: Change the "any" to the promise that this function returns
  function buy_with_shells(item: ItemName, quantity?: number): Promise<any>;
  /**
   * Check if you can attack the given target. This function also checks status conditions by calling `parent.is_disabled(character)` which checks statuses such as `rip` and `stunned`.
   * NOTE: If you just want to check the cooldown, consider using `is_on_cooldown("attack")`
   * @param target The target entity to check if you can attack (`parent.entities`)
   * @returns TRUE if the target is attackable, FALSE otherwise.
   */
  function can_attack(target: Entity): boolean;
  /**
   * Check if you can heal the given target.
   * @param target The target entity to check if you can heal (`parent.entities`)
   */
  function can_heal(target: Entity): boolean;

  /**
   * Checks if the given entity can transport. If given your own character, it will also check if you are already transporting
   * @param entity The entity to check
   * @returns TRUE if you are not currently transporting, and can transport, FALSE otherwise
   */
  function can_transport(entity: Entity): boolean;
  /**
   * Checks if the skill is usable by the given character. Also checks if the given skill is on cooldown.
   * @param skill The skill to check
   * @param returns TRUE if not on cooldown, FALSE otherwise.
   */
  function can_use(skill: import("./skills").SkillName): boolean;
  /**
   * Checks if you can use the given door from the given position
   * @param map A given map (from `G.maps`)
   * @param door The given door (from `G.maps[map].doors`)
   * @param x The x position on the map
   * @param y The y position on the map
   * @returns TRUE if the door can be used from the given position, FALSE otherwise
   */
  function can_use_door(map: MapName, door: DoorInfo, x: number, y: number): boolean;


  /**
   * Changes the target of the player. Use in association with `get_targeted_monster()`.
   * @param target A given target (from `parent.entities`)
   */
  function change_target(target?: Entity): void;
  /**
   * Clears all drawings from the window. Use this function to clean up `draw_circle` and `draw_line`.
   */
  function clear_drawings(): void;

  function clear_buttons(): void;
  /**
   * Runs the given code snippet for the given character.
   * @param character The name of the character
   * @param code The code snippet to run
   */
  // TODO: I think the code snippet is the actual code, not the name of a saved piece of code, but I need to confirm.
  function command_character(character: string, code: string): void;
  /**
   * Compounds the three items for a chance at obtaining 1 higher level item of the same kind.
   * @param item1 The inventory position of the first item
   * @param item2 The inventory position of the second item
   * @param item3 The inventory position of the third item
   * @param scroll The inventory position of the scroll to use to combine the three items
   * @param offering The inventory position of the offering (e.g. Primordial Essence) to use
   */
  // TODO: Change the "any" to the promise that this function returns
  function compound(
    item1: number,
    item2: number,
    item3: number,
    scroll: number,
    offering?: number
  ): Promise<CompoundSuccessResponse | CompoundFailureResponse>;

  function compound(
    item1: number,
    item2: number,
    item3: number,
    scroll: number,
    offering?: number,
    only_calculate?: boolean
  ): Promise<CompoundCalculateResponse>;

  type CompoundSuccessResponse = {
    success: boolean;
    level: number;
    num: number;
  };

  export type CompoundCalculateResponse = {
    calculate: boolean;
    chance: number;
    item: ItemInfo;
    scroll: string;
    grace: number;
    success: boolean;
    response: string;
    place: string;
  };

  type CompoundFailureResponse = {
    reason: string;
  };

  /**
   * Consumes the given item (e.g. Candy Pop)
   * @param item The inventory position of the item
   */
  function consume(item: number): void;
  /**
   * Crafts the given items. Note: Some recipes might require gold to craft, too.
   * @param item0 The inventory position of the item to be put in the top left crafting slot
   * @param item1 The inventory position of the item to be put in the top middle crafting slot
   * @param item2 The inventory position of the item to be put in the top right crafting slot
   * @param item3 The inventory position of the item to be put in the center left crafting slot
   * @param item4 The inventory position of the item to be put in the center middle crafting slot
   * @param item5 The inventory position of the item to be put in the center right crafting slot
   * @param item6 The inventory position of the item to be put in the bottom left crafting slot
   * @param item7 The inventory position of the item to be put in the bottom middle crafting slot
   * @param item8 The inventory position of the item to be put in the bottom right crafting slot
   */
  function craft(
    item0: number,
    item1?: number,
    item2?: number,
    item3?: number,
    item4?: number,
    item5?: number,
    item6?: number,
    item7?: number,
    item8?: number
  ): void;
  /**
   * Overrides the character to walk at `Math.min(parent.character.speed, cruise_speed)` speed.
   * @param speed The speed at which to walk at
   */
  function cruise(speed: number): void;
  /** Feed this function a value like (character.apiercing - target.armor) and it spits out a multiplier so you can adjust your expected damage */
  function damage_multiplier(difference: number): number;
  function distance(from: IPosition | PositionReal, to: IPosition | PositionReal): number;

  function equip(inventoryPostion: number, slot?: SlotType): any;
  function exchange(inventoryPosition: number): Promise<any>;
  function game_log(message: string, color?: string): any;
  function get<T>(key: string): T;
  function get_targeted_monster(): Entity;
  function get_target(): CharacterEntity | Entity | null;
  function get_target_of(entity: Entity): Entity | null;
  function get_player(name: string): CharacterEntity;
  function get_nearest_monster(args: {
    /**
     * max attack
     */
    max_att?: number;
    /**
     * min XP
     */
    min_xp?: number;
    /**
     * Only return monsters that target this "name" or player object
     */
    target?: any;
    no_target?: boolean;
    path_check?: boolean;
    type?: string;
  }): Entity;
  function heal(target: Entity): any;
  function use_hp_or_mp(): void;
  /** Checks whether or not we can attack other players */
  function is_pvp(): boolean;
  function is_in_range(entity: Entity, skill?: import("./skills").SkillName): boolean;
  function is_transporting(entity: Entity): boolean;
  function is_moving(entity: Entity): boolean;
  function is_on_cooldown(skill: string): boolean;
  
  
  /**
   * If no ID is given, it will loot some chests.
   * @param id The ID of a chest (from `parent.chests`)
   */
  function loot(id?: string): Promise<any>;

  function mssince(date: Date): number;
  function reduce_cooldown(skill: import("./skills").SkillName, ms: number): void;
  function respawn(): any;
  /** Quantity defaults to 1 if not set */
  function sell(inventoryPostion: number, quantity?: number): any;
  function send_cm(to: string | string[], data: any): any;
  function send_gold(to: string | { name: string }, amount: number): any;
  function send_item(to: string | { name: string }, inventoryPostion: number, quantity?: number): any;
  function send_local_cm(to: string, data: any): any;
  /**
   *
   * @param name name could be a player object, name, or id
   * @param isRequest If isRequest is set to true, it will send a party request
   */
  function send_party_invite(name: any, isRequest?: boolean): any;
  function send_party_request(name: string): any;
  function get_active_characters(): { [characterName: string]: "self" | "starting" | "loading" | "active" | "code" };
  /**
   * renders the object as json inside the game
   * @param e
   */
  function show_json(e: any): void;
  function set(key: string, value: unknown): unknown;
  function set_message(text: string, color?: string): any;
  function simple_distance(from: IPosition | PositionReal, to: IPosition | PositionReal): number;

  function start_character(characterName: string, codeSlotOrName?: string | number): any;
  /** stops moving, or channeled actions */
  function stop(action?: string): any;
  function stop_character(name: string): any;
  /** Swap the position of two items in the player's inventory */
  function swap(index1: number, index2: number): any;
  /** For buying things off players' merchants */
  function trade_buy(target: Entity, trade_slot: number): any;
  function transport(map: MapName, spawn?: number): any;
  function unequip(slot: SlotType | TradeSlotType): any;

  // TODO: do better typing for this.
  // /** Allows you to specify the calculate chance  */
  // function upgrade(
  //   itemInventoryPosition: number,
  //   scrollInventoryPosition: number,
  //   offeringInventoryPosition?: number,
  //   calculate?: true
  // ): Promise<{
  //   chance: number;
  //   item: { name: ItemName; gift: number; level: number };
  //   grace: number;
  //   scroll: string;
  //   calculate: boolean;
  // }>;
  function upgrade(
    itemInventoryPosition: number,
    scrollInventoryPosition: number,
    offeringInventoryPosition?: number
  ): Promise<any>;

  

  function trade(inventoryPosition: number, tradeSlot: number | TradeSlotType, price: number, quantity: number): void;

  function join(eventName: EventName): Promise<any>;
  /**
   * MOVEMENT METHODS
   */

  /**
   * returns the position of the npc with the specified id, the first map it encounters with the npc is returned, it does not priortize your current map.
   * @param id The key of the npc from G.npcs
   */
  function find_npc(id: import("./npc").NPCType): IPosition;

  /** This function uses move() if it can, otherwise it uses smart_move() */
  export function xmove(entity: PositionReal): Promise<boolean>;
  export function xmove(x: number, y: number): Promise<boolean>;

  /**
   * It validates against the map geometry from G.geometry doing 2d "raycasting" to see if we will hit a wall if we go in a straight line
   * Checks if the you can move from `[position.x, position.y] to [position.going_x, position.going_y]
   * @param entity The moveable entity you want to check is movable
   * @returns TRUE if you can move there, FALSE otherwise
   */
  export function can_move(position: PositionMovable & { base: EntityBase }): boolean;
  /**
   * Checks if you can move your character to the given destination on your current map
   * @param destination A position object containing the destination coordinates
   * @returns TRUE if you can move there, FALSE otherwise
   */
  export function can_move_to(destination: PositionReal): boolean;
  /**
   * Checks if you can move your character to the given destination on your current map
   * @param x The x-coordinate that you want to move to
   * @param y The y-coordinate that you want to move to
   * @returns TRUE if you can move there, FALSE otherwise
   */
  export function can_move_to(x: number, y: number): boolean;

  export type MoveFailureResponse = {
    reason: string | "unable" | "interrupted";
  };
  /**
   * The promise returned is not upon arrival at the destination, it's upon the server confirming it recieved your request.
   * @param x
   * @param y
   */
  export function move(x: number, y: number): Promise<MoveResponse>;
  export type MoveResponse = void | MoveFailureResponse;
  export type SmartMoveMapPosition = "town" | "upgrade" | "exchange" | "potions" | "scrolls" | "compound";
  export type SmartMoveToDestination =
    | import("./npc").NPCType
    | IPosition
    | MapName
    | MonsterName
    | SmartMoveMapPosition;

  export type SmartMoveSuccess = { success: true };
  export type SmartMoveFailure = { success: false; reason: string | "invalid" };
  export type SmartMoveResponse = SmartMoveSuccess | SmartMoveFailure;
  export function smart_move(
    destination:
      | SmartMoveToDestination
      | {
          to: SmartMoveToDestination;
          return?: boolean;
        },
    /**
     * a callback function with true or false ad the argument depending on smart_move success or failure
     * @deprecated on_done function is an old callback function for compatibility, smart_move also returns a Promise [25/03/20]
     */
    on_done?: () => Promise<void | boolean>
  ): Promise<SmartMoveResponse>;

  /**
   * Checks if the given entity can walk (i.e. move). If given your own character, it will also check if you are already transporting.
   * @param entity The entity to check
   * @returns TRUE if you are not currently transporting, and can walk, FALSE otherwise
   */
  export function can_walk(entity: Entity): boolean;

  /** Contains information about smart_move() */
  let smart: IPosition & {
    /** If searching and false, we are still searching. If  */
    found: boolean;
    /** If .moving == true, we are moving or searching */
    moving: boolean;
    plot: PositionSmart[];
    /** If ().moving == false && .searching == true), we are searching for a path. */
    searching: boolean;
    start_x: number;
    start_y: number;
    /** A settable flag. If true, smart_move will use town teleports to move around */
    use_town: boolean;
  };

}

export type ChestInfo = PositionReal & {
  alpha: number;
  skin: "chest3" | string;
};

/**
 * Contains elements that describe a door
 * [0]: The x-position of the door
 * [1]: The y-position of the door
 * [2]: The width of the door
 * [3]: The height of the door
 * [4]: The map that this door leads to (use in combination with [5] (spawn))
 * [5]: The spawn that this door leads to (use in combination with [4] (map))
 * [6]: The spawn that this door is close to on the current map
 * [7]: ??? Maybe "locked" or "ulocked"?
 * [8]: ??? There's reference to "complicated" in smart_move?
 */
export type DoorInfo = [number, number, number, number, MapName, number?, number?, string?, string?];

export type StatusInfoBase = {
  /** How many ms left before this condition expires */
  ms: number;
};
export type MonsterHuntStatusInfo = StatusInfoBase & {
  /** The server ID where the monster hunt is valid */
  sn: string;
  /** Number of monsters remaining to kill */
  c: number;
  /** What monster we have to kill */
  id: MonsterName;
};

export type StatusInfo = {
  [T in ConditionName]?: StatusInfoBase;
} & {
  burned?: {
    // (Unconfirmed) the damage that the burn will do per second.
    intensity: number;
    // The character ID that caused the burn
    f: string;
  };
  coop?: {
    id: string;
    p: number;
  };
  mluck?: {
    /** The ID of the merchant who cast mluck */
    f: string;
    /** A flag to show if the mluck was cast by the user's merchant. If false, it can be mlucked by any merchant. */
    strong: boolean;
  };
  monsterhunt?: MonsterHuntStatusInfo;
  citizen0aura?: {
    luck: number;
  };
  citizen4aura?: {
    gold: number;
  };
};





// TODO: Get all types (from G?)
export type CharacterType = "mage" | "merchant" | "paladin" | "priest" | "ranger" | "rogue" | "warrior";

// TODO: Get all types (from G?)
export type DamageType = "magical" | "physical";

export type SlotType =
  | "amulet"
  | "belt"
  | "cape"
  | "chest"
  | "earring1"
  | "earring2"
  | "elixir"
  | "gloves"
  | "helmet"
  | "mainhand"
  | "offhand"
  | "orb"
  | "pants"
  | "ring1"
  | "ring2"
  | "shoes";

export type TradeSlotType =
  | "trade1"
  | "trade2"
  | "trade3"
  | "trade4"
  | "trade5"
  | "trade6"
  | "trade7"
  | "trade8"
  | "trade9"
  | "trade10"
  | "trade11"
  | "trade12"
  | "trade13"
  | "trade14"
  | "trade15"
  | "trade16";

export type ConditionName =
  | "authfail"
  | "blink"
  | "burned"
  | "charging"
  | "charmed"
  | "dampened"
  | "darkblessing"
  | "easterluck"
  | "eburn"
  | "eheal"
  | "energized"
  | "fingered"
  | "frozen"
  | "fullguard"
  | "hardshell"
  | "healed"
  | "holidayspirit"
  | "invincible"
  | "licenced"
  | "marked"
  | "mcourage"
  | "mlifesteal"
  | "mluck"
  | "monsterhunt"
  | "massproduction"
  | "massproductionpp"
  | "notverified"
  | "phasedout"
  | "poisoned"
  | "poisonous"
  | "power"
  | "reflection"
  | "rspeed"
  | "shocked"
  | "slowness"
  | "stack"
  | "stoned"
  | "stunned"
  | "sugarrush"
  | "tangled"
  | "warcry"
  | "weakness"
  | "withdrawal"
  | "xpower"
  | "xshotted"
  | "invis";

