import AnimatedElement from "../presentation/AnimatedElement";
import { structureTable, priorityData } from "@/data/setupData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CheckCircle, Clock, Circle } from "lucide-react";

const statusIcons: Record<string, typeof CheckCircle> = {
  Implementado: CheckCircle,
  "Em implementação": Clock,
};

export default function SlideStructurePlan() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Fase 2 — Entrega</span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Plano de Estruturação</h2>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Frente</th>
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Responsável</th>
                </tr>
              </thead>
              <tbody>
                {structureTable.map((row) => {
                  const Icon = statusIcons[row.status] || Circle;
                  const isImplemented = row.status === "Implementado";
                  return (
                    <tr key={row.frente} className="border-b border-border/50 last:border-0">
                      <td className="py-3.5 text-sm font-medium text-foreground">{row.frente}</td>
                      <td className="py-3.5">
                        <div className="flex items-center gap-1.5">
                          <Icon className={`h-3.5 w-3.5 ${isImplemented ? "text-success" : "text-warning"}`} />
                          <span className={`text-xs font-medium ${isImplemented ? "text-success" : "text-warning"}`}>
                            {row.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 text-sm text-muted-foreground">{row.responsavel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Prioridade</h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={priorityData} cx="50%" cy="50%" innerRadius={50} outerRadius={95} paddingAngle={3} dataKey="value">
                  {priorityData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center gap-4">
              {priorityData.map((p) => (
                <div key={p.name} className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                  <span className="text-xs text-muted-foreground">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
