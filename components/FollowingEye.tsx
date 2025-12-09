import React, { useEffect, useState, useRef } from 'react';

const FollowingEye: React.FC = () => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(rect.width / 4, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10);
      
      setPupilPos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
       {/* Sclera */}
      <div 
        ref={eyeRef}
        className="w-20 h-20 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden relative"
      >
        {/* Veins */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_transparent_30%,_#ff0000_100%)]"></div>
        
        {/* Pupil */}
        <div 
          className="w-8 h-8 bg-black rounded-full relative z-10 transition-transform duration-75 ease-out border-4 border-red-500"
          style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
        >
            <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
      <div className="absolute -bottom-8 text-[10px] text-white/30 font-mono tracking-widest whitespace-nowrap">
        МЫ СЛЕДИМ
      </div>
    </div>
  );
};

export default FollowingEye;