import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { heroCards } from "@/data/setupData";
import { BarChart3, TrendingUp, RefreshCw, FileText, Zap, Shield } from "lucide-react";

const icons = { BarChart3, TrendingUp, RefreshCw, FileText, Zap, Shield };

export default function SlideHero() {
  return (
    <div className="flex w-full flex-col items-center gap-14">
      <AnimatedElement>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2"
          >
            <div className="h-1.5 w-1.5 rounded-full gradient-accent" />
            <span className="text-sm font-semibold tracking-wide text-accent">Financial Intelligence</span>
          </motion.div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            <span className="gradient-text">O2 Financial</span>
            <br />
            <span className="text-foreground">Intelligence Setup</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Transformamos o financeiro da empresa em uma máquina confiável de decisões.
          </p>
        </div>
      </AnimatedElement>

      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 lg:grid-cols-3">
        {heroCards.map((card, i) => {
          const Icon = icons[card.icon as keyof typeof icons];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card premium-shadow flex flex-col items-start gap-4 p-6 transition-shadow duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-semibold leading-snug text-foreground">{card.title}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
