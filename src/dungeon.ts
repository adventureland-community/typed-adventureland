declare global {
  function enter(dungeon: string, instance?: string): Promise<any>;
  interface AdventurelandClient {
    enter: typeof enter;
  }
}

export type DungeonName = "duelland" | "crypt" | "winter_instance";
