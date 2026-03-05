import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { successMetrics } from "@/data/setupData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Trophy, ArrowRight } from "lucide-react";

export default function SlideSuccess() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      {/* Success metrics section */}
      <AnimatedElement>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-5 py-2">
            <Trophy className="h-4 w-4 text-success" />
            <span className="text-sm font-semibold tracking-wide text-success">Resultado</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-foreground">Indicadores de Sucesso</h2>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="glass-card premium-shadow p-8">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={successMetrics} cx="50%" cy="50%" innerRadius={65} outerRadius={115} paddingAngle={2} dataKey="value" animationBegin={400} animationDuration={1200}>
                  {successMetrics.map((entry, i) => (
                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px", fontSize: "13px", boxShadow: "0 4px 24px -4px hsl(var(--foreground) / 0.08)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="flex flex-col gap-3">
            {successMetrics.map((metric, i) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card premium-shadow flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full" style={{ background: metric.color }} />
                  <span className="text-sm font-semibold text-foreground">{metric.name}</span>
                </div>
                <span className="text-sm font-bold tabular-nums text-accent">{metric.value}%</span>
              </motion.div>
            ))}
          </div>
        </AnimatedElement>
      </div>

      {/* CTA Hero Section */}
      <AnimatedElement delay={0.6}>
        <div className="mt-4 flex flex-col items-center gap-6 text-center">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              De financeiro operacional
              <br />
              <span className="gradient-text">para inteligência financeira.</span>
            </h3>
            <p className="mt-3 text-base text-muted-foreground">O2 Financial Intelligence Setup</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-highlight premium-shadow flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-highlight-foreground transition-shadow hover:premium-shadow-lg"
          >
            Iniciar transformação financeira
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </AnimatedElement>
    </div>
  );
}
