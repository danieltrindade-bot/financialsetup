import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { ritualSemanal, ritualMensal } from "@/data/setupData";
import { Calendar, CalendarDays } from "lucide-react";

export default function SlideGovernance() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <h2 className="text-4xl font-bold text-foreground">Governança Financeira</h2>
        <p className="mt-2 text-center text-lg text-muted-foreground">Rituais de gestão financeira</p>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ritual Semanal</h3>
            </div>
            <div className="flex flex-col gap-3">
              {ritualSemanal.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                <CalendarDays className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ritual Mensal</h3>
            </div>
            <div className="flex flex-col gap-3">
              {ritualMensal.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
