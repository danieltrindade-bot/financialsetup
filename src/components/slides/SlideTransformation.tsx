import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { transformationBefore, transformationAfter } from "@/data/setupData";
import { X, Check } from "lucide-react";

export default function SlideTransformation() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <h2 className="text-4xl font-bold text-foreground">Transformação</h2>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatedElement delay={0.2}>
          <div className="rounded-2xl border border-critical/20 bg-critical/5 p-8">
            <h3 className="mb-6 text-lg font-bold text-critical">Antes</h3>
            <div className="flex flex-col gap-4">
              {transformationBefore.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-critical/10">
                    <X className="h-3.5 w-3.5 text-critical" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.3}>
          <div className="rounded-2xl border border-success/20 bg-success/5 p-8">
            <h3 className="mb-6 text-lg font-bold text-success">Depois</h3>
            <div className="flex flex-col gap-4">
              {transformationAfter.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3.5 w-3.5 text-success" />
                  </div>
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
