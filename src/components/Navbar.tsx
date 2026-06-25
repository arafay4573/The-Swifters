import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Terminal, Shield, Zap } from "lucide-react";
import swiftersLogo from "../assets/images/swifters-logo.png";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const { scrollY } = useScroll();
  const [glitchText, setGlitchText] = useState("THE SWIFTERS");
  const [menuOpen, setMenuOpen] = useState(false);

  const textOpacity = useTransform(scrollY, [0, 400], [0.15, 0.45]);

  // Tie the horizontal translation to scrollY directly.
  // We use modulo to make it infinite once it scrolls completely past its length.
  // Assuming the text width is approximately 3000px (half of the duplicated string).
  // Starts at 100vw (offscreen right) at scroll 0, moves left as scroll increases.
  const xTranslation = useTransform(scrollY, (v) => `calc(100vw - ${v * 1.5}px)`);

  // Fun random cyber glyph glitch effect on hover of the logo
  const triggerLogoGlitch = () => {
    let iterations = 0;
    const chars = "$@/._-[]&%#10+X=";
    const original = "THE SWIFTERS";

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
      className="fixed top-0 w-full z-40 bg-black/60 backdrop-blur-md border-b border-matrix/20 overflow-hidden"
    >
      {/* 1. Translucent Parallax Background Text (Glides behind elements) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center select-none overflow-hidden h-full">
        <motion.div
          style={{ x: xTranslation, opacity: textOpacity }}
          className="whitespace-nowrap text-matrix font-sans text-5xl sm:text-7xl font-extrabold tracking-widest uppercase opacity-20 blur-[1px] flex w-max"
        >
          <span>Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • Quick to create, Bold to innovate • </span>
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
                <img
                  src={swiftersLogo}
                  alt="Swifters Logo"
                  className="w-full h-full object-contain scale-[1.7] transition-all duration-300"
                  style={{
                    filter: "brightness(0) saturate(100%) invert(67%) sepia(85%) saturate(3061%) hue-rotate(85deg) brightness(105%) contrast(106%) drop-shadow(0 0 4px #00ff66)"
                  }}
                />
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
                  className={`group relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300 backdrop-blur-lg border ${
                    isActive
                      ? "bg-matrix/10 border-matrix/60 text-matrix glow-matrix"
                      : "bg-black/40 border-matrix/20 text-matrix/70 hover:border-matrix/60 hover:text-matrix hover:bg-matrix/10 hover:glow-matrix"
                  }`}
                >
                  {/* Subtle terminal-corner aesthetics on hover */}
                  {(isActive) && (
                    <>
                      <span className="absolute -top-[1.5px] -left-[1.5px] w-1.5 h-1.5 bg-matrix-neon" />
                      <span className="absolute -bottom-[1.5px] -right-[1.5px] w-1.5 h-1.5 bg-matrix-neon" />
                    </>
                  )}
                  {/* Subtle terminal-corner aesthetics on hover (for non-active items) */}
                  {(!isActive) && (
                     <>
                      <span className="absolute -top-[1.5px] -left-[1.5px] w-1.5 h-1.5 bg-matrix-neon opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{'pointerEvents': 'none'}} />
                      <span className="absolute -bottom-[1.5px] -right-[1.5px] w-1.5 h-1.5 bg-matrix-neon opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{'pointerEvents': 'none'}} />
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
