import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { structureAreas } from "@/data/setupData";

export default function SlidePhase2() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Fase 2</span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Financial Structure Implementation</h2>
          <p className="mt-2 text-lg text-muted-foreground">Corrigir a base financeira</p>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.2} className="w-full">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-col gap-6">
            {structureAreas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{area.name}</span>
                  <span className="text-xs font-semibold tabular-nums text-accent">{area.progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${area.progress}%` }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-accent"
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
