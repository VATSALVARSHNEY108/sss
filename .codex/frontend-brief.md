# Kinetic Grid Integration Brief

## Objective
Integrate the supplied KineticGrid React component as a reusable shadcn-style UI primitive and use it as the visual background for the app's primary page.

## Audience and direction
Create a polished dark, technical landing surface for a developer-facing product. The kinetic grid is the memorable interaction: cursor warping and click ripples should sit behind readable foreground content.

## Structure
- Full viewport kinetic canvas background
- Small navigation or context label
- Strong headline and supporting copy
- One or two restrained call-to-action controls if the existing app supports them

## Typography and color
Use the project's existing typography if present. Otherwise use a clean sans-serif, white text, muted slate text, and the component's blue active state on a near-black background.

## Output
Reusable component at `components/ui/kinetic-grid.tsx`, supporting utilities/config as needed, and the primary route wired to render it.

## Assets
No image assets are required; the canvas interaction is the visual hero.

## Constraints
Preserve existing project conventions. Ensure TypeScript, Tailwind, and shadcn-compatible `cn` utility support. Verify with the available build/typecheck commands.
