import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TextGenerateEffectDemo } from "./TextGenerateEffect";
import { Spotlight } from "./ui/spotlight";

export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center">
      <Spotlight
        className="-top-30 left-0 md:left-30 md:-top-30"
        fill="white"
      />
      <TextHoverEffect text="ALFORQUE" />
      <TextGenerateEffectDemo />
    </div>
  );
}
