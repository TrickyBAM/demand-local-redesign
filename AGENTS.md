# Demand Local Redesign Agent Notes

## Project
This is a static Demand Local marketing redesign for automotive dealerships, centered on LinkOne, co-op compliant media, GEO, and digital advertising services. The whole experience is a single-page site with interactive audit/scanner-style sections served directly by Vercel.

## Stack
- Static `index.html` with inline CSS and JavaScript.
- Google Fonts and local browser APIs only.
- Vercel static hosting via `vercel.json` with `outputDirectory` set to the repo root.

## Gotchas And Quirks
- Almost all code, layout, styling, and behavior lives in one large `index.html`; keep edits surgical and search before changing repeated sections.
- `vercel.json` routes all paths back to `/index.html`, so broken asset paths can be easy to miss.
- The PageSpeed call is made from public browser JavaScript and includes an API key in the HTML. Treat anything in this file as public and rotate keys if this matters.
- Recent commits focused on fragile bar chart and hero mockup visuals. Check the page visually after CSS changes, especially chart heights and mobile sections.

## How Brian Works
- Brian describes what he wants in plain English. Do the actual implementation, testing, and GitHub work for him.
- Do not hand Brian snippets to paste or ask him to read code. Make the change, verify it, and summarize in plain English.
- Read the README, recent commits, `AGENTS.md`, and `CLAUDE.md` before assuming project context.
- Ask only for real product direction, source-of-truth choices, or destructive/live-production actions. For normal branch work, proceed.
- Prefer the existing stack and npm where applicable. Do not add new frameworks or major libraries without a clear reason.
