export type JarKey =
  | "cxjar" // CX Jar
  | "emotionjar" // Emotion Jar
  | "emptyjar"; // Empty Jar

export interface GJar {
  exclusive?: boolean;
  name: string;
  g: number;
  explanation: string;
  s: number;
  skin: string;
  type: string;
}
