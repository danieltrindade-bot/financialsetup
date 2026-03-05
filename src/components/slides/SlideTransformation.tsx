import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { transformationBefore, transformationAfter } from "@/data/setupData";
import { X, Check, ArrowRight } from "lucide-react";

export default function SlideTransformation() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground">Transformação</h2>
          <p className="mt-3 text-lg text-muted-foreground">De operacional para estratégico</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr,auto,1fr]">
        <AnimatedElement delay={0.2}>
          <div className="glass-card h-full border-critical/20 bg-critical/[0.03] p-10">
            <h3 className="mb-8 text-xl font-bold text-critical">Antes</h3>
            <div className="flex flex-col gap-5">
              {transformationBefore.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-critical/10">
                    <X className="h-4 w-4 text-critical" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Arrow separator */}
        <div className="hidden items-center lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex h-12 w-12 items-center justify-center rounded-full gradient-accent premium-shadow"
          >
            <ArrowRight className="h-5 w-5 text-accent-foreground" />
          </motion.div>
        </div>

        <AnimatedElement delay={0.3}>
          <div className="glass-card h-full border-success/20 bg-success/[0.03] p-10">
            <h3 className="mb-8 text-xl font-bold text-success">Depois</h3>
            <div className="flex flex-col gap-5">
              {transformationAfter.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-4 w-4 text-success" />
                  </div>
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
