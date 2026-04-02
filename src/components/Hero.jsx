import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Blocos decorativos das laterais (SEM O CLIPE)
const LeftMosaic = () => (
  <div className="absolute top-0 left-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none opacity-40">
    <div className="absolute top-[-10px] -left-10 w-32 h-32 bg-[#D81E5B] rotate-45 shadow-lg" />
    <div className="absolute top-32 left-8 w-24 h-24 bg-[#1EA1F2] rotate-45 shadow-lg" />
    <div className="absolute top-64 -left-6 w-36 h-36 bg-[#FFD500] rotate-45 shadow-lg" />
    <div className="absolute top-48 left-16 w-16 h-16 bg-[#FF7A00] rotate-45 shadow-lg" />
  </div>
);

const RightMosaic = () => (
  <div className="absolute top-0 right-0 w-32 md:w-64 h-full overflow-hidden z-10 pointer-events-none hidden sm:block opacity-40">
    <div className="absolute top-10 -right-10 w-32 h-32 bg-[#1EA1F2] rotate-45 shadow-lg" />
    <div className="absolute top-40 right-8 w-28 h-28 bg-[#FFD500] rotate-45 shadow-lg" />
    <div className="absolute top-[350px] -right-4 w-36 h-36 bg-[#D81E5B] rotate-45 shadow-lg" />
    <div className="absolute top-64 right-16 w-16 h-16 bg-[#97CC04] rotate-45 shadow-lg" />
  </div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  const blocks = [
    { text: "GARANTA", bg: "bg-[#D81E5B]", color: "text-white", rotate: "-rotate-1" },
    { text: "O FUTURO", bg: "bg-[#1EA1F2]", color: "text-white", rotate: "rotate-2" },
    { text: "DE QUEM", bg: "bg-[#FFD500]", color: "text-[#5C339E]", rotate: "-rotate-2" },
    { text: "VOCÊ AMA", bg: "bg-[#FF7A00]", color: "text-white", rotate: "rotate-1" }
  ];

  return (
    <section id="inicio" className="relative w-full min-h-[95vh] flex justify-center items-center bg-[#FDFDFF] overflow-hidden pt-20">
      
      {/* Imagem de Fundo com Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <img 
          src="/hero_child_blocks.png" 
          alt="Boomi Kids" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FDFDFF]"></div>
      </motion.div>

      {/* Mosaicos Laterais */}
      <LeftMosaic />
      <RightMosaic />

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Slogan Topo (ROXO VIBRANTE) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#5C339E] text-white px-8 py-2.5 rounded-full mb-10 font-black uppercase text-[11px] tracking-[0.2em] shadow-xl border-2 border-white/30"
        >
          ✨ Onde a Sabedoria Acolhe a Infância
        </motion.div>
        
        {/* Blocos Coloridos Mágicos */}
        <div className="flex flex-col items-center space-y-3 mb-12">
          {blocks.map((block, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${block.bg} ${block.color} font-premium text-4xl md:text-7xl px-8 py-2 shadow-[4px_4px_0_rgba(0,0,0,0.1)] uppercase tracking-tighter transform ${block.rotate}`}
            >
              {block.text}
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-800 font-bold text-lg max-w-xl mb-12 bg-white/80 backdrop-blur-md p-8 rounded-[3rem] shadow-2xl border-2 border-white"
        >
          Transformamos a educação infantil em uma grande aventura diária, oferecendo estrutura segura, aconchegante e voltada para o protagonismo da criança.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
