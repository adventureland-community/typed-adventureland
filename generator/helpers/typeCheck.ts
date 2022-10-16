export function isObject(val: unknown): val is Record<string | number, unknown> {
  return val !== null && !Array.isArray(val) && typeof val === "object";
}

export function isArray(val: unknown): val is Array<unknown> {
  return Array.isArray(val);
}
