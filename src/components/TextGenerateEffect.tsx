import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE ALFORQUE`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect className="mb-10" words={words} />;
}
