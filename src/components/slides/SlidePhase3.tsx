import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { integrationFlow } from "@/data/setupData";
import { ArrowRight, CheckCircle } from "lucide-react";

const deliverables = ["Integração ERP", "Validação de dados", "Dashboards", "Treinamento", "Governança financeira"];

export default function SlidePhase3() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Fase 3</span>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Integration & Financial Intelligence</h2>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.2} className="w-full">
        <div className="glass-card premium-shadow p-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {integrationFlow.map((item, i) => (
              <div key={item.step} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-muted/30 px-8 py-5 transition-shadow hover:premium-shadow"
                >
                  <span className="text-lg font-bold text-foreground">{item.step}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </motion.div>
                {i < integrationFlow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                  >
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.5} className="w-full">
        <div className="glass-card premium-shadow p-8">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Entregas</h3>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-xl bg-muted/40 p-4 transition-colors hover:bg-muted/60"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-success" />
                <span className="text-sm font-medium text-foreground">{d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
