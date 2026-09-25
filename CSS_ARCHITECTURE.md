# CSS Architecture

The visible portfolio is styled primarily by `app/globals.css`. Tailwind tooling exists, but the homepage and case studies use semantic class names and hand-authored global CSS.

## File Order

The stylesheet is organized approximately as follows:

1. Font faces
2. Theme tokens
3. Reset/base elements
4. Homepage layout and components
5. Homepage hover states
6. Homepage responsive rules
7. Shared case-study layout and components
8. Project-specific grids/cards
9. Shared sliders and popup
10. Case-study hover states
11. Case-study responsive rules

Source order is significant because later shared and responsive selectors override earlier declarations.

## Global Tokens

Light values are declared on `:root`; Dark Theme overrides use `:root[data-theme='dark']`.

- `--font-weight`
- `--background`
- `--foreground`
- `--muted`
- `--surface`
- `--border`
- `--image-border`
- `--contact-heading`
- `--button-hover-text`
- `--sidebar-muted`
- `--diagram-card`

Use these for shared theme values. Hardcoded colors currently remain where a design is intentionally theme-independent, including the popup overlay/border and dark popup arrows.

## Reset and Base Styles

- Universal `box-sizing: border-box`
- Body margin, background, color, and Roboto Slab typography
- Heading and paragraph font/margin reset
- Anchor decoration reset
- Button font/color inheritance
- Shared focus-visible outline
- Global smooth scrolling

These selectors affect every route. Modify them only with full regression QA.

## Typography

Three local `@font-face` rules register Roboto Slab 300, 400, and 500. Base weight comes from `--font-weight`. Several headings deliberately use different Light/Dark weights.

Global selectors such as `h2` affect multiple pages unless a more specific rule such as `.case-heading h2` overrides them.

## Homepage Styles

- `.page-shell` — centered width, top padding, vertical rhythm
- `.home-cat` — desktop-only fixed SVG and Dark Theme inversion
- `.header` — fixed homepage header
- `.theme-controls`, `.theme-button`, `.theme-light`, `.theme-dark` — theme states
- `.pill`, `.inline-link` — shared controls
- `.identity`, `.intro-copy`, `.elsewhere` — introduction
- `.project-*` — project cards, image crop, copy, arrow reveal
- `.experience*`, `.dates` — experience list
- `.contact-links` — contact controls
- `footer` and `.page-shell > footer` — footer

Homepage hover behavior is scoped to hover-capable fine pointers.

## Shared Case-Study Styles

- `.case-page`, `.case-header`, `.case-header-actions`
- `.back-button`, `.case-copy-link`, `.copy-link-*`
- `.case-sidebar-positioner`, `.case-sidebar`, `.sidebar-item`
- `.case-sections`, `.case-section`, `.case-intro`, `.case-title`
- `.case-metadata`, `.metadata-row`
- `.case-heading`, `.case-body`
- `.case-image`, `.case-image-placeholder`
- `.info-grid`, `.info-card`, size variants
- `.decision-block`
- `.case-footer`

These are shared across all four cases. Changes require regression testing on every route.

## Project-Specific Styles

### Active Lens/shared process

- `.process-diagram`, `.process-step`, `.step-*`, `.process-return`

### RetireUS

- `.retireus-job-grid`, `.retireus-job-card`
- `.retireus-visual-grid`, `.retireus-visual-card`
- `.retireus-visual-image`, `.retireus-visual-copy`

### genFEED

- `.genfeed-three-column-grid`, `.genfeed-detail-card`
- `.genfeed-process`, `.genfeed-process-item`

### Fairo

- `.fairo-three-column-grid`
- `.fairo-metric-grid`, `.fairo-research-grid`, `.fairo-scope-grid`

Project-specific selectors extend shared classes. Removing a base rule can break all variants.

## Slider Styles

- `.case-image-slider` keeps controls outside the clipped image viewport.
- `.case-image-viewport` clips motion and carries the radius.
- `.case-image-track` holds absolute slides.
- `.case-image-slide` and state classes control active/outgoing/incoming layers.
- `.slider-controls`, `.slider-arrow`, `.slider-arrow-next` define controls and icon states.
- Theme selectors select the correct SVG state.

Animation-state classes emitted by React must stay synchronized with these selectors.

## Popup Styles

- `.opened-image-overlay` is fixed at `z-index: 100`.
- `.opened-image-backdrop` provides the 80% dark surface and zoom-out cursor.
- `.opened-image-content` applies responsive width and a 1200px maximum.
- `.opened-image-frame` applies the 12px radius and `#666` border.
- `.opened-slider-controls` and `.opened-slider-arrow` remain dark in both themes.

Do not clip `.opened-image-content`; controls sit below the image frame.

## Animation Styles

- `copy-link-feedback` — 2500ms status fade
- `opened-image-fade-in` / `opened-image-fade-out` — 250ms
- Four `slider-*` keyframes — 500ms directional motion
- Card/image hover transforms use CSS transitions
- Cat animation is embedded in `public/assets/cat.svg`

## Responsive Sections

### `min-width: 1121px`

- Shows the fixed homepage cat.

### `max-width: 1120px`

- Hides the case sidebar.

### `max-width: 640px`

- Reduces page spacing.
- Converts images/sliders to responsive ratios.
- Collapses metadata and project grids.
- Reflows the genFEED process.
- Resizes popup content for 20px gutters.

### `max-width: 380px`

- Stacks experience entries and moves dates above copy.

### Pointer capability query

`@media (hover: hover) and (pointer: fine)` contains hover-only states.

## Source-Order and Global-Selector Warnings

- The file is global; class collisions are possible.
- Later responsive rules intentionally override earlier fixed sizes.
- Theme selectors require `data-theme` on the root element.
- Icon visibility depends on overlapping selectors and source order.
- Slider/popup styles depend on exact React state-class names.
- Broad selectors such as `main`, `section`, `h2`, `footer`, and `button` affect multiple routes.
- Case-specific classes extend shared classes rather than replacing them.
- Test the homepage and all cases in both themes before changing shared rules.
- Prefix new case-specific classes and place responsive overrides with existing responsive rules.
