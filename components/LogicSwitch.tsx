import React, { useState, useEffect } from 'react';

const LogicSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        setIsOn(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOn]);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Здравый смысл</span>
      <button 
        onClick={() => setIsOn(true)}
        className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 relative ${isOn ? 'bg-green-500' : 'bg-gray-700'}`}
      >
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-7' : 'translate-x-0'}`} />
      </button>
    </div>
  );
};

export default LogicSwitch;