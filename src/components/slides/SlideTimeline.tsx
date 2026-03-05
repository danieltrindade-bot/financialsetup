import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { timelinePhases } from "@/data/setupData";

export default function SlideTimeline() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-12">
      <AnimatedElement>
        <h2 className="text-4xl font-bold text-foreground">Timeline do Setup</h2>
        <p className="mt-2 text-lg text-muted-foreground">10 semanas de transformação financeira</p>
      </AnimatedElement>

      <div className="flex w-full flex-col gap-0">
        {timelinePhases.map((phase, i) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.2 }}
            className="relative flex items-start gap-6 py-8"
          >
            {/* Vertical line */}
            {i < timelinePhases.length - 1 && (
              <div className="absolute left-5 top-16 h-full w-px bg-border" />
            )}

            {/* Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold"
            >
              {i + 1}
            </motion.div>

            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                <span className="rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">
                  {phase.weeks}
                </span>
              </div>
              <p className="text-base text-muted-foreground">{phase.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
