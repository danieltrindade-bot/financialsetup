import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { timelinePhases } from "@/data/setupData";
import { Search, Wrench, Zap } from "lucide-react";

const phaseIcons = [Search, Wrench, Zap];

export default function SlideTimeline() {
  return (
    <div className="flex w-full flex-col items-center gap-14">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground">Timeline do Setup</h2>
          <p className="mt-3 text-lg text-muted-foreground">10 semanas de transformação financeira</p>
        </div>
      </AnimatedElement>

      <div className="flex w-full max-w-3xl flex-col gap-0">
        {timelinePhases.map((phase, i) => {
          const Icon = phaseIcons[i];
          return (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-start gap-8 py-10"
            >
              {/* Gradient vertical line */}
              {i < timelinePhases.length - 1 && (
                <div className="absolute left-6 top-[5rem] h-full w-px bg-gradient-to-b from-highlight/40 to-border" />
              )}

              {/* Circle with icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-accent text-accent-foreground premium-shadow"
              >
                <Icon className="h-5 w-5" />
              </motion.div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                  <span className="rounded-full bg-accent/8 px-3 py-1 text-xs font-semibold text-accent">
                    {phase.weeks}
                  </span>
                </div>
                <p className="text-base text-muted-foreground">{phase.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
