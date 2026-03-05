

# O2 Financial Intelligence Setup — Interactive Presentation

## Overview
A premium, fullscreen interactive presentation with 13 slides showcasing the O2 Financial Intelligence Setup journey. Features animated timeline progression, data visualizations, and a minimalist Stripe/Linear-inspired design.

## Design System
- **Colors**: Dark navy primary (#0F172A), indigo accent (#6366F1), light background (#F8FAFC), with success/warning/critical status colors
- **Typography**: Inter font family, bold headings, clean body text
- **Style**: Minimalist premium with soft shadows, elegant cards, generous spacing, hover states

## Core Components
1. **SlideContainer** — Fullscreen slide wrapper with fade/slide-up animations (framer-motion)
2. **TimelineProgress** — Top progress bar showing 3 phases (Diagnóstico → Estruturação → Inteligência) that illuminates as user advances
3. **Navigation** — Next/Previous buttons + keyboard arrow support
4. **Chart components** — Pie charts, radar charts, bar/progress charts, tables using Recharts

## Slide Flow (13 slides)

1. **Hero** — Big title "O2 Financial Intelligence Setup", subtitle, 6 result cards (DRE, fluxo de caixa, etc.)
2. **Timeline do Setup** — Visual 3-phase timeline (weeks 1-3, 3-7, 7-10)
3. **Fase 1: Financial Dataflow Mapping** — Pie chart of diagnostic areas + deliverables list
4. **Relatório de Diagnóstico** — Radar chart (processos, dados, governança, planejamento, controle)
5. **Fase 2: Financial Structure Implementation** — Progress bars for each work area
6. **Plano de Estruturação** — Status table (frente/status/responsável) + priority pie chart
7. **Fase 3: Integration & Financial Intelligence** — Visual flow diagram ERP→Oxy→Dashboards→Decisões
8. **Go Live Financeiro** — Dashboard layout with enabled KPI indicators
9. **Documento Executivo** — 5 large cards (contexto, riscos, transformações, resultado, próximos passos)
10. **Transformação** — Before vs After comparison layout
11. **Governança Financeira** — Two-column ritual layout (semanal + mensal)
12. **Customer Delight** — Mini timeline of key moments
13. **Indicadores de Sucesso** — Pie chart with success metrics

## Animations (Framer Motion)
- Fade-in and slide-up on slide transitions
- Progressive reveal of elements within each slide
- Timeline highlight animation as phases progress
- Hover effects on cards and interactive elements

## Technical Notes
- Install `framer-motion` for animations
- Use Recharts (already installed) for all charts
- Global navigation state via custom hook `usePresentationNavigation`
- Presentation data centralized in `setupData.ts`
- Fullscreen-optimized layout, keyboard navigation (arrow keys)

