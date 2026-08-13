# Services page implementation brief

## Objective
Upgrade the existing Next.js `/services` page into a polished, production-grade AI services catalog for SkillYug Technologies. The user provided a complete list of 19 service categories and capabilities plus the tech stack. Keep every listed capability available in the page.

## Existing context
- App: Next.js 14 App Router, TypeScript, React, lucide-react, framer-motion.
- Existing shell: `components/site-shell.tsx`, shared dark/light theme variables in `app/globals.css`, existing navbar/footer.
- Existing route: `app/services/page.tsx` and interactive catalog component `components/services-interactive.tsx`.
- Do not add external image dependencies or remote image URLs.

## Direction
Design a memorable “AI capability atlas”: dark graphite canvas with electric blue and violet accents, restrained glass surfaces, thin technical rules, and a premium editorial/engineering feel. Avoid generic SaaS cards and excessive gradients. Use the existing brand system and keep the kinetic background visible but readable.

## Required content and structure
1. Hero: “AI services for every ambition.”, concise value proposition, primary CTA to `/contact`, secondary jump to `#catalog`, and a visual signal/orbit element using CSS/lucide only.
2. Catalog stats: 19 categories, 190+ capabilities, 120+ workflows automated.
3. Main catalog: all 19 user-provided categories and every capability. Preserve category switching interaction, but make the controls compact, accessible, and responsive. Add a search/filter affordance if it fits cleanly. Cards should have hover/focus states.
4. Tech stack section with: Python & PyTorch; TypeScript & Next.js; Node.js & Go; AWS & Cloud Native; Docker & Kubernetes; PostgreSQL & Vector DBs; OpenAI & Claude APIs; GraphQL & REST APIs.
5. Strong CTA section to contact.

## Typography and color
Use existing system sans stack; high-contrast bold display headings, uppercase micro-labels, generous spacing. Dark mode is primary. Ensure light theme remains readable with existing variables. Accent is `--electric` / blue, with subtle violet secondary accent.

## Implementation constraints
- Use existing framework/routing and shared components.
- Prefer small focused edits to the existing services page/component/CSS.
- No standalone HTML. No external assets required.
- Keep client-side interaction accessible: buttons with roles/labels, keyboard usable, and mobile-friendly.
- Verify with `npx tsc --noEmit` and `npm run build` if possible.
