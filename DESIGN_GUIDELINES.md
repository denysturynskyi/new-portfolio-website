# Design Guidelines

## Design Direction

The portfolio is intentionally minimal and editorial. It should feel like a premium product designer's portfolio: quiet, confident, detailed, and easy to scan. The interface uses a narrow reading column, restrained neutral colors, strong typography, precise borders, and product imagery as the main visual emphasis.

The intended impression is:

- Senior, credible product-design practice
- Thoughtful storytelling rather than promotional spectacle
- High attention to spacing, states, and interaction details
- Recruiter-friendly scanning with enough depth for design peers and product leaders
- Consistency across Light and Dark themes

## Layout Principles

- **Primary content width:** `680px` maximum for homepage, case-study content, headers, and footers
- **Viewport gutters:** `20px` on each side through `width: min(680px, calc(100% - 40px))`
- **Homepage top spacing:** `200px` desktop, `144px` at `640px` and below
- **Homepage rhythm:** `100px` between main sections, with `120px` between the page's top-level shell regions; mobile reduces these to `64px` and `72px`
- **Case-study rhythm:** `80px` between sections and `32px` within a section; mobile reduces section gaps to `64px`
- **Case header offset:** sections use `scroll-margin-top: 104px`
- **Header:** fixed, 68px high, same centered width as the content, opaque theme background, one-pixel bottom border, no blur or shadow
- **Case sidebar:** 200px wide, sticky at `92px`, positioned outside the centered content column; hidden at `1120px` and below
- **Cards/grids:** small `4px` grid gaps are common; 12px outer radii and restrained internal padding preserve density
- **Images:** typically use a `680 / 385` landscape ratio with a 12px radius in case studies

Do not widen the main reading column or introduce a broad marketing-site grid without an explicit Figma change.

## Typography

- **Typeface:** Roboto Slab, served locally
- **Fallback:** Georgia, serif
- **Available weights:** Light 300, Regular 400, Medium 500
- **Base size:** 15px (`0.9375rem`)
- **Base line height:** 22px (`1.375rem`)
- **Light Theme body weight:** 400
- **Dark Theme body weight:** 300
- **Homepage identity:** 18px / 24px; name uses Medium 500 in Light and Light 300 in Dark
- **Section headings:** 16px / 20px; Medium 500 in Light and Regular 400 in Dark
- **Case title:** 18px / 24px; Medium 500 in Light and Regular 400 in Dark
- **Small labels/sidebar text:** 12–14px with 16–20px line height

Typography is a central part of the visual identity. Do not substitute a sans-serif font, increase heading scale dramatically, or change theme-specific weights without a current Figma reference.

## Colors

Theme values are defined as CSS custom properties in `app/globals.css`.

### Light Theme

- Background: `#f7f7f7`
- Primary text: `#1f1f1f`
- Muted text: `#808080`
- Surface: `#f2f2f2`
- Border: `#e6e6e6`
- Image border: `#f0f0f0`
- Hover text: `#666666`
- Diagram card: `#ffffff`

### Dark Theme

- Background: `#141414`
- Primary text: `#f0f0f0`
- Muted text: `#808080`
- Surface: `#1a1a1a`
- Border and image border: `#1f1f1f`
- Sidebar-muted text: `#666666`
- Diagram card: `#141414`

The design does not use a bright brand accent. Emphasis comes from contrast, type weight, spacing, imagery, and state changes. New arbitrary accent colors should not be introduced.

## Components

### Buttons

- Pills use a 36px height, 14px horizontal padding, one-pixel border, and fully rounded 60px radius.
- Icon buttons are 36px square and use the same border/surface language.
- Inline links are compact 28px controls with 6px horizontal padding and a 4px radius.
- Hover states change existing background/text/icon states with 300ms ease-in-out transitions.
- Focus-visible states use a 2px foreground outline with 4px offset.

### Project cards

- Outer card: 8px padding, 12px radius, one-pixel border
- Image: desktop height 386px, 6px radius, one-pixel image border, `object-fit: cover`
- Copy: 8px top separation and 8px/12px internal padding
- Hover: surface background, image scale to `1.05` over 400ms ease-in-out, arrow reveal over 300ms
- Preserve project-specific image crops and scale rules if present in the stylesheet.

### Navigation

- Homepage header contains only the theme control and “Say hi”.
- Case-study header contains Back + theme controls on the left and Copy link on the right.
- Headers remain fixed and opaque; do not add blur, shadow, or backdrop filters.
- Sidebar navigation is a quiet secondary aid. Its active item uses foreground color; inactive items use muted color.

### Case-study sections

- Content is presented in a single narrative column.
- Section headings sit above body copy with a 20px gap.
- Metadata rows use one-pixel separators and one- or two-column grids.
- Info cards use theme surfaces, 12px radii, one-pixel borders, and concise text.
- Case-specific grids may use two or three columns on desktop and collapse to one column on mobile.

### Images and sliders

- Static case images and slider images share a 680:385 display ratio unless the case explicitly supplies a crop.
- Images use a 12px radius and one-pixel theme border.
- Hover zoom is `1.05` over 400ms ease-in-out on hover-capable pointers.
- Sliders show one image at a time, do not loop or autoplay, and preserve a fixed viewport to prevent layout shift.
- Slider movement is directional: 24px travel with incoming scale `0.98 → 1`, subtle opacity `0.96 → 1`, 500ms soft easing.
- Popup images retain the 12px radius, `#666` border, responsive sizing, and a maximum width of 1200px.

### Footer

- One-pixel top border, 20px vertical padding, 62px height
- Copyright is muted; current Zagreb time remains primary text

### Animated cat

- Decorative 28px pixel-art SVG fixed at `right: 40px; bottom: 0` on screens wider than 1120px
- Hidden completely at 1120px and below
- Light Theme uses original colors; Dark Theme uses CSS inversion
- Motion remains subtle and respects reduced-motion preferences

## Motion & Interaction

- Standard control transitions: 300ms ease-in-out
- Project/image hover zoom: 400ms ease-in-out
- Slider change: 500ms `cubic-bezier(0.4, 0, 0.2, 1)`
- Popup open/close: 250ms ease-in-out
- Copy feedback: visible for 2.5 seconds and fades near the end
- Cat motion: stepped 2400ms body bounce, 3200ms tail movement, and 5600ms blink cycle

Motion should explain state or add restrained personality. It should not dominate content. Keep `prefers-reduced-motion` behavior for decorative motion, and avoid bounce, overshoot, parallax, autoplay, or dramatic zoom unless Figma explicitly shows it.

## Responsive Design

### Desktop

- Centered 680px content column
- Fixed headers
- Sticky case-study sidebar when the viewport is wider than 1120px
- Desktop-only animated cat at the bottom-right viewport edge
- Two- and three-column grids where defined

### Tablet

- Content remains fluid within 20px side gutters
- Case-study sidebar is hidden at 1120px and below
- Header controls remain unchanged and usable
- Cat is hidden

### Mobile

- Main breakpoint: 640px
- Top and section spacing are reduced
- Metadata and content grids collapse to one column
- Images and slider viewports keep their aspect ratio and scale to the available width
- Popup uses `calc(100vw - 40px)` responsive width logic
- At 380px and below, experience entries stack dates above copy

Responsive changes should adapt the existing language, not introduce a separate mobile visual style.

## Avoid

- Do not redesign or rewrite approved content without explicit instruction.
- Do not introduce gradients, bright accent colors, shadows, glass effects, blur, decorative patterns, or oversized display type.
- Do not add animations, transforms, or hover effects that are not supported by the current design.
- Do not duplicate pages or components for Light and Dark themes.
- Do not replace Roboto Slab or change type weights casually.
- Do not widen content beyond the established 680px system.
- Do not create noisy navigation, extra calls to action, or marketing sections.
- Do not crop product imagery differently without checking the source design.
- Do not hide essential content behind hover-only behavior.
- Do not add dependencies for behavior that is already achievable with React and CSS.
- Do not let the portfolio become harder for recruiters to scan or for a non-coder owner to update.
