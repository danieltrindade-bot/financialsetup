import { usePresentationNavigation } from "@/hooks/usePresentationNavigation";
import SlideContainer from "@/components/presentation/SlideContainer";
import TimelineProgress from "@/components/presentation/TimelineProgress";
import Navigation from "@/components/presentation/Navigation";
import SlideHero from "@/components/slides/SlideHero";
import SlideTimeline from "@/components/slides/SlideTimeline";
import SlidePhase1 from "@/components/slides/SlidePhase1";
import SlideDiagnostic from "@/components/slides/SlideDiagnostic";
import SlidePhase2 from "@/components/slides/SlidePhase2";
import SlideStructurePlan from "@/components/slides/SlideStructurePlan";
import SlidePhase3 from "@/components/slides/SlidePhase3";
import SlideGoLive from "@/components/slides/SlideGoLive";
import SlideExecutive from "@/components/slides/SlideExecutive";
import SlideTransformation from "@/components/slides/SlideTransformation";
import SlideGovernance from "@/components/slides/SlideGovernance";
import SlideDelight from "@/components/slides/SlideDelight";
import SlideSuccess from "@/components/slides/SlideSuccess";

const slides = [
  SlideHero,
  SlideTimeline,
  SlidePhase1,
  SlideDiagnostic,
  SlidePhase2,
  SlideStructurePlan,
  SlidePhase3,
  SlideGoLive,
  SlideExecutive,
  SlideTransformation,
  SlideGovernance,
  SlideDelight,
  SlideSuccess,
];

const Index = () => {
  const { currentSlide, direction, goNext, goPrev, totalSlides } = usePresentationNavigation();
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.02] via-transparent to-accent/[0.01]" />
      
      <TimelineProgress currentSlide={currentSlide} />
      <div className="relative flex flex-1 overflow-hidden">
        <SlideContainer slideKey={currentSlide} direction={direction}>
          <CurrentSlideComponent />
        </SlideContainer>
      </div>
      <Navigation currentSlide={currentSlide} totalSlides={totalSlides} onNext={goNext} onPrev={goPrev} />
    </div>
  );
};

export default Index;
