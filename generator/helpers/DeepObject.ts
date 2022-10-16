/**
 * Generates a recursive type of the form Record<Key, Record<Key, unknown>>
 * where there are as many `Record`s as the `Depth` value.
 * @example
   DeepObject<1, Key> // is Record<Key, unknown>
   DeepObject<2, Key> // is Record<Key, Record<Key, unknown>>
   DeepObject<3, Key> // is Record<Key, Record<Key, Record<Key, unknown>>>
 */
export type DeepObject<Depth extends number, Key extends number | string = string> = DeepObject_<
  Depth,
  Key,
  []
>;

type DeepObject_<
  Depth extends number,
  Key extends number | string,
  Sentry extends unknown[] = unknown[]
> = Depth extends Sentry["length"]
  ? unknown
  : Record<Key, DeepObject_<Depth, Key, [Depth, ...Sentry]>>;
