import { DotPatternDemo } from "./components/DotPattern";
import { MarqueeDemo } from "./components/MarqueeHorizontal";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle";


export default function Home() {
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col">
      <div className="flex self-end"><ModeToggle/></div>
      <DotPatternDemo/>
      <MarqueeDemo/>
      </div>
      </ThemeProvider>
  );
}
