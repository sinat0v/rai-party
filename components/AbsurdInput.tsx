import React, { useState } from 'react';

const PHRASE = "БЛА-БЛА-БЛА КУПИ ГАРАЖ БЛА-БЛА-БЛА СЛАВА ПАРТИИ БЛА-БЛА-БЛА ";

const AbsurdInput: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLen = e.target.value.length;
    // Repeat the phrase enough times to cover the input length
    const mockText = PHRASE.repeat(Math.ceil(inputLen / PHRASE.length) + 1);
    setValue(mockText.substring(0, inputLen));
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Ваше мнение очень важно! (похуй)..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-mono"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/20 pointer-events-none">
        ОТПРАВИТЬ ↵
      </div>
    </div>
  );
};

export default AbsurdInput;