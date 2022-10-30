export interface GCosmetic {
  default_beard_position: number;
  default_face_position: number;
  default_hair_place: number;
  default_hat_place: number;
  default_head_place: number;
  default_makeup_position: number;
  bundle: Record<string, Array<string>>;
  gravestone: Record<string, number>;
  hair: Record<string, [number, number]>;
  hat: Record<string, number>;
  head: Record<string, [string, string, string] | [string, string, string, number]>;
  map: {
    old: "new";
  };
  no_upper: Array<never>;
  prop: Record<string, Array<string>>;
}
