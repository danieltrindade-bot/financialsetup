import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { ritualSemanal, ritualMensal } from "@/data/setupData";
import { Calendar, CalendarDays, CheckCircle } from "lucide-react";

export default function SlideGovernance() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground">Governança Financeira</h2>
          <p className="mt-3 text-lg text-muted-foreground">Rituais de gestão financeira</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="glass-card premium-shadow p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/8">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ritual Semanal</h3>
            </div>
            <div className="flex flex-col gap-3">
              {ritualSemanal.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-xl bg-muted/40 p-4 transition-colors hover:bg-muted/60"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="glass-card premium-shadow p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/8">
                <CalendarDays className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ritual Mensal</h3>
            </div>
            <div className="flex flex-col gap-3">
              {ritualMensal.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 rounded-xl bg-muted/40 p-4 transition-colors hover:bg-muted/60"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
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
