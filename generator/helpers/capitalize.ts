/**
 * Ensures the first character of a string is in upper case.
 */
export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
