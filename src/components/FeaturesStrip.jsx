import React from 'react';
import { Award, Heart, Shield, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesStrip = () => {
  const features = [
    { title: "Mão na Massa", desc: "Aprendizado focado no desenvolvimento motor e autonomia infantil.", bg: "bg-brand-blue", icon: <Award className="w-10 h-10 text-white" /> },
    { title: "Afeto e Cuidado", desc: "Toda interação é pautada pelo respeito profundo à curiosidade da criança.", bg: "bg-brand-green", icon: <Heart className="w-10 h-10 text-white" /> },
    { title: "Espaço Seguro", desc: "Arquitetura lúdica com total proteção para descobertas seguras.", bg: "bg-brand-orange", icon: <Shield className="w-10 h-10 text-white" /> },
    { title: "Protagonismo", desc: "A criança é sempre o ator principal em nossa didática escolar contemporânea.", bg: "bg-brand-pink", icon: <CalendarDays className="w-10 h-10 text-white" /> }
  ];

  return (
    <section className="w-full relative z-20 -mt-20 md:-mt-40 px-4 md:px-12 mb-20" id="method">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 items-stretch justify-center">
        {features.map((card, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              filter: "brightness(1.1)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)"
            }}
            viewport={{ once: true }}
            transition={{ 
              delay: i * 0.1, 
              duration: 0.5,
              whileHover: { duration: 0.3 }
            }}
            key={i} 
            className={`flex-1 ${card.bg} rounded-[3rem] p-8 text-white flex flex-col items-center text-center shadow-xl cursor-default relative overflow-hidden`}
          >
            {/* Blob de fundo para dar charme arredondado */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8" />
            
            <div className="bg-white/20 p-4 rounded-full mb-6 relative z-10 backdrop-blur-sm">
              {card.icon}
            </div>
            
            <h3 className="font-fun text-2xl font-bold mb-3 relative z-10">{card.title}</h3>
            <p className="font-sans text-sm opacity-90 leading-relaxed font-medium relative z-10">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesStrip;
