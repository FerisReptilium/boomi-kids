// 1. Arquivo: src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-[#FDFDFF] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              {/* 📸 FOTO DA SALA DE AULA REAL AQUI */}
              <img 
                src="/about_philosophy_real.png" 
                alt="Educação Boomi" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 glass-panel p-8 rounded-3xl z-20 border-white/50 hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <Shield size={24} className="text-brand-blue" />
                <h4 className="font-black text-brand-text text-sm uppercase">Escola Autorizada</h4>
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">DRE Penha • AVCB (Bombeiros) • Vigilância</p>
            </div>
          </motion.div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-premium text-brand-text mb-8 leading-tight">Onde a Sabedoria <span className="text-brand-purple italic">Abraça</span> a Infância</h2>
            <p className="text-lg text-gray-600 mb-6 italic border-l-4 border-brand-purple/20 pl-6">"Buscamos para outras famílias a excelência e o afeto que desejaríamos para nossos próprios filhos."</p>
            <p className="text-gray-600 leading-relaxed mb-6">Idealizada pelo mantenedor Badwi Jean Semaan e diretoria técnica de Madalena, a Boomi Kids é um refúgio de aprendizado real.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
