import { useEffect, useRef } from "react";

interface MatrixRainProps {
  opacity?: number;
}

export default function MatrixRain({ opacity = 0.15 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Characters from Matrix (Katakana, numbers, uppercase latin)
    const alphabet = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    const rainDrops: number[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.ceil(canvas.width / fontSize);
      while (rainDrops.length < columns) {
        rainDrops.push(Math.random() * -100);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      // Create trailing effect with low-opacity black fill
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        // Random character
        const char = alphabet[Math.floor(Math.random() * alphabet.length)];

        // Highlight head of drop with bright white-green
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (y > 0) {
          // Head drop gets full white/light-green glow
          if (Math.random() > 0.98) {
            ctx.fillStyle = "#ffffff";
          } else {
            // Neon Matrix Green
            ctx.fillStyle = "#00ff66";
          }
          ctx.fillText(char, x, y);

          // Render secondary faint drops for multi-layered depth
          if (Math.random() > 0.5) {
            ctx.fillStyle = "rgba(57, 255, 20, 0.35)";
            ctx.fillText(alphabet[Math.floor(Math.random() * alphabet.length)], x, y - fontSize);
          }
        }

        // Send drop back to top randomly or keep descending
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        } else {
          // Custom speed variations
          rainDrops[i] += 1;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="matrix-rain-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
      style={{ opacity, zIndex: 1 }}
    />
  );
}
