import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Code, Wind, Zap, Layers, Share2, Sparkles } from "lucide-react";

interface TechDetails {
  name: string;
  icon: ReactNode;
  level: string;
  latency: string;
  security: string;
  compile: string;
  utilization: string;
  rawDesc: string;
}

export default function TechStackSection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const techStack: TechDetails[] = [
    {
      name: "GOHIGHLEVEL",
      icon: <Layers className="w-6 h-6 text-matrix-neon" />,
      level: "AUTOPILOT_CORE",
      latency: "0.05ms",
      security: "ENTERPRISE_SEC",
      compile: "FUNNELS & WORKFLOWS",
      utilization: "100%",
      rawDesc: "Our primary tool for pipeline automation, email/SMS workflows, CRM setups, calendars, and high-converting landing pages."
    },
    {
      name: "FIGMA / ADOBE",
      icon: <Code className="w-6 h-6 text-matrix-neon" />,
      level: "UI_UX_BRANDING",
      latency: "0.01ms",
      security: "VECTOR_STRICT",
      compile: "CREATIVE ENGINE",
      utilization: "95%",
      rawDesc: "Used to map out pixel-perfect mobile and desktop interfaces, logo designs, custom brochures, apparel mockups, and corporate flyers."
    },
    {
      name: "WORDPRESS",
      icon: <Wind className="w-6 h-6 text-matrix-neon" />,
      level: "CUSTOM_CMS",
      latency: "2.40ms",
      security: "ADMIN_HARDENED",
      compile: "PHP_MYSQL_STABLE",
      utilization: "88%",
      rawDesc: "Powering custom, scalable website builds that blend clean editorial layouts with easy client administration and top-notch SEO."
    },
    {
      name: "REACT & FRONTEND",
      icon: <Zap className="w-6 h-6 text-matrix-neon animate-bounce" />,
      level: "HIGH_VELOCITY",
      latency: "0.02ms",
      security: "SANDBOX_SECURE",
      compile: "VITE_ESBUILD_ENGINE",
      utilization: "92%",
      rawDesc: "Developing blazing-fast responsive websites and web applications with modern modular components, custom Tailwind CSS styling, and clean animations."
    },
    {
      name: "AI POWERED SUITE",
      icon: <Sparkles className="w-6 h-6 text-matrix-neon animate-pulse" />,
      level: "NEURAL_ASSIST",
      latency: "15.40ms",
      security: "ECC_ENCRYPTED",
      compile: "AI_STENCIL_GEN",
      utilization: "85%",
      rawDesc: "Integrating cutting-edge AI models for graphics, content copywriting, layout generation, and workflow optimization to maximize business scaling."
    },
    {
      name: "GIT / GITHUB / COLLAB",
      icon: <Share2 className="w-6 h-6 text-matrix-neon" />,
      level: "COLLABORATIVE",
      latency: "0.80ms",
      security: "SSL_AUTHORIZED",
      compile: "SLACK_ZOOM_INTEG",
      utilization: "90%",
      rawDesc: "Ensuring structured project versioning, clean cloud backups, and seamless coordination using Slack, Zoom, and remote cloud infrastructure."
    },
  ];

  const currentTech = techStack[selectedIdx];

  return (
    <section
      id="tech"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex flex-col justify-center border-t border-matrix/20"
    >
      {/* Absolute grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,102,0.02)_1px,transparent_1px),linear-gradient(rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-matrix/30 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-matrix-neon uppercase tracking-widest">
              <Cpu className="w-4 h-4 animate-spin" />
              <span>LOG_03 / STACK_WEAPONRY // COMPLY_ENGINES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase sm:leading-none">
              SWIFTERS <span className="text-matrix-neon glow-matrix">TECH STACK</span>
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-matrix/50 text-left md:text-right">
            <span>READY_MODULES: 06 // ACTIVE</span>
            <span className="block mt-1">EMISSION_SPEED: NOMINAL</span>
          </div>
        </div>

        {/* Diagnostic Dashboard splits into Grid (Left) + Detail Monitor (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Interactive Tech Nodes Grid (8 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((tech, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-6 relative border transition-all duration-300 rounded-none bg-matrix-dark/10 ${
                    isSelected
                      ? "border-matrix-neon bg-matrix-dark/20 box-glow-matrix"
                      : "border-matrix/20 hover:border-matrix/50 hover:bg-matrix-dark/15"
                  }`}
                >
                  {/* Visual technical markings */}
                  <span className="absolute top-[2px] right-[4px] text-[8px] font-mono text-matrix/40">
                    [NODE_0{idx + 1}]
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-black border border-matrix/25 group-hover:border-matrix-neon transition-colors">
                      {tech.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-sans font-black tracking-widest text-white uppercase group-hover:text-matrix-neon transition-colors">
                        {tech.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-matrix animate-ping" />
                        <span className="text-[10px] font-mono text-matrix-neon font-bold tracking-widest">
                          {tech.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner indicator lines for selected node */}
                  {isSelected && (
                    <>
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-matrix-neon" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-matrix-neon" />
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Holographic Diagnostic Monitor (5 columns) */}
          <div className="lg:col-span-5 relative bg-matrix-dark/10 border border-matrix-neon/30 p-8 flex flex-col justify-between overflow-hidden box-glow-matrix h-full min-h-[400px]">
            {/* Ambient pulse grid screen scan */}
            <div className="absolute inset-0 terminal-overlay opacity-[0.25] pointer-events-none" />

            <div className="space-y-6 relative z-10 w-full">
              <div className="flex items-center justify-between border-b border-matrix/20 pb-3">
                <span className="text-xs font-mono text-matrix-neon font-bold tracking-widest">
                  SYS_DIAGNOSTIC_MONITOR //
                </span>
                <span className="text-[9px] font-mono text-matrix/50 uppercase">
                  NODE: {currentTech.name.replace(" ", "_")}
                </span>
              </div>

              {/* Realtime parameters */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="border border-matrix/10 p-3 bg-black/50">
                  <span className="block text-matrix/40 uppercase text-[9px]">COMPILER</span>
                  <span className="font-bold text-white tracking-wide truncate block">{currentTech.compile}</span>
                </div>
                <div className="border border-matrix/10 p-3 bg-black/50">
                  <span className="block text-matrix/40 uppercase text-[9px]">MEM_LATENCY</span>
                  <span className="font-bold text-matrix-neon tracking-wide truncate block">{currentTech.latency}</span>
                </div>
                <div className="border border-matrix/10 p-3 bg-black/50">
                  <span className="block text-matrix/40 uppercase text-[9px]">SECURITY_RULE</span>
                  <span className="font-bold text-white tracking-wide truncate block">{currentTech.security}</span>
                </div>
                <div className="border border-matrix/10 p-3 bg-black/50">
                  <span className="block text-matrix/40 uppercase text-[9px]">SYN_RESONANCE</span>
                  <span className="font-bold text-matrix-neon tracking-wide truncate block">{currentTech.utilization}</span>
                </div>
              </div>

              {/* Detailed specification layout */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-matrix/60 uppercase font-black tracking-widest block">
                  TECHNICAL_SUMMARY
                </span>
                <p className="text-xs text-matrix/80 font-mono leading-relaxed bg-black/40 border border-matrix/10 p-4 leading-relaxed min-h-[120px]">
                  {currentTech.rawDesc}
                </p>
              </div>
            </div>

            {/* Simulated diagnostic chart bar animations */}
            <div className="relative z-10 pt-4 border-t border-matrix/20 mt-4 space-y-1.5 w-full">
              <div className="flex justify-between text-[9px] font-mono text-matrix/50">
                <span>RESONANCE_SPEED: ACTIVE</span>
                <span>{currentTech.utilization}</span>
              </div>
              <div className="h-1.5 bg-black border border-matrix/20 p-[1px] rounded-none w-full overflow-hidden">
                <div
                  className="h-full bg-matrix-neon rounded-none shadow-[0_0_8px_#39ff14] transition-all duration-700 ease-out"
                  style={{ width: currentTech.utilization }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
