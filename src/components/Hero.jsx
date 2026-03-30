import React from 'react';
import { motion } from 'framer-motion';

const LeftMosaic = () => (
  <div className="absolute top-0 left-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none">
    {/* Large blocks */}
    <div className="absolute top-[-10px] -left-10 w-32 h-32 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute top-32 left-8 w-24 h-24 bg-brand-blue rotate-45 shadow-lg" />
    <div className="absolute top-64 -left-6 w-36 h-36 bg-brand-yellow rotate-45 shadow-lg" />
    <div className="absolute top-48 left-16 w-16 h-16 bg-brand-orange rotate-45 shadow-lg" />
    <div className="absolute bottom-20 -left-4 w-28 h-28 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute bottom-[-20px] left-12 w-20 h-20 bg-brand-green rotate-45 shadow-lg" />
    {/* Small blocks */}
    <div className="absolute top-20 left-24 w-8 h-8 bg-brand-yellow rotate-45 shadow-md" />
    <div className="absolute top-80 left-12 w-12 h-12 bg-brand-blue rotate-45 shadow-md" />
    <div className="absolute bottom-10 left-14 w-10 h-10 bg-brand-orange rotate-45 shadow-md" />
  </div>
);

const RightMosaic = () => (
  <div className="absolute top-0 right-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none hidden sm:block">
    {/* Large blocks */}
    <div className="absolute top-10 -right-10 w-32 h-32 bg-brand-blue rotate-45 shadow-lg" />
    <div className="absolute top-40 right-8 w-28 h-28 bg-brand-yellow rotate-45 shadow-lg" />
    <div className="absolute top-[350px] -right-4 w-36 h-36 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute top-64 right-16 w-16 h-16 bg-brand-green rotate-45 shadow-lg" />
    <div className="absolute bottom-24 -right-10 w-28 h-28 bg-brand-orange rotate-45 shadow-lg" />
    {/* Small blocks */}
    <div className="absolute top-8 right-20 w-8 h-8 bg-brand-orange rotate-45 shadow-md" />
    <div className="absolute top-32 right-32 w-10 h-10 bg-brand-pink rotate-45 shadow-md" />
    <div className="absolute bottom-16 right-20 w-12 h-12 bg-brand-yellow rotate-45 shadow-md" />
    <div className="absolute top-80 right-28 w-10 h-10 bg-brand-blue rotate-45 shadow-md" />
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative w-full pt-32 pb-40 lg:pt-40 lg:pb-56 min-h-[700px] flex justify-center bg-gray-100 overflow-hidden">
      
      {/* Background Image full screen */}
      <div className="absolute inset-0 z-0 bg-white">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero_child_blocks.png" 
          alt="Criança brincando com blocos Mágicos" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent"></div>
      </div>

      <LeftMosaic />
      <RightMosaic />

      {/* Content Centralized */}
      <div className="container mx-auto px-6 flex flex-col justify-center items-center lg:items-center text-center relative z-20">
        
        {/* Slogan Top Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
           className="bg-brand-purple text-brand-yellow font-fun font-bold px-6 py-2.5 rounded-full mb-6 shadow-xl tracking-widest text-xs md:text-sm border-2 border-white/40 uppercase z-30"
        >
          ✨ Onde a Sabedoria Acolhe a Infância
        </motion.div>

        {/* Rotated Magic Blocks (Post-It style) */}
        <div className="flex flex-col items-center space-y-2 md:space-y-3 mb-10 select-none">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="inline-block bg-brand-pink text-white font-fun text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-[4px_4px_0_rgba(0,0,0,0.15)] uppercase tracking-widest"
          >
            GARANTA
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block bg-brand-blue text-white font-fun text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-[4px_4px_0_rgba(0,0,0,0.15)] uppercase tracking-widest"
          >
            O FUTURO
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="inline-block bg-brand-yellow text-brand-purple font-fun text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-[4px_4px_0_rgba(0,0,0,0.15)] uppercase tracking-widest"
          >
            DE QUEM
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="inline-block bg-brand-orange text-white font-fun text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-[4px_4px_0_rgba(0,0,0,0.15)] uppercase tracking-widest"
          >
            VOCÊ AMA
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-brand-text bg-white/80 backdrop-blur-md px-6 md:px-10 py-4 rounded-[2rem] text-sm md:text-lg font-sans max-w-xl mb-10 leading-relaxed font-bold border-2 border-white shadow-xl"
        >
          Transformamos a educação infantil em uma grande aventura diária, oferecendo estrutura segura, aconchegante e voltada para o protagonismo da criança.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-30"
        >
          <a href="#plans" className="bg-brand-green hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center font-fun tracking-widest">
            SAIBA MAIS
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
