---
name: update-gtypes
description: >-
  Updates typed-adventureland GTypes from live Adventure Land data.js without
  weakening hand-strengthened types. Use when running generate, syncing G catalog
  keys, refreshing items/monsters/skills/maps types, or fixing DamageType/ability
  regressions after a generate.
---

# Update GTypes from live data

## Hard rule

Never overwrite `src/types/GTypes` with a raw `npm run generate`.
Generate always **weakens** hand types (e.g. `DamageType` → `string`, drops Maps
`merchants`/`upgrade`/`data`, mangles Geometry). Use the merge path.

## Workflow

```
Task Progress:
- [ ] 1. generate:tmp
- [ ] 2. merge:gtypes
- [ ] 3. review merge report (new props / new files)
- [ ] 4. strengthen any new props (overrides / named types — not string)
- [ ] 5. npm run build
- [ ] 6. regression checklist
```

### 1. Generate into a temp tree

```bash
npm run generate:tmp
```

Writes `.tmp_gen/GTypes` only. Leaves `src/types/GTypes` alone.

### 2. Merge keys into src

```bash
npm run merge:gtypes
```

Merge **does**:
- append missing `*Key` union members
- copy brand-new category files
- print new interface properties found in gen but missing in src

Merge **does not**:
- replace existing interface property types
- delete properties
- rewrite Maps/Geometry/hand interfaces

Or one-shot: `npm run update:gtypes` (tmp → merge → build).

### 3–4. Review reported props

For each new prop in the merge report:
- prefer a named type / Key union / literal union over `string`
- add a `generator/config/<GKey>.json` `overrides` (+ `imports` if external) so the next generate stays strong
- then add the prop to the hand interface

Known strong fields (do not accept `string` for these):

| Field | Type | Where |
| --- | --- | --- |
| `damage_type` | `DamageType` (`src/entity.ts`) | items, classes, monsters, skills |
| `ability` (items) | `ItemAbility` (not `SkillKey` — many procs are not skills) | items |
| `unlocks` (bank keys) | `MapKey` | BankKey |
| `aspeed` (animations) | `"slow" \| "mild" \| "fast"` | animations |
| `aspeed` (npcs) | `"slow" \| "slower" \| "fast"` | npcs |
| `wtype` | `WeaponType` | items |
| `projectile` | `ProjectileKey` | items |

Hand-shaped catalogs (merge keys only; never take gen interfaces wholesale):
`maps`, `geometry`, and any file whose interface is richer than live field sniffing.

### 5. Build

```bash
npm run build
```

Fix mid-union syntax if you hand-edited keys: the last member before a new `|` must not keep a trailing `;`.

### 6. Regression checklist

Done only when all are true:

- [ ] `npm run build` succeeds
- [ ] `damage_type` is still `DamageType` (not `string`) on Weapon / Classes / Monsters / Skills
- [ ] `GAnimation` still has live props (`above`, `frames`, `file`, `aspeed`, …)
- [ ] `GMap` still has `data`, `merchants`, `upgrade`, `compound`, `items` where previously present
- [ ] New live keys appear in the relevant `*Key` unions
- [ ] No mojibake in NPC/item names (UTF-8)

## When to edit generator config

If generate emits `string` for a field that should be strong, add to `generator/config/<GKey>.json`:

```json
"overrides": { "damage_type": "DamageType" },
"imports": { "DamageType": "../../../entity" }
```

`overrides` are applied at emit time. `extractedTypes` builds Key unions from observed string values (e.g. `ability` → `ItemAbility`).

## Out of scope / external reference

- CODE APIs / socket events are hand-maintained under `src/` — not produced by generate.
- When cross-checking game APIs against **adventureland_mongodb**, use **`main` only** (`git show upstream/main:…` / `origin/main:…`). Do not read other branches or local checkouts of that repo for this package’s types work.

## References

- Generator overview: [generator-notes.md](generator-notes.md)
