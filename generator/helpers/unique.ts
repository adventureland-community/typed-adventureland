/** Returns a clone of the array where each element is unique. */
export function unique<T>(arr: Array<T>) {
  return [...new Set(arr).values()];
}

export function uniqueBy<T, U extends string | number = string | number>(
  arr: Array<T>,
  fn: (val: T) => U
) {
  const sentry: Array<U> = [];

  return arr.filter((elem) => {
    const val = fn(elem);

    if (!sentry.includes(val)) {
      sentry.push(val);
      return true;
    }

    return false;
  });
}
