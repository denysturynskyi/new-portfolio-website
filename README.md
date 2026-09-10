# Denys Turynskyi — Portfolio

The homepage follows the Light (`634:196`) and Dark (`634:4`) frames and UI Kit inside Figma section `634:192` in Portfolio — 2026.

## Updating your content

Open **app/content.ts**. All biography text, project titles, descriptions, experience, and contact links live here. Edit the text between quotes, keeping the surrounding punctuation. Use double quotes if your text contains a straight apostrophe.

- Email, LinkedIn, Instagram, Behance, and Dribbble are connected. External links open in a new tab; email links open the visitor’s email client.
- Telegram is hidden in the latest Figma frames, so it is not displayed.
- Project links are intentionally empty until case-study pages exist. Each project has a stable `slug` for its future page.
- Images are stored in **public/assets**. Replace an image there or update its `image` path in the content file. Cropping is in **app/globals.css**.

## Design and themes

**app/globals.css** controls spacing, typography, crops, and colors. Both palettes and icon states match the Figma UI Kit. Light uses Roboto Slab Regular (400); Dark uses Light (300), as confirmed. The first visit uses the system theme; the header controls save an explicit choice for subsequent visits and refreshes.

The footer displays the current time in the `Europe/Zagreb` timezone and updates automatically, including daylight saving time.

The Default and Hover variants are synced from Figma's Button, Button icon, Button link, and Card component sets. On devices with a mouse, buttons change their background/text or icon color; cards change background, zoom the image by 5%, and reveal an arrow. The image zoom uses the requested 400ms ease-in-out transition. Missing destinations remain inactive.

The homepage shares Button, ButtonLink, ButtonIcon, and ProjectCard components across both themes. Future case-study routes can live in `app/work/[slug]/page.tsx` with their own flexible layouts; no case-study template has been imposed yet.

The Active Lens card opens its case study at `/work/active-lens`. Its content and reusable case-study pieces live in `app/work/active-lens`, while the footer clock continues to use the shared implementation.

## Running locally

1. Install Node.js 22.13 or newer.
2. Run `npm install` once.
3. Run `npm run dev` and open the local address it prints.

Use `npm run build` to check the production build.
