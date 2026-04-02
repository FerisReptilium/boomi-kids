import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-[#FDFDFF] relative overflow-hidden">
      
      {/* Decoração de Fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Bloco Superior: História e Identidade */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-8 border-white">
              <img 
                src="/about_philosophy_real.png" 
                alt="Nosso Ideal de Educação Boomi Kids" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[2000ms]"
              />
              
              {/* SELO ESCOLA PROTEGIDA - Dentro da imagem como no seu print */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex flex-col items-end text-right">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 mb-2">
                  <Shield size={20} className="text-brand-blue" />
                  <span className="text-brand-text font-black text-xs tracking-tighter uppercase">Escola Protegida</span>
                </div>
                <p className="text-[9px] md:text-[10px] text-brand-text/70 font-bold uppercase leading-tight tracking-[0.05em] drop-shadow-sm">
                  DRE PENHA • AVCB (BOMBEIROS) • <br />
                  VIGILÂNCIA SANITÁRIA • SEGURANÇA 24H
                </p>
              </div>
            </div>
            
            {/* Elemento flutuante de fundo */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-[2px] bg-brand-purple/40"></div>
               <span className="text-brand-purple font-black tracking-[0.4em] uppercase text-[10px]">Nosso Ideal</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-premium text-brand-text mb-10 leading-[1.1]">
              Onde a Sabedoria <br />
              <span className="text-brand-purple italic">Abraça</span> a Infância
            </h2>
            
            <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
              <p className="text-xl md:text-2xl italic text-brand-text/60 border-l-4 border-brand-purple/30 pl-8 mb-10 py-2">
                "Buscamos para outras famílias a excelência e o afeto que desejaríamos para nossos próprios filhos."
              </p>
              
              <p className="text-lg">
                Idealizada pelo mantenedor <strong>Badwi Jean Semaan</strong> e sob a liderança técnica da Diretora <strong>Madalena</strong>, a Boomi Kids nasceu para ser um refúgio de aprendizado real no coração do Tatuapé.
              </p>
              
              <p className="text-lg">
                Inspirados por gigantes como <strong>Pikler, Wallon e Malaguzzi</strong>, enxergamos a criança como um sujeito potente e protagonista, capaz de investigar o mundo através do brincar intencional e da alegria da descoberta.
              </p>
              
              <p className="text-lg">
                Aqui, cada espaço é um convite à exploração, e cada rotina é desenhada para respeitar o tempo sagrado e a identidade única de cada pequeno.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Missão, Visão e Valores - Cards Grandes e Bonitos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {[
            { 
              icon: <Target size={32} className="text-white" />, 
              title: "Missão", 
              color: "bg-brand-pink", 
              desc: "Oferecer um ambiente acolhedor e estimulante, onde a criança é a protagonista absoluta desde o seu primeiro dia de vida." 
            },
            { 
              icon: <Eye size={32} className="text-white" />, 
              title: "Visão", 
              color: "bg-brand-blue", 
              desc: "Ser reconhecida como a referência máxima em respeito à infância e na parceria sólida e transparente com as famílias do Tatuapé." 
            },
            { 
              icon: <Star size={32} className="text-white" />, 
              title: "Valores", 
              color: "bg-brand-yellow", 
              desc: "Afeto profundo, intencionalidade pedagógica, brincar investigativo e o olhar biopsicossocial do bebê e da criança." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group relative bg-white p-12 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 overflow-hidden"
            >
              <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                 {item.icon}
              </div>
              <h3 className="text-3xl font-premium mb-6 text-brand-text">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-lg italic">
                {item.desc}
              </p>
              
              {/* Detalhe estético de fundo do card */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${item.color}/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000`}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
