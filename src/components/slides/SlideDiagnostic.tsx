import AnimatedElement from "../presentation/AnimatedElement";
import { radarData } from "@/data/setupData";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { FileText } from "lucide-react";

export default function SlideDiagnostic() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">Fase 1 — Entrega</span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Relatório de Diagnóstico</h2>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Maturidade Financeira
            </h3>
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Atual"
                  dataKey="value"
                  stroke="hsl(239, 84%, 67%)"
                  fill="hsl(239, 84%, 67%)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <FileText className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Relatório de Diagnóstico Financeiro</h3>
            <p className="mt-3 max-w-sm text-center text-sm text-muted-foreground">
              Documento executivo com mapeamento completo da maturidade financeira, riscos identificados e recomendações prioritárias.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
