# FlipCards — Good Company

A playful, responsive gallery of six fictional friends. Flip each illustrated card to discover its character's other side.

**Live site:** https://fernandohmachado8.github.io/FlipCards/

## Features

- Original vector portraits and a warm editorial design.
- Click, tap, Enter, or Space to flip a card.
- Filter by creatives, explorers, or makers, and flip all visible cards together.
- Responsive layouts for phones, tablets, and desktops.
- Visible keyboard focus, screen-reader labels, filter announcements, and reduced-motion support.
- No framework, build step, account, tracking, or external asset dependencies.

## Run locally

Open `index.html` directly in a browser, or serve this folder with any static web server. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000.

## Make it yours

- Edit the `people` array in `app.js` to update names, roles, categories, colors, and stories.
- Replace the SVG portraits in `assets/portraits/` with your own artwork.
- Adjust the layout and palette in `styles.css`.
- Update the page introduction and footer in `index.html`.

All characters and biographies are fictional demo content. The portraits are original SVG artwork created for this project.

## Deployment

GitHub Pages serves the root of the `main` branch. In **Settings → Pages**, keep **Deploy from a branch**, **main**, and **/ (root)** selected. Changes published to `main` deploy automatically; no secrets or build configuration are needed. All local asset URLs are relative to support the `/FlipCards/` project path.

The original `friends.html` address redirects to the home page. The original 2024 project remains available in Git history.

## Manual checks

1. Open the page at desktop and phone widths; verify that no content overflows.
2. Flip a card twice by mouse/touch and by keyboard (Enter and Space).
3. Select every filter and verify that two matching characters appear; Everyone restores six.
4. Use “Flip everyone” and “Flip everyone back,” including while a filter is selected.
5. Enable reduced motion and confirm that cards change sides without rotation.
6. Visit `friends.html` and confirm it reaches the new home page.

Built with HTML, CSS, and vanilla JavaScript. A project by Fernando Machado.
