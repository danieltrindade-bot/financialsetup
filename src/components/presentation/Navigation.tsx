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
    <div className="flex items-center justify-between px-8 py-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="gap-1 text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </Button>
      <span className="text-xs tabular-nums text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="gap-1 text-muted-foreground hover:text-foreground"
      >
        Próximo
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
