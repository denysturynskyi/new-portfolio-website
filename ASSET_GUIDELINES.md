# Asset Guidelines

## Asset Locations

- `public/assets/` — production images, SVG icons, animated cat, and local fonts
- `app/icon.png` — App Router favicon
- Root-level `cat.svg` — untracked file whose purpose is Needs confirmation; production code does not reference it

Assets in `public/assets/` use root-relative URLs such as `/assets/fairo-overview.png`.

## Current Naming Practice

- Homepage images: `portfolio-<project>.png`
- Case images: `<project>-<section-or-purpose>.png`
- Ordered slides: `<project>-<group>-1.png`, `-2.png`, `-3.png`
- Case icons: `case-<control>-<theme/state>.svg`
- Homepage icons: `portfolio-<purpose>-<theme/state>.svg`
- Fonts: `roboto-slab-<weight>.ttf`

Use lowercase kebab-case. New case assets should retain a project prefix and ordered numeric suffix for slides.

## Formats in Use

### PNG

PNG is used for product screenshots, device compositions, diagrams, homepage imagery, and the favicon. Pages render these with native `<img>` elements.

### SVG

SVG is used for interface icons and the pixel-art cat. Theme/state icons are separate files. The cat contains internal CSS keyframes and remains an external SVG asset.

### TTF

Roboto Slab Light, Regular, and Medium are stored locally and registered with `@font-face`.

## Image Rendering

- Homepage images use a fixed desktop frame and `object-fit: cover`.
- Case images normally use a `680 / 385` frame with `object-fit: cover`.
- `CaseStudyImage` supports an explicit `crop` object for special sizing/positioning.
- Popup images reuse the same asset and optional crop style.
- Mobile case images preserve the 680:385 ratio.
- Borders and radii are applied by CSS, not baked into the asset contract.

## Current Optimization Approach

No automated optimization pipeline is configured. Assets are committed as local exports and served directly. There is no `next/image`, build-time resizing, responsive `srcset`, or compression script.

Current practice:

1. Export the approved asset.
2. Store it in `public/assets/`.
3. Reference it through `/assets/...`.
4. Control crop and scale without distorting the source.
5. Verify desktop/mobile rendering and popup reuse.

Suggested improvement requiring approval: define target export dimensions and a repeatable, visually reviewed compression step.

## Confirmed Duplicate Assets

SHA-256 comparison found these byte-identical pairs:

- `portfolio-active-lens.png` and `active-lens-overview.png`
- `portfolio-retire-us.png` and `retireus-overview.png`
- `portfolio-genfeed.png` and `genfeed-overview.png`
- `portfolio-fairo.png` and `fairo-overview.png`
- `case-arrow-dark-default.svg` and `case-arrow-dark.svg`
- `case-arrow-hover.svg` and `case-arrow-light.svg`
- `portfolio-sun-dark-hover.svg` and `portfolio-sun-light-selected.svg`

Duplication currently provides semantic filenames for different contexts. Do not consolidate files without checking every reference and confirming independent future replacement is unnecessary.

## Potential Legacy or Unused Assets

- `case-active-lens-hero.png` is present, but current TypeScript/TSX uses `active-lens-overview.png` for the Active Lens hero.
- Some earlier arrow/theme variants may remain for historical state mappings.

Treat these as audit candidates, not approved deletions.

## Rules for Future Changes

- Do not use temporary Figma CDN URLs.
- Do not rasterize SVG icons.
- Do not stretch images.
- Do not change crop, content, or color without the current design reference.
- Preserve meaningful alt text in the consuming component.
- Confirm every reference before renaming or deleting an asset.
- Check broken requests, popup content, both themes, responsive layouts, `git diff --check`, and the production build.
