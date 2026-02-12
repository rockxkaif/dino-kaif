🚀 Dino Ventures – Video Player Application
<p align="center"> <b>Mobile-First • Smooth Playback • Gesture-Based UX • Premium UI</b> </p> <p align="center"> <a href="https://dinovideo-kaif.netlify.app/" target="_blank"> 🌐 <b>Live Demo</b> </a> </p>
✨ Overview

A mobile-first React video player experience built for the Dino Ventures Frontend Engineer assignment.

This project focuses on delivering a smooth, modern, YouTube-inspired UX with:

🎬 Seamless full-screen playback

📱 Gesture-based interactions

🧩 Persistent mini-player

⚡ Smooth 60fps animations

🎨 Premium SaaS-style UI

Live Preview →
👉 https://dinovideo-kaif.netlify.app/

🎯 Key Features
🏠 Home Feed

Category-based video grouping

Responsive scrollable layout

Video cards with:

Thumbnail

Title

Duration

Category badge

Smooth hover animations

🎬 Full-Page Player

Autoplay on open

Custom controls:

▶ Play / Pause

⏩ Skip +10s

⏪ Skip -10s

Seekable progress bar

Time display

Smooth transition from feed → player

Fully responsive (mobile & desktop)

🔄 In-Player Related List

Swipe / scroll to reveal

Category-based filtering

Instant playback switching

No blank reloads

Smooth animated list updates

📱 Drag-to-Minimize

Gesture-based drag down

Docking mini-player

Persistent across navigation

Tap to restore full-screen

Close control available

⭐ Bonus

Auto-play next (2s countdown + cancel)

Micro-interactions

Smooth cubic-bezier transitions

Optimized rendering behavior

🧱 Architecture
src/
  components/       → Reusable UI components
  context/          → Global player state
  data/             → Dataset mapping
  pages/            → Route-level screens
  styles/           → Tailwind entry + globals

Tech Stack

⚛ React

🟦 TypeScript

⚡ Vite

🎨 Tailwind CSS

🧭 React Router

🌐 Context API

🧠 Design Philosophy

The goal was not just functionality, but:

A fluid, intuitive, production-ready video experience that feels modern and intentional.

Focus Areas:

Mobile-first layout

Consistent spacing system

Premium white UI design

GPU-accelerated animations

Clean component architecture

⚡ Performance Considerations

Avoided unnecessary re-renders

Optimized animation timing (200–300ms)

Used transform + opacity for smooth motion

Persistent mini-player state management

Clean separation of concerns

🛠 Setup
npm install
npm run dev

🌍 Live Demo

👉 https://dinovideo-kaif.netlify.app/

📌 Final Notes

This implementation fulfills the assignment requirements while focusing on:

Smooth UX

Modern design standards

Maintainable architecture

Real-world scalability mindset

💡 Built with attention to detail and production-level thinking.
