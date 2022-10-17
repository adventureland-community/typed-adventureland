export function singular(key: string) {
  if (!key) return key;

  switch (key.toLowerCase()) {
    case "classes":
      return key.slice(0, -2);
    case "chrysalis":
    case "qubics":
      return key;
  }

  if (key.endsWith("s")) {
    return key.slice(0, -1);
  }

  return key;
}
