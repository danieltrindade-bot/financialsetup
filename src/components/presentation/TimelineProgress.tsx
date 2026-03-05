import { motion } from "framer-motion";
import { timelinePhases } from "@/data/setupData";

interface TimelineProgressProps {
  currentSlide: number;
}

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
    <div className="flex w-full items-center gap-2 px-8 py-4">
      {timelinePhases.map((phase, i) => {
        const isActive = i <= activePhase;
        const isCurrent = i === activePhase;
        return (
          <div key={phase.phase} className="flex flex-1 flex-col items-center gap-1">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <span
              className={`text-xs font-medium transition-colors ${
                isCurrent ? "text-accent" : isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {phase.phase}
            </span>
            <span className="text-[10px] text-muted-foreground">{phase.weeks}</span>
          </div>
        );
      })}
    </div>
  );
}
