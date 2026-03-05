import { motion } from "framer-motion";
import AnimatedElement from "../presentation/AnimatedElement";
import { executiveCards } from "@/data/setupData";

const colors = [
  "bg-accent/10 text-accent",
  "bg-critical/10 text-critical",
  "bg-success/10 text-success",
  "bg-accent/10 text-accent",
  "bg-warning/10 text-warning",
];

export default function SlideExecutive() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center gap-10">
      <AnimatedElement>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground">Documento Executivo</h2>
          <p className="mt-2 text-lg text-muted-foreground">Visão consolidada do setup financeiro</p>
        </div>
      </AnimatedElement>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {executiveCards.map((card, i) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 ${i >= 3 ? "lg:col-span-1" : ""}`}
          >
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${colors[i]}`}>
              {card.number}
            </div>
            <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
