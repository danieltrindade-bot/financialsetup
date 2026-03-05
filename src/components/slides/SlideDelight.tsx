import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { customerDelightMoments } from "@/data/setupData";
import { Sparkles } from "lucide-react";

export default function SlideDelight() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold tracking-wide text-accent">Customer Delight</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-foreground">Momentos-chave</h2>
        </div>
      </AnimatedElement>

      <div className="flex w-full max-w-3xl flex-col gap-0">
        {customerDelightMoments.map((moment, i) => (
          <motion.div
            key={moment.number}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-start gap-8 py-10"
          >
            {/* Gradient connecting line */}
            {i < customerDelightMoments.length - 1 && (
              <div className="absolute left-6 top-[5.5rem] h-full w-px bg-gradient-to-b from-accent/40 to-accent/5" />
            )}
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 200 }}
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-accent text-base font-bold text-accent-foreground premium-shadow"
            >
              {moment.number}
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl pulse-glow" />
            </motion.div>
            
            <div className="pt-1">
              <h3 className="text-xl font-bold text-foreground">{moment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{moment.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
