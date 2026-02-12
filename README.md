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


Dino Ventures – Video Player Application
<p align="center"> <strong>Mobile-First Video Platform with Smooth Playback & Gesture-Based UX</strong> </p> <p align="center"> <a href="https://dinovideo-kaif.netlify.app/"> <img src="https://img.shields.io/badge/Live%20Demo-View%20Project-4F46E5?style=for-the-badge&logo=vercel&logoColor=white" /> </a> </p>

## Setup

### Clone the repository

```bash
git clone https://github.com/rockxkaif/dino-kaif.git
```

### Navigate into the project

```bash
cd dino-kaif
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## Notes

* The dataset is stored in `src/data/videos.ts`, based on the provided assignment structure.
* Player playback uses MP4 sources (required for custom controls) while retaining the original YouTube embed URLs as reference.
* The mini-player persists playback while navigating between pages.

---
