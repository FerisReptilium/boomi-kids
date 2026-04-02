import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] flex justify-center items-center bg-[#FDFDFF] overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <img src="/hero_child_blocks.png" alt="Boomi Kids" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#FDFDFF]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-[#5C339E10] text-[#5C339E] px-6 py-2 rounded-full mb-8 font-black uppercase text-[10px] tracking-widest border border-[#5C339E20]"
        >
          ✨ Onde a Sabedoria Acolhe a Infância
        </motion.div>
        
        <div className="flex flex-col items-center space-y-3 mb-10">
          {["GARANTA", "O FUTURO", "DE QUEM", "VOCÊ AMA"].map((text, i) => (
            <motion.div key={i} className="bg-[#1EA1F2] text-white font-premium text-4xl md:text-7xl px-8 py-2 shadow-xl uppercase tracking-tighter transform rotate-1">
              {text}
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-gray-700 font-medium text-lg max-w-xl mb-12 glass-panel p-6 rounded-3xl"
        >
          Transformamos a educação infantil em uma grande aventura diária, oferecendo estrutura segura, aconchegante e voltada para o protagonismo da criança.
        </motion.p>
      </div>
    </section>
  );
};
export default Hero;
