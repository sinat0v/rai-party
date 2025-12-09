import React, { useState, useEffect } from 'react';

const ACHIEVEMENTS = [
  "🏆 Достижение: Потратил жизнь зря",
  "🏆 Достижение: Стал гражданином РАЯ",
  "🏆 Достижение: Ликса довольна",
  "🏆 Достижение: Не нашел смысла..",
  "🏆 Достижение: Продал гараж",
  "🏆 Достижение: Шиш наблюдает",
  "🏆 Достижение: Потрогал траву (Fake News)"
];

const AchievementToast: React.FC = () => {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const trigger = () => {
      const randomText = ACHIEVEMENTS[Math.floor(Math.random() * ACHIEVEMENTS.length)];
      setCurrent(randomText);
      setTimeout(() => setCurrent(null), 4000); // Show for 4s
    };

    const interval = setInterval(trigger, 15000 + Math.random() * 5000); // Every 15-20s
    
    // Initial trigger
    const initialTimer = setTimeout(trigger, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, []);

  if (!current) return null;

  return (
    <div className="fixed top-24 right-4 z-[60] animate-[float_1s_ease-out]">
      <div className="glass-panel px-6 py-4 rounded-lg flex items-center gap-3 border-l-4 border-yellow-400">
        <div className="text-2xl animate-bounce">✨</div>
        <div>
           <h4 className="text-xs text-yellow-400 font-bold uppercase tracking-wider">Новое достижение</h4>
           <p className="text-white text-sm font-medium">{current}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementToast;