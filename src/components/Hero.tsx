import { motion } from "motion/react";
import { Terminal, ShieldAlert, Cpu } from "lucide-react";
import swiftersLogo from "../assets/images/swifters-logo.png";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  // SVG drawing configuration for the Swifters logo (S shape constructed from cybernetics)
  const logoPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.8, bounce: 0 },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden bg-black px-4"
    >
      {/* Background terminal scanlines on Hero */}
      <div className="absolute inset-0 gp-grid opacity-[0.02] pointer-events-none" />

      {/* Cyberpunk corner brackets for the brand chassis */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-matrix/30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-matrix/30 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-matrix/30 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-matrix/30 pointer-events-none" />

      {/* Technical sidebar telemetry markers (Pure aesthetic, no external dependencies) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[9px] font-mono text-matrix/40">
        <div>SYS_GRID_X: [R-200]</div>
        <div>STABLE_SYS: [TRUE]</div>
        <div>MOTION_HZ: [60.0]</div>
        <div className="h-20 w-[1px] bg-matrix/20 self-center" />
        <div>NODE_ACTIVE: [01]</div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[9px] font-mono text-matrix/40 text-right">
        <div>CORE_TEMP: [34C]</div>
        <div>VIRTUAL_LNK: [9]</div>
        <div>GRID_STABILIZER: ON</div>
        <div className="h-20 w-[1px] bg-matrix/20 self-center" />
        <div>ENV: [PROD]</div>
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">

        {/* Futuristic fluid vector logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] mt-12 sm:mt-16 mb-2 sm:mb-4 flex items-center justify-center"
        >
          {/* Outer Hexagon: rotating left */}




          {/* Outer Hexagon & Scanline: rotating left */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)" }}
            >
              {/* Outer Hexagon Border using SVG */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]">
                <polygon points="50,0 93.301,25 93.301,75 50,100 6.699,75 6.699,25" fill="none" stroke="#39ff14" strokeWidth="1" />
              </svg>

                            {/* Vertical Scanline confined within the rotating outer hexagon */}
              <motion.div
                className="absolute left-0 right-0 h-[3px] bg-matrix shadow-[0_0_15px_#00ff66] opacity-80"
                animate={{
                  top: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Horizontal Scanline moving oppositely to form a cage */}
              <motion.div
                className="absolute top-0 bottom-0 w-[3px] bg-matrix shadow-[0_0_15px_#00ff66] opacity-80"
                animate={{
                  left: ["100%", "0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* Inner Hexagon: rotating right */}
          <motion.div
            className="absolute z-0 flex items-center justify-center" style={{ width: "86.6025%", height: "86.6025%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)" }}
            >
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,102,0.5)]">
                <polygon points="50,0 93.301,25 93.301,75 50,100 6.699,75 6.699,25" fill="none" stroke="#00ff66" strokeWidth="1" />
              </svg>

                            {/* Vertical Scanline confined within the rotating inner hexagon */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-matrix shadow-[0_0_10px_#00ff66] opacity-60"
                animate={{
                  top: ["100%", "0%", "100%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Horizontal Scanline moving oppositely to form a cage */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-matrix shadow-[0_0_10px_#00ff66] opacity-60"
                animate={{
                  left: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* Static SVG Complex Emblem Lockup */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <img
              src={swiftersLogo}
              alt="Swifters Logo"
              className="w-[65%] h-[65%] object-contain drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]"
              style={{
                filter: "brightness(0) saturate(100%) invert(67%) sepia(85%) saturate(3061%) hue-rotate(85deg) brightness(105%) contrast(106%)"
              }}
            />
          </div>
        </motion.div>

        {/* Glitch brand name with animated overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-2 mb-2"
        >
          <h1
            className="text-4xl sm:text-7xl font-sans font-black tracking-widest text-[#ffffff] uppercase select-none glitch-effect glow-matrix-heavy"
            data-text="SWIFTERS"
          >
            SWIFTERS
          </h1>

          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-matrix-neon bg-matrix-dark/20 px-3 py-1.5 border border-matrix/30 rounded-none w-fit mx-auto mt-2 select-all box-glow-matrix">
            <Cpu className="w-3.5 h-3.5 animate-pulse text-matrix-neon" />
            <span>NODE_IDENTIFIER: SWF-04.CORE</span>
          </div>
        </motion.div>

        {/* Sharp tagline typography */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg sm:text-2xl font-sans text-white font-medium max-w-2xl mx-auto tracking-normal leading-relaxed">
            “<span className="text-matrix-neon font-bold">Quick</span> to create,{" "}
            <span className="text-[#ffffff] font-extrabold underline decoration-matrix-neon decoration-2 underline-offset-4">Bold</span> to innovate”
          </p>

          <p className="text-sm font-mono text-matrix/60 max-w-lg mx-auto leading-relaxed">
            A dynamic freelance duo specializing in UI/UX design, modern branding, custom WordPress development, and advanced GoHighLevel CRM automation workflows.
          </p>
        </motion.div>

        {/* Action Button Terminal Style */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
          <button
            onClick={onExploreClick}
            className="group relative px-8 py-4 bg-matrix-dark/20 border border-matrix hover:border-matrix-neon text-matrix hover:text-black overflow-hidden transition-all duration-300 rounded-none font-bold tracking-widest text-xs uppercase"
          >
            {/* Invert transition slides background */}
            <span className="absolute inset-0 bg-matrix transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              INITIALIZE PORTFOLIO CONSOLE
            </span>

            {/* Flashing ticks */}
            <span className="absolute -top-[1.5px] -left-[1.5px] w-2 h-2 bg-matrix group-hover:bg-black transition-colors" />
            <span className="absolute -bottom-[1.5px] -right-[1.5px] w-2 h-2 bg-matrix group-hover:bg-black transition-colors" />
          </button>
        </motion.div>

        {/* Scroll Prompt indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-16 flex flex-col items-center gap-2 text-matrix/40 text-[10px] font-mono tracking-widest cursor-pointer select-none"
          onClick={onExploreClick}
        >
          <span>PULL SECURE LINK DOWN</span>
          <div className="w-5 h-8 border border-matrix/30 rounded-full flex items-start justify-center p-1">
            <motion.div className="w-1 h-2 bg-matrix rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
