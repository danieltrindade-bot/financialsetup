import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { structureTable, priorityData } from "@/data/setupData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CheckCircle, Clock } from "lucide-react";

export default function SlideStructurePlan() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Fase 2 — Entrega</span>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Plano de Estruturação</h2>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="flex flex-col gap-3">
            {structureTable.map((row, i) => {
              const isImplemented = row.status === "Implementado";
              const Icon = isImplemented ? CheckCircle : Clock;
              return (
                <motion.div
                  key={row.frente}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="glass-card premium-shadow flex items-center justify-between p-5"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-4.5 w-4.5 ${isImplemented ? "text-success" : "text-warning"}`} />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{row.frente}</span>
                      <p className="text-xs text-muted-foreground">Responsável: {row.responsavel}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    isImplemented ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    {row.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="glass-card premium-shadow p-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Prioridade</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={priorityData} cx="50%" cy="50%" innerRadius={55} outerRadius={100} paddingAngle={3} dataKey="value" animationBegin={400} animationDuration={1200}>
                  {priorityData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px", fontSize: "13px", boxShadow: "0 4px 24px -4px hsl(var(--foreground) / 0.08)" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center gap-5">
              {priorityData.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                  <span className="text-xs font-medium text-muted-foreground">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
