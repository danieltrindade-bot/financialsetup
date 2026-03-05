import AnimatedElement from "../presentation/AnimatedElement";
import { radarData } from "@/data/setupData";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { FileText } from "lucide-react";

export default function SlideDiagnostic() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Diagnóstico</span>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Relatório de Diagnóstico</h2>
          <p className="mt-3 text-lg text-muted-foreground">Maturidade financeira da empresa</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="glass-card premium-shadow p-8">
            <ResponsiveContainer width="100%" height={340}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12, fontWeight: 500 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Maturidade"
                  dataKey="value"
                  stroke="hsl(var(--accent))"
                  fill="hsl(var(--accent))"
                  fillOpacity={0.15}
                  strokeWidth={2}
                  animationBegin={400}
                  animationDuration={1200}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="glass-card premium-shadow flex flex-col items-start gap-6 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <FileText className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Relatório de Diagnóstico Financeiro</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Documento executivo com análise completa da maturidade financeira, mapeamento de processos
                e recomendações de estruturação.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {radarData.map((item) => (
                <span key={item.subject} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  {item.subject}: {item.value}%
                </span>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
