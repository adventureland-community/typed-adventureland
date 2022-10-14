export {};

declare global {
  const game: Game;

  interface Game {
    /** indicator if the game is using graphics and we can use PIXI.Graphics for example */
    graphics: boolean;
    platform: string; // "electron"
    html: boolean;
    cli: string;
    listeners: Array<{ id: string; event: string }>;
  }
}
