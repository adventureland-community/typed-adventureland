declare global {
  function enter(dungeon: string, instance?: string): Promise<any>;
  interface AdventurelandClient {
    enter(dungeon: string, instance?: string): Promise<any>;
  }
}

export type DungeonName = "duelland" | "crypt" | "winter_instance";
