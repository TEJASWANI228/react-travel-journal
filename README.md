# React Travel Journal

A simple React travel journal built with Vite. It shows a clean list of travel cards with an image, location, date range, description, and a link to view each place on Google Maps.

## Features

- Responsive travel journal layout
- Reusable card component
- Navigation bar with a travel icon
- Static destination data rendered from one file
- GitHub Pages deployment support

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

- `src/Nav.jsx` - top navigation bar
- `src/MainContent.jsx` - renders the journal list
- `src/Card.jsx` - individual travel card
- `src/data.js` - destination data
- `src/*.css` - styling for the app

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

This project is set up to publish to GitHub Pages using the `gh-pages` branch.

```bash
npm run deploy
```

Then in GitHub, go to the repository settings and set Pages to:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

## Edit the Journal Entries

To change the travel cards, update `src/data.js`. Each object controls the title, location, map link, dates, description, and image.
