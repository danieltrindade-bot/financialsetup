import AnimatedElement from "../presentation/AnimatedElement";
import { diagnosticAreas, diagnosticDeliverables } from "@/data/setupData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SlidePhase1() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Fase 1</span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Financial Dataflow Mapping</h2>
          <p className="mt-2 text-lg text-muted-foreground">Entender como o dinheiro circula na empresa</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Áreas de Diagnóstico
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={diagnosticAreas}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {diagnosticAreas.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex flex-wrap gap-3">
              {diagnosticAreas.map((a) => (
                <div key={a.name} className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: a.color }} />
                  <span className="text-xs text-muted-foreground">{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Entregas
            </h3>
            <div className="flex flex-col gap-4">
              {diagnosticDeliverables.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-foreground">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
