import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { customerDelightMoments } from "@/data/setupData";
import { Sparkles } from "lucide-react";

export default function SlideDelight() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Customer Delight</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">Momentos-chave</h2>
        </div>
      </AnimatedElement>

      <div className="flex w-full max-w-3xl flex-col gap-0">
        {customerDelightMoments.map((moment, i) => (
          <motion.div
            key={moment.number}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            className="relative flex items-start gap-6 py-8"
          >
            {i < customerDelightMoments.length - 1 && (
              <div className="absolute left-5 top-[4.5rem] h-full w-px bg-border" />
            )}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, type: "spring" }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground"
            >
              {moment.number}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{moment.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{moment.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
