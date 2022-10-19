export interface Union {
  name: string;
  GKey: string;
  category: string;
  values: Array<string>;
  comments: Record<string, null | string>;
  doNotWrite: boolean;
}

export class UnionRegistry {
  unions = new Map<string, Union>();

  register(union: Union) {
    this.unions.set(union.name, union);
  }

  lookup(values: Array<string>) {
    // The more precise unions should match first
    const unions = [...this.unions.values()].sort((a, b) => a.values.length - b.values.length);

    return unions.find((union) => values.every((value) => union.values.includes(value))) ?? null;
  }
}
