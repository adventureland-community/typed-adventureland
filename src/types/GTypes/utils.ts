/** From https://www.npmjs.com/package/@telokys/ts-meta-types#debugterface */
export type Debug<Terface> = Terface extends infer O ? { [K in keyof O]: O[K] } : never;

/** Creates a union of all keys of all objects in the Terface union */
export type AllKeys<Terface> = Terface extends any
  ? keyof Terface & (string | number | symbol)
  : never;

/** Creates a new interface adding the missing keys to Terface */
export type Wrap<Terface, Keys extends string | number | symbol> = Terface & {
  [K in Exclude<Keys, keyof Terface>]?: undefined;
};

/** Distributes the union and automatically add the missing keys */
export type BetterUXWrapper<
  Terface,
  Keys extends AllKeys<Terface> = AllKeys<Terface>
> = Terface extends any ? Wrap<Terface, Keys> : never;

/** Builds a tuple containing N times the type T. */
export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;
