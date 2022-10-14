export type OfferingKey =
  | "offering" // Primordial Essence
  | "offeringp" // Primling
  | "offeringx"; // Primordial X

export interface GOffering {
  a: boolean;
  s: number;
  name: string;
  g: number;
  skin: string;
  grade: number;
  explanation: string;
  type: string;
}
