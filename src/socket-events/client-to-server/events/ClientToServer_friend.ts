export type ClientToServer_friend = {
  event: "accept" | "request" | "unfriend";
  name: string;
};
