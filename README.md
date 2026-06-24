# vitalyworks.github.io

Personal portfolio site for VitalyWorks — Roblox Studio (Luau) commission work.

Live: https://vitalyworks.github.io/

## Files

- `index.html` — markup
- `styles.css` — all styles
- `script.js` — site logic (i18n, theme/tweaks, live clock, lightbox, show-more)
- `assets/` — (reserved for future static assets)

## Editing

### Quick text edits
Open the relevant file on GitHub, click the pencil icon, edit, and commit. The site rebuilds automatically.

### Adding a portfolio project
1. Open `script.js`
2. Find the `const PROJECTS = [` array
3. Copy one of the existing project entries (a `{ n: '..', yt: '..', ru: {...}, en: {...} }` block) and paste it as a new entry in the order you want it shown
4. Update `n` (display number), `yt` (YouTube video ID — the 11-char string from the video URL), `ru.t` / `ru.b` (Russian title/body), and `en.t` / `en.b` (English title/body)
5. Commit. The thumbnail loads automatically from `i.ytimg.com`.

## Tech stack

- Vanilla HTML / CSS / JS — no build step
- Fonts: Onest via Google Fonts (Latin + Cyrillic subsets)
- Video lightbox: lazy-loaded YouTube nocookie embeds, maxresdefault thumbnails with hqdefault fallback
- Themes: light / dark + Tweaks panel (accent, edge lift, motion intensity)
- i18n: English (default) + Russian
