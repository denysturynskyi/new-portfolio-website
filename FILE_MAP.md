# File Map

## Pages

### `/`

- **Location:** `app/page.tsx`
- **Purpose:** Portfolio homepage with introduction, selected work, experience, contacts, footer clock, theme control, and desktop cat.
- **Main components:** Local `ContactLink`, `Button`, `ButtonLink`, and `ProjectCard`; shared `ThemeControls` and `FooterClock`.
- **Content source:** `app/content.ts`
- **Related assets:** `portfolio-*.png`, `portfolio-arrow*.svg`, `portfolio-dot*.svg`, `portfolio-email*.svg`, theme icon SVGs, `cat.svg`, and Roboto Slab fonts.

### `/work/active-lens`

- **Location:** `app/work/active-lens/page.tsx`
- **Purpose:** Active Lens AI meeting assistant case study.
- **Main components:** `CaseStudyHeader`, `SidebarNavigation`, `SectionHeading`, `InfoCard`, `CaseStudyImage`, `ImageSlider`, and `CaseStudyFooter`.
- **Related assets:** `active-lens-*.png`, case back/arrow SVGs, theme icons, and fonts.

### `/work/retireus`

- **Location:** `app/work/retireus/page.tsx`
- **Purpose:** RetireUS retirement-planning platform case study.
- **Main components:** Shared case-study components plus local `JobCard` and expansion visual-card composition.
- **Related assets:** `retireus-*.png`, case back/arrow SVGs, theme icons, and fonts.

### `/work/genfeed`

- **Location:** `app/work/genfeed/page.tsx`
- **Purpose:** genFEED AI creator-platform case study.
- **Main components:** Shared case-study components plus local `DetailCard` and process presentation.
- **Related assets:** `genfeed-*.png`, case back/arrow SVGs, theme icons, and fonts.

### `/work/fairo`

- **Location:** `app/work/fairo/page.tsx`
- **Purpose:** Fairo financial application case study.
- **Main components:** Shared case-study components with Fairo-specific metric/research/scope grids.
- **Related assets:** `fairo-*.png`, case back/arrow SVGs, theme icons, and fonts.

## Application Foundation

| File | Purpose |
| --- | --- |
| `app/layout.tsx` | Root HTML, metadata, pre-render theme initialization, global CSS, and Vercel Analytics. |
| `app/content.ts` | Homepage biography, contact data, project cards/order, and experience entries. |
| `app/globals.css` | Global reset, tokens, themes, homepage styles, case-study styles, motion, and responsive rules. |
| `app/theme-controls.tsx` | Client-side Light/Dark toggle with local-storage persistence and a custom theme-change event. |
| `app/footer-clock.tsx` | Client-side `Europe/Zagreb` clock updated every 30 seconds. |
| `app/icon.png` | App Router favicon. |

## Components

### `CaseStudyImage`

- **Location:** `app/work/active-lens/case-study-client.tsx`
- **Purpose:** Render a clickable case-study image and its full-screen popup.
- **Props:**
  - `src: string`
  - `alt: string`
  - `className?: string`
  - `imageClassName?: string`
  - `crop?: { width: string; height: string; left: string; top: string; background?: string }`
- **Important behavior:** Uses a button for the inline image; optional crop values become absolute inline styles with `objectFit: cover`; opens `OpenedImageOverlay` with one image.
- **Dependencies:** React state, `OpenedImageOverlay`, CSS classes in `app/globals.css`.

### `ImageSlider`

- **Location:** `app/work/active-lens/case-study-client.tsx`
- **Purpose:** Non-looping, non-autoplay case-study image slider with popup navigation.
- **Props:** `images: string[]`, `alt: string`
- **Important behavior:** Starts at index 0; disables controls at bounds; ignores navigation during its 500ms animation; makes only the active slide keyboard-focusable; opens the popup at the current index; popup navigation updates the same index.
- **Dependencies:** React state/effects/refs, `OpenedImageOverlay`, local case-arrow SVGs, slider CSS/keyframes.

### `SidebarNavigation`

- **Location:** `app/work/active-lens/case-study-client.tsx`
- **Purpose:** Case-study anchor navigation with scroll-following active state.
- **Props:** `sections?: ReadonlyArray<readonly [string, string]>`; defaults to exported Active Lens `caseSections`.
- **Important behavior:** Uses section IDs as anchors; selects the latest section whose top is at or above 128px; forces the final item active at page end; registers one passive scroll listener and removes it on cleanup.
- **Dependencies:** React state/effect and matching DOM section IDs.

### `OpenedImageOverlay`

- **Location:** `app/work/active-lens/case-study-client.tsx`
- **Visibility:** Internal component; not exported.
- **Purpose:** Full-screen image dialog used by `CaseStudyImage` and `ImageSlider`.
- **Props:**
  - `images: string[]`
  - `index: number`
  - `alt: string`
  - `imageClassName?: string`
  - `imageStyle?: CSSProperties`
  - `onIndexChange?: (index: number) => void`
  - `onClose: () => void`
- **Important behavior:** Rendered through `createPortal(document.body)` as an open `<dialog>`; locks body scrolling; closes on backdrop or Escape; image clicks do not close it; adds controls only when `onIndexChange` exists; supports Left/Right keys; uses 500ms slide state and 250ms close state.
- **Dependencies:** `react-dom/createPortal`, browser DOM APIs, local arrow SVGs, popup and slider CSS.

### `CopyLinkButton`

- **Location:** `app/work/active-lens/case-study-client.tsx`
- **Props:** None.
- **Purpose:** Copy the exact current `window.location.href`.
- **Important behavior:** Uses Clipboard API with a temporary-textarea fallback; shows `Link copied` in a polite live region for 2500ms; repeated successful clicks reset the timer.

### `ThemeControls`

- **Location:** `app/theme-controls.tsx`
- **Props:** None.
- **Purpose:** Toggle the root document theme.
- **Important behavior:** Reads/writes `document.documentElement.dataset.theme`, persists `portfolio-theme`, dispatches `portfolio-theme-change`, and relies on CSS to select SVG state layers.
- **Dependencies:** `useSyncExternalStore`, early theme script in `app/layout.tsx`, theme SVGs, and theme CSS.

### `CaseStudyHeader`

- **Location:** `app/work/case-study-layout.tsx`
- **Props:** None.
- **Purpose:** Shared fixed case-study navigation.
- **Important behavior:** Back link goes to `/`; renders `ThemeControls` and `CopyLinkButton`.
- **Dependencies:** `next/link`, shared client components, case-back SVGs.

### `CaseStudyFooter`

- **Location:** `app/work/case-study-layout.tsx`
- **Props:** None.
- **Purpose:** Shared copyright and Zagreb-time footer.
- **Dependencies:** `FooterClock`.

### `SectionHeading`

- **Location:** `app/work/case-study-layout.tsx`
- **Props:** `title: string`, `children: ReactNode`
- **Purpose:** Consistent case-study heading/body grouping.

### `InfoCard`

- **Location:** `app/work/case-study-layout.tsx`
- **Props:** `title: string`, `body: string`
- **Purpose:** Shared two-line information or metric card.

### `FooterClock`

- **Location:** `app/footer-clock.tsx`
- **Props:** None.
- **Purpose:** Display current time in Zagreb.
- **Important behavior:** Uses `Intl.DateTimeFormat` with `Europe/Zagreb`; refreshes every 30 seconds.

## Navigation Structure

- Homepage destinations are defined in `app/content.ts`.
- Homepage header actions are local to `app/page.tsx` plus `ThemeControls`.
- Case-study Back and Copy link controls are centralized in `CaseStudyHeader`.
- In-page navigation is driven by each case's ordered sections array and matching section IDs.
- There is no global route menu.

## Generated UI Library

`components/ui/` contains generated shadcn/Base UI components. The visible portfolio architecture documented above does not depend on most of this directory. Do not replace existing portfolio components with generated components unless explicitly required and fully regression-tested.
