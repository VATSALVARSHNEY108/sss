# Logo resize brief

## Objective
On the existing SkillYug Technologies Next.js homepage, make the existing Skillyug logo in the top navigation visibly larger and better aligned. Preserve the current logo assets, navigation, theme toggle, CTA, and responsive behavior.

## Direction
Keep the existing dark/light futuristic technology aesthetic. The logo should feel like the primary brand anchor: larger, vertically centered, with enough room in the navbar and no overlap with navigation or actions. Use the project's existing CSS conventions; do not add new dependencies or assets.

## Scope
The relevant files are `components/site-navbar.tsx` and `app/globals.css`. Prefer a CSS-only adjustment to `.site-navbar__brand`, `.site-navbar__brand img`, and responsive breakpoints. The desktop logo should be clearly larger than the current appearance; mobile must remain compact and usable.

## Verification
Run the existing TypeScript check or production build if practical, and report changed files.
