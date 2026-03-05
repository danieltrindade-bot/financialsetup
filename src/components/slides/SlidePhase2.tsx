import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { structureAreas } from "@/data/setupData";

export default function SlidePhase2() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Fase 2</span>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Financial Structure Implementation</h2>
          <p className="mt-3 text-lg text-muted-foreground">Corrigir a base financeira</p>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.2} className="w-full max-w-3xl">
        <div className="glass-card premium-shadow p-10">
          <div className="flex flex-col gap-7">
            {structureAreas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">{area.name}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-sm font-bold tabular-nums text-accent"
                  >
                    {area.progress}%
                  </motion.span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${area.progress}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full gradient-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
