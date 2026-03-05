import { useState, useEffect, useCallback } from "react";

const TOTAL_SLIDES = 13;

export function usePresentationNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < TOTAL_SLIDES - 1) {
        setDirection(1);
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        setDirection(-1);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentSlide((prev) => {
      setDirection(index > prev ? 1 : -1);
      return Math.max(0, Math.min(TOTAL_SLIDES - 1, index));
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return { currentSlide, direction, goNext, goPrev, goTo, totalSlides: TOTAL_SLIDES };
}
