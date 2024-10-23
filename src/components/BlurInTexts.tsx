import BlurIn from "@/components/ui/blur-in";

export function BlurInDemo() {
  return (
    <BlurIn
      word="Lester's Page"
      className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    />
  );
}