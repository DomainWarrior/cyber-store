# ⚡ CyberStore

> Premium cybersecurity courses, tools, and scripts for ethical hackers and security professionals.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-00ff41?style=flat-square)

---

## Preview

A dark cyberpunk-themed e-commerce storefront built as a portfolio project. Features a live matrix rain canvas, glitch text animations, product filtering, a slide-in cart drawer, and full product detail modals.

---

## Features

- **Matrix rain hero** — canvas-based animation with glitch title effect
- **Typewriter subtitles** — cycles through target audience phrases
- **Product catalog** — 8 products across Courses, Tools, Scripts, and Bundles
- **Category filtering + sorting** — filter by type, sort by popularity/rating/price
- **Product modals** — full detail view with feature list and add-to-cart
- **Cart drawer** — slide-in panel with remove, clear, and promo code display
- **Neon UI** — green/cyan/red accents, hover glows, shimmer effects
- **Fully responsive** — mobile-first layout throughout

---

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Framework | React 18                |
| Build     | Vite 5                  |
| Styling   | Tailwind CSS 3          |
| State     | React Context + useReducer |
| Fonts     | JetBrains Mono, Inter   |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/DomainWarrior/cyber-store.git
cd cyber-store

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
cyber-store/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css              # Global styles & animations
    ├── data/
    │   └── products.js        # Product catalog data
    ├── context/
    │   └── CartContext.jsx    # Cart state (add/remove/clear)
    └── components/
        ├── Navbar.jsx         # Fixed nav with cart badge
        ├── Hero.jsx           # Matrix canvas + glitch headline
        ├── StatsBar.jsx       # Animated stats strip
        ├── ProductGrid.jsx    # Filter, sort, product grid
        ├── ProductCard.jsx    # Individual product card
        ├── ProductModal.jsx   # Full-detail overlay
        ├── CartDrawer.jsx     # Slide-in cart panel
        └── Footer.jsx
```

---

## License

MIT — free to use, fork, and build on.

---

<div align="center">
  <sub>Built by <a href="https://github.com/DomainWarrior">DomainWarrior</a></sub>
</div>
