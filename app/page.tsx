import { AIModules } from "./Components/AIModules";
import { EcoSystem } from "./Components/EcoSystem";
import { Features } from "./Components/Features";
import { Hero } from "./Components/Hero";
import { IntroSection } from "./Components/IntroSection";



export default function Home() {
  return (
    
        <div>
          <Hero />
          <IntroSection />
          <Features />
          <AIModules />
          <EcoSystem />
        </div>
  );
}
