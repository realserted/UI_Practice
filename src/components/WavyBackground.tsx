import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground
      waveOpacity={0.3}
      colors={["#00FFFF", "#50C878", "#FF0080", "#FFD700", "#FFA500"]}
      className="max-w-4x mx-auto pb-40"
    ></WavyBackground>
  );
}
