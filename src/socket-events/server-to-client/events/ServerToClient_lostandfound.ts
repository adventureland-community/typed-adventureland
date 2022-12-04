import { ItemInfo } from "../../../items";

export type ServerToClient_lostandfound = Array<
  ItemInfo & {
    /** If set, this item is not for sale. The player wants to buy this item. */
    b?: boolean;
    /** Number of minutes remaining for giveaway items */
    giveaway?: number;
    /** List of character IDs that are in the giveaway */
    list?: Array<string>;
    price: number;
    rid: string;
  }
>;
