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
      name: "GRAPHIC DESIGN",
      icon: <Layers className="w-6 h-6 text-matrix-neon" />,
      level: "BRAND_ASSET_SUITE",
      latency: "RENDER_REALTIME",
      security: "VECTOR_PIXEL_PERFECT",
      compile: "PHOTOSHOP, ILLUSTRATOR, CANVA",
      utilization: "100%",
      rawDesc: "Custom vector illustration layout production, complex digital brand guidelines, high-fidelity UI design assets, and marketing/promotional asset compilation."
    },
    {
      name: "VIDEO EDITING & PRODUCTION",
      icon: <Code className="w-6 h-6 text-matrix-neon" />,
      level: "TIMELINE_ENGINE_V1",
      latency: "ENCODE_REALTIME",
      security: "MULTI_TRACK_ISO",
      compile: "PREMIERE PRO, AFTER EFFECTS, FILMORA, CAPCUT",
      utilization: "100%",
      rawDesc: "High-end multi-track video sequencing, audio design mastering, custom motion graphics keyframing, motion tracking, and advanced cinematic color grading/rendering."
    },
    {
      name: "UI/UX ARCHITECTURE",
      icon: <Wind className="w-6 h-6 text-matrix-neon" />,
      level: "INTERFACE_LOGIC",
      latency: "0.02ms",
      security: "USER_CENTRIC_ISO",
      compile: "FIGMA ENVIRONMENT",
      utilization: "99.8%",
      rawDesc: "Designing interactive low-to-high fidelity user frames, clickable app layout prototypes, detailed interactive animation maps, and cross-platform mobile/web blueprints."
    },
    {
      name: "APPLICATION DEVELOPMENT",
      icon: <Zap className="w-6 h-6 text-matrix-neon animate-bounce" />,
      level: "FULL_STACK_COMPILE",
      latency: "0.85ms",
      security: "NATIVE_VIRTUAL_DOM",
      compile: "REACT.JS, FLUTTER, KOTLIN, WORDPRESS",
      utilization: "100%",
      rawDesc: "Custom WordPress theme hooks, high-performance React web applications, and native cross-platform mobile application engineering compiled via Android Studio, Flutter, and Kotlin."
    },
    {
      name: "WORKFLOW AUTOMATION & CRM",
      icon: <Sparkles className="w-6 h-6 text-matrix-neon animate-pulse" />,
      level: "LOGIC_ROUTING",
      latency: "0.01ms",
      security: "CRON_WEBHOOK_ENCRYPT",
      compile: "n8n, ZAPIER, GOHIGHLEVEL",
      utilization: "100%",
      rawDesc: "Building robust multi-platform data synchronization workflows inside n8n and Zapier, next-generation GoHighLevel pipeline architectures, custom lead capture forms, and automated CRM onboarding sequences."
    },
    {
      name: "AI STACK & INTEGRATED SECURITY",
      icon: <Share2 className="w-6 h-6 text-matrix-neon" />,
      level: "ADVANCED_NEURAL_MONITOR",
      latency: "AGENT_REALTIME",
      security: "ANTIGRAVITY_AGENT_ACTIVE",
      compile: "CLAUDE CURSOR, CLAUDE MODELS (HAIKU, FABLE), JULES, STITCH",
      utilization: "99.9%",
      rawDesc: "Implementing advanced language model context configurations using Cursor and specialized Claude reasoning structures (Haiku, Fable). Automating smart workflow routines via Jules and Stitch APIs, integrated alongside continuous deployment pipelines on GitHub, Vercel, and Netlify under strict Antigravity security monitoring protocols."
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
