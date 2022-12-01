import { ItemInfo } from "./items";
import { TypedEventEmitter } from "./TypedEventEmitter";

export type SocketWithEventsFunctions = Pick<
  TypedEventEmitter<ReceivedSocketEvents>,
  "on" | "once" | "off"
> &
  Pick<TypedEventEmitter<EmittedSocketEvents>, "emit">;

export interface ReceivedSocketEvents {
  /** Item list from Ponty */
  secondhands: Array<ItemInfo>;
}

export interface EmittedSocketEvents {
  /** Request item list from Ponty */
  secondhands: void;

  /** Buy item from Ponty */
  sbuy: {
    rid: string;
  };

  /** Ask for the trade history. */
  trade_history: void;
}
