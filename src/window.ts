import { PositionReal } from "./position";
import { SkillKey } from "./types/GTypes/skills";

export {}; // this is done to make window a module
declare global {
  interface Window {
    //   $: JQueryStatic;
    clear_game_logs(): void;
    close_merchant(): void;
    //   distance(from: IPosition | PositionReal, to: IPosition | PositionReal): number;
    exchange(inventoryPosition: number): void;
    open_merchant(standInventoryPostion: number): void;
    start_runner(): void;
    stop_runner(): void;

    sprite_image(name: string, args?: any): string;

    //   is_disabled(entity: Entity): boolean;

    //   character: CharacterEntity;
    chests: {
      [id: string]: ChestInfo;
    };
    //   entities: { [id: string]: Entity | CharacterEntity };
    next_skill: { [T in SkillKey]?: Date };
    //   npcs: GMapsNPC[];
    //   party: {
    //     [T in string]: IPosition & {
    //       level: number;
    //       /** This number refers to the percent of gold you get when one of the party members loots a chest */
    //       share: number;
    //       type: CharacterType;
    //     };
    //   };
    /** Contains the name of every character in your party */
    party_list: string[];
    /** Contains a list of the last 40 ping response times */
    pings: number[];
    //   server_identifier: ServerIdentifier;
    //   server_region: ServerRegion;
    //   socket: SocketIO.Socket & {
    //     onAny(arg: (event: string, data: any) => void): void;
    //   };
    //   S: {
    //     [T in EventName]?: IPosition & {
    //       map: string;
    //       live: boolean;
    //       hp: number;
    //       max_hp: number;
    //       /** The character name that the monster is currently attacking */
    //       target?: string;
    //       x?:number;
    //       y?:number
    //     };
    //   } & {
    //     valentines?: boolean;
    //   };
  }
}

export type ChestInfo = PositionReal & {
  alpha: number;
  skin: "chest3" | string;
};
