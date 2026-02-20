# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static freelancer landing page for **OlexiyDoes** — a Shopify development service based in Munich, Germany. The entire site is in German and has no build system or dependencies; it runs directly in the browser.

## Development

Preview the site by opening `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no build steps, linting tools, or tests.

## Architecture

Single-page marketing site with three HTML files sharing one stylesheet and one JS file:

- **[index.html](index.html)** — Main landing page. Sections in order: Nav → Hero → Problems → Services (`#leistungen`) → Packages (`#pakete`) → Process (`#prozess`) → About (`#ueber`) → FAQ → Contact (`#kontakt`) → Footer
- **[impressum.html](impressum.html)** / **[datenschutz.html](datenschutz.html)** — German legal pages. They share `styles.css` and `script.js`, and define their own `.legal` layout via an inline `<style>` block.
- **[styles.css](styles.css)** — All styles. Uses CSS custom properties defined in `:root` for the color system, typography, spacing, and transitions. Dark mode is implemented via `[data-theme="dark"]` overriding those variables. BEM-like class naming (`.nav__container`, `.hero__title`, etc.). Responsive breakpoints at 768px and 480px.
- **[script.js](script.js)** — Vanilla JS only. Handles: mobile nav toggle, dark/light theme toggle (persisted in `localStorage`, respects `prefers-color-scheme`), `IntersectionObserver` scroll animations (adds `.fade-in`/`.visible` classes), smooth anchor scroll with nav offset compensation, and contact info reveal (see below).

## Key Patterns

**Theme system:** `setTheme('dark'|'light')` sets `data-theme` on `<html>` and saves to `localStorage`. The nav background also changes via a targeted `[data-theme="dark"] .nav` rule.

**Contact info anti-scraping:** Email and phone are not in the HTML source. They are split across `data-u`/`data-d` (email) and `data-p`/`data-s` (phone) attributes on their anchor elements, assembled into live links on first click by `revealEmail()` / `revealPhone()` in `script.js`.

**Contact form:** Uses [Formspree](https://formspree.io) (`action="https://formspree.io/f/PLACEHOLDER"` — the `PLACEHOLDER` must be replaced with the real form ID). Includes a CSS-hidden honeypot field (`input[name="website"]`) checked before submission to silently discard bot submissions.

**Scroll animations:** `script.js` adds `.fade-in` to cards and content blocks, then uses `IntersectionObserver` to add `.visible` when they enter the viewport. The CSS transition only fires when `prefers-reduced-motion: no-preference`.
