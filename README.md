# Denys Turynskyi — Portfolio

The homepage reproduces Figma frame `634:196` in Portfolio — 2026.

## Updating your content

Open **app/content.ts**. All biography text, project titles, descriptions, experience, and contact links live here. Edit the text between quotes, keeping the surrounding punctuation. Use double quotes if your text contains a straight apostrophe.

- Email, LinkedIn, and Instagram are connected.
- Add Telegram, Behance, and Dribbble URLs to the empty quotes when ready. Until then, these labels are inactive.
- Project links are intentionally empty until case-study pages exist. Each project has a stable `slug` for its future page.
- Images are stored in **public/assets**. Replace an image there or update its `image` path in the content file. Cropping is in **app/globals.css**.

## Design and themes

**app/globals.css** controls spacing, typography, crops, and colors. The default light palette matches the linked frame. Dark colors are a preliminary foundation, accessible using the existing moon button, and can be refined against a future dark Figma frame. The page starts in light mode.

The footer time is the literal “6:13pm in Croatia” from Figma. It is not a live clock.

The homepage uses only two small reusable presentation components: project cards and contact links. Future case-study routes can live in `app/work/[slug]/page.tsx` with their own flexible layouts; no case-study template has been imposed yet.

## Running locally

1. Install Node.js 22.13 or newer.
2. Run `npm install` once.
3. Run `npm run dev` and open the local address it prints.

Use `npm run build` to check the production build.
