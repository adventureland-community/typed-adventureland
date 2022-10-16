/** Returns a clone of the array where each element is unique. */
export function unique<T>(arr: Array<T>) {
  return [...new Set(arr).values()];
}
