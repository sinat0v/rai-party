import React, { useState, useRef, useEffect } from 'react';

const RunawayButton: React.FC = () => {
  const [position, setPosition] = useState<{ top: string; left: string } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveButton = () => {
    if (!containerRef.current || !buttonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = buttonRef.current.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({
      top: `${randomY}px`,
      left: `${randomX}px`,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      
      const btnRect = buttonRef.current.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const btnCenterY = btnRect.top + btnRect.height / 2;

      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

      if (dist < 100) { // Distance threshold
        moveButton();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-32 md:h-24 flex items-center justify-center overflow-hidden">
      <button
        ref={buttonRef}
        onClick={moveButton} // Just in case they somehow click it
        className="px-6 py-3 bg-red-600/20 backdrop-blur-md border border-red-500/50 text-red-200 font-bold tracking-widest uppercase rounded shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-200 z-10 whitespace-nowrap"
        style={{
          position: position ? 'absolute' : 'relative',
          top: position?.top,
          left: position?.left,
          transition: 'top 0.2s ease-out, left 0.2s ease-out',
        }}
      >
        ПОЖАЛОВАТЬСЯ НА КРИНЖ
      </button>
    </div>
  );
};

export default RunawayButton;