import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { 
      url: "/gallery_bercario.png", 
      title: "Berçário Acolhedor", 
      size: "md:col-span-2 md:row-span-2", 
      delay: 0.1 
    },
    { 
      url: "/gallery_atelie.png", 
      title: "Ateliê de Artes", 
      size: "md:col-span-1 md:row-span-1", 
      delay: 0.2 
    },
    { 
      url: "/gallery_movimento.png", 
      title: "Circuito Motor", 
      size: "md:col-span-1 md:row-span-2", 
      delay: 0.3 
    },
    { 
      url: "/gallery_refectorio_real.png", // A NOVA FOTO REALISTA
      title: "Refeitório Nutritivo", 
      size: "md:col-span-1 md:row-span-1", 
      delay: 0.4 
    },
    { 
      url: "/hero_classroom_1774844989838.png", 
      title: "Nossa Sala", 
      size: "md:col-span-1 md:row-span-1", 
      delay: 0.5 
    },
    { 
      url: "/child_exploring_1774845003646.png", 
      title: "Exploração Livre", 
      size: "md:col-span-2 md:row-span-1", 
      delay: 0.6 
    }
  ];

  return (
    <section id="galeria" className="py-24 md:py-40 bg-[#FDFDFF] relative overflow-hidden">
      
      {/* Decoração de fundo para simetria */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="container mx-auto px-6">
        
        {/* TÍTULO COM MAIOR IMPACTO */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-black tracking-[0.4em] uppercase text-[11px] mb-4 block"
          >
            Infraestrutura de Elite
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-premium text-brand-text mb-8 leading-tight"
          >
            Ambiente de <span className="text-brand-purple italic">Descobertas</span>
          </h2 >
          <div className="w-24 h-1 bg-brand-purple/20 mx-auto rounded-full"></div>
        </div>

        {/* GRID MOSAICO PREMIUM - COM ANIMAÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 h-auto md:h-[1100px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: img.delay, duration: 0.8 }}
              className={`relative group overflow-hidden rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-8 border-white ${img.size}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
              />
              
              {/* GRADIENTE E TEXTO NO OVERLAY - FICOU LINDO! */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text/95 via-brand-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-12">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <h4 className="text-white font-premium text-4xl mb-2 italic">
                    {img.title}
                  </h4>
                  <p className="text-white/50 font-black text-[10px] uppercase tracking-[0.3em]">
                    Unidade Tatuapé
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO DE TOUR - PARA FECHAR A SIMETRIA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <a 
            href="https://wa.me/5511919597811" 
            target="_blank"
            className="inline-block bg-brand-blue hover:bg-blue-800 text-white px-16 py-6 rounded-full font-black text-sm shadow-2xl transition-all uppercase tracking-[0.2em] transform hover:-translate-y-2"
          >
            Agendar Tour Presencial
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;
