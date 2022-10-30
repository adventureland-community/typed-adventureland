export type EmotionKey = "drop_egg" | "hearts_single";

export interface GEmotion {
  fx: EmotionKey;
  cooldown: number;
}
