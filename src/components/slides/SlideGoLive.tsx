import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { kpis } from "@/data/setupData";
import { Activity, TrendingUp, RefreshCw, Percent } from "lucide-react";

const kpiIcons = [Activity, TrendingUp, RefreshCw, Percent];

export default function SlideGoLive() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-success">Go Live</span>
          <h2 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Go Live Financeiro</h2>
          <p className="mt-3 text-lg text-muted-foreground">Dashboards operacionais ativos</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
        {kpis.map((kpi, i) => {
          const Icon = kpiIcons[i];
          return (
            <motion.div
              key={kpi.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card premium-shadow flex flex-col items-center gap-4 p-7 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/8">
                <Icon className="h-6 w-6 text-success" />
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 200 }}
                className="text-2xl font-bold tabular-nums text-foreground"
              >
                {kpi.value}
              </motion.span>
              <div>
                <span className="text-sm font-semibold text-foreground">{kpi.name}</span>
                <p className="mt-0.5 text-xs text-muted-foreground">{kpi.subtitle}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-highlight pulse-glow" />
                <span className="text-xs font-semibold text-highlight">Ativo</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
