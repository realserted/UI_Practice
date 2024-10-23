import Meteors from "@/components/ui/meteors";
import { ShinyButtonDemo } from "@/components/ShinyButton";
import { BlurInDemo } from "./BlurInTexts";
import { DockDemo } from "./Docks";
export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10" >
      <BlurInDemo />
      </span>
      <div className="flex flex-col absolute bottom-32 "><DockDemo /></div>
      <div className="flex flex-col absolute bottom-12 "><ShinyButtonDemo /></div>
    </div>
    
  );
}
