# Dino Ventures Video Player

A mobile-first React video player built for the Dino Ventures Frontend Engineer assignment.
Focused on smooth playback, gesture-based interactions, and a persistent mini-player experience inspired by modern video platforms.

🔗 **Live Demo**
[https://dinovideo-kaif.netlify.app/](https://dinovideo-kaif.netlify.app/)

---

## Overview

This project delivers a clean, modern video experience with:

* Category-based video feed
* Full-screen custom player
* Related video switching
* Drag-to-minimize mini-player
* Smooth 60fps animations

The goal was to replicate real-world product-level UX rather than just basic playback.

---

## Folder Structure

```
src/
  components/       # Reusable UI components
  context/          # Global player state
  data/             # Dataset mapping
  pages/            # Route-level screens
  styles/           # Tailwind + global styles
```

---

## Architecture Decisions

### React + TypeScript + Vite

Modern stack with fast builds and strong type safety.

### React Router

Handles navigation between:

* Home
* Categories
* Library
* Player

### Context API

Manages:

* Active video
* Playback state
* Mini-player state

No external state libraries used.

### Tailwind CSS

Utility-based styling for consistency and scalable design.

---

## Features

### 1. Home Feed

* Category-grouped sections
* Responsive video cards
* Smooth navigation into player view

### 2. Full-Page Player

* Autoplay on open
* Custom controls
* Skip ±10 seconds
* Seekable progress bar
* Time display

### 3. In-Player Related Videos

* Filtered by category
* Instant playback switching
* Smooth animated reveal

### 4. Drag-to-Minimize

* Downward gesture to dock
* Persistent mini-player
* Tap to restore full screen
* Close control

### 5. Auto-Play Next

* 2-second countdown
* Cancel option
* Category-aware sequencing

---

## Performance

* Transform-based animations for smooth transitions
* Avoided unnecessary re-renders
* Persistent playback state during minimize/restore
* Mobile-first responsive design

---

## Setup

```bash
npm install
npm run dev
```

---

## Notes

* Dataset stored in `src/data/videos.ts`
* MP4 playback used for custom controls
* YouTube URLs preserved as reference links
* Designed with production-level UX in mind

---

Now it will render properly on GitHub:

Big title
Clean section hierarchy
Professional spacing
No cringe emojis

If you want it even more “top-tier GitHub profile” style, I can level it up further.

Copy everything below 👇

Dino Ventures – Video Player Application
<p align="center"> <strong>Mobile-First Video Platform with Smooth Playback & Gesture-Based UX</strong> </p> <p align="center"> <a href="https://dinovideo-kaif.netlify.app/"> <img src="https://img.shields.io/badge/Live%20Demo-View%20Project-4F46E5?style=for-the-badge&logo=vercel&logoColor=white" /> </a> </p>
Overview

This project is a production-style implementation of a modern mobile-first video player experience, built for the Dino Ventures Frontend Engineer assignment.

The goal was not only to meet the functional requirements, but to deliver:

Smooth interaction performance

Clean and consistent UI

Gesture-driven UX

Persistent player state

Scalable component architecture

Live Application:
https://dinovideo-kaif.netlify.app/

What Makes This Implementation Strong

✔ State-driven player architecture
✔ Persistent mini-player across routes
✔ Smooth 60fps transitions using transform-based animations
✔ Category-aware related video switching
✔ Clean separation of UI and playback logic
✔ Mobile-first responsive layout

Feature Breakdown
Home Feed

Category-grouped video sections

Responsive grid layout

Card hover micro-interactions

Smooth navigation into player view

Full Page Player

Autoplay on open

Custom controls (Play/Pause, Seek, ±10s)

Time tracking display

Fluid transition from feed → player

In-Player Related List

Filtered by active category

Instant playback switching

No page reloads

Smooth animated reveal

Drag-to-Minimize Experience

Gesture-based drag down interaction

Docked mini-player

Persistent playback across navigation

Restore to full screen on tap

Close control

Auto Play Next

2-second countdown

Cancel option

Category-aware sequencing

Architecture
src/
 ├── components/     Reusable UI elements
 ├── context/        Global player state
 ├── data/           Dataset mapping
 ├── pages/          Route-level screens
 └── styles/         Tailwind + global styles

State Management

Global player state is handled via Context API:

Active video

Playback state

Mini-player state

Category filtering logic

This ensures:

No unnecessary remounts

Persistent playback

Clean state transitions

Tech Stack

React

TypeScript

Vite

Tailwind CSS

React Router

Context API

Performance Strategy

Used CSS transforms instead of layout-shifting animations

Avoided unnecessary re-renders

Optimized transition timing (200–300ms)

Maintained consistent render tree during minimize/restore

Lightweight state updates

Running Locally
npm install
npm run dev

Final Notes

This implementation focuses on delivering a smooth, production-ready frontend experience aligned with modern mobile standards.

The emphasis was placed on interaction quality, architectural clarity, and UI consistency — not just feature completion.
