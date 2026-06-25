import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import journeyImg from "../assets/images/journey_railway_1782231080840.jpg";

const MatrixArrowDown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ transform: "rotate(90deg)" }}>
    <polygon points="10,20 60,20 75,35 25,35" fill="currentColor"/>
    <polygon points="25,40 75,40 95,60 75,80 25,80 45,60" fill="currentColor"/>
    <polygon points="25,85 75,85 60,100 10,100" fill="currentColor"/>
  </svg>
);

const MatrixArrowUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ transform: "rotate(-90deg)" }}>
    <polygon points="10,20 60,20 75,35 25,35" fill="currentColor"/>
    <polygon points="25,40 75,40 95,60 75,80 25,80 45,60" fill="currentColor"/>
    <polygon points="25,85 75,85 60,100 10,100" fill="currentColor"/>
  </svg>
);

export default function JourneySection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNextPage = () => {
    setDirection(1);
    setPage(1);
  };

  const handlePrevPage = () => {
    setDirection(-1);
    setPage(0);
  };
  const milestones = [
    {
      phase: "01 // CONSTRUCT",
      year: "2021",
      icon: <Settings className="w-5 h-5 text-matrix" />,
      title: "CREATIVE PRODUCTION & VISUAL ASSETS",
      desc: "The journey launches with a heavy focus on cinematic video editing and core graphic design mechanics. Mastered raw visual asset creation, vector layouts, and promotional media production to establish sharp brand aesthetics.",
      tech: "MODULES: PHOTOSHOP, PREMIERE PRO, ILLUSTRATOR, AFTER EFFECTS, CANVA, FILMORA, CAPCUT"
    },
    {
      phase: "02 // EVOLVE",
      year: "2022",
      icon: <Radio className="w-5 h-5 text-matrix-neon animate-pulse" />,
      title: "UI/UX CORE FRAMEWORKS",
      desc: "Scaling our creative verticals into software design ecosystems. Focused deeply on wireframing, high-fidelity mockups, and crafting highly intuitive, user-centric interface structures.",
      tech: "MODULES: FIGMA_V1, USER_JOURNEYS, PROTO_UI"
    },
    {
      phase: "03 // ACCELERATE",
      year: "2023",
      icon: <GitCommit className="w-5 h-5 text-matrix-neon" />,
      title: "CUSTOM WEB DEVELOPMENT",
      desc: "Transitioning static interfaces into interactive web products. Gained absolute proficiency in custom WordPress engineering, developing responsive architectures optimized for clean styling and search visibility.",
      tech: "MODULES: WORDPRESS, HTML, CSS_JS"
    },
    {
      phase: "04 // AUTOMATE",
      year: "2024",
      icon: <Star className="w-5 h-5 text-matrix" />,
      title: "GOHIGHLEVEL INFRASTRUCTURE",
      desc: "Expanding into enterprise automation frameworks. Designed high-converting sales pipelines, tailored landing page flows, and automated lead tracking structures within the GoHighLevel CRM environment.",
      tech: "MODULES: GOHIGHLEVEL, FUNNELS, CRM_PIPELINES"
    },
    {
      phase: "05 // SCALE",
      year: "2025",
      icon: <Code className="w-5 h-5 text-matrix-neon" />,
      title: "REACT COMPOSITIONS & BACKEND LOGIC",
      desc: "Engineering complex full-stack components. Integrated modern React web application frameworks alongside complex n8n automation instances to orchestrate conditional data logic loops across independent software platforms.",
      tech: "MODULES: REACT.JS, n8n_LOGIC, WEB_APPS"
    },
    {
      phase: "06 // COMMAND",
      year: "2026",
      icon: <Smartphone className="w-5 h-5 text-matrix" />,
      title: "MOBILE SOFTWARE ARCHITECTURE",
      desc: "Evolving into an elite cross-platform engineering studio. Building high-performance, native mobile applications inside Flutter and Kotlin, paired with massive, next-generation optimization overhauls on GoHighLevel networks.",
      tech: "MODULES: FLUTTER, KOTLIN, ANDROID_STUDIO, GHL_V2"
    },
  ];

  const visibleMilestones = page === 0 ? milestones.slice(0, 4) : milestones.slice(4, 6);

  return (
    <section
      id="journey"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex flex-col justify-center border-t border-matrix/20"
    >
      {/* Background terminal matrix scanline or grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#05150a_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-matrix/30 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-matrix-neon uppercase tracking-widest">
              <Milestone className="w-4 h-4 animate-bounce" />
              <span>LOG_02 / VECTOR_PATH // CHRONO_SEQUENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase sm:leading-none">
              OUR CHRONOLOGICAL <span className="text-matrix-neon glow-matrix">JOURNEY</span>
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-matrix/50 text-left md:text-right">
            <span>QUERY_RANGE: 2024 - 2027</span>
            <span className="block mt-1">LOG_STREAM: LIVE</span>
          </div>
        </div>

        {/* Split Grid for Journey Text/Visual & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Visual Representation & Core Summary */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-4">
              <span className="text-[10px] text-matrix-neon font-mono font-bold tracking-widest bg-matrix-dark/20 px-2.5 py-1 border border-matrix/30">
                VISUALIZER_PORT: ONLINE
              </span>
              <p className="text-sm font-mono text-matrix/70 leading-relaxed">
                At The Swifters, our journey began in 2021 with a heavy focus on cinematic video editing and graphic design, mastering raw visual asset production and brand aesthetics. In 2022, we scaled our creative vertical by diving deep into user experience frameworks crafting high end UI/UX designs inside Figma. By 2023, we brought those static interfaces to life on the web through custom WordPress engineering. As our capabilities grew, we expanded into complex architecture. In 2024, we launched our GoHighLevel infrastructure deploying high converting sales funnels, lead-capture pipelines and operational CRM ecosystems. In 2025, we shifted our focus to enterprise grade web apps and data logic integrating advanced React web development alongside intricate n8n multi platform backend automations. Today, in 2026, we have evolved into a full-scale digital studio engineering powerful native mobile applications with Flutter and Kotlin while delivering massive, optimized architectural overhauls on GoHighLevel.
              </p>
            </div>

            {/* Glowing Journey Visualizer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-black border border-matrix-neon/30 p-2 overflow-hidden group hover:border-matrix-neon transition-all duration-500"
            >
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matrix-neon" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matrix-neon" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matrix-neon" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-matrix-neon" />

              <div className="relative overflow-hidden border border-matrix/10 h-64 sm:h-80">
                <img
                  src={journeyImg}
                  alt="Our Journey - The Swifters"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-30" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/85 border border-matrix-neon/40 px-3 py-1 text-[9px] font-mono text-matrix-neon flex justify-between">
                <span>ESTABLISHED // 2021</span>
                <span>METROPOLIS_SUNSET_STREAM</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Chrono Timeline Structure */}
          <div className="lg:col-span-7 relative flex flex-col min-h-[600px]">
            {/* Up Arrow (Only visible on page 1) */}
            <AnimatePresence>
              {page === 1 && (
                <motion.button
                  key="prev-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handlePrevPage}
                  className="mx-auto flex flex-col items-center justify-center text-matrix-neon hover:text-white transition-colors mb-6 z-20"
                >
                  <MatrixArrowUp className="w-10 h-10 animate-pulse" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Vertical path line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-matrix/20" />

            <div className="relative flex-1 w-full grid" style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}>
              <AnimatePresence custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={{
                    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 50 : -50 }),
                    center: { opacity: 1, y: 0 },
                    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -50 : 50 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-12 h-full"
                  style={{ gridArea: "1 / 1 / 2 / 2" }}
                >
                  {visibleMilestones.map((item, idx) => (
                    <div key={idx} className="relative flex items-start">
                  {/* Milestones node circle */}
                  <div className="absolute left-6 -translate-x-1/2 w-6 h-6 border-2 border-matrix bg-black rounded-none flex items-center justify-center z-10 box-glow-matrix">
                    <span className="w-2.5 h-2.5 bg-matrix-neon animate-pulse" />
                  </div>

                  {/* Content Container */}
                  <div className="w-full pl-14 flex flex-col items-start">
                    <div className="space-y-4 p-6 bg-matrix-dark/10 border border-matrix/15 hover:border-matrix-neon/40 transition-all duration-300 w-full group relative">
                      {/* Technical visual ticks */}
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-matrix/40" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-matrix/40" />

                      <div className="flex items-center justify-between border-b border-matrix/10 pb-2">
                        <span className="text-[10px] text-matrix-neon font-mono font-bold tracking-widest bg-matrix-dark/20 px-2 py-0.5 border border-matrix/30 rounded-none">
                          {item.phase}
                        </span>
                        <span className="text-xl font-sans font-black tracking-widest text-[#ffffff] glow-matrix">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-sm font-sans font-black tracking-widest text-matrix/90 leading-tight uppercase group-hover:text-matrix-neon transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-matrix/60 font-mono leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="text-[9px] text-matrix-neon/50 font-mono border-t border-matrix/5 pt-3">
                        {item.tech}
                      </div>
                    </div>
                  </div>
                </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Down Arrow (Only visible on page 0) */}
            <AnimatePresence>
              {page === 0 && (
                <motion.button
                  key="next-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleNextPage}
                  className="mx-auto flex flex-col items-center justify-center text-matrix-neon hover:text-white transition-colors mt-6 z-20"
                >
                  <MatrixArrowDown className="w-10 h-10 animate-pulse" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
