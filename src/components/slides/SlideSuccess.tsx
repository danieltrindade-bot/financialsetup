import AnimatedElement from "../presentation/AnimatedElement";
import { successMetrics } from "@/data/setupData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function SlideSuccess() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5">
            <Trophy className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">Resultado</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">Indicadores de Sucesso</h2>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={successMetrics} cx="50%" cy="50%" innerRadius={60} outerRadius={115} paddingAngle={2} dataKey="value">
                  {successMetrics.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="flex flex-col gap-4">
            {successMetrics.map((metric, i) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full" style={{ background: metric.color }} />
                  <span className="text-sm font-medium text-foreground">{metric.name}</span>
                </div>
                <span className="text-sm font-bold tabular-nums text-accent">{metric.value}%</span>
              </motion.div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
