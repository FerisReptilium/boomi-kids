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
    <section id="plans" className="relative pt-24 pb-32 overflow-hidden bg-slate-50/50">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      {/* Título */}
      <div className="container mx-auto px-6 relative z-20 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-2 block font-sans"
        >
          Nossas Turmas
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl uppercase font-black text-brand-text tracking-tight relative z-30 inline-block font-fun"
        >
          Planos Ideais
          <div className="w-full text-center mt-4">
             <p className="text-base font-semibold text-gray-500 tracking-normal normal-case font-sans">
               Temos o ambiente perfeito para seu filho crescer feliz!
             </p>
          </div>
        </motion.h2>
      </div>

      {/* SVG Onda Superior Roxo */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 transform rotate-180">
        <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,130.6,201.5,120.4,242.4,115.1,283.4,103.8,321.39,56.44Z" className="fill-brand-purple opacity-[0.03]"></path>
        </svg>
      </div>

      {/* Container Cards and Background */}
      <div className="relative w-full z-10">
        
        {/* Background Full Width Crianças com Balão */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="/happy_kids_background_classes_1774857218652.png" 
            alt="Crianças Boomi Kids brincando" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating Magic Objects */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 opacity-20 z-10 hidden lg:block"
        >
          <Rocket size={80} className="text-brand-purple" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-20 opacity-20 z-10 hidden lg:block"
        >
          <Palette size={100} className="text-brand-green" />
        </motion.div>

        {/* Gradiente transparente para garantir leitura em cima das crianças */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-white/90 via-white/50 to-transparent z-10 pointer-events-none"></div>

        {/* Cards */}
        <div className="container mx-auto px-6 relative z-20 pb-48 md:pb-64 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-4 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                key={i}
                className={`flex flex-col bg-white text-brand-text p-8 max-w-sm w-full md:w-1/3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] relative overflow-hidden group cursor-pointer hover:-translate-y-4 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-300 rounded-[2.5rem] border-t-8 border-gray-100/10 ${plan.borderTop}`}
              >
                
                <div className="flex justify-between items-center mb-6">
                  <div className="absolute -top-6 -left-6 opacity-40 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    {plan.floatingIcon}
                  </div>
                  <span className={`font-black text-[10px] tracking-wider uppercase ${plan.badgeText} ${plan.badgeBg} px-3 py-1.5 rounded-full shadow-sm relative z-10`}>
                    {plan.title}
                  </span>
                  <div className={`flex gap-0.5 ${plan.stars}`}>
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                  </div>
                </div>

                <div className="mb-6 relative">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Sparkles size={24} className="text-brand-yellow" />
                  </motion.div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1 tracking-[0.2em] flex items-center gap-2">
                    ETAPA ESCOLAR
                  </span>
                  <span className={`font-fun text-4xl font-black italic tracking-tighter ${plan.badgeText}`}>{plan.age}</span>
                </div>

                {/* flex-grow para empurrar o botão para o fundo, igualando as alturas! */}
                <p className="text-base font-medium text-gray-600 leading-relaxed mb-8 flex-grow">
                  {plan.desc}
                </p>

                <a 
                  href="https://wa.me/5511919597811" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-full flex justify-center items-center gap-2 ${plan.btnBg} border border-transparent text-white py-4 font-black uppercase text-sm transition-transform hover:scale-105 rounded-2xl shadow-lg mt-auto`}
                >
                  <MousePointerClick size={20} />
                  FAÇA UMA VISITA
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
