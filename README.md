# Shahd Shawish | Portfolio

Personal portfolio of Shahd Shawish, a backend-focused software developer.

A static site with no build step: plain HTML, CSS and a small amount of JavaScript.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx http-server . -p 4173
```

## Deploy

Hosted with GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root**.
The site is then available at `https://shahd444.github.io/portfolio/`.

## Structure

```
index.html        page content
css/tokens.css    design tokens (colors, type, spacing, radius, shadow)
css/components.css  component styles from the design system
css/site.css      page layout and responsive rules
js/main.js        nav state, scroll behavior, logo wall
assets/           font, favicon, technology logos
```

## Design

Built on the "Dark Minimal" design system: one near-black page, a single violet accent, Montserrat, and glass-style controls.
Technology logos are from [Simple Icons](https://simpleicons.org) (CC0).
