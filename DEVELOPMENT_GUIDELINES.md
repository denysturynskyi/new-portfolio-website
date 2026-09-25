# Development Guidelines

## Architecture

### Root files

- `package.json` — scripts, runtime requirements, and dependencies
- `vite.config.ts` — vinext/Vite, OpenAI Sites, Nitro/Vercel, and Cloudflare/Wrangler build configuration
- `vercel.json` — Vercel build command
- `next.config.ts` — empty Next-compatible configuration object
- `tsconfig.json` — strict TypeScript and `@/*` path alias
- `components.json` — shadcn registry configuration

### Application

- `app/layout.tsx` — root metadata, early theme initialization, Analytics, and global stylesheet import
- `app/page.tsx` — homepage UI and its local presentational helpers
- `app/content.ts` — editable homepage content and project links
- `app/globals.css` — global reset, tokens, themes, homepage styles, case-study styles, motion, and responsive rules
- `app/theme-controls.tsx` — persistent Light/Dark toggle
- `app/footer-clock.tsx` — live Zagreb time
- `app/icon.png` — App Router favicon

### Case studies

- `app/work/[case]/page.tsx` — case-specific content and composition
- `app/work/case-study-layout.tsx` — shared header, footer, heading, and info-card components
- `app/work/active-lens/case-study-client.tsx` — shared client-side sidebar, copy, image popup, and slider behavior despite its Active Lens-specific directory

### Supporting code

- `public/assets/` — all production fonts, images, and SVG icons
- `components/ui/` — generated shadcn/Base UI components; most are not used by the portfolio pages
- `hooks/use-mobile.ts` and `lib/utils.ts` — generated support utilities

## Coding Rules

- Use TypeScript and keep strict typing intact.
- Follow the App Router file-system routing pattern.
- Prefer server components. Add `'use client'` only when browser APIs, state, effects, portals, or event handling require it.
- Keep homepage-editable data in `app/content.ts` rather than scattering it through components.
- Keep case-specific copy and asset arrays near the top of that case's `page.tsx`.
- Reuse the existing shared case-study components before creating another abstraction.
- Use descriptive PascalCase React component names and camelCase variables.
- Use kebab-case route directory names and project-prefixed asset filenames.
- Preserve meaningful `alt` text. Decorative icons should use empty `alt` values.
- External links must use `target="_blank"` with `rel="noopener noreferrer"`; email links use `mailto:`.
- Avoid `window` or `document` in server components. Existing browser behavior belongs in client modules.
- Do not add libraries for simple CSS or native browser behavior.
- Keep changes focused. Do not refactor generated `components/ui/` or shared case behavior during an unrelated visual edit.

## Styling Rules

- The portfolio uses custom CSS in `app/globals.css` as its primary styling system.
- Use the existing theme variables instead of hardcoded duplicates whenever a value represents a shared token:
  - `--background`
  - `--foreground`
  - `--muted`
  - `--surface`
  - `--border`
  - `--image-border`
  - `--button-hover-text`
  - `--sidebar-muted`
  - `--diagram-card`
- Theme selection is expressed with `:root[data-theme='dark']`; do not create duplicate component trees.
- Preserve the 680px content width and `calc(100% - 40px)` responsive gutters.
- Existing breakpoints are:
  - `1120px` — hide case sidebar and desktop-only cat
  - `640px` — mobile spacing, grid, image, and popup adjustments
  - `380px` — narrow experience layout
- Hover-only styling should remain inside `@media (hover: hover) and (pointer: fine)`.
- Use the current transition language: 250–400ms ease-in-out for controls/images and 500ms soft easing for sliders.
- Preserve `prefers-reduced-motion` behavior for decorative motion.
- Tailwind tooling is installed, but current portfolio markup does not use a Tailwind utility architecture. Do not mix in a new styling approach without an explicit migration decision.

## Adding New Pages

1. Create a directory under `app/` that matches the required route.
2. Add a `page.tsx` exporting the route's default component.
3. Reuse `app/layout.tsx` metadata/theme behavior and `app/globals.css` tokens.
4. Reuse existing shared components when the page belongs to an existing page family.
5. Add local assets under `public/assets/`; reference them with root-relative `/assets/...` URLs.
6. Connect the route from the existing navigation/content source.
7. Verify direct loading and browser refresh for the route.
8. Check Light/Dark themes, desktop/tablet/mobile behavior, keyboard access, console output, and `npm run build`.

## Adding New Case Studies

1. Create `app/work/<slug>/page.tsx`.
2. Import shared interactive components from `app/work/active-lens/case-study-client.tsx`:
   - `CaseStudyImage`
   - `ImageSlider`
   - `SidebarNavigation`
3. Import shared presentational components from `app/work/case-study-layout.tsx`:
   - `CaseStudyHeader`
   - `CaseStudyFooter`
   - `SectionHeading`
   - `InfoCard`
4. Define an ordered `sections` tuple array of `[id, label]` entries.
5. Define a local image map or arrays using project-prefixed files in `public/assets/`.
6. Wrap the page with `<div className="case-page ...">`.
7. Render `CaseStudyHeader`, a `case-sidebar-positioner` containing `SidebarNavigation`, `main.case-sections`, and `CaseStudyFooter`.
8. Give every narrative section `className="case-section"` and an ID exactly matching the sidebar array.
9. Use `CaseStudyImage` for static images and `ImageSlider` for ordered multi-image groups. Supply accurate alternative text and optional annotation/crop props only when required.
10. Add the project to `portfolio.projects` in `app/content.ts` with a local route.
11. Add only narrowly scoped CSS for genuinely case-specific grids or cards.
12. Verify sidebar active state, anchor offsets, Back, theme toggle, Copy link, all images/sliders/popups, disabled controls, responsive behavior, direct load, and production build.

## Development Commands

```bash
# Install dependencies
npm install

# Start local development
npm run dev

# Production build used for general verification
npm run build

# Vercel/Nitro production build
npm run build:vercel

# Start the generated Wrangler server output
npm run start

# Lint
npm run lint

# Format
npm run format
```

Deployment is normally triggered by the connected Git repository. The exact Vercel project/team configuration and production domain are **Needs confirmation**.

## Important Dependencies

- `react`, `react-dom`, `react-server-dom-webpack` — React 19 and server-component runtime
- `vinext` — Next-like App Router/RSC behavior on Vite
- `vite` and `@vitejs/plugin-react` — development and build tooling
- `nitro` — Vercel-compatible server output when `NITRO_PRESET` or `VERCEL` is present
- `@cloudflare/vite-plugin` and `wrangler` — Cloudflare-compatible local/server path when Nitro is not selected
- `@openai/sites-vite-plugin` — OpenAI Sites integration
- `@vercel/analytics` — production analytics component
- `typescript` — static typing
- `oxlint`, `oxfmt` — linting and formatting
- `@base-ui/react`, `@shadcn/react`, `lucide-react`, and related UI packages — generated UI library dependencies; they are not the primary implementation layer for the visible portfolio
- `tailwindcss`, `@tailwindcss/postcss`, `tailwind-merge`, `tw-animate-css` — installed styling infrastructure, mainly supporting the generated component collection; live portfolio styling remains custom CSS

## Safe Change Checklist

Before finishing a change:

1. Review `git status` and confirm only intended files changed.
2. Run `git diff --check`.
3. Run the most relevant browser QA at desktop, tablet, and mobile widths.
4. Verify Light and Dark themes.
5. Check direct route loading and refresh for affected pages.
6. Check console errors and broken assets.
7. Run `npm run build`.
8. Do not commit or push unless explicitly requested.
