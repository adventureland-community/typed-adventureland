export type ClientToServer_party =
  | {
      event: "accept" | "invite" | "kick" | "raccept" | "request";
      name: string;
    }
  | {
      event: "leave";
    };
