import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Terminal, Shield, Zap } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const { scrollY } = useScroll();
  const [glitchText, setGlitchText] = useState("SWIFTERS");
  const [menuOpen, setMenuOpen] = useState(false);

  // Parallax translation for the massive background text
  // As the user scrolls from 0 to 1500px, shift the text horizontally from 50% to -120%
  const xTranslation = useTransform(scrollY, [0, 2000], ["20%", "-60%"]);
  const textOpacity = useTransform(scrollY, [0, 400], [0.15, 0.45]);

  // Fun random cyber glyph glitch effect on hover of the logo
  const triggerLogoGlitch = () => {
    let iterations = 0;
    const chars = "$@/._-[]&%#10+X=";
    const original = "SWIFTERS";

    const interval = setInterval(() => {
      setGlitchText((current) =>
        original
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return original[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iterations += 1;
      if (iterations > original.length) {
        clearInterval(interval);
        setGlitchText(original);
      }
    }, 45);
  };

  const navItems = [
    { label: "About Us", id: "about" },
    { label: "Our Journey", id: "journey" },
    { label: "Our Tech Stack", id: "tech" },
    { label: "Projects", id: "projects" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <header
      id="matrix-header-main"
      className="sticky top-0 w-full z-40 bg-black/60 backdrop-blur-md border-b border-matrix/20 overflow-hidden"
    >
      {/* 1. Translucent Parallax Background Text (Glides behind elements) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center select-none overflow-hidden h-full">
        <motion.div
          style={{ x: xTranslation, opacity: textOpacity }}
          className="whitespace-nowrap text-matrix font-sans text-5xl sm:text-7xl font-extrabold tracking-widest uppercase opacity-20 blur-[1px]"
        >
          Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate
        </motion.div>
      </div>

      {/* Grid scanning line inside header */}
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-matrix shadow-[0_0_8px_#00ff66]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo Brandmark */}
          <div className="flex-shrink-0 flex items-center">
            <motion.button
              onClick={() => onNavClick("hero")}
              onMouseEnter={triggerLogoGlitch}
              className="group flex items-center gap-3 bg-transparent text-left border-none focus:outline-none"
            >
              <div className="relative w-10 h-10 border border-matrix/40 bg-black flex items-center justify-center group-hover:border-matrix-neon group-hover:box-glow-matrix transition-all duration-300">
                <svg
                  viewBox="0 0 40 40"
                  className="w-7 h-7 text-matrix group-hover:text-matrix-neon group-hover:drop-shadow-[0_0_6px_#39ff14] transition-all duration-300"
                >
                  {/* 1. Shackle Loop at Top */}
                  <circle cx="20" cy="7" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="20" cy="7" r="1.0" fill="currentColor" />
                  <rect x="18" y="10" width="4" height="0.8" rx="0.2" fill="currentColor" />

                  {/* 2. Horizontal Stock (Crossbar) */}
                  <rect x="13" y="11" width="14" height="1.5" rx="0.3" fill="currentColor" />

                  {/* 3. Main Center Shank (Vertical Column) */}
                  <rect x="19.2" y="12.5" width="1.6" height="17" rx="0.3" fill="currentColor" opacity="0.85" />

                  {/* 4. Elegant S-Curve wrapping the Shank as shown in reference */}
                  <path
                    d="M 23,15 C 23,12.5 17,12.5 17,17 C 17,21 23,20 23,24 C 23,27.5 17,27.5 17,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* 5. Custom Droplet Accents matching the reference */}
                  {/* Upper Right Droplet */}
                  <path
                    d="M 23.2,13.5 C 24.2,13.5 24.5,14.5 24.5,15.5 C 24.5,16.5 23.7,17 23.2,17 C 22.7,17 22.5,16.5 22.5,15.5 C 22.5,14.5 23.2,13.5 23.2,13.5 Z"
                    fill="currentColor"
                  />
                  {/* Lower Left Droplet */}
                  <path
                    d="M 16.8,24.5 C 17.3,24.5 17.5,25 17.5,26 C 17.5,27 16.7,27.5 16.2,27.5 C 15.7,27.5 15.5,27 15.5,26 C 15.5,25 16.2,24.5 16.8,24.5 Z"
                    fill="currentColor"
                  />

                  {/* 6. Crown & Flukes (Anchor Base Crescent) matching the reference */}
                  <path
                    d="M 10,21 C 10,21, 11,24.5, 12.5,25.5 C 14.5,26.5, 15,25, 15,25 C 15,25, 16,29.5, 20,29.5 C 24,29.5, 25,25, 25,25 C 25,25, 25.5,26.5, 27.5,25.5 C 29,24.5, 30,21, 30,21 C 30,21, 28.5,27.5, 20,30.5 C 11.5,27.5, 10,21, 10,21 Z"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-matrix group-hover:border-matrix-neon" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-matrix group-hover:border-matrix-neon" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-black tracking-wider text-white group-hover:text-matrix-neon group-hover:glow-matrix transition-colors">
                  {glitchText}
                </span>
                <span className="text-[9px] text-matrix/50 font-mono tracking-widest uppercase leading-none mt-0.5">
                  SYS_ACTIVE // NEURAL_GRID
                </span>
              </div>
            </motion.button>
          </div>

          {/* Desktop Glass-Matrix Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300 backdrop-blur-lg border ${
                    isActive
                      ? "bg-matrix/20 border-matrix text-matrix-neon glow-matrix"
                      : "bg-black/40 border-matrix/20 text-matrix/70 hover:border-matrix/60 hover:text-matrix hover:bg-matrix/10"
                  }`}
                >
                  {/* Subtle terminal-corner aesthetics on hover */}
                  {isActive && (
                    <>
                      <span className="absolute -top-[1.5px] -left-[1.5px] w-1.5 h-1.5 bg-matrix-neon" />
                      <span className="absolute -bottom-[1.5px] -right-[1.5px] w-1.5 h-1.5 bg-matrix-neon" />
                    </>
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburguer Command Link */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border border-matrix/30 bg-black/50 text-matrix hover:border-matrix hover:text-matrix-neon transition-colors"
            >
              <Terminal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-matrix/20 bg-black/95 p-4 space-y-2 relative z-50"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider border ${
                  isActive
                    ? "bg-matrix/20 border-matrix text-matrix-neon"
                    : "bg-black border-matrix/10 text-matrix/70 hover:border-matrix/40 hover:text-matrix"
                }`}
              >
                &gt; {item.label}
              </button>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
