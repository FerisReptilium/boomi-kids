import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Star, Sparkles, Heart, Palette, Rocket } from 'lucide-react';

const Classes = () => {
  const plans = [
    {
      age: "0 a 2 anos",
      title: "BERÇÁRIO (I e II)",
      desc: "Um refúgio de afeto e segurança. Focamos no suporte biopsicossocial, respeitando o ritmo individual de sono e alimentação de cada bebê.",
      badgeBg: "bg-brand-blue/10",
      badgeText: "text-brand-blue",
      btnBg: "bg-brand-blue hover:bg-blue-800",
      borderTop: "border-brand-blue",
      stars: "fill-brand-blue text-brand-blue",
      floatingIcon: <Heart className="w-12 h-12 text-brand-pink/20" />
    },
    {
      age: "2 a 3 anos",
      title: "MINI-MATERNAL",
      desc: "O despertar da autonomia. Projetos pautados pelo 'brincar e interagir', onde a criança começa a explorar o mundo como sujeito potente.",
      badgeBg: "bg-brand-yellow/10",
      badgeText: "text-brand-yellow",
      btnBg: "bg-brand-yellow hover:bg-yellow-600",
      borderTop: "border-brand-yellow",
      stars: "fill-brand-yellow text-brand-yellow",
      floatingIcon: <Palette className="w-12 h-12 text-brand-green/20" />
    },
    {
      age: "3 a 5 anos",
      title: "MATERNAL E INFANTIL",
      desc: "Contextos de investigação e descoberta. Preparação integral baseada em linguagens, cultura e o desenvolvimento do protagonismo infantil.",
      badgeBg: "bg-brand-green/10",
      badgeText: "text-brand-green",
      btnBg: "bg-brand-green hover:bg-green-700",
      borderTop: "border-brand-green",
      stars: "fill-brand-green text-brand-green",
      floatingIcon: <Rocket className="w-12 h-12 text-brand-purple/20" />
    }
  ];

  return (
    <section id="plans" className="relative py-24 md:py-48 overflow-hidden bg-[#FDFDFF]">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      {/* Título Robusto e Simétrico */}
      <div className="container mx-auto px-6 relative z-30 text-center mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-purple font-black tracking-[0.4em] uppercase text-[11px] mb-6 block"
        >
          Nossas Turmas
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-premium text-brand-text mb-8 leading-tight"
        >
          Planos <span className="text-brand-blue italic">Ideais</span>
        </motion.h2>
        <p className="text-xl font-medium text-gray-500 max-w-2xl mx-auto">
          Temos o ambiente perfeito para seu filho crescer feliz e protagonista!
        </p>
      </div>

      <div className="relative w-full z-10">
        
        {/* Background Crianças - Opacidade Ajustada para 12% para ficar elegante */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-12 pointer-events-none grayscale">
          <img 
            src="/happy_kids_background_classes_1774857218652.png" 
            alt="Crianças Boomi Kids" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating Magic Objects */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-10 opacity-20 z-10 hidden lg:block"
        >
          <Rocket size={80} className="text-brand-purple" />
        </motion.div>

        {/* Cards com Design Superior */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col bg-white/90 backdrop-blur-md p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:-translate-y-4 transition-all duration-700 border-t-8 ${plan.borderTop}`}
              >
                
                <div className="flex justify-between items-center mb-10">
                  <span className={`font-black text-[10px] tracking-widest uppercase ${plan.badgeText} ${plan.badgeBg} px-4 py-2 rounded-full shadow-sm`}>
                    {plan.title}
                  </span>
                  <div className={`flex gap-1 ${plan.stars}`}>
                    <Star size={16} className="fill-current" />
                    <Star size={16} className="fill-current" />
                    <Star size={16} className="fill-current" />
                  </div>
                </div>

                <div className="mb-10">
                  <span className="text-[10px] uppercase text-gray-400 font-black block mb-2 tracking-[0.3em]">ETAPA ESCOLAR</span>
                  <span className={`text-5xl font-premium italic tracking-tighter ${plan.badgeText}`}>{plan.age}</span>
                </div>

                <p className="text-lg font-medium text-gray-600 leading-relaxed mb-12 flex-grow">
                  {plan.desc}
                </p>

                <a 
                  href="https://wa.me/5511919597811" 
                  target="_blank" 
                  className={`w-full flex justify-center items-center gap-3 ${plan.btnBg} text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all`}
                >
                  <MousePointerClick size={20} />
                  AGENDAR VISITA
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
