import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: "/gallery_bercario.png",
      title: "Espaço Acolhimento",
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
      url: "/hero_classroom_1774844989838.png",
      title: "Nossa Sala",
      size: "md:col-span-1 md:row-span-1",
      delay: 0.4
    },
    {
      url: "/child_exploring_1774845003646.png",
      title: "Pintura no Azulejo",
      size: "md:col-span-2 md:row-span-1",
      delay: 0.5
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-2 block font-sans"
          >
            Nosso Espaço
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-text font-fun uppercase"
          >
            Um Ambiente <span className="text-brand-purple italic">Planejado e Seguro</span>
          </motion.h2>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[900px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: img.delay, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-lg ${img.size}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white font-black text-2xl uppercase font-fun tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </h4>
                  <p className="text-white/80 font-medium text-sm mt-1 uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    Boomi Kids Tatuapé
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
          <p className="text-gray-500 font-medium mb-8">
            Cada detalhe da nossa estrutura foi pensado para estimular a autonomia e a segurança dos bebês e crianças.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-brand-purple hover:bg-purple-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all"
          >
            VENHA CONHECER AO VIVO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
