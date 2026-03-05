import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  slideKey: number;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.97,
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
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full w-full items-center justify-center px-8 py-6 lg:px-20 lg:py-12"
      >
        <div className="flex w-full max-w-[1200px] items-center justify-center">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
