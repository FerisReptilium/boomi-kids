import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Star, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-48 bg-[#FDFDFF] relative overflow-hidden">
      
      {/* Elementos Decorativos Premium */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] -ml-96 -mt-96" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Bloco 1: O Ideal de Educação (Storytelling de Elite) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-20 lg:gap-32 mb-48">
          
          {/* LADO DA IMAGEM COM SELO FLUTUANTE (MANTIDO) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative min-h-[500px]"
          >
            <div className="relative z-10 h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white">
              <img 
                src="/about_philosophy_real.png" 
                alt="Ideal de Educação Boomi Kids" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3000ms]"
              />
            </div>

            {/* SELO ESCOLA PROTEGIDA - PADRÃO APROVADO */}
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

          {/* TEXTO ROBUSTO E AMPLIADO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-20 h-[3px] bg-brand-purple/30" />
               <span className="text-brand-purple font-black tracking-[0.5em] uppercase text-[11px]">Nossa Identidade</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-premium text-brand-text mb-12 leading-[1.05]">
              Onde a Sabedoria <br />
              <span className="text-brand-purple italic">Abraça</span> a Infância
            </h2>
            
            <div className="space-y-8 text-gray-700 font-medium text-lg leading-relaxed text-left">
              <div className="relative mb-12 py-4">
                <Quote size={32} className="text-brand-purple/20 mb-4" />
                <p className="text-2xl md:text-3xl italic text-brand-text/80 font-serif leading-snug border-l-4 border-brand-purple/30 pl-8">
                  "Buscamos para outras famílias a excelência e o afeto que desejaríamos para nossos próprios filhos."
                </p>
              </div>
              
              <p>
                A Escola Boomi Kids é o resultado de um projeto de Educação Infantil idealizado pelo Mantenedor <strong>Badwi Jean Semaan</strong>. Inspirado pela reflexão sobre a educação de seus próprios filhos, Badwi uniu forças com a Diretora Pedagógica <strong>Madalena</strong> — especialista com ampla experiência na coordenação e docência infantil — para criar um refúgio de aprendizado real no Tatuapé.
              </p>
              
              <p>
                Localizada em uma região estratégica de fácil acesso, a Boomi Kids oferece uma estrutura física e um projeto pedagógico rigorosamente adequados às demandas da infância. Aqui, entendemos que nossos pequenos são <strong>sujeitos potentes</strong>, capazes de construir significados e conhecimentos através da <strong>interação e da brincadeira</strong>, eixos centrais do nosso currículo.
              </p>
              
              <p>
                Guiados pelos preceitos de <strong>Pikler, Wallon e Malaguzzi</strong>, operamos sob a guisa do “educar e cuidar” como atos indissociáveis. Nosso compromisso é assegurar que cada bebê e criança desenvolva suas potencialidades de forma integral em seus aspectos físicos, afetivos e sociais.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CARDS DE MISSÃO/VISÃO/VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
          {[
            { 
              icon: <Target size={40} />, 
              title: "Missão", 
              color: "bg-brand-pink", 
              desc: "Oferecer um ambiente acolhedor e estimulante, onde a criança é a protagonista absoluta desde o seu primeiro dia, respeitando ritmos individuais e demandas familiares." 
            },
            { 
              icon: <Eye size={40} />, 
              title: "Visão", 
              color: "bg-brand-blue", 
              desc: "Ser reconhecida como a referência máxima no Tatuapé em respeito à infância, aliando segurança estrutural a uma proposta pedagógica investigativa e transformadora." 
            },
            { 
              icon: <Star size={40} />, 
              title: "Valores", 
              color: "bg-brand-yellow", 
              desc: "Afeto profundo, intencionalidade pedagógica, brincar como eixo de aprendizagem e o desenvolvimento integral biopsicossocial do bebê e da criança." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-14 rounded-[5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-700 border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 ${item.color} rounded-3xl flex items-center justify-center mb-10 shadow-lg text-white group-hover:scale-110 transition-transform duration-500`}>
                 {item.icon}
              </div>
              <h3 className="text-4xl font-premium mb-6 text-brand-text">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-lg italic tracking-wide">
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
