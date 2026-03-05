import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  slideKey: number;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function SlideContainer({ children, slideKey, direction }: SlideContainerProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full w-full items-center justify-center p-8 lg:p-16"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
