<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Project context

A self-hosted developer portfolio built with Next.js (App Router), deployed via static export + nginx on the owner's own server.

Design system (do not deviate without asking)
Palette: muted, calm, low-saturation. Off-white background (
#f6f7f8), near-black ink text (
#262b30), single dusty-blue accent (
#5b7b9c). No dark mode redesign, no grain/noise background — those were explored and explicitly put on hold. Do not reintroduce them unless asked.
Typography: IBM Plex Sans for body copy (readability first), IBM Plex Mono used sparingly for section labels, meta info, and tags — never for body text.
Theme concept: CLI/tree-based navigation was dropped in favor of a subtler approach — section headers styled like file paths (~/about, ~/projects, ~/contact) and a terminal-style typing animation in the hero only. This is the one signature moment; everything else should stay quiet and minimal.
Motion philosophy: subtle, restrained, purposeful. Scroll-reveals should use viewport={{ once: true }} (animate in once, no re-triggering). Respect prefers-reduced-motion everywhere. Avoid effects that compete with the hero terminal for attention (e.g. no global mouse-follow cursor effects).
Sections (final approved list)
Hero — terminal typing animation, then normal content below
~/about — short intro
~/skills — tech stack, grouped by category
~/projects — project cards, monospace meta (year, type), tag chips
~/experience — no timeline, just listed roles (scattered work history)
~/achievements — certifications and awards
~/currently-learning — pulsing-dot list of active learning areas
Photography — tucked into a quiet, muted "hidden" corner, NOT a top-level nav item. Deliberately lower visual priority than Projects.
~/contact — email, GitHub, LinkedIn, resume download
Reference mockup

A static HTML mockup implementing this design exists — check the project history / prior deliverables for portfolio-mockup.html if it's available in the repo. Match its visual language when building real components.

Tech stack
Next.js (App Router), static export target (next export equivalent)
shadcn/ui (already initialized — verify components.json exists before re-running shadcn init)
Motion (motion npm package, formerly framer-motion) for scroll reveals and most micro-interactions
Skiper UI components (see task list below) — free tier, attribution to Skiper UI is required somewhere on the site (footer is fine)
Task list
✅ Completed (verified by owner as done through Task 3)
 Task 1 — Initialize shadcn/ui Verify: components.json exists in project root.
 Task 2 — Install shared dependencies Verify: package.json includes framer-motion (or motion), gsap, @gsap/react, lenis, next-themes, lucide-react.
 Task 3 — Pull in Skiper components via CLI Commands used:
  npx shadcn add @skiper-ui/skiper17   # card stack (photography)
  npx shadcn add @skiper-ui/skiper58   # text roll (nav)
  npx shadcn add @skiper-ui/skiper26   # theme toggle (nav)
  npx shadcn add @skiper-ui/skiper87   # scroll fade (skills/achievements)

Verify before moving on:

 components/v1/skiper17.tsx exists and exports StickyCard002
 components/v1/skiper58.tsx exists and exports TextRoll
 components/v1/skiper26.tsx exists and exports ThemeToggleButton (and the useThemeToggle hook)
 components/v1/skiper87.tsx or equivalent CSS exists for scroll fade
 Run npm run dev and confirm the project still boots with no import errors from these new files
Remaining tasks
 Task 4 — Set up the theme provider for Skiper26
Create components/theme-provider.tsx:
tsx
     "use client";
     import * as React from "react";
     import { ThemeProvider as NextThemesProvider } from "next-themes";

     export function ThemeProvider({
       children,
       ...props
     }: React.ComponentProps<typeof NextThemesProvider>) {
       return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
     }
Wrap app/layout.tsx body content:
tsx
     import { ThemeProvider } from "@/components/theme-provider";
     // ...
     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       {children}
     </ThemeProvider>
Drop <ThemeToggleButton variant="circle" start="center" /> into the nav.

Verify:

 Toggling the button switches light/dark class on <html>
 No hydration warning in the console (should have suppressHydrationWarning on the <html> tag)
 Toggle persists across a page refresh
 Task 5 — Add the scroll-fade CSS (Skiper87) to globals.css
Copy the @supports (animation-timeline: scroll()) block from the Skiper87 docs into app/globals.css.
Apply the scroll-fade-y class to the skills tag list and/or achievements grid container (whichever sections scroll internally).
Verify:
 Scrolling within the tagged container shows a soft fade at top/bottom edges, not a hard cutoff
 No console errors — this is CSS-only, so failure usually means the class name or container structure doesn't match
 Task 6 — Wire each component into its section, one at a time Order: Skiper87 (already tagged in Task 5) → Skiper26 in nav → Skiper58 on nav links or hero heading → Skiper17 in the photography section last (most moving parts: GSAP + Lenis smooth scroll). For Skiper17 specifically:
Confirm Lenis smooth-scroll setup doesn't conflict with any other scroll listeners already in the project (e.g. the scroll-reveal Motion hooks).
Populate cards array with real photography image paths, not placeholders.
Verify (per component, check off as each lands):
 Text roll works on hover over nav links, no layout shift
 Theme toggle visible and functional in nav
 Card stack scrolls smoothly in the photography section, cards scale/rotate as expected, no jank
 All four components visually match the muted palette (no components introducing off-brand colors — check for default Tailwind blue/purple accents that need overriding to 
#5b7b9c)
 Task 7 — Test build + static export
Run npm run build.
Confirm the static export completes without errors — GSAP/Lenis are the most likely source of SSR-related build failures if not properly isolated in "use client" components.
Serve the export output locally (e.g. npx serve out/) and click through every section on both mobile and desktop widths.
Verify:
 npm run build exits 0
 No hydration mismatches in the browser console on the exported build
 Theme toggle, text roll, scroll fade, and card stack all still work in the exported static build (not just next dev)
 Attribution to Skiper UI is present somewhere on the site (footer)
Notes for the agent
Don't introduce the dark-mode/grain-background redesign that was discussed and explicitly paused — the site should stay on the light, muted palette unless the owner asks to revisit it.
Don't add the global mouse-follow effect (Skiper61) — it was considered and intentionally dropped for being too playful against the "calm" brief.
If any Skiper component ships with default colors/styles that clash with the palette above, override them — don't leave default shadcn blue/gray on the live site.
After finishing all tasks, do a final pass checking prefers-reduced-motion is respected across every animated component, not just the ones built earlier in the project.