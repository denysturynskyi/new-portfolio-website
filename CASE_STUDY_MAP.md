# Case Study Map

| Project | Route | Main assets | Components | Notes |
| --- | --- | --- | --- | --- |
| Active Lens | `/work/active-lens` | Hero: `active-lens-overview.png`; static: process, audit, competitive, user jobs, navigation, live AI, actions, design system; slider: `active-lens-final-1..3.png` | Shared header/footer, sidebar, headings, info cards, images, one slider | Uses default `caseSections`; includes `.process-*` diagram styles; 11 sections. Live: `https://www.activelens.ai/`. |
| RetireUS | `/work/retireus` | Hero: `retireus-overview.png`; static architecture, discovery, assessment, risks, design system; sliders: wireframes, decision action, decision ongoing, final; expansion: web app, mobile, website | Shared components plus local `JobCard` and expansion visual cards; four sliders | `.retireus-case-page`; three-column job grid and two-column visual grid; 11 sections. Live: `https://retire.us/`. |
| genFEED | `/work/genfeed` | Hero: `genfeed-overview.png`; static research, baseline data, user flows, architecture, experiment; sliders: homepage, profile, Design V2 | Shared components plus local `DetailCard` and process layout; three sliders | `.genfeed-case-page`; three-column detail grids and process chain; 11 sections. Live: `https://genfeed.co/`. |
| Fairo | `/work/fairo` | Hero: `fairo-overview.png`; sliders: starting, research, onboarding, invoicing, bookkeeping, tax; static edge cases and design system | Shared components; six sliders; project-specific metric, research, and scope grids | `.fairo-case-page`; three-column grids collapse at 640px; 12 sections. No external Live link in the route. |

## Shared Case Anatomy

All four pages render:

1. `CaseStudyHeader`
2. `.case-sidebar-positioner` with `SidebarNavigation`
3. `main.case-sections`
4. Ordered `.case-section` elements whose IDs match the sidebar list
5. `CaseStudyFooter`

The overview uses `.case-overview`, `.case-intro`, `.case-title`, metadata rows, and a hero `CaseStudyImage`.

## Slider Inventory

- **Active Lens:** 1 slider, 3 images
- **RetireUS:** 4 sliders, 3 images each
- **genFEED:** 3 sliders, 3 images each
- **Fairo:** 6 sliders; Onboarding has 2 images and the other five have 3

All sliders reuse the same non-looping component, 500ms directional transition, boundary-disabled controls, and current-slide popup behavior.

## Homepage-to-Case Mapping

| Homepage slug | Homepage image | Case hero | Route |
| --- | --- | --- | --- |
| `active-lens` | `portfolio-active-lens.png` | `active-lens-overview.png` | `/work/active-lens` |
| `retire-us` | `portfolio-retire-us.png` | `retireus-overview.png` | `/work/retireus` |
| `genfeed` | `portfolio-genfeed.png` | `genfeed-overview.png` | `/work/genfeed` |
| `fairo` | `portfolio-fairo.png` | `fairo-overview.png` | `/work/fairo` |

At the documented commit, each homepage image and corresponding hero are byte-identical files stored under different filenames.
