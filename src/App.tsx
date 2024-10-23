import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Lester from "@/pages/Lester";
import Diane from "@/pages/Diane";
import Alforque from "@/pages/Alforque";
import NotFoundPage from "@/pages/NotFoundPage";
import { FloatingNavDemo } from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col">
          <FloatingNavDemo />
        </div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/lester" replace />} />
          <Route path="/lester" element={<Lester />} />
          <Route path="/diane" element={<Diane />} />
          <Route path="/alforque" element={<Alforque />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
