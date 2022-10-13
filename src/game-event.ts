import { ItemName } from "./generated";
import { ItemInfo } from "./items";

export interface GameEvents {
    /** Item bought from Ponty */
    sbuy: {
        /** Character who triggered the event */
        name: string;
        item: {
            name: ItemName;
            level: number;
            rid: string;
            q: number;
            cash?: boolean;
        };
    };
    /** Item bought from Lost and Found */
    fbuy: {
        /** Character who triggered the event */
        name: string;
        item: {
            name: ItemName;
            level: number;
            rid: string;
            q: number;
        };
    };
    death: {
        /** Character Name or Monster ID  */
        id: string;
    };
    mluck: {
        /** Character Name  */
        name: string;

        item: ItemInfo;

        /** Inventory slot */
        num: number;
    };
}
