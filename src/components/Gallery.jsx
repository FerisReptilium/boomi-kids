// 1. ARQUIVO: src/components/Gallery.jsx
// Ajustado para o nome '_real' e com visual robusto
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { url: "/gallery_bercario.png", title: "Berçário", size: "md:col-span-2 md:row-span-2", delay: 0.1 },
    { url: "/gallery_atelie.png", title: "Ateliê", size: "md:col-span-1 md:row-span-1", delay: 0.2 },
    { url: "/gallery_movimento.png", title: "Circuito Motor", size: "md:col-span-1 md:row-span-2", delay: 0.3 },
    { url: "/gallery_refectorio_real.png", title: "Refeitório Nutritivo", size: "md:col-span-1 md:row-span-1", delay: 0.4 },
    { url: "/hero_classroom_1774844989838.png", title: "Nossa Sala", size: "md:col-span-1 md:row-span-1", delay: 0.5 },
    { url: "/child_exploring_1774845003646.png", title: "Exploração", size: "md:col-span-2 md:row-span-1", delay: 0.6 }
  ];

  return (
    <section id="galeria" className="py-24 md:py-40 bg-[#FDFDFF] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl md:text-8xl font-premium text-brand-text mb-20 leading-tight">
          Ambiente de <span className="text-brand-purple italic">Descobertas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-auto md:h-[1100px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-[4rem] shadow-2xl bg-gray-50 ${img.size}`}
            >
              <img 
                src={img.url} 
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 text-transparent" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 flex items-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-premium text-4xl italic">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
