# Generator notes

## Commands

| Script | Effect |
| --- | --- |
| `npm run generate:tmp` | Fetch live `data.js`, emit into `.tmp_gen/GTypes` |
| `npm run merge:gtypes` | Merge Key unions (+ new files) into `src/types/GTypes` |
| `npm run update:gtypes` | tmp → merge → `build` |
| `npm run generate` | **Unsafe** — writes straight into `src/types/GTypes` |

## Config (`generator/config/*.json`)

| Field | Role |
| --- | --- |
| `GKey` | Key on live `G` |
| `groupKey` | Split into category files (items use `type`) |
| `disabled` | Skip this G key |
| `overrides` | Field → TS type expression (applied; was previously ignored) |
| `imports` | Type name → module path for override imports |
| `extractedTypes` | Field → union name built from observed string values |
| `nameOverride` | Rename category file/type |
| `description` | JSDoc for fields |

## Why merge exists

Analysis sniffs live objects and collapses unknown strings to `string`. Hand GTypes
add `DamageType`, richer Maps/Geometry, etc. Full generate replaces those. Merge
keeps interfaces and only grows Key unions.

## External types

`DamageType` lives in `src/entity.ts`, not under GTypes. Always import via config
`imports` / hand files — never re-declare as `string`.
