# Muskan Sharma — Portfolio

A single-file, no-build-step portfolio: plain HTML/CSS/JS (no React/Vite needed),
so it works directly on GitHub Pages.

## Structure
```
Portfolio/
  index.html                          <- everything (markup, styles, script)
  assets/
    profile.jpg                       <- ADD: your real photo
    Muskan_Sharma_Resume.pdf          <- ADD: your resume PDF
    projects/
      scamshield.png                  <- ADD: ScamShield screenshot
      hustlurs.png                    <- ADD: Hustlurs screenshot
```

## What to fill in
Everything you need to edit lives in ONE place: the `<script>` block near the
bottom of `index.html`, under the comment `EDITABLE DATA`.

1. `FEATURED_PROJECTS` — add `liveUrl` and `githubUrl` for ScamShield/RakshaCircle
   and Hustlurs (left blank on purpose — no URLs were invented).
2. `ACADEMIC_PROJECTS` — add/remove coursework projects.
3. `REPOS` — add real repositories you want to show under GitHub.
4. Drop your photo at `assets/profile.jpg` and your resume PDF at
   `assets/Muskan_Sharma_Resume.pdf` — the page falls back to a text
   placeholder automatically if the files aren't there yet, so nothing breaks.
5. Add project screenshots at `assets/projects/scamshield.png` and
   `assets/projects/hustlurs.png` (same fallback behavior).

## Running locally
No build step needed. Just open `index.html` in a browser, or serve it:
```
npx serve .
```

## Deploying
Push to your GitHub repo and enable GitHub Pages (Settings → Pages → branch: main, folder: / (root)).

## Notes
- Motion respects `prefers-reduced-motion`.
- Mobile: the desk scene simplifies (fewer floating props) and navigation
  becomes a hamburger menu; use "Skip intro" to bypass the book animation.
- Nothing has been invented: no fake URLs, repos, certifications or stats —
  all TODOs are marked directly in the data objects.