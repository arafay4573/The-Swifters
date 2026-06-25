import { motion } from "motion/react";
import { GitCommit, Radio, Settings, Star, Milestone } from "lucide-react";
import journeyImg from "../assets/images/journey_railway_1782231080840.jpg";

export default function JourneySection() {
  const milestones = [
    {
      phase: "01 // CONSTRUCT",
      year: "2021",
      icon: <Settings className="w-5 h-5 text-matrix" />,
      title: "DESIGN CORE & BRAND ARCHITECTURE",
      desc: "Swifters begins with a strong focus on high-fidelity design. Mastering tools like Figma and Photoshop to create highly user-centric interfaces, standout logos, and visually compelling posters and brochures.",
      tech: "MODULES: FIGMA_V1, PHOTOSHOP_ENG"
    },
    {
      phase: "02 // EVOLVE",
      year: "2022",
      icon: <Radio className="w-5 h-5 text-matrix-neon animate-pulse" />,
      title: "CUSTOM WEB DEVELOPMENT",
      desc: "Our journey evolves into active development, building custom websites that bring beautiful designs to life on the web. We became highly proficient in WordPress, delivering tailored websites that combine clean aesthetics with solid functionality.",
      tech: "MODULES: WORDPRESS, HTML_CSS_JS"
    },
    {
      phase: "03 // ACCELERATE",
      year: "2023",
      icon: <GitCommit className="w-5 h-5 text-matrix-neon" />,
      title: "GOHIGHLEVEL INTEGRATION",
      desc: "Expanding into the powerful world of GoHighLevel. Developing ultra-responsive websites, high-converting sales funnels, and robust CRM systems that simplify corporate growth.",
      tech: "MODULES: GOHIGHLEVEL, FUNNELS_CRM"
    },
    {
      phase: "04 // DOMINATE",
      year: "2024 - 2026",
      icon: <Star className="w-5 h-5 text-matrix" />,
      title: "AUTOMATION & SYSTEMS SCALING",
      desc: "Engineering full-funnel setups, custom pipeline tracking, and email/SMS workflows. Helping dozens of businesses automate complex operational processes and scale efficiently via GoHighLevel's all-in-one platform.",
      tech: "MODULES: AUTOPILOT, SMS_EMAIL_API"
    },
  ];

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
          <div className="lg:col-span-7 relative">
            {/* Vertical path line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-matrix/20" />

            <div className="space-y-12">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex items-start"
                >
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
                          PHASE_ {item.phase}
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
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
