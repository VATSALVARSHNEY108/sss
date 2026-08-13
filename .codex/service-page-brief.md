# Service page rebuild brief

## Objective
Rebuild the existing Next.js `/services` page for SkillYug Technologies so it presents the complete AI services catalog supplied by the user, grouped by category, plus the requested technology stack.

## Audience
Business leaders, founders, and product/engineering teams evaluating an AI implementation partner.

## Aesthetic direction
Dark, premium AI studio interface: deep charcoal background, electric blue accents, subtle grid/glow atmosphere, crisp typography, high information density without feeling cluttered. Preserve the existing SkillYug visual language and responsive behavior.

## Content structure
- Hero with clear “AI services for every workflow” positioning and CTA.
- Compact proof/stat row.
- Complete interactive category catalog: Education, Business & Productivity, Sales & Marketing, Customer Support, HR & Recruitment, Finance, Healthcare, Legal, E-Commerce, Manufacturing, Agriculture, Real Estate, Cybersecurity, Creative & Media, Software Development, Research & Analytics, Travel & Hospitality, Smart Automation, Advanced AI Services.
- Every item supplied by the user must remain verbatim.
- “Our Tech Stack” section with: Python & PyTorch; TypeScript & Next.js; Node.js & Go; AWS & Cloud Native; Docker & Kubernetes; PostgreSQL & Vector DBs; OpenAI & Claude APIs; GraphQL & REST APIs.
- Existing contact CTA and supporting delivery/process content may remain if it does not obscure the complete catalog.

## Interaction
Category tabs/cards should work on desktop and mobile. Service items can be presented as compact pills/cards. Avoid hiding the catalog behind a tiny or inaccessible control; category navigation should be obvious and scrollable on small screens.

## Output
Modify the existing application files in the repository, especially `app/services/page.tsx` and relevant components/styles. Do not create a standalone HTML page.
