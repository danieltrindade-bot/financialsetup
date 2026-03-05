import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { diagnosticAreas, diagnosticDeliverables } from "@/data/setupData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CheckCircle } from "lucide-react";

export default function SlidePhase1() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Fase 1</span>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Financial Dataflow Mapping</h2>
          <p className="mt-3 text-lg text-muted-foreground">Entender como o dinheiro circula na empresa</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="glass-card premium-shadow p-8">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={diagnosticAreas}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  animationBegin={400}
                  animationDuration={1200}
                >
                  {diagnosticAreas.map((entry, i) => (
                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    fontSize: "13px",
                    boxShadow: "0 4px 24px -4px hsl(var(--foreground) / 0.08)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {diagnosticAreas.map((area) => (
                <div key={area.name} className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ background: area.color }} />
                  <span className="text-xs text-muted-foreground">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="glass-card premium-shadow p-8">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Entregas</h3>
            <div className="flex flex-col gap-3">
              {diagnosticDeliverables.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-xl bg-muted/40 p-4 transition-colors hover:bg-muted/60"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-success" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
