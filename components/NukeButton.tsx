import React from 'react';

interface NukeButtonProps {
  onClick: () => void;
}

const NukeButton: React.FC<NukeButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative w-16 h-16 rounded-full bg-red-600 border-4 border-red-800 flex items-center justify-center overflow-hidden hover:scale-110 active:scale-95 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.6)]"
      title="DO NOT PRESS"
    >
      <div className="absolute inset-0 bg-red-500/20 animate-ping rounded-full"></div>
      <span className="text-2xl z-10 group-hover:animate-spin">☢️</span>
    </button>
  );
};

export default NukeButton;