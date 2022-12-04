export type ServerToClient_achievement_progress_firehazard = {
  name: "firehazard";
  count: number;
  needed: number;
};

export type ServerToClient_achievement_progress =
  | ServerToClient_achievement_progress_firehazard
  | {
      name: string;
    };
