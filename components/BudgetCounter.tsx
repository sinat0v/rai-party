import React, { useState, useEffect } from 'react';

const BudgetCounter: React.FC = () => {
  // Starting at approx 145 Billion
  const [amount, setAmount] = useState(145009000000);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmount(prev => prev + Math.floor(Math.random() * 500000));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-end">
      <span className="text-[10px] text-red-400 font-mono tracking-widest uppercase">Украдено бюджета</span>
      <span className="font-mono text-sm md:text-2xl font-bold text-red-500 tabular-nums shadow-red-500/50 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)] whitespace-nowrap">
        {amount.toLocaleString('ru-RU')} ₽
      </span>
    </div>
  );
};

export default BudgetCounter;