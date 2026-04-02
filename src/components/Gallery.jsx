// 3. Arquivo: src/components/Gallery.jsx (Com Refeitório)
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { url: "/gallery_bercario.png", title: "Berçário", size: "md:col-span-2 md:row-span-2", delay: 0.1 },
    { url: "/gallery_atelie.png", title: "Ateliê", size: "md:col-span-1 md:row-span-1", delay: 0.2 },
    { url: "/gallery_movimento.png", title: "Circuito Motor", size: "md:col-span-1 md:row-span-2", delay: 0.3 },
    { url: "/gallery_refectorio.png", title: "Refeitório Nutritivo", size: "md:col-span-1 md:row-span-1", delay: 0.4 },
    { url: "/hero_classroom_1774844989838.png", title: "Nossa Sala", size: "md:col-span-1 md:row-span-1", delay: 0.5 },
    { url: "/child_exploring_1774845003646.png", title: "Exploração", size: "md:col-span-2 md:row-span-1", delay: 0.6 }
  ];

  return (
    <section id="galeria" className="py-32 bg-[#FDFDFF]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl md:text-6xl font-premium text-brand-text mb-20 text-center">Ambiente de <span className="text-brand-purple italic">Descobertas</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-auto md:h-[1000px]">
          {images.map((img, i) => (
            <div key={i} className={`relative group overflow-hidden rounded-[3rem] shadow-xl ${img.size}`}>
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 flex items-end p-10 opacity-0 group-hover:opacity-100 transition-all">
                <h4 className="text-white font-premium text-3xl italic">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
