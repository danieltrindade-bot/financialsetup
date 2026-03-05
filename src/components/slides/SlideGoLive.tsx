import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { kpis } from "@/data/setupData";
import { Activity, TrendingUp, RefreshCw, Percent } from "lucide-react";

const kpiIcons = [Activity, TrendingUp, RefreshCw, Percent];

export default function SlideGoLive() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-success">Go Live</span>
          <h2 className="mt-2 text-4xl font-bold text-foreground">Go Live Financeiro</h2>
          <p className="mt-2 text-lg text-muted-foreground">Dashboards operacionais ativos</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((kpi, i) => {
          const Icon = kpiIcons[i];
          return (
            <motion.div
              key={kpi.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-success/10">
                <Icon className="h-7 w-7 text-success" />
              </div>
              <span className="text-sm font-semibold text-foreground">{kpi.name}</span>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span className="text-xs font-medium text-success">Ativo</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
