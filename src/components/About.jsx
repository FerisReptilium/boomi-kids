import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-[#FDFDFF] relative overflow-hidden">
      
      {/* Elementos de Estilo - Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Bloco Superior: Imagem Real e Texto Detalhado */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-8 border-white">
              {/* 📸 FOTO REAL DA ESCOLA RESTAURADA */}
              <img 
                src="/about_philosophy_real.png" 
                alt="Nosso Ideal de Educação Boomi Kids" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Selo de Instituição Protegida */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-6 glass-panel p-8 rounded-3xl z-20 border-white/50 hidden md:block max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue">
                  <Shield size={24} />
                </div>
                <h4 className="font-black text-brand-text text-sm">ESCOLA PROTEGIDA</h4>
              </div>
              <p className="text-[11px] text-gray-500 font-bold leading-relaxed uppercase tracking-wider">
                DRE Penha • AVCB (Bombeiros) • Vigilância Sanitária • Segurança 24h
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-[2px] bg-brand-purple"></div>
               <span className="text-brand-purple font-black tracking-[0.3em] uppercase text-[10px]">NOSSO IDEAL</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-premium text-brand-text mb-8 leading-tight">
              Onde a Sabedoria <br />
              <span className="text-brand-purple italic">Abraça</span> a Infância
            </h2>
            
            <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
              <p className="text-lg italic text-brand-text/70 border-l-4 border-brand-purple/20 pl-6 mb-8">
                "Buscamos para outras famílias a excelência e o afeto que desejaríamos para nossos próprios filhos."
              </p>
              <p>
                Idealizada pelo mantenedor <strong>Badwi Jean Semaan</strong> e sob a liderança técnica da Diretora <strong>Madalena</strong>, a Boomi Kids nasceu para ser um refúgio de aprendizado real no coração do Tatuapé.
              </p>
              <p>
                Inspirados por gigantes como <strong>Pikler, Wallon e Malaguzzi</strong>, enxergamos a criança como um sujeito potente e protagonista, capaz de investigar o mundo através do brincar intencional e da alegria da descoberta.
              </p>
              <p>
                Aqui, cada espaço é um convite à exploração, e cada rotina é desenhada para respeitar o tempo sagrado de cada pequeno.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Missão, Visão e Valores - Cards Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Target className="text-brand-pink" />, title: "Missão", color: "border-brand-pink/20", desc: "Oferecer um ambiente acolhedor e estimulante, onde a criança é a protagonista absoluta desde o seu primeiro dia." },
            { icon: <Eye className="text-brand-blue" />, title: "Visão", color: "border-brand-blue/20", desc: "Ser reconhecida como referência máxima em respeito à infância e parceria sólida com as famílias da nossa região." },
            { icon: <Star className="text-brand-yellow" />, title: "Valores", color: "border-brand-yellow/20", desc: "Afeto profundo, intencionalidade pedagógica, brincar investigativo e desenvolvimento integral biopsicossocial." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`glass-panel p-10 rounded-[3rem] border ${item.color} group hover:bg-white transition-all duration-700`}
            >
              <div className="w-14 h-14 bg-white/50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                 {item.icon}
              </div>
              <h3 className="text-2xl font-premium mb-4 text-brand-text">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
