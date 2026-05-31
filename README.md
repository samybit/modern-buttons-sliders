# The Button Archive

A comprehensive, interactive showcase of 20 distinct web design philosophies and UI aesthetics. Built to demonstrate advanced CSS techniques, arbitrary variant targeting, and complex shadow layering without relying on heavy external component libraries or image assets.

## Tech Stack

* **Framework:** Next.js 16
* **Library:** React 19
* **Styling:** Tailwind CSS v4 (Zero-config, PostCSS integration)
* **Package Manager:** pnpm

## The Hero Grid

The archive features a mathematically balanced 20-item Bento box hero section (scaling cleanly to 5x4 or 4x5 grids depending on viewport). It utilizes a CSS `transform: scale()` approach to render live mini-previews of the actual components. This ensures perfect parity between the preview and the interactive sections without code duplication.

## The 20 Aesthetics

### Phase 1: The Raw
* **Brutalism:** High contrast, strict geometry, solid borders, and 0-blur shadows.

### Phase 2: The Soft & Translucent
* **Glassmorphism:** Frosted glass, `backdrop-blur`, and translucent borders.
* **Neumorphism (Soft UI):** Exact background color matching with dual-tone shadows (light top-left, dark bottom-right) to mimic physical plastic extrusion.

### Phase 3: The Tactile & The Neon
* **Cyberpunk:** Dark mode, high-contrast neon glowing shadows, and mono typography.
* **Skeuomorphism (Web 2.0):** Physical realism, tight gradients, bevels, and inner highlights.
* **Claymorphism:** Fluffy, friendly 3D UI using double inner shadows and large border radii.

### Phase 4: Modern & Retro Extremes
* **Liquid Glass:** 2026 refractive evolution of Glassmorphism, mimicking wet surfaces and high refraction.
* **Tactile 3D (Cute-alism):** Gamified, spring-loaded buttons using thick bottom borders.
* **Retro OS (Web 1.0):** Windows 95 aesthetic utilizing rigid hex grays and strict inset shadow layering.

### Phase 5: The Nostalgia Trip
* **Frutiger Aero:** Late 2000s eco-tech, watery gradients, and glassy white highlights.
* **Pixel Art (8-Bit):** Pure CSS aliasing created via stepped `box-shadow` arrays.
* **Y2K Chrome (Web 1.5):** Pill shapes, metallic sheen gradients, and cyber-optimism.

### Phase 6: The Graphic Design Legends
* **Bauhaus / Swiss Style:** Strict grids, primary colors (Red, Blue, Yellow), and absolute typographical clarity.
* **Blueprint / Wireframe:** Developer's drafting board aesthetics, dashed borders, and CAD-style nodes.
* **Material Design (Classic 2014):** Paper and ink philosophy with exact Z-axis drop elevations.

### Phase 7: The Atmospheric & Experimental
* **Holographic:** Iridescent, shifting pastels mimicking pearls or CDs. Heavy use of mixed blend modes.
* **Aurora Ambient:** Soft, bleeding light orbs behind sharp, semi-transparent dark frosted panels.
* **Extreme Dark Mode (Vampire):** Pure absolute black, blood red accents, sub-pixel borders, and hostile minimalism.

### Phase 8: The Modern SaaS Standards
* **Neo-Brutalism:** Playful iteration of brutalism. Cheerful pastels, thick outlines, and solid black offset shadows.
* **Modern FinTech:** The high-converting SaaS standard. Sub-pixel blur shadows, highly refined typography, and pure `#f6f9fc` backgrounds.

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server (uses Turbopack by default in Next 16):
```Bash
pnpm dev
```

3. Open http://localhost:3000 to interact with the archive.