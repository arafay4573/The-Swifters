import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Position for the core reticle (Instant tracker)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Inertial spring settings for trailing crosshair ring
  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Event delegation to check for hover status on clickable components
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  // Disable custom cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div id="matrix-custom-cursor-container" className="fixed inset-0 pointer-events-none z-[999999]">
      {/* 1. Core Reticle Center Dot (Instant Track) */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-matrix rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen shadow-[0_0_8px_#00ff66]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: clicked ? 1.5 : isHovered ? 1.2 : 1,
          backgroundColor: isHovered ? "#39ff14" : "#00ff66",
        }}
      />

      {/* 2. Inertial Trailing Crosshair / Target Ring (Lagging) */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-matrix/40 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          scale: clicked ? 0.75 : isHovered ? 1.8 : 1.1,
          borderColor: isHovered ? "#39ff14" : "rgba(0, 255, 102, 0.5)",
          borderWidth: isHovered ? "2px" : "1px",
          rotate: isHovered ? 135 : 0,
        }}
        transition={{
          rotate: { type: "spring", stiffness: 80, damping: 15 },
          scale: { type: "spring", stiffness: 200, damping: 20 }
        }}
      >
        {/* Subtle Cybernetic Crosshair Ticks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-matrix/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-matrix/60" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-matrix/60" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-matrix/60" />

        {/* Glow halo when hovered */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full border border-matrix-neon/20 animate-ping"
            style={{ animationDuration: "1.5s" }}
          />
        )}
      </motion.div>
    </div>
  );
}
