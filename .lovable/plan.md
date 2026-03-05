

# Add #6CF269 Green Accent Color

## Overview
Introduce the vibrant green `#6CF269` (HSL ~119 86% 69%) as a secondary highlight color used sparingly across the presentation for visual interest without disrupting the existing Navy/Indigo harmony.

## Color Strategy
Use `#6CF269` only in small, intentional touches — status indicators, badges, accent borders, icon backgrounds — never as a dominant color. It complements the existing indigo accent and provides an energetic "alive" feel.

## Changes

### 1. `src/index.css` — Add new CSS variable
- Add `--highlight: 119 86% 69%` to `:root` and dark mode

### 2. `tailwind.config.ts` — Register highlight color
- Add `highlight: { DEFAULT, foreground }` to the colors config

### 3. Targeted slide updates (subtle touches only)

- **SlideHero**: Use `#6CF269` for one or two card icon backgrounds (e.g., the "Integração com Oxy" ⚡ card) instead of indigo
- **SlideTimeline**: Use the green for the connecting line gradient endpoint or completed phase checkmarks
- **SlideGoLive**: Replace the success green pulse dots with `#6CF269` for the "Ativo" status indicators
- **SlideTransformation**: Use `#6CF269` as the accent color on the "Depois" (After) column — border-left or heading color
- **SlideDelight**: Use it for the milestone number circles or connecting line gradient
- **SlideSuccess**: Use `#6CF269` for the CTA button gradient blend (indigo → green) or as the pie chart's "Conciliação padronizada" segment color
- **TimelineProgress**: Completed phase dots get a subtle `#6CF269` ring or fill

### 4. Utility class
- Add `.gradient-highlight` utility: `linear-gradient(135deg, hsl(var(--accent)), #6CF269)` for gradient accents

