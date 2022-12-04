export type ServerToClient_disappearing_text = {
  message: string;
  x: number;
  y: number;
  id: string;
  args:
    | {
        c: string;
        s: string;
      }
    | {
        color: string;
        size: string;
      };
};
