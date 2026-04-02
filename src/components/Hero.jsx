// 4. src/components/Hero.jsx
// Restaurado seu Hero Original com os Blocos Coloridos e Mosaicos
// AJUSTE: Removido o papel com clipe do mosaico da direita
import React from 'react';
import { motion } from 'framer-motion';

const LeftMosaic = () => (
  <div className="absolute top-0 left-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none opacity-40">
    <div className="absolute top-[-10px] -left-10 w-32 h-32 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute top-32 left-8 w-24 h-24 bg-brand-blue rotate-45 shadow-lg" />
    <div className="absolute top-64 -left-6 w-36 h-36 bg-brand-yellow rotate-45 shadow-lg" />
    <div className="absolute top-48 left-16 w-16 h-16 bg-brand-orange rotate-45 shadow-lg" />
    <div className="absolute bottom-20 -left-4 w-28 h-28 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute bottom-[-20px] left-12 w-20 h-20 bg-brand-green rotate-45 shadow-lg" />
  </div>
);

const RightMosaic = () => (
  <div className="absolute top-0 right-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none hidden sm:block opacity-40">
    <div className="absolute top-10 -right-10 w-32 h-32 bg-brand-blue rotate-45 shadow-lg" />
    <div className="absolute top-40 right-8 w-28 h-28 bg-brand-yellow rotate-45 shadow-lg" />
    <div className="absolute top-[350px] -right-4 w-36 h-36 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute top-64 right-16 w-16 h-16 bg-brand-green rotate-45 shadow-lg" />
    <div className="absolute bottom-24 -right-10 w-28 h-28 bg-brand-orange rotate-45 shadow-lg" />
    {/* O papel com clipe foi removido daqui */}
  </div>
);

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full pt-32 pb-40 lg:pt-40 lg:pb-56 min-h-[700px] flex justify-center bg-gray-100 overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-white">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero_child_blocks.png" 
          alt="Boomi Kids" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent"></div>
      </div>

      <LeftMosaic />
      <RightMosaic />

      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center relative z-20">
        
        {/* Slogan Topo Badge (ROXO VIBRANTE) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
           className="bg-[#5C339E] text-[#FFD500] font-bold px-8 py-3 rounded-full mb-8 shadow-2xl tracking-[0.2em] text-xs md:text-sm border-2 border-white/40 uppercase z-30"
        >
          ✨ Onde a Sabedoria Acolhe a Infância
        </motion.div>

        {/* Blocos Coloridos Mágicos (Post-It Style) */}
        <div className="flex flex-col items-center space-y-2 md:space-y-3 mb-10 select-none">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            className="inline-block bg-brand-pink text-white font-bold text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-xl uppercase tracking-widest"
          >
            GARANTA
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            className="inline-block bg-brand-blue text-white font-bold text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-xl uppercase tracking-widest"
          >
            O FUTURO
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            className="inline-block bg-brand-yellow text-brand-purple font-bold text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-xl uppercase tracking-widest"
          >
            DE QUEM
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            className="inline-block bg-brand-orange text-white font-bold text-4xl md:text-5xl lg:text-7xl px-5 py-2 shadow-xl uppercase tracking-widest"
          >
            VOCÊ AMA
          </motion.div>
        </div>

        <motion.p 
          className="text-gray-800 bg-white/80 backdrop-blur-md px-10 py-6 rounded-[3rem] text-lg font-bold max-w-xl mb-10 leading-relaxed border-2 border-white shadow-2xl"
        >
          Transformamos a Educação Infantil em uma grande aventura diária, oferecendo estrutura segura, aconchegante e voltada para o protagonismo da criança.
        </motion.p>
      </div>
    </section>
  );
};
export default Hero;
