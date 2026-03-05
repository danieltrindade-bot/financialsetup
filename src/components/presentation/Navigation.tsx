import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev }: NavigationProps) {
  return (
    <div className="flex items-center justify-center px-8 py-4">
      <div className="glass-card premium-shadow flex items-center gap-4 px-2 py-1.5">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="gap-1 text-muted-foreground transition-all hover:text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>
        <div className="flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-6 gradient-accent"
                  : i < currentSlide
                  ? "w-1.5 bg-accent/40"
                  : "w-1.5 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="gap-1 text-muted-foreground transition-all hover:text-foreground disabled:opacity-30"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
