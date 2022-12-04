// TODO: Capture an "update" and confirm that it has friends.
export type ServerToClient_friend =
  | {
      event: "lost";
      friends: Array<string>;
      /** The name of the player that you are no longer friends with */
      name: string;
    }
  | {
      event: "new";
      /** The name of the player that you are now friends with */
      friends: Array<string>;
      name: string;
    }
  | {
      event: "request";
      /** The name of the player who sent you a friend request */
      name: string;
    }
  | {
      event: "update";
      friends: Array<string>;
    };
