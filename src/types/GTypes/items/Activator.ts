export type ActivatorKey = "frozenstone"; // Frozen Stone

export interface GActivator {
  onclick: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The full display name of an item. */
  name: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The skin of the item. */
  skin: ActivatorKey;
  action: string;
  explanation: string;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "activator";
}
