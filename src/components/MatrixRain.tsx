import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device Pixel Ratio for sharp rendering
    const scale = window.devicePixelRatio;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * scale;  // Adjust width for pixel ratio
      canvas.height = window.innerHeight * scale; // Adjust height for pixel ratio
      ctx.scale(scale, scale); // Scale the context to match the pixel ratio
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);  // Calculate based on scaled canvas width
    const drops: number[] = [];
    const dropSpeed = 1; // The actual speed of the drops moving down

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    const draw = () => {
      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Make the green color brighter
        const green = 400 + Math.random() * 55; // Increase the green value for brightness
        ctx.fillStyle = `rgba(0, ${green}, 0, 1)`; // Full opacity for a brighter effect
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move the drop down at the original rate without affecting spacing
        drops[i] += dropSpeed; 
      }
    };

    const interval = setInterval(draw, 50); // Slow down frame updates (was 33ms)

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default MatrixRain;
