import { useState, FormEvent } from "react";
import { Terminal, Send, CheckCircle2, ShieldCheck, Mail, Globe, MapPin, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import workWithUsImg from "../assets/images/work_with_us_1782231099065.jpg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setLogs([]);

    // Simulate cybernetic terminal message transmission logs
    const simulationSteps = [
      "INITIALIZING SECURE SOCKET LINK...",
      "ESTABLISHING SYNERGY COMM BUFFER...",
      "ENCRYPTING TRANSMISSION PACKETS [AES-256]...",
      "ROUTING PACKETS VIA NODE_SWIFTERS_CORE...",
      "TESTING AUTHENTICITY SECURE HANDSHAKE... [OK]",
      "MESSAGE SUCCESSFULLY ENQUEUED TO SWIFTERS DATABASE PROTOCOL!",
    ];

    simulationSteps.forEach((step, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (idx === simulationSteps.length - 1) {
          setLoading(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        }
      }, (idx + 1) * 700);
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black flex flex-col justify-center border-t border-matrix/20 pb-32"
    >
      {/* Absolute layered decorative grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.95),rgba(3,10,5,0.97))] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-matrix/30 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-matrix-neon uppercase tracking-widest">
              <Terminal className="w-4 h-4 animate-pulse" />
              <span>LOG_05 / TRANS_COMM // ACCESS_SHELL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase sm:leading-none">
              INITIALIZE <span className="text-matrix-neon glow-matrix">CONTACT</span>
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-matrix/50 text-left md:text-right">
            <span>ADDR: 0.0.0.0:3000 // ROUTE</span>
            <span className="block mt-1">SEC_STATUS: SECURE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Form container (7 columns) */}
          <div className="lg:col-span-7 bg-matrix-dark/10 border border-matrix/20 p-8 shadow-[0_0_30px_rgba(0,255,102,0.03)] hover:border-matrix/40 transition-colors duration-300 relative">

            {/* Corner visual tech lines */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-matrix-neon" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matrix-neon" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matrix-neon" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-matrix-neon" />

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-matrix/60 font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-matrix-neon" />
                <span>SECURE_COMMUNICATION_LINK_GATEWAY</span>
              </div>

              {!submitted && !loading ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Visitor Name Field */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-matrix/50 uppercase font-black tracking-widest">
                        VISITOR_NAME_STRING
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. CORE_USER"
                        className="w-full bg-black border border-matrix/20 hover:border-matrix/50 focus:border-matrix-neon outline-none px-4 py-3 text-xs font-mono text-white placeholder-matrix/20 rounded-none focus:box-glow-matrix transition-all"
                      />
                    </div>

                    {/* Visitor Email Field */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-matrix/50 uppercase font-black tracking-widest">
                        COMM_EMAIL_NODE
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. USER@SYS.NET"
                        className="w-full bg-black border border-matrix/20 hover:border-matrix/50 focus:border-matrix-neon outline-none px-4 py-3 text-xs font-mono text-white placeholder-matrix/20 rounded-none focus:box-glow-matrix transition-all"
                      />
                    </div>

                  </div>

                  {/* Visitor Message Field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-matrix/50 uppercase font-black tracking-widest">
                      ENCRYPTED_CIPHER_TXT
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      placeholder="ENTER PROTOCOLS OR PROMPT DESCRIPTION HERE..."
                      className="w-full bg-black border border-matrix/20 hover:border-matrix/50 focus:border-matrix-neon outline-none px-4 py-4 text-xs font-mono text-white placeholder-matrix/20 rounded-none focus:box-glow-matrix transition-all resize-none"
                    />
                  </div>

                  {/* Submit Trigger button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full sm:w-auto px-8 py-3.5 bg-matrix border border-matrix hover:border-matrix-neon text-black hover:text-matrix-neon font-bold font-sans tracking-widest text-xs uppercase overflow-hidden transition-all duration-300 rounded-none"
                    >
                      <span className="absolute inset-x-0 bottom-0 top-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-0 origin-bottom" />
                      <span className="relative z-10 flex items-center justify-center gap-2 font-mono">
                        <Send className="w-4 h-4" />
                        TRANSMIT SECURE DATA REACH
                      </span>
                    </button>
                  </div>
                </form>
              ) : loading ? (
                /* Interactive transmission terminal logging dashboard */
                <div className="space-y-4 font-mono bg-black/60 p-6 border border-matrix/20 rounded-none min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-2 text-xs">
                    <div className="text-matrix/40 uppercase font-bold text-[9px] mb-2">STREAMING_PACKET_TRACE:</div>
                    {logs.map((log, index) => (
                      <div key={index} className="flex items-center gap-2 text-matrix-neon">
                        <span className="text-matrix/40">&gt;&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-white">
                      <span className="w-2 h-2.5 bg-matrix animate-pulse" />
                      <span>PENDING ROUTER ACTION...</span>
                    </div>
                  </div>
                  <div>
                    <div className="h-1 bg-matrix animate-pulse" />
                  </div>
                </div>
              ) : (
                /* Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-12 font-mono"
                >
                  <div className="w-16 h-16 border border-matrix bg-matrix-dark/10 flex items-center justify-center mx-auto box-glow-matrix animate-bounce">
                    <CheckCircle2 className="w-8 h-8 text-matrix-neon" />
                  </div>
                  <h3 className="text-sm font-black text-white tracking-widest uppercase">
                    SYS_LINK: SUCCESSFUL ENQUEUE
                  </h3>
                  <p className="text-xs text-matrix/60 max-w-md mx-auto leading-relaxed">
                    Packet sequences have been successfully routed and transmitted safely to the Swifters main cognitive loop. Our technical core will review and respond via mail node shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 border border-matrix/30 hover:border-matrix text-matrix text-xs hover:bg-matrix/10 rounded-none transition-all duration-300 pointer-events-auto"
                  >
                    SEND ANOTHER PACKET Link
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Core Info metadata (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-xs font-mono text-matrix/60">

            {/* Workspace visual overlay */}
            <div className="relative border border-matrix/20 p-1 bg-black group hover:border-matrix-neon/30 transition-all duration-300">
              <div className="relative overflow-hidden border border-matrix/10 h-44">
                <img
                  src={workWithUsImg}
                  alt="Work with us - The Swifters Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-20" />
              </div>
              <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 border border-matrix-neon/30 text-[8px] text-matrix-neon uppercase tracking-widest">
                STREAM_MONITOR_WORK
              </div>
            </div>

            {/* Headquarters details */}
            <div className="bg-matrix-dark/10 border border-matrix/15 p-6 space-y-4">
              <span className="text-[10px] text-matrix-neon font-black tracking-widest uppercase border-b border-matrix/10 pb-2 block">
                MAIN_HQ_COORDINATES
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-matrix-neon mt-0.5" />
                  <span>
                    GRID SECTOR: ISB-B17<br />
                    Block-C, B-17,<br />
                    Islamabad, Pakistan
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-matrix-neon" />
                  <a href="mailto:theswiftersduo@gmail.com" className="hover:text-matrix-neon underline decoration-matrix-neon/30">
                    theswiftersduo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-matrix-neon" />
                  {/* Mobile: Native Dialer */}
                  <a href="tel:+923330147310" className="md:hidden hover:text-matrix-neon underline decoration-matrix-neon/30">
                    +92 333 0147310
                  </a>
                  {/* Desktop: WhatsApp API */}
                  <a href="https://wa.me/923330147310" target="_blank" rel="noopener noreferrer" className="hidden md:inline hover:text-matrix-neon underline decoration-matrix-neon/30">
                    +92 333 0147310
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-matrix-neon" />
                  <a href="https://www.linkedin.com/in/theswifters" target="_blank" rel="noopener noreferrer" className="hover:text-matrix-neon underline decoration-matrix-neon/30">
                    /in/theswifters
                  </a>
                </div>
              </div>
            </div>

            {/* Neural encryption diagnostic warning panel */}
            <div className="bg-matrix-dark/5 border border-matrix/10 p-6 space-y-3 relative overflow-hidden">
              <div className="absolute right-[-10px] bottom-[-10px] text-matrix/5 font-bold text-5xl">SEC</div>
              <span className="text-[10px] text-red-500 font-bold tracking-widest uppercase block animate-pulse">
                !! SECURITY NOTICE !!
              </span>
              <p className="leading-relaxed text-[11px] text-matrix/40">
                All communications sent over our terminal interface are fully validated using AES-256 secure encryption schemas, locking out packet manipulation. Keep transmission parameters clean of unencrypted credentials. Swifters values absolute data telemetry safety.
              </p>
            </div>

            {/* Footer copyright marker info */}
            <div className="text-center lg:text-left text-[10px] text-matrix/30 space-y-2">
              <span>© 2026 SWIFTERS INC.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
