import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { integrationFlow } from "@/data/setupData";
import { ArrowRight, CheckCircle } from "lucide-react";

const deliverables = ["Integração ERP", "Validação de dados", "Dashboards", "Treinamento", "Governança financeira"];

export default function SlidePhase3() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Fase 3</span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Integration & Financial Intelligence</h2>
        </div>
      </AnimatedElement>

      <AnimatedElement delay={0.2} className="w-full">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {integrationFlow.map((item, i) => (
              <div key={item.step} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/50 px-6 py-4"
                >
                  <span className="text-lg font-bold text-foreground">{item.step}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </motion.div>
                {i < integrationFlow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Entregas</h3>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-2 rounded-lg bg-muted/50 p-3"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-success" />
                <span className="text-sm text-foreground">{d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
