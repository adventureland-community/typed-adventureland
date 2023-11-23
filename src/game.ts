import { GameWithEventsFunctions } from "./game-event";

export {};

declare global {
  var game: Game;

  type Game = GameWithEventsFunctions & {
    /** indicator if the game is using graphics and we can use PIXI.Graphics for example */
    graphics: boolean;
    platform: string; // "electron"
    html: boolean;
    cli: string;
    listeners: Array<{ id: string; event: string }>;
  };

  interface AdventurelandClient {
    game: typeof game;
  }
}
