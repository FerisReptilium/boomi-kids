import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Star, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-40 bg-[#FDFDFF] relative overflow-hidden">
      
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] -ml-96 -mt-96" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32 mb-48">
          
          {/* LADO DA IMAGEM COM SELO FLUTUANTE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white">
              <img 
                src="/about_philosophy_real.png" 
                alt="Ideal de Educação Boomi Kids" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[3000ms]"
              />
            </div>

            {/* SELO ESCOLA PROTEGIDA - AGORA FLUTUANDO IGUAL À NUTRIÇÃO */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-10 bg-white p-8 rounded-[2.5rem] z-20 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-6 min-w-[300px]"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue shadow-inner shrink-0">
                <Shield size={32} />
              </div>
              <div className="text-left">
                <p className="font-black text-brand-text uppercase text-xs tracking-widest leading-none mb-2">Escola Protegida</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase leading-tight tracking-wider">
                  DRE PENHA • AVCB <br />
                  VIGILÂNCIA • SEGURANÇA 24H
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* TEXTO ROBUSTO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="w-20 h-[3px] bg-brand-purple/30" />
               <span className="text-brand-purple font-black tracking-[0.5em] uppercase text-[11px]">Nossa Identidade</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-premium text-brand-text mb-12 leading-[1.05]">
              Onde a Sabedoria <br />
              <span className="text-brand-purple italic">Abraça</span> a Infância
            </h2>
            
            <div className="space-y-10 text-gray-700 font-medium text-lg leading-relaxed text-left">
              <div className="relative mb-12">
                <Quote size={48} className="text-brand-purple/10 absolute -top-8 -left-8" />
                <p className="text-2xl md:text-3xl italic text-brand-text/80 font-serif leading-snug border-l-8 border-brand-purple/20 pl-10">
                  "Buscamos para outras famílias a excelência e o afeto que desejaríamos para nossos próprios filhos."
                </p>
              </div>
              
              <p>
                Idealizada pelo mantenedor <strong>Badwi Jean Semaan</strong> e sob a liderança técnica da Diretora <strong>Madalena</strong>, a Boomi Kids nasceu para ser um refúgio de aprendizado real no coração do Tatuapé.
              </p>
              
              <p>
                Inspirados por gigantes como <strong>Pikler, Wallon e Malaguzzi</strong>, enxergamos a criança como um sujeito potente e protagonista, capaz de investigar o mundo através do brincar intencional e da alegria da descoberta.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CARDS DE MISSÃO/VISÃO/VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
          {[
            { icon: <Target size={40} />, title: "Missão", color: "bg-brand-pink", desc: "Proporcionar um ambiente seguro e rico em desafios, onde cada bebê e criança é protagonista absoluta de seu desenvolvimento integral." },
            { icon: <Eye size={40} />, title: "Visão", color: "bg-brand-blue", desc: "Ser a referência em excelência pedagógica e afetividade no Tatuapé, construindo parcerias indissociáveis com as famílias." },
            { icon: <Star size={40} />, title: "Valores", color: "bg-brand-yellow", desc: "Respeito ao ritmo biológico, intencionalidade no brincar, afeto como base do aprendizado e segurança em todos os processos." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-14 rounded-[5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-700 border border-gray-50 flex flex-col items-center text-center group overflow-hidden"
            >
              <div className={`w-24 h-24 ${item.color} rounded-3xl flex items-center justify-center mb-10 shadow-lg text-white group-hover:scale-110 transition-transform duration-500`}>
                 {item.icon}
              </div>
              <h3 className="text-4xl font-premium mb-6 text-brand-text">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-lg italic">
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
