# Current Tasks

No approved implementation task is recorded in repository source comments. Items below distinguish confirmed problems from documentation work and optional ideas.

## Confirmed Issues

- `README.md` says project links are empty and no case-study template exists. The implementation now contains four linked case-study routes and shared case-study components, so those statements are outdated.

## Documentation Debt

- Confirm and document the public production URL.
- Confirm and document the active production provider and whether pushes to `main` deploy automatically.
- Add canonical Figma file/frame URLs and node IDs for the latest homepage, UI Kit, Active Lens, RetireUS, genFEED, and Fairo designs. The repository only retains older homepage node references in `README.md`.
- Confirm canonical desktop, tablet, and mobile QA viewport sizes.
- Confirm the supported browser/version matrix and accessibility conformance target.
- Decide whether the untracked root-level `cat.svg` is intentional. Production uses `public/assets/cat.svg`; do not delete the root file without owner approval.

## Improvements

These are optional technical improvements, not approved tasks:

- Add automated smoke coverage for route loading, theme persistence, slider boundaries, popup keyboard behavior, and responsive overflow.
- Add a documented image export/compression workflow. Current assets have no automated optimization pipeline.
- Audit unused and byte-duplicated assets before removing anything.
- Keep documentation metadata and file maps synchronized after routes, tokens, component interfaces, or deployment settings change.

## Future Ideas

These ideas require explicit owner approval:

- Move shared case-study client logic from `app/work/active-lens/` to a route-neutral location.
- Introduce a typed content schema for repeated case-study metadata while preserving flexible storytelling.
- Audit the generated `components/ui/` collection and dependencies for possible reduction.
- Add future case studies through the existing shared architecture.
