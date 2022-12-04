export {};

declare global {
  /**
   *
   * @param x
   * @param y
   * @param x2
   * @param y2
   * @param thickness defaults to 1
   * @param color defaults to 0xF38D00
   */
  function draw_line(
    x: number,
    y: number,
    x2: number,
    y2: number,
    thickness?: number,
    color?: number
  ): PIXI.Graphics;

  /**
   *
   * @param x
   * @param y
   * @param radius
   * @param thickness defaults to 1
   * @param color defaults to 0x00F33E
   */
  function draw_circle(
    x: number,
    y: number,
    radius: number,
    thickness?: number,
    color?: number
  ): PIXI.Graphics;
}
