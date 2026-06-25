import { motion } from "motion/react";
import { Shield, Eye, Database, Orbit, Network } from "lucide-react";
import aboutDevImg from "../assets/images/about_developers_1782231052891.jpg";

export default function AboutSection() {
  const cards = [
    {
      icon: <Network className="w-5 h-5 text-matrix-neon" />,
      title: "UI/UX DESIGN & BRANDING",
      desc: "Designing highly intuitive interfaces, user journeys, and impactful brand identities (logos, custom mockups, and corporate brochures) to set you apart.",
      stats: "TOOLS: FIGMA & PHOTOSHOP"
    },
    {
      icon: <Database className="w-5 h-5 text-matrix-neon" />,
      title: "WEB SYSTEM DEVELOPMENT",
      desc: "Building blazing-fast WordPress custom websites and modern React structures that bring pristine designs to life with supreme SEO and stability.",
      stats: "METRICS: +100X DEPLOY SPEED"
    },
    {
      icon: <Shield className="w-5 h-5 text-matrix-neon" />,
      title: "CRM & FUNNEL AUTOPILOT",
      desc: "Developing high-converting GoHighLevel pipelines, sales funnels, and automated workflows (email, SMS notifications, client onboarding loops).",
      stats: "INTEGRATION: GOHIGHLEVEL CORE"
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex flex-col justify-center border-t border-matrix/20"
    >
      {/* Absolute layered decorative grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.9),rgba(10,25,15,0.95))] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-matrix/30 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-matrix-neon uppercase tracking-widest">
              <Eye className="w-4 h-4 animate-pulse" />
              <span>LOG_01 / MEMORY_ACCESS // COGNITIVE_SUMMARY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase sm:leading-none">
              ABOUT <span className="text-matrix-neon glow-matrix">SWIFTERS</span> SYSTEM
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-matrix/50 text-left md:text-right">
            <span>SEC_CLEARANCE: CLASS_LEVEL_A</span>
            <span className="block mt-1">SYS_STATUS: OPTIMIZED</span>
          </div>
        </div>

        {/* Content Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Visual Frame (Left column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative bg-black border border-matrix/20 p-2 overflow-hidden group hover:border-matrix-neon/30 transition-all duration-500 flex flex-col justify-center min-h-[300px]"
          >
            {/* Tech Corner accents */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-matrix-neon" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-matrix-neon" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-matrix-neon" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-matrix-neon" />

            <div className="relative w-full h-full overflow-hidden border border-matrix/10">
              <img
                src={aboutDevImg}
                alt="The Swifters - Freelance Duo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none mix-blend-multiply" />
              {/* Scanline pattern overlay inside the frame */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-40" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-matrix/30 px-3 py-1.5 backdrop-blur-sm flex justify-between items-center text-[10px] font-mono text-matrix">
              <span>IMG_ACCESS: COGNITIVE_DUO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-matrix-neon animate-pulse" />
            </div>
          </motion.div>

          {/* Main Manifest Statement (Center Big deck) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative bg-matrix-dark/10 border border-matrix/20 p-8 flex flex-col justify-between overflow-hidden group hover:border-matrix/40 transition-colors"
          >
            {/* Tech Corner accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matrix-neon" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matrix-neon" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matrix-neon" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-matrix-neon" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Orbit className="w-6 h-6 text-matrix animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-xs font-mono text-matrix/60 font-bold uppercase tracking-widest">
                  SYS_MISSION_STATEMENT
                </span>
              </div>
              <p className="text-lg sm:text-2xl font-sans text-white font-medium leading-relaxed">
                Welcome to The Swifters — a <span className="text-matrix-neon underline decoration-matrix-neon/30 text-shadow-sm">dynamic duo of creative professionals</span> turning ideas into powerful digital experiences.
              </p>
              <p className="text-sm text-matrix/70 font-mono leading-relaxed">
                We specialize in graphic design, intuitive UI/UX frameworks, custom WordPress systems and high performance React web applications. From video editing and digital asset creation to building native mobile apps with Flutter and Kotlin, we engineer complete digital ecosystems. By pairing high end frontends with advanced n8n and GoHighLevel CRM automation workflows, we help businesses across real estate, coaching and tech elevate their digital presence, streamline operations and scale smarter combining raw creativity, strategy and heavy duty functionality in everything we do.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-matrix/10">
              <div className="flex flex-col bg-black/40 border border-matrix/10 p-3 min-w-[100px] flex-1">
                <span className="text-[10px] text-matrix/50 uppercase">RESPONSE_TIME</span>
                <span className="text-sm font-bold font-sans text-matrix-neon">0.14 S</span>
              </div>
              <div className="flex flex-col bg-black/40 border border-matrix/10 p-3 min-w-[100px] flex-1">
                <span className="text-[10px] text-matrix/50 uppercase">DEPLOY_RATIO</span>
                <span className="text-sm font-bold font-sans text-matrix-neon">100X FAST</span>
              </div>
              <div className="flex flex-col bg-black/40 border border-matrix/10 p-3 min-w-[100px] flex-1">
                <span className="text-[10px] text-matrix/50 uppercase">DEV_SYNERGY</span>
                <span className="text-sm font-bold font-sans text-matrix-neon">COGNITIVE</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats sidebar (Right side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex flex-col gap-6 justify-between"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative bg-matrix-dark/10 border border-matrix/15 p-6 space-y-3 group hover:bg-matrix-dark/25 hover:border-matrix-neon/30 transition-all duration-300 flex-1 flex flex-col justify-center"
              >
                {/* Accent ticks */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-matrix/30 group-hover:bg-matrix-neon animate-pulse" />

                <div className="flex items-center gap-3">
                  <div className="p-2 border border-matrix/25 bg-black/50 rounded-none group-hover:border-matrix-neon transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xs font-mono font-black tracking-widest text-matrix/90 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs text-matrix/60 font-mono leading-relaxed">
                  {card.desc}
                </p>
                <div className="text-[10px] text-matrix-neon font-bold tracking-widest bg-matrix-dark/10 py-1 px-2 border-l border-matrix-neon mt-auto">
                  {card.stats}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
