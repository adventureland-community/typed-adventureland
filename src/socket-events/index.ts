import { TypedEventEmitter } from "../TypedEventEmitter";
import { ClientToServerEvents } from "./client-to-server";
import { ServerToClientEvents } from "./server-to-client";

export * from "./client-to-server";
export * from "./server-to-client";

export type SocketWithEventsFunctions = Pick<
  TypedEventEmitter<ServerToClientEvents>,
  "on" | "once" | "off"
> &
  Pick<TypedEventEmitter<ClientToServerEvents>, "emit">;
