import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Networking } from "../components/sections/Networking";
import { Certifications } from "../components/sections/Certifications";
import { AnalyticsDashboard } from "../components/sections/AnalyticsDashboard";
import { Contact } from "../components/sections/Contact";
import { AiAssistant } from "../components/sections/AiAssistant";
// import { StarsCanvas } from "../components/canvas/Stars";

export const Home = () => {
  return (
    <div className="relative z-0 bg-background overflow-x-hidden">
      <div className="relative z-0">
        <Hero />
        {/* <StarsCanvas /> */}
      </div>

      <About />
      <Experience />

      <div className="relative z-0">
         <Projects />
      </div>

      <Networking />
      <AnalyticsDashboard />
      <Certifications />

      <div className="relative z-0">
        <Contact />
      </div>

      <AiAssistant />
    </div>
  );
};
