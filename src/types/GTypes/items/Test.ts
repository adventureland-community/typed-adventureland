export type TestKey = "test"; // Test

export interface GTest {
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  explanation: string;
  ignore: boolean;
  /** The skin of the item. */
  skin: TestKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "test";
}
