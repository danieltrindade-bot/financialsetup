import { motion } from "framer-motion";
import { timelinePhases } from "@/data/setupData";
import { Search, Wrench, Zap, Check } from "lucide-react";

interface TimelineProgressProps {
  currentSlide: number;
}

const phaseIcons = [Search, Wrench, Zap];

function getActivePhase(slide: number): number {
  if (slide <= 1) return -1;
  for (let i = 0; i < timelinePhases.length; i++) {
    if (timelinePhases[i].slides.includes(slide + 1)) return i;
  }
  return timelinePhases.length - 1;
}

export default function TimelineProgress({ currentSlide }: TimelineProgressProps) {
  const activePhase = getActivePhase(currentSlide);

  return (
    <div className="flex w-full items-center gap-3 px-10 py-5">
      {timelinePhases.map((phase, i) => {
        const isCompleted = i < activePhase;
        const isCurrent = i === activePhase;
        const isActive = i <= activePhase;
        const Icon = isCompleted ? Check : phaseIcons[i];

        return (
          <div key={phase.phase} className="flex flex-1 items-center gap-3">
            {/* Phase indicator */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500 ${
                  isCurrent
                    ? "gradient-accent text-accent-foreground pulse-glow"
                    : isCompleted
                    ? "bg-highlight text-highlight-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                animate={{ scale: isCurrent ? 1.1 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon className="h-3.5 w-3.5" />
              </motion.div>
            </div>

            {/* Phase info + bar */}
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <span
                  className={`text-xs font-semibold tracking-wide transition-colors duration-500 ${
                    isCurrent ? "text-accent" : isActive ? "text-foreground" : "text-muted-foreground/60"
                  }`}
                >
                  {phase.phase}
                </span>
                <span className={`text-[10px] tabular-nums transition-colors duration-500 ${
                  isActive ? "text-muted-foreground" : "text-muted-foreground/40"
                }`}>
                  {phase.weeks}
                </span>
              </div>
              <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full gradient-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Connector line between phases */}
            {i < timelinePhases.length - 1 && (
              <div className={`hidden h-px w-6 lg:block transition-colors duration-500 ${
                isCompleted ? "bg-accent/30" : "bg-border"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
