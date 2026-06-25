import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MatrixRain from "./components/MatrixRain";
import CustomCursor from "./components/CustomCursor";
import LoadingTerminal from "./components/LoadingTerminal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scrolling to specific sections when Navbar links are triggered
  const handleNavClick = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    // Custom offset scroll to align nicely below header
    const yOffset = -80; // Navbar height
    const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(sectionId);
  };

  // Direct scroll calculations for ultra-smooth active state tracking
  useEffect(() => {
    if (loading) return;

    const sections = ["hero", "about", "journey", "tech", "projects", "contact"];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const topThreshold = vh * 0.3;
          const bottomThreshold = vh * 0.3;

          for (let i = 0; i < sections.length; i++) {
            const element = document.getElementById(sections[i]);
            if (element) {
              const rect = element.getBoundingClientRect();

              // Top edge < 30% from top of viewport AND bottom edge > 30% from top of viewport
              if (rect.top <= topThreshold && rect.bottom > bottomThreshold) {
                setActiveSection(sections[i]);
                break; // Exit loop once active section is found
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call once initially to set the right section on load if scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-black text-matrix font-mono selection:bg-matrix/35 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingTerminal key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="chassis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* 1. Global Custom Glowing Crosshair Cursor */}
            <CustomCursor />

            {/* 2. Seamless HTML5 Canvas Matrix Digital Cascade Rain */}
            <MatrixRain opacity={0.16} />

            {/* 3. Global scanline grid overlays (pure aesthetic cyberpunk look) */}
            <div className="fixed inset-0 pointer-events-none z-50 terminal-overlay opacity-[0.06]" />

            {/* 4. Sticky Header and Translucent Navigation Parallax Track */}
            <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

            {/* 5. Fluid absolute layered section chassis */}
            <main className="flex-1 relative z-10 pt-20">

              {/* SECTION 1: HERO CONTAINER */}
              <div id="hero-panel" className="relative z-10 shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
                <Hero onExploreClick={() => handleNavClick("about")} />
              </div>

              {/* SECTION 2: ABOUT US PANEL */}
              <div
                id="about-panel"
                className="relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.98),0_15px_40px_rgba(0,0,0,0.98)] border-t border-matrix/20 bg-[#000000]"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-matrix shadow-[0_0_12px_#00ff66]" />
                <AboutSection />
              </div>

              {/* SECTION 3: OUR JOURNEY PANEL */}
              <div
                id="journey-panel"
                className="relative z-30 shadow-[0_-15px_40px_rgba(0,0,0,0.98),0_15px_40px_rgba(0,0,0,0.98)] border-t border-matrix/20 bg-[#000000]"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-matrix-neon shadow-[0_0_12px_#39ff14]" />
                <JourneySection />
              </div>

              {/* SECTION 4: TECH STACK PANEL */}
              <div
                id="tech-panel"
                className="relative z-40 shadow-[0_-15px_40px_rgba(0,0,0,0.98),0_15px_40px_rgba(0,0,0,0.98)] border-t border-matrix/20 bg-[#000000]"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-matrix shadow-[0_0_12px_#00ff66]" />
                <TechStackSection />
              </div>

              {/* SECTION 5: PROJECTS CATALOG PANEL */}
              <div
                id="projects-panel"
                className="relative z-50 shadow-[0_-15px_40px_rgba(0,0,0,0.98),0_15px_40px_rgba(0,0,0,0.98)] border-t border-matrix/20 bg-[#000000]"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-matrix-neon shadow-[0_0_12px_#39ff14]" />
                <ProjectsSection />
              </div>

              {/* SECTION 6: CONTACT INTERACTIVE ENVELOPE PANEL */}
              <div
                id="contact-panel"
                className="relative z-[60] shadow-[0_-15px_40px_rgba(0,0,0,0.98)] border-t border-matrix/20 bg-[#000000]"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-matrix shadow-[0_0_12px_#00ff66]" />
                <ContactSection />
              </div>

            </main>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
