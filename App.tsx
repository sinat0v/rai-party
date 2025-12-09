import React, { useState } from 'react';
import TiltCard from './components/TiltCard';
import BudgetCounter from './components/BudgetCounter';
import LogicSwitch from './components/LogicSwitch';
import NukeButton from './components/NukeButton';
import AbsurdInput from './components/AbsurdInput';
import MinerConsole from './components/MinerConsole';
import FollowingEye from './components/FollowingEye';
import AchievementToast from './components/AchievementToast';
import { Leader } from './types';

// Updated Leader Data
const LEADERS: Leader[] = [
  {
    id: 1,
    name: 'ГЕНСЕК СИНАТ',
    title: 'ГЕНЕРАЛЬНЫЙ СЕКРЕТАРЬ',
    role: 'Supreme Leader',
    image: 'https://i.imgur.com/NRgVDz9.jpeg',
    telegram: '@sinatoff',
    link: 'https://t.me/sinatoff'
  },
  {
    id: 2,
    name: 'ИМПЕРАТРИЦА ЛИКСА',
    title: 'ГОСУДАРСТВЕННЫЙ СЕКРЕТАРЬ',
    role: 'Imperial Majesty',
    image: 'https://i.imgur.com/3oRghIl.jpeg',
    telegram: '@fmxji',
    link: 'https://t.me/fmxji'
  },
  {
    id: 3,
    name: 'ПРОРОК МИШ ШИШ',
    title: 'ДУХОВНЫЙ ЛИДЕР НАЦИИ',
    role: 'The Oracle',
    image: 'https://i.imgur.com/8LFt7tR.jpeg',
    telegram: '@mish_shish_416',
    link: 'https://t.me/mish_shish_416'
  }
];

const App: React.FC = () => {
  const [isNuking, setIsNuking] = useState(false);

  const handleNuke = () => {
    setIsNuking(true);
    setTimeout(() => {
      alert("ОЙ, БЛЯ");
      setIsNuking(false);
    }, 3000);
  };

  return (
    <div className={`min-h-screen text-white relative overflow-x-hidden selection:bg-purple-500 selection:text-white transition-colors duration-100 ${isNuking ? 'animate-shake animate-flash' : ''}`}>
      
      {/* Notifications */}
      <AchievementToast />

      {/* Background Layer */}
      <div className="fixed inset-0 z-[-1] animate-gradient-bg bg-gradient-to-br from-[#0a0514] via-[#100318] to-black"></div>
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] animate-float z-[-1]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] animate-float z-[-1]" style={{ animationDelay: '3s' }}></div>


      {/* A) HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5 h-20 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
           <span className="text-2xl animate-bounce">🍒</span>
           <div className="flex flex-col justify-center leading-none">
             <span className="text-[10px] text-white/50 lowercase tracking-wide mb-0.5">создано</span>
             <span className="font-bold text-sm md:text-xl tracking-widest block whitespace-nowrap">CERISE STUDIO</span>
           </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
           <LogicSwitch />
        </div>

        <BudgetCounter />
      </header>


      <main className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center max-w-7xl">
        
        {/* B) HERO SECTION */}
        <section className="w-full flex flex-col items-center text-center mb-32 relative z-10">
          
          <TiltCard className="relative mb-12 rounded-lg p-2 glass-panel border border-white/10 group max-w-3xl w-full">
            <div className="relative overflow-hidden rounded-md">
               <img 
                src="https://i.imgur.com/OMi7DjI.jpeg" 
                alt="Banner" 
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-left">
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-2 drop-shadow-2xl">
                  РАЙСКИЙ ЗАВЕТ
                </h1>
                <p className="text-lg md:text-2xl font-light tracking-[0.2em] text-purple-200 opacity-80 uppercase border-l-4 border-purple-500 pl-4">
                  Федеративная Республика Суверенитета
                </p>
              </div>
            </div>
          </TiltCard>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <a 
              href="https://t.me/RaiskiyZavet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black font-extrabold text-xl uppercase tracking-widest hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] skew-x-[-10deg] hover:skew-x-0"
            >
              ВСТУПИТЬ В ПАРТИЮ
            </a>
            
            <NukeButton onClick={handleNuke} />
          </div>

        </section>


        {/* C) IDEOLOGY BLOCK */}
        <section className="w-full max-w-4xl mb-32">
          <TiltCard className="glass-panel p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 text-9xl opacity-5 rotate-12 select-none">🕊️</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">
              НАШИ ЦЕННОСТИ
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/80">
              Мы верим в радикальный <span className="text-purple-400 font-bold">фурри-центризм</span>, 
              мемную экономику и <span className="text-red-400 font-bold">анархо-шишизм</span>. 
              Наша цель — построить Рай, где не надо работать, 
              <span className="text-white font-medium"> а созерцать вечное сияние нашего суверенитета.</span>
            </p>
          </TiltCard>
        </section>


        {/* D) LEADERS BLOCK */}
        <section className="w-full mb-32">
           <div className="text-center mb-16">
              <span className="text-purple-500 font-mono text-sm tracking-[0.5em] uppercase block mb-2">Government</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase">Вожди</h2>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
            {LEADERS.map((leader) => (
              <TiltCard key={leader.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-colors">
                <div className="h-96 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-90"></div>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-black mb-1 text-white italic">{leader.name}</h3>
                    <div className="h-0.5 w-12 bg-purple-500 mb-2 group-hover:w-full transition-all duration-500"></div>
                    <p className="text-gray-300 text-[10px] font-mono uppercase tracking-widest leading-relaxed">{leader.title}</p>
                  </div>
                </div>
                <div className="p-4 border-t border-white/5 bg-black/20 flex justify-between items-center">
                   <span className="text-xs text-white/30">ID: 00{leader.id}</span>
                   <a href={leader.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-purple-400 hover:text-white transition-colors">{leader.telegram} ↗</a>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>


        {/* E) FEEDBACK BLOCK */}
        <section className="w-full max-w-2xl mb-24">
           <TiltCard className="glass-panel p-8 md:p-12 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-8 uppercase">Обратная связь</h3>
              <AbsurdInput />
           </TiltCard>
        </section>

      </main>

      {/* F) FOOTER */}
      <footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-3xl relative z-10">
         <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
               <h4 className="text-xl font-bold tracking-widest">CERISE STUDIO</h4>
               <p className="text-white/40 text-xs">
                  Разработано в <a href="https://t.me/CeriseStudio" className="text-purple-400 hover:text-white transition-colors underline decoration-purple-500/30">Cerise Studio</a>
               </p>
               <p className="text-white/20 text-[10px] mt-2 max-w-xs">
                  © 2025. Все права защищены и нарушены одновременно. 
               </p>
            </div>

            {/* EYE FEATURE */}
            <FollowingEye />

         </div>
         
         {/* MINER FEATURE */}
         <MinerConsole />
      </footer>

    </div>
  );
};

export default App;