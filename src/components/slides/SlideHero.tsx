import { motion } from "framer-motion";
import { BarChart3, TrendingUp, RefreshCw, FileText, Zap, Shield } from "lucide-react";
import AnimatedElement from "../presentation/AnimatedElement";

const icons = { BarChart3, TrendingUp, RefreshCw, FileText, Zap, Shield };
const heroCards = [
  { title: "DRE gerencial confiável", icon: "BarChart3" },
  { title: "Fluxo de caixa projetado (90 dias)", icon: "TrendingUp" },
  { title: "Visão do ciclo financeiro", icon: "RefreshCw" },
  { title: "Plano de contas estruturado", icon: "FileText" },
  { title: "Integração com Oxy", icon: "Zap" },
  { title: "Governança financeira", icon: "Shield" },
];

export default function SlideHero() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-12 text-center">
      <AnimatedElement>
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-medium text-accent">Financial Intelligence</span>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.1}>
        <h1 className="text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
          O2 Financial
          <br />
          <span className="text-accent">Intelligence Setup</span>
        </h1>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <p className="max-w-2xl text-lg text-muted-foreground lg:text-xl">
          Transformamos o financeiro da empresa em uma máquina confiável de decisões.
        </p>
      </AnimatedElement>

      <AnimatedElement delay={0.3} className="w-full">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {heroCards.map((card, i) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px -12px hsl(239 84% 67% / 0.15)" }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{card.title}</span>
              </motion.div>
            );
          })}
        </div>
      </AnimatedElement>
    </div>
  );
}
