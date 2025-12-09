import React from 'react';

const MinerConsole: React.FC = () => {
  return (
    <div className="w-full bg-black/50 border-t border-white/5 font-mono text-[10px] md:text-xs text-green-500/70 py-2 overflow-hidden whitespace-nowrap select-none pointer-events-none">
      <div className="inline-block animate-[marquee_10s_linear_infinite]">
        Initiating Protocol 414... Mining SHISH-COIN... Hash: 0x93f... +1 SHISH... CPU Temp: 98°C... GPU Overload... Stealing Wifi... +1 SHISH... [WARNING] HUETA DETECTED... Mining... 
        Initiating Protocol 416... Mining SHISH-COIN... Hash: 0x93f... +1 SHISH... CPU Temp: 98°C... GPU Overload... Stealing Wifi... +1 SHISH... [WARNING] HUETA DETECTED... Mining...
      </div>
    </div>
  );
};

export default MinerConsole;