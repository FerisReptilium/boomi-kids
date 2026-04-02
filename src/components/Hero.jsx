import React from 'react';
import { motion } from 'framer-motion';

const LeftMosaic = () => (
  <div className="absolute top-0 left-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none opacity-20">
    <div className="absolute top-[-10px] -left-10 w-32 h-32 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute top-32 left-8 w-24 h-24 bg-brand-blue rotate-45 shadow-lg" />
    <div className="absolute top-64 -left-6 w-36 h-36 bg-brand-yellow rotate-45 shadow-lg" />
    <div className="absolute top-48 left-16 w-16 h-16 bg-brand-orange rotate-45 shadow-lg" />
  </div>
);

const RightMosaic = () => (
  <div className="absolute top-0 right-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none hidden sm:block opacity-20">
    <div className="absolute top-10 -right-10 w-32 h-32 bg-brand-blue rotate-45 shadow-lg" />
    <div className="absolute top-40 right-8 w-28 h-28 bg-brand-yellow rotate-45 shadow-lg" />
    <div className="absolute top-[350px] -right-4 w-36 h-36 bg-brand-pink rotate-45 shadow-lg" />
    <div className="absolute bottom-24 -right-10 w-28 h-28 bg-brand-orange rotate-45 shadow-lg" />
  </div>
);

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-[95vh] flex justify-center items-center bg-white overflow-hidden pt-20">
      
      <div className="absolute inset-0 z-0 h-full w-full">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="/hero_child_blocks.png" 
          alt="Boomi Kids" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white"></div>
      </div>

      <LeftMosaic />
      <RightMosaic />

      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center relative z-20">
        
        {/* Badge Superior */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-[#5C339E] text-[#FFD500] font-black px-8 py-3 rounded-full mb-12 shadow-2xl tracking-[0.3em] text-[10px] uppercase border border-white/20"
        >
          ✨ Onde a Sabedoria Acolhe a Infância
        </motion.div>

        {/* Blocos Coloridos (Escala Robusta) */}
        <div className="flex flex-col items-center space-y-3 mb-12 select-none">
          {[
            { text: "GARANTA", color: "bg-brand-pink", rotate: -2 },
            { text: "O FUTURO", color: "bg-brand-blue", rotate: 2 },
            { text: "DE QUEM", color: "bg-brand-yellow", textColor: "text-brand-purple", rotate: -1 },
            { text: "VOCÊ AMA", color: "bg-brand-orange", rotate: 3 }
          ].map((block, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: block.rotate }}
              transition={{ delay: i * 0.15 }}
              className={`${block.color} ${block.textColor || 'text-white'} font-premium text-4xl md:text-7xl lg:text-8xl px-8 py-3 shadow-[12px_12px_0_rgba(0,0,0,0.05)] uppercase tracking-tight`}
            >
              {block.text}
            </motion.div>
          ))}
        </div>

        {/* Texto com Educação Infantil Capitalizada */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/90 backdrop-blur-md px-10 py-8 rounded-[3rem] shadow-2xl border border-white max-w-2xl mb-12"
        >
          <p className="text-gray-800 text-lg md:text-xl font-bold leading-relaxed">
            Transformamos a <span className="text-brand-purple italic">Educação Infantil</span> em uma grande aventura diária, oferecendo estrutura segura, aconchegante e voltada para o protagonismo da criança.
          </p>
        </motion.div>

        {/* Botão de Ação (Saiba Mais) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1 }}
        >
           <a 
            href="#about" 
            className="bg-brand-yellow hover:bg-[#ffb000] text-brand-text px-16 py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase shadow-[0_20px_40px_rgba(255,213,0,0.3)] hover:-translate-y-1 transition-all"
           >
            Saiba Mais
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
