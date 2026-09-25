# AI Change Log

This log records major repository decisions identifiable from Git history. It does not infer conversations or decisions that are not represented by committed code.

## 2026-09-07

### Change

Initial portfolio homepage implementation from Figma.

### Reason

Establish the personal portfolio, initial content model, theme controls, global styling, local assets, and project tooling.

### Files affected

Initial `app/`, generated `components/ui/`, `public/assets/`, configuration, and README files.

### Important notes

- Commit: `ac5d0ac` — `Build portfolio homepage from Figma`
- Figma was established as the design source.

## 2026-09-10

### Change

Completed the first full portfolio version, added Active Lens, and prepared production deployment.

### Reason

Add the initial detailed case study, responsive/theme behavior, reusable interactive case-study patterns, and Vercel configuration.

### Files affected

Homepage/layout files, `app/work/active-lens/`, global CSS, configuration, and Active Lens assets.

### Important notes

- Commit: `4e483ad` — `Complete portfolio and prepare Vercel deployment`
- This introduced much of the shared image, slider, popup, sidebar, and case header behavior.

## 2026-09-13

### Change

Added the RetireUS case study and extracted shared case-study layout components.

### Reason

Expand the portfolio while reusing the established Active Lens architecture.

### Files affected

`app/work/retireus/page.tsx`, `app/work/case-study-layout.tsx`, shared case client/styles, homepage content, and RetireUS assets.

### Important notes

- Commit: `dfdcdef` — `Add RetireUS case study`

## 2026-09-14

### Change

Polished Homepage/RetireUS, added genFEED, and added Copy link feedback.

### Reason

Refine content/order and cards, add another detailed case, and make URL copying visibly confirm success.

### Files affected

`app/content.ts`, `app/globals.css`, `app/work/genfeed/page.tsx`, shared case client, and genFEED assets.

### Important notes

- `7a8b45e` — `Polish homepage and RetireUS case`
- `dc2447e` — `Add genFEED case study`
- `3c0afea` — `Fix case study copy link feedback`

## 2026-09-15

### Change

Added Fairo and updated homepage/case hero imagery.

### Reason

Complete the current set of four portfolio projects and synchronize visual assets with the latest design.

### Files affected

`app/work/fairo/page.tsx`, shared case styles/client, homepage content, and project/hero image assets.

### Important notes

- `2a729b6` — `Add Fairo case study`
- `ea0ac59` — `Update portfolio project images`
- `119d7ae` — `Update portfolio hero images`

## 2026-09-16

### Change

Updated the design system, favicon, Analytics integration, and desktop animated cat.

### Reason

Bring theme/component styling in line with the latest design, add production identity/measurement, and add a restrained decorative interaction.

### Files affected

`app/globals.css`, `app/icon.png`, `app/layout.tsx`, package files, `app/page.tsx`, and `public/assets/cat.svg`.

### Important notes

- `9833367` — `Update portfolio design system`
- `07c5dc4` — `Add favicon`
- `64df01a` — `Add Vercel Web Analytics integration`
- `0461e13` — `Add animated cat to homepage`
- Merge commits `593ba70` and `502e8bb` integrated the Analytics branch and remote main history.

---

## Date

YYYY-MM-DD

## Change

Describe the user-visible or architectural change.

## Reason

Explain why the change was needed.

## Files affected

List the important files or directories.

## Important notes

Record constraints, design-source references, migration details, or follow-up work.
