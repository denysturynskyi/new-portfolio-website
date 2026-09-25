# QA Checklist

## Canonical Viewports

- **Desktop:** Needs confirmation
- **Tablet:** Needs confirmation
- **Mobile:** Needs confirmation

Until confirmed, test representative widths on both sides of the existing `1120px`, `640px`, and `380px` breakpoints without treating those dimensions as design approval.

## Baseline Commands

- `git status --short`
- `git diff --check`
- `npm run build`
- Run `npm run lint` for TypeScript/TSX changes or when requested.

## Regression Checklist

## Homepage

- `/` loads directly and refreshes.
- Header remains fixed without covering content.
- Theme toggle displays only the correct icon state.
- Theme persists; first unsaved visit follows system preference.
- Content renders without overflow.
- Project order remains Active Lens, RetireUS, genFEED, Fairo.
- Cards open their matching internal routes.
- Card hover uses the existing surface, image scale, and arrow reveal.
- External links open in a new tab; email uses `mailto:`.
- Zagreb time uses `Europe/Zagreb`.
- Cat appears only above 1120px, stays at right 40px/bottom 0, inverts in Dark Theme, and does not block controls.

## Navigation

- Homepage and case headers remain fixed and opaque.
- Case Back returns to `/`.
- Copy link copies `window.location.href`.
- Success shows `Link copied` for approximately 2.5 seconds.
- Repeated clicks reset the timer.
- Sidebar links target existing IDs.
- Active state follows scrolling and selects the final section at page end.
- Anchors respect the fixed-header offset.
- Sidebar is hidden at 1120px and below.

## Case Studies

Test:

- `/work/active-lens`
- `/work/retireus`
- `/work/genfeed`
- `/work/fairo`

For each:

- Direct load and refresh succeed.
- Overview, metadata, sections, and footer render.
- Hero and static images use expected local assets.
- Images do not stretch or cause horizontal overflow.
- Light/Dark surfaces, borders, text, icons, and weights remain correct.
- Shared changes do not alter unrelated project-specific grids.

## Sliders

- Active Lens: one 3-image slider.
- RetireUS: four 3-image sliders.
- genFEED: three 3-image sliders.
- Fairo: six sliders; Onboarding has 2 images and the other five have 3.
- One image is visible at a time.
- Previous/Next disable at boundaries.
- No autoplay or looping occurs.
- Navigation is ignored during the 500ms transition.
- Next and Previous animate in opposite directions.
- Incoming scale settles from `0.98` to `1`.
- Height remains stable and controls are not clipped.
- Popup opens the current slide.

## Image Popups

- Static and slider images open the dialog.
- Popup shows the same asset/current slide.
- Backdrop and Escape close it; clicking the image does not.
- Body scrolling locks and restores.
- Backdrop uses zoom-out cursor; image uses default cursor.
- Frame has a 12px radius and `#666` border.
- Content is responsive and does not exceed 1200px.
- Slider controls stay centered below the image.
- Left/Right keys navigate within bounds.
- Popup remains above headers and the cat.

## Responsive Layouts

- No horizontal scrolling at representative widths.
- The 680px column becomes fluid with 20px gutters.
- At 1120px and below, sidebar and cat are hidden.
- At 640px and below, grids collapse and spacing decreases.
- At 380px and below, experience dates stack correctly.
- Images/sliders preserve aspect ratio.
- Fixed headers do not obscure initial content.
- Popup and controls remain inside the viewport.

## Animations

- Existing control timings remain smooth.
- Hover zoom is limited to hover-capable fine pointers.
- Slider has no bounce, blank frame, or layout shift.
- Popup close does not leave body scroll locked.
- Cat body, tail, and blink work normally.
- Cat stops under `prefers-reduced-motion: reduce`.

## Accessibility

- Interactive elements are keyboard reachable.
- Focus-visible outlines remain visible.
- Image buttons have meaningful labels.
- Meaningful images have useful alt text; decorative icons use empty alt text.
- Disabled controls expose native disabled state.
- Copy feedback remains `aria-live="polite"`.
- Popup exposes dialog semantics and an accessible label.
- Escape and applicable arrow keys work.
- Theme label describes the destination theme.
- Formal conformance target: Needs confirmation.

## Technical Regression

- No new console errors or React warnings.
- No broken assets.
- No localhost-only production paths.
- No temporary Figma URLs.
- No unrelated file changes.
- Production build completes. The existing vinext route-classification notice is informational unless accompanied by a failure or broken route.
