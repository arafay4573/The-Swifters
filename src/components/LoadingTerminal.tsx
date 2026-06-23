import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingTerminalProps {
  onComplete: () => void;
  key?: string;
}

const TERMINAL_LOGS = [
  { text: "ssh core@swifters.system -p 3000", delay: 100 },
  { text: "CONNECTING TO SECURITY NODE PROTOCOL...", delay: 400 },
  { text: "ESTABLISHED ENCRYPTED SHA-512 LINK [SUCCESS]", delay: 800 },
  { text: "INITIALIZING GEOMOTION QUANTUM CORE...", delay: 1000 },
  { text: "COMPILING WEBGL ACCELERATORS... [100%]", delay: 1300 },
  { text: "LOADING CYBERPUNK_PORTFOLIO_V4.BIN...", delay: 1500 },
  { text: "OVERRIDING LEGACY CYAN COLORS... RESOLVED.", delay: 1800 },
  { text: "SYS_KEY MATCHED: 'QUICK TO CREATE, BOLD TO INNOVATE'", delay: 2100 },
  { text: "BOOTSTRAPPING BRAND CORE MATRIX...", delay: 2400 },
  { text: "ACCESS GRANTED. INITIALIZING SWIFTERS INTERACTIVE CORE...", delay: 2700 },
];

export default function LoadingTerminal({ onComplete }: LoadingTerminalProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentIndex < TERMINAL_LOGS.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, TERMINAL_LOGS[currentIndex].text]);
        setCurrentIndex((prev) => prev + 1);
      }, TERMINAL_LOGS[currentIndex].delay - (currentIndex > 0 ? TERMINAL_LOGS[currentIndex - 1].delay : 0));
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Sync progress bar
    if (currentIndex > 0) {
      const targetProgress = Math.min(100, Math.floor((currentIndex / TERMINAL_LOGS.length) * 100));
      setProgress(targetProgress);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === TERMINAL_LOGS.length) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 900); // Small pause for user to soak in success
      return () => clearTimeout(completionTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      id="matrix-terminal-loader"
      className="fixed inset-0 bg-[#000000] z-[99999] font-mono flex flex-col justify-between p-6 select-none"
      exit={{
        opacity: 0,
        filter: "hue-rotate(90deg) brightness(2)",
        transition: { duration: 0.6, ease: "easeOut" }
      }}
    >
      {/* Background terminal scanline overlay */}
      <div className="absolute inset-0 terminal-overlay opacity-30 pointer-events-none" />

      {/* Header Panel */}
      <div className="flex justify-between items-center text-xs text-matrix/60 border-b border-matrix/20 pb-3 relative z-10">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-matrix animate-pulse" />
          <span>SWIFTERS SECURE VIRTUAL MACHINE v4.11.0</span>
        </div>
        <div>UTC: {new Date().toISOString().replace("T", " ").substring(0, 19)}</div>
      </div>

      {/* Terminal Main Stream */}
      <div className="flex-1 my-6 overflow-y-auto space-y-2 text-sm max-w-4xl relative z-10 scrollbar-none">
        {logs.map((log, index) => {
          const isSuccess = log.includes("[SUCCESS]") || log.includes("GRANTED") || log.includes("RESOLVED");
          const isCommand = log.startsWith("ssh");
          return (
            <motion.div
              key={index}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={`flex items-start ${
                isSuccess
                  ? "text-matrix-neon font-bold glow-matrix"
                  : isCommand
                  ? "text-white"
                  : "text-matrix/80"
              }`}
            >
              <span className="text-matrix mr-2">&gt;</span>
              {log}
            </motion.div>
          );
        })}
        {currentIndex < TERMINAL_LOGS.length && (
          <span className="inline-block w-2.5 h-4 bg-matrix animate-pulse ml-2" />
        )}
      </div>

      {/* Loading Progress & Actions */}
      <div className="border-t border-matrix/20 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-xs text-matrix/60">
        <div className="w-full sm:w-96">
          <div className="flex justify-between mb-1.5 font-bold text-matrix">
            <span>COMPILING CODESYNERGY:</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-matrix-dark/40 border border-matrix/30 rounded-none overflow-hidden p-[1px]">
            <motion.div
              className="h-full bg-matrix shadow-[0_0_8px_#00ff66]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>

        <button
          onClick={onComplete}
          className="px-4 py-2 bg-matrix/10 border border-matrix/40 hover:bg-matrix hover:text-black hover:box-glow-matrix transition-all duration-300 rounded-none font-bold tracking-wider tracking-widest text-[10px] "
        >
          BYPASS COMPILING [ESC]
        </button>
      </div>
    </motion.div>
  );
}
