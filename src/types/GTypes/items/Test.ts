export type TestKey = "test"; // Test

export interface GTest {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  ignore: boolean;
  /** The full display name of an item. */
  name: string;
  /** The skin of the item. */
  skin: TestKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "test";
}
