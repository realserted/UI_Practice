import { AppleCardsCarouselDemo } from "@/components/AppleCarousel";
import SignupFormDemo from "@/components/example/signup-form-demo";
import { SidebarDemo } from "@/components/SideBar";
import { SparklesPreview } from "@/components/Sparkles";
import { StickyScrollRevealDemo } from "@/components/StickyScrollReveal";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffect";
import { TabsDemo } from "@/components/Tabs";
import { TextHoverEffectDemo } from "@/components/TextHoverEffect";
import { TextRevealCardPreview } from "@/components/TextReveal";
import { TimelineDemo } from "@/components/Timeline";
import { TracingBeamDemo } from "@/components/TracingBeams";
import { TypewriterEffectSmoothDemo } from "@/components/TypeWriterEffect";
import { VortexDemoSecond } from "@/components/Vortex";
// import { WavyBackgroundDemo } from "@/components/WavyBackground";
import { WobbleCardDemo } from "@/components/WobbleCard";

const Alforque = () => {
  return (
    <div className="flex flex-col pt-28 items-center justify-center">
      <TextHoverEffectDemo />
      <SparklesPreview />
      <TabsDemo />
      {/* <WavyBackgroundDemo /> */}
      <SidebarDemo />
      <WobbleCardDemo />
      <StickyScrollRevealDemo />
      <TextRevealCardPreview />
      <VortexDemoSecond />
      <SVGMaskEffectDemo />
      <TypewriterEffectSmoothDemo />
      <TracingBeamDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <SignupFormDemo />
    </div>
  );
};

export default Alforque;
