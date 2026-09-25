# Project Context

## Project Overview

- **Project name:** Denys Turynskyi — Portfolio / Portfolio 2026
- **Main purpose:** Present Denys Turynskyi's product design work, experience, process, and contact information through a focused personal portfolio.
- **Target audience:** Recruiters, hiring managers, design leaders, founders, product teams, and prospective clients evaluating Denys's product design experience.
- **Business/personal goal:** Support job and client conversations by showing selected product work with clear case-study storytelling and direct contact links.
- **Current status:** The homepage and four case studies are implemented. The repository contains production build and Vercel configuration, Vercel Analytics, responsive light/dark themes, and local assets. The confirmed public production URL is **Needs confirmation**.
- **Design source:** The repository README identifies the Figma file “Portfolio — 2026” as the visual source of truth. The homepage was originally matched to Figma section `634:192`, including Light `634:196`, Dark `634:4`, and the UI Kit.

## Source of Truth

- **Current Git commit:** `502e8bbbcbe5ecd9ea9b061f22a35d037045102f`
- **Repository URL:** `https://github.com/denysturynskyi/new-portfolio-website.git`
- **Production URL:** Needs confirmation
- **Deployment provider:** Needs confirmation. The repository contains Vercel build configuration and Vercel Analytics, plus OpenAI Sites and Cloudflare/Wrangler-compatible tooling, but it does not prove which provider currently serves production.
- **Production branch:** `main`
- **Deployment workflow:** The repository is connected to the GitHub origin above. `vercel.json` configures Vercel to run `npm run build:vercel`, which sets the Nitro Vercel output path. Whether every push to `main` automatically deploys to production is Needs confirmation. General verification uses `npm run build`.

## Decision Hierarchy

When sources conflict, use this priority order:

1. Current user instruction
2. Latest confirmed Figma design
3. Existing verified implementation
4. Documentation files
5. Historical notes
6. `TASKS.md` ideas

## Owner / Brand Context

- **Owner:** Denys Turynskyi
- **Role:** Product Designer
- **Location/context:** Ukrainian designer based in Croatia
- **Experience stated on the site:** 9 years across fintech, Web3, SaaS, healthcare, communication products, complex systems, and data-heavy interfaces
- **Current interests:** AI-native products and agent experiences
- **Portfolio tone:** Calm, precise, premium, credible, and deliberately minimal
- **Primary contact:** `turynskyidenys@gmail.com`
- **Profiles currently connected:** LinkedIn, Instagram, Behance, and Dribbble. Telegram exists as an empty field and is not rendered.

The site is a personal professional artifact. Copy, project claims, metrics, client names, and outcomes should be treated as owner-approved content and should not be rewritten without explicit instruction.

## Tech Stack

- **UI framework:** React 19 with React Server Components
- **Routing model:** File-system routes in `app/`, following the Next.js App Router shape
- **Runtime/build adapter:** `vinext` on Vite 8
- **Language:** TypeScript with strict type checking
- **Styling:** A hand-authored global stylesheet in `app/globals.css`; CSS custom properties provide theme tokens. Tailwind and shadcn packages are installed and a generated `components/ui/` library exists, but the portfolio pages themselves primarily use custom classes and CSS rather than Tailwind utilities.
- **Fonts:** Local Roboto Slab Light 300, Regular 400, and Medium 500 files from `public/assets/`
- **Client behavior:** Small React client components for theme state, Zagreb clock, sidebar state, copy feedback, image popups, and sliders
- **Icons/images:** Local SVG and PNG files in `public/assets/`; no production code should depend on temporary Figma asset URLs
- **Analytics:** `@vercel/analytics` mounted in `app/layout.tsx`
- **Development tools:** npm, TypeScript, oxlint, oxfmt, Vite, Wrangler, and Nitro
- **Deployment:** `vercel.json` uses `npm run build:vercel` with the Nitro Vercel preset. The Vite configuration can also use Cloudflare/Wrangler for local/server output. `.openai/hosting.json` identifies an OpenAI Sites project, but the active public hosting destination is **Needs confirmation**.
- **Node requirement:** Node.js 22.13.0 or newer

## Website Structure

### Routes

- `/` — Homepage
- `/work/active-lens` — Active Lens case study
- `/work/retireus` — RetireUS case study
- `/work/genfeed` — genFEED case study
- `/work/fairo` — Fairo case study

### Homepage sections

1. Fixed header with theme toggle and “Say hi” email action
2. Intro/about copy and inline contact links
3. Selected works cards, in this order:
   1. Active Lens
   2. RetireUS
   3. genFEED
   4. Fairo
4. Experience history
5. Contact links
6. Footer with the current time in Zagreb
7. A small animated pixel-art cat fixed to the bottom-right on desktop only

### Case-study structure

Every case study uses the same high-level experience:

- Fixed header with Back, theme toggle, and Copy link
- Sticky desktop sidebar generated from that case's section list
- A centered narrative column containing overview, metadata, story sections, cards, images, and sliders
- Reusable image popup with responsive sizing, keyboard support, and optional slider controls
- Shared footer with Zagreb time

Each case defines its own ordered section IDs and labels. Sidebar links navigate to those IDs, smooth scrolling respects the fixed header, and the active sidebar item follows scroll position.

### Important user flows

- Browse project cards on the homepage and open a case study
- Switch between Light and Dark themes; the choice persists in local storage and defaults to system preference on first visit
- Navigate a case study by scrolling or using sidebar anchors
- Open case-study images in a full-screen popup, close by backdrop or Escape, and navigate slider images with controls or arrow keys
- Copy the current case-study URL and receive temporary “Link copied” feedback
- Open external project/profile links in a new tab or start an email using `mailto:`

## Content Structure

### Homepage

Homepage biography, project card data, experience, email, and profile URLs live in `app/content.ts`. This is the simplest file for a non-developer to edit when changing homepage content.

Each homepage project object contains:

- `slug` — stable CSS/project identifier
- `title`
- `description`
- `image` — local `/assets/...` path
- `alt` — meaningful alternative text
- `href` — internal case-study route

Project ordering is the array order in `portfolio.projects`.

### Case studies

Each case study is a dedicated route file:

- `app/work/active-lens/page.tsx`
- `app/work/retireus/page.tsx`
- `app/work/genfeed/page.tsx`
- `app/work/fairo/page.tsx`

The route file holds the case-specific content, ordered sidebar section list, image map/arrays, metadata, and any case-specific small card components. Shared layout components live in `app/work/case-study-layout.tsx`. Shared interactive image, slider, sidebar, popup, and copy-link logic currently lives in `app/work/active-lens/case-study-client.tsx` and is imported by all four cases.

To add content safely:

1. Add production image assets to `public/assets/` using a clear project prefix.
2. Define the asset paths near the top of the case route.
3. Add a section ID and label to the case's sections array.
4. Add a matching `<section id="...">` in the same order.
5. Use `SectionHeading`, `InfoCard`, `CaseStudyImage`, and `ImageSlider` where their existing behavior fits.
6. Add or update the homepage project object in `app/content.ts`.
7. Verify both themes, responsive widths, direct route loading, popup behavior, and the production build.

## Important Features

- Persistent Light/Dark theme with system-preference fallback
- Theme-specific typography weight and color tokens
- Fixed homepage and case-study headers
- Responsive centered content columns
- Desktop-only sticky case-study navigation
- Smooth anchor scrolling and active-section tracking
- Reusable case-study image component with hover zoom and popup
- Reusable non-looping image slider with directional slide and subtle scale animation
- Full-screen image popup with Escape/backdrop closing, scroll lock, keyboard slider navigation, responsive max width, and dark popup controls
- Current Zagreb time using the `Europe/Zagreb` timezone and automatic daylight-saving handling
- Copy-current-URL feedback on all case-study pages
- External-link safety via `target="_blank"` and `rel="noopener noreferrer"`
- Vercel Web Analytics
- App Router favicon at `app/icon.png`
- Animated pixel-art cat on desktop with reduced-motion support and Dark Theme inversion

## Future AI Assistant Notes

- Treat the latest Figma “Portfolio — 2026” file as the visual source of truth when a Figma link is provided.
- Preserve existing copy unless the user explicitly asks to rewrite it.
- Preserve the 680px centered content width, 20px side gutters, fixed headers, theme behavior, and case-study interaction model.
- Reuse existing case-study components. Do not create separate Light/Dark page implementations.
- Do not replace local assets with temporary or remote Figma URLs.
- Do not add visual effects, interactions, dependencies, or new component abstractions without a concrete need.
- `components/ui/` contains a large generated component collection, but most of it is not part of the visible portfolio. Do not refactor the live pages around it merely because it exists.
- The shared case-study client file is located under `active-lens/` even though all case studies use it. This is an architectural naming limitation; moving it would be a refactor and requires regression testing.
- `README.md` contains historical statements that project links were empty and no case-study template existed. Those statements are now outdated.
- A root-level untracked `cat.svg` was present during documentation creation; the site uses `public/assets/cat.svg`. Whether the root duplicate should be removed is **Needs confirmation**.
- No automated unit or end-to-end test suite is defined. Validation currently relies on lint/build checks and manual browser QA.
- Exact production URL and current deployment provider are **Needs confirmation** despite Vercel and OpenAI Sites configuration being present.

## Documentation Metadata

- **Last reviewed:** 2026-09-25
- **Git commit:** `502e8bbbcbe5ecd9ea9b061f22a35d037045102f`
- **Documentation owner:** Denys Turynskyi
