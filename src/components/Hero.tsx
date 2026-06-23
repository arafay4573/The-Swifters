import { motion } from "motion/react";
import { Terminal, ShieldAlert, Cpu } from "lucide-react";

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
          className="relative w-48 h-48 sm:w-64 sm:h-64 mb-4 flex items-center justify-center p-4 bg-matrix-dark/15 border border-matrix/30 [clip-path:polygon(15%_0%,85%_0%,100%_15%,100%_85%,85%_100%,15%_100%,0%_85%,0%_15%)] shadow-[0_0_50px_rgba(0,255,102,0.1)]"
        >
          {/* Cyber scanner sweep lines animating vertically */}
          <motion.div
            className="absolute left-0 right-0 h-[1.5px] bg-matrix shadow-[0_0_8px_#00ff66] z-10 opacity-60"
            animate={{
              top: ["10%", "90%", "10%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SVG Complex Emblem Lockup */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]"
          >
            {/* Hexagonal cyber overlay rotating slowly */}
            <motion.polygon
              points="100,10 180,50 180,150 100,190 20,150 20,50"
              fill="none"
              stroke="rgba(0, 255, 102, 0.15)"
              strokeWidth="1.5"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            {/* Interactive/Aggressive Outer Target brackets */}
            <motion.path
              d="M 45,30 L 25,30 L 25,170 L 45,170 M 155,30 L 175,30 L 175,170 L 155,170"
              fill="none"
              stroke="#00ff66"
              strokeWidth="2.5"
              className="opacity-40"
              animate={{ scale: [0.98, 1.02, 0.98] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            {/* Calibration crosshairs */}
            <line x1="100" y1="20" x2="100" y2="40" stroke="#00ff66" strokeWidth="1.5" className="opacity-60" />
            <line x1="100" y1="160" x2="100" y2="180" stroke="#00ff66" strokeWidth="1.5" className="opacity-60" />
            <line x1="20" y1="100" x2="40" y2="100" stroke="#00ff66" strokeWidth="1.5" className="opacity-60" />
            <line x1="160" y1="100" x2="180" y2="100" stroke="#00ff66" strokeWidth="1.5" className="opacity-60" />

            {/* Core Swifter Anchor & S-Curve Logo matching reference image */}
            {/* 1. Shackle Loop at Top */}
            <motion.circle
              cx="100"
              cy="36"
              r="11"
              fill="none"
              stroke="#00ff66"
              strokeWidth="3.5"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.circle
              cx="100"
              cy="36"
              r="3.5"
              fill="#00ff66"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.rect
              x="92"
              y="48"
              width="16"
              height="4"
              rx="1"
              fill="#00ff66"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />

            {/* 2. Horizontal Stock (Crossbar) */}
            <motion.rect
              x="70"
              y="53"
              width="60"
              height="7"
              rx="1"
              fill="#00ff66"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />

            {/* 3. Main Center Shank (Vertical Column) */}
            <motion.rect
              x="96.5"
              y="60"
              width="7"
              height="80"
              rx="1.5"
              fill="#00ff66"
              opacity="0.85"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />

            {/* 4. Elegant S-Curve wrapping the Shank as shown in reference */}
            <motion.path
              d="M 115 75 C 115 63, 85 63, 85 87 C 85 110, 115 103, 115 126 C 115 140, 85 140, 85 128"
              fill="none"
              stroke="#39ff14"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
              className="drop-shadow-[0_0_12px_#39ff14]"
            />

            {/* 5. Custom Droplet Accents matching the reference */}
            {/* Upper Right Droplet */}
            <motion.path
              d="M 116 68 C 120 68 123 72 123 76 C 123 80 120 83 116 83 C 112 83 111 80 112 77 C 113 74 116 68 116 68 Z"
              fill="#39ff14"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
              className="drop-shadow-[0_0_8px_#39ff14]"
            />
            {/* Lower Left Droplet */}
            <motion.path
              d="M 84 124 C 80 124 77 120 77 116 C 77 112 80 109 84 109 C 88 109 89 112 88 115 C 87 118 84 124 84 124 Z"
              fill="#39ff14"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
              className="drop-shadow-[0_0_8px_#39ff14]"
            />

            {/* 6. Crown & Flukes (Anchor Base Crescent) matching the reference */}
            <motion.path
              d="M 50 105 C 50 105, 53 118, 62 122 C 72 126, 75 120, 75 120 C 75 120, 80 142, 100 142 C 120 142, 125 120, 125 120 C 125 120, 128 126, 138 122 C 147 118, 150 105, 150 105 C 150 105, 142 138, 100 152 C 58 138, 50 105, 50 105 Z"
              fill="rgba(0, 255, 102, 0.15)"
              stroke="#00ff66"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
              className="drop-shadow-[0_0_8px_#00ff66]"
            />

            {/* Central energy core (Diamond structure) */}
            <motion.polygon
              points="100,97 108,105 100,113 92,105"
              fill="currentColor"
              className="text-matrix-neon animate-pulse drop-shadow-[0_0_10px_#39ff14]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            />

            {/* Decorative Pulse Nodes */}
            <circle cx="100" cy="152" r="3" fill="#39ff14" />
            <circle cx="50" cy="105" r="3" fill="#ffffff" className="animate-ping" />
            <circle cx="150" cy="105" r="3" fill="#ffffff" className="animate-ping" />
          </svg>
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
