export type PetLicenceKey = "puppyer"; // Licence to Adopt a Puppy

export interface GPetLicence {
  explanation: string;
  /** Cost of the item in gold, if an NPC were to sell this item. */
  g: number;
  /** The full display name of an item. */
  name: string;
  /** Indicates how many of this items you can stack. Set if the item is stackable. */
  s: number;
  /** The skin of the item. */
  skin: PetLicenceKey;
  /** The type of item, `shield`, `weapon`, `gloves`... */
  type: "petlicence";
}
