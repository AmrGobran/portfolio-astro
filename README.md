# 🌐 Amr Gobran — Developer Portfolio

A fast, minimal, and thoughtfully crafted developer portfolio built with **Astro.js** and **Tailwind CSS v4**.  
Designed to highlight clean structure, subtle motion, and a smooth browsing experience — without relying on client-side JavaScript frameworks.

![Project Screenshot](/public/images/screenshot.png)

## 🚀 Tech Stack

### Core Technologies

- **[Astro.js](https://astro.build/)** (performance-focused, zero-JS by default)
- **[Tailwind CSS v4](https://tailwindcss.com/)** (inline colors, utility-first)
- **Web Components** (custom theme toggle)
- **[Astro Transitions](https://docs.astro.build/en/reference/modules/astro-transitions/#clientrouter-)** for smooth client-side navigation

---

## ✨ What This Portfolio Features

- 🌗 **Dark/light mode** with a flash-free Web Component
- 📱 **Fully responsive** Astro-only navigation
- 🌈 **Animated morphing-blob** hero background
- 🧩 **Modular and reusable** UI components
- 📁 **Clean and scalable** folder structure
- 🔍 **SEO-friendly** setup with best practices

---

## 📁 Project Structure

```bash
src/
├─ components/
│ ├─ ui/
│ │ ├─ Button.astro
│ │ ├─ Container.astro
│ │ ├─ DesktopNav.astro
│ │ ├─ Logo.astro
│ │ ├─ MobileNav.astro
│ │ ├─ Section.astro
│ │ └─ ToggleThemeWC.astro
│ ├─ Footer.astro
│ ├─ Header.astro
│ ├─ Hero.astro
│ ├─ ProjectCard.astro
│ └─ WhatIDo.astro
├─ data/
│ ├─ index.ts
│ └─ types.ts
├─ icons/
│ ├─ email-at.svg
│ ├─ github.svg
│ ├─ linkedin.svg
│ ├─ menu.svg
│ ├─ preview.svg
│ ├─ theme.svg
│ ├─ view.svg
│ └─ x.svg
├─ layouts/
│ └─ BaseLayout.astro
├─ pages/
│ ├─ index.astro
│ └─ projects.astro
└─ styles/
└─ global.css
```

---

## ✨ Key Features

### 🌗 Flash-Free Dark/Light Mod

- Implemented using a custom **Web Component**
- Runs before hydration → **no flashing**
- Saves preference in `localStorage`
- Applies the theme directly to `<html>` via classes

### 📱 Fully Astro-Based Navigation

- Desktop and mobile menus built entirely with **.astro components**
- No React, no client-side JS frameworks
- Smooth transitions enabled via `astro:transitions`

### 🌈 Animated Hero Background

- Soft, morphing organic blobs
- **Pure CSS animations**
- High-performance and GPU-friendly

### 🧩 Clean UI Components

- Buttons
- Containers
- Sections
- Cards
- Header & Footer  
  All built the **Astro way** — small, simple, reusable.

---

## 👤 Author

### [Amr Gobran](https://amrgobran.netlify.app/)

Front-end Developer — building clean, performant, and meaningful digital experiences.
