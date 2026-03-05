import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { executiveCards } from "@/data/setupData";

const accentColors = [
  "border-l-accent",
  "border-l-critical",
  "border-l-success",
  "border-l-accent",
  "border-l-warning",
];

const bgColors = [
  "bg-accent/5",
  "bg-critical/5",
  "bg-success/5",
  "bg-accent/5",
  "bg-warning/5",
];

export default function SlideExecutive() {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground">Documento Executivo</h2>
          <p className="mt-3 text-lg text-muted-foreground">Visão consolidada do setup financeiro</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {executiveCards.map((card, i) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`glass-card premium-shadow border-l-4 ${accentColors[i]} flex flex-col gap-4 p-7 ${i >= 3 ? "lg:col-span-1" : ""}`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgColors[i]} text-sm font-bold text-foreground`}>
              {card.number}
            </div>
            <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
