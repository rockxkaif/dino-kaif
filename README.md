# Dino Ventures Video Player

A mobile-first React video player experience inspired by the assignment brief. It features a category-based feed, full-screen player with custom controls, related video list, and a dockable mini-player that persists across navigation.

## Recommended folder structure

```
src/
  components/       # Reusable UI building blocks
  context/          # Shared state (player)
  data/             # Static dataset mappings
  pages/            # Route-level pages
  styles/           # Global styles + Tailwind entry
```

## Architecture decisions

- **React + TypeScript + Vite** for a modern, type-safe development experience and fast builds.
- **React Router** for the four main pages (Home, Categories, Library, Player).
- **Context API** for app-wide player state (active video, mini-player state) without introducing heavyweight state management.
- **Component-driven UI** keeps video cards, sections, and controls reusable across pages.
- **Tailwind CSS** for consistent, scalable styling and quick iteration.

## Features mapped to the requirements

- **Home page feed** with category grouping and cards (thumbnail, title, duration, category).
- **Full-page video player** with autoplay, custom controls, skip +/- 10 seconds, and seekable progress bar.
- **In-player related list** filtered by category, switching playback instantly.
- **Drag-to-minimize** gesture in the player that docks into a mini-player, persisting across navigation.
- **Auto-play next** with a 2-second countdown and cancel option.

## Setup

```bash
npm install
npm run dev
```

## Notes

- The dataset is stored in `src/data/videos.ts`, based on the provided sample entries and categories.
- Player playback uses MP4 sources (required for custom controls) while retaining the original YouTube embed URLs as source links.
- The mini-player continues playback in a lightweight preview while browsing other pages.
"# dino-kaif" 
