import { useState } from "react";
import { FolderGit2, ArrowUpRight, Github, ExternalLink, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import genzeTshirtImg from "../assets/images/genze_tshirt_mockup_1782231119374.jpg";

interface ProjectItem {
  id: string;
  title: string;
  category: "AUTOMATION" | "BRANDING" | "UI_UX" | "WORDPRESS";
  desc: string;
  specs: string[];
  metrics: string;
  qps: string;
  imageUrl?: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"ALL" | "AUTOMATION" | "BRANDING" | "UI_UX" | "WORDPRESS">("ALL");
  const [hoveredPid, setHoveredPid] = useState<string | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "PRJ-GHL",
      title: "GOHIGHLEVEL AUTOMATION & CRM",
      category: "AUTOMATION",
      desc: "Architected end-to-end client funnels and workflows for multiple industries (real estate, fitness, coaching). Engineered automated email/SMS follow-ups, appointment reminders, and pipeline integrations that maximize conversion and lead management.",
      specs: ["GoHighLevel", "Automated Workflows", "Email/SMS Triggers", "Pipeline CRM"],
      metrics: "CONVERSIONS: +42%",
      qps: "12+ systems active",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "PRJ-GNZ",
      title: "GENZE APPARELS BRANDING",
      category: "BRANDING",
      desc: "Developed a comprehensive brand identity including a clean, edgy vector logo design and high-quality physical product mockups illustrating apparel placement on custom drop-shoulder t-shirts.",
      specs: ["Adobe Illustrator", "Logo Design", "Apparel Mockups", "Brand Identity"],
      metrics: "SATISFACTION: 100%",
      qps: "Vector & Print Ready",
      imageUrl: genzeTshirtImg
    },
    {
      id: "PRJ-LGD",
      title: "LEGEND FITNESS APP UI/UX",
      category: "UI_UX",
      desc: "Created a series of interactive high-fidelity user interface prototypes on Figma mapping out the website and mobile application dashboard to achieve user engagement and smooth handoffs to developers.",
      specs: ["Figma UI/UX", "Mobile Wireframing", "User Journeys", "Layout Architecture"],
      metrics: "SCREENS: 35+ DETAILED",
      qps: "Developer-Ready Assets",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "PRJ-CRK",
      title: "CRACK MAGAZINE WEB PLATFORM",
      category: "WORDPRESS",
      desc: "Designed and engineered a visually striking, premium editorial website for the independent culture platform Crack Magazine, leveraging WordPress as a highly customizable content management system.",
      specs: ["WordPress CMS", "PHP Custom Styling", "Asset Optimization", "UI Layout"],
      metrics: "STABILITY: 100% SECURE",
      qps: "1.2M+ monthly views",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "PRJ-NOV",
      title: "NOVE COMMUNICATION PORTAL",
      category: "WORDPRESS",
      desc: "Successfully launched an informative, user-friendly, and modern WordPress platform representing NOVE, a public service and communications team, to drive corporate visibility.",
      specs: ["WordPress CMS", "Responsive Grid", "SEO Optimization", "Corporate Identity"],
      metrics: "SPEED SCORE: 98/100",
      qps: "Fully Live & Scaled",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "PRJ-AYR",
      title: "AEYRON MARKETING CAMPAIGNS",
      category: "BRANDING",
      desc: "Produced eye-catching marketing flyers, posters, and video edits presenting innovative software/hardware solutions including solar umbrellas, consumer enclosure systems, and automated coal vending portals.",
      specs: ["Photoshop", "Premiere Pro", "Vector Marketing", "Copywriting"],
      metrics: "ORGANIC REACH: +250K",
      qps: "Multi-Platform campaigns",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredProjects = filter === "ALL" ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex flex-col justify-center border-t border-matrix/20"
    >
      {/* Absolute scrolling dots bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.95),rgba(5,15,5,0.98))] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-matrix/30 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-matrix-neon uppercase tracking-widest">
              <FolderGit2 className="w-4 h-4 animate-bounce" />
              <span>LOG_04 / CORE_REPOSITORY // SHOWCASE_ASSETS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase sm:leading-none">
              OUR FEATURED <span className="text-matrix-neon glow-matrix">PROJECTS</span>
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-matrix/50 text-left md:text-right">
            <span>REPOSITORY_INDEX: 6 // COMPILED</span>
            <span className="block mt-1">THEME: DEEP_MATRIX</span>
          </div>
        </div>

        {/* Categories filters toolbar */}
        <div className="flex flex-wrap items-center gap-3 bg-matrix-dark/10 p-4 border border-matrix/20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-matrix/50 uppercase mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER_CORES:</span>
          </div>
          {["ALL", "AUTOMATION", "BRANDING", "UI_UX", "WORDPRESS"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase rounded-none transition-all duration-300 border ${
                filter === cat
                  ? "bg-matrix/10 border-matrix text-matrix-neon glow-matrix"
                  : "bg-black/50 border-matrix/10 text-matrix/60 hover:border-matrix/40 hover:text-matrix-neon"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isHovered = hoveredPid === project.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  onMouseEnter={() => setHoveredPid(project.id)}
                  onMouseLeave={() => setHoveredPid(null)}
                  className="group relative bg-matrix-dark/10 border border-matrix/15 p-6 flex flex-col justify-between overflow-hidden hover:border-matrix-neon/55 hover:box-glow-matrix transition-all duration-300 rounded-none h-[480px]"
                >
                  {/* Cyber grid overlays */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-matrix/20 group-hover:bg-matrix-neon shadow-[0_0_8px_#00ff66]" />

                  {/* Header info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-matrix/10 pb-3">
                      <span className="text-[10px] font-mono text-matrix/60 font-bold tracking-widest uppercase">
                        CODE_REF: {project.id}
                      </span>
                      <span className="text-[10px] font-mono text-matrix-neon bg-matrix-dark/20 px-2 py-0.5 border border-matrix/30 font-extrabold uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* Thumbnail Image display */}
                    {project.imageUrl && (
                      <div className="relative overflow-hidden border border-matrix/15 h-32 w-full bg-black">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-20" />
                      </div>
                    )}

                    <h3 className="text-lg font-sans font-black tracking-widest text-[#ffffff] uppercase leading-tight group-hover:text-matrix-neon group-hover:glow-matrix transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-matrix/60 font-mono leading-relaxed h-[65px] overflow-y-auto pr-2 scrollbar-thin">
                      {project.desc}
                    </p>
                  </div>

                  {/* Skills nodes used */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.specs.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono text-[#ffffff]/80 bg-black/60 border border-matrix/10 px-2 py-0.5 uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Realtime database performance rates */}
                  <div className="flex items-center justify-between border-t border-matrix/10 pt-4 mt-auto">
                    <div className="space-y-1">
                      <span className="block text-[8px] font-mono text-matrix/40 uppercase">THROUGHPUT</span>
                      <span className="text-[10px] font-mono text-matrix-neon font-bold uppercase tracking-wider bg-matrix-dark/20 px-2 py-1">
                        {project.metrics} / {project.qps}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="p-2 border border-matrix/20 bg-black hover:border-matrix-neon hover:text-black hover:bg-matrix transition-all duration-300 rounded-none text-matrix"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Cyber anchors */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matrix group-hover:border-matrix-neon" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matrix group-hover:border-matrix-neon" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
