import React from 'react';
import { Award, BookOpen, Eye, Heart, Clock, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const OrbitServices = () => {
  const leftServices = [
    { title: "Equipe Capacitada", desc: "Formação técnica constante e afetiva.", icon: <Award size={24} /> },
    { title: "Metodologias Ativas", desc: "Brincar investigativo e protagonista.", icon: <BookOpen size={24} /> },
    { title: "Observação Contínua", desc: "Registro diário do desenvolvimento.", icon: <Eye size={24} /> } 
  ];

  const rightServices = [
    { title: "Parceria com Famílias", desc: "Comunicação transparente e real.", icon: <Link size={24} /> },
    { title: "Ambiente Acolhedor", desc: "Espaço seguro, planejado e afetivo.", icon: <Heart size={24} /> },
    { title: "Rotina Estruturada", desc: "Respeito ao ritmo biológico de cada um.", icon: <Clock size={24} /> }
  ];

  return (
    <section id="servicos" className="py-24 md:py-48 bg-white overflow-hidden relative font-sans">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* TÍTULO ROBUSTO E PADRONIZADO (8XL) */}
        <div className="text-center mb-24 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-black tracking-[0.4em] uppercase text-[11px] mb-6 block"
          >
            Diferenciais Boomi Kids
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-premium text-brand-text mb-8 leading-tight"
          >
            A Escola <span className="text-brand-blue italic">Ideal</span>
          </motion.h2>
          <div className="w-24 h-1 bg-brand-blue/20 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          
          {/* SERVIÇOS ESQUERDA - ALINHADOS À DIREITA NO DESKTOP */}
          <div className="flex flex-col gap-12 w-full lg:w-1/4">
            {leftServices.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center lg:flex-row-reverse text-left lg:text-right gap-6 group"
              >
                <div className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shrink-0 border border-gray-50">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-sm uppercase tracking-widest mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FOTO CENTRAL COM EFEITO ORBITAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:w-1/3 flex justify-center py-10"
          >
            <div className="relative w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full p-6 md:p-10 bg-gradient-to-tr from-brand-blue/5 to-transparent border border-gray-100 shadow-inner">
               <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-20">
                 <img 
                    src="/teacher_child_orbit.png" 
                    alt="Ensino de Excelência" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[3000ms]"
                 />
               </div>
               {/* Decoração orbital flutuante */}
               <div className="absolute inset-0 border-[2px] border-dashed border-brand-blue/10 rounded-full animate-spin-slow pointer-events-none" />
            </div>
          </motion.div>

          {/* SERVIÇOS DIREITA */}
          <div className="flex flex-col gap-12 w-full lg:w-1/4">
            {rightServices.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center text-left gap-6 group"
              >
                <div className="w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shrink-0 border border-gray-50">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-sm uppercase tracking-widest mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrbitServices;
