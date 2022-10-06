import { SkillName } from "./skills";
declare global {
    interface Window {
        clear_game_logs(): void;
        close_merchant(): void;
        exchange(inventoryPosition: number): void;
        open_merchant(standInventoryPostion: number): void;
        start_runner(): void;
        stop_runner(): void;
        sprite_image(name: string, args?: any): string;
        next_skill: {
            [T in SkillName]?: Date;
        };
        /** Contains the name of every character in your party */
        party_list: string[];
        /** Contains a list of the last 40 ping response times */
        pings: number[];
    }
}
