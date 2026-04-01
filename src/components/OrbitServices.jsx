import React from 'react';
import { Award, BookOpen, Eye, Heart, Clock, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const OrbitServices = () => {
  const leftServices = [
    { title: "Equipe Capacitada", desc: "Profissionais em constante formação.", icon: <Award size={24} /> },
    { title: "Metodologias Ativas", desc: "Baseadas inteiramente no brincar.", icon: <BookOpen size={24} /> },
    { title: "Observação Contínua", desc: "Registro diário do desenvolvimento.", icon: <Eye size={24} /> } 
  ];

  const rightServices = [
    { title: "Comunicação Frequente", desc: "Parceria transparente com as famílias.", icon: <Link size={24} /> },
    { title: "Ambiente Acolhedor", desc: "Seguro, planejado e afetivo.", icon: <Heart size={24} /> },
    { title: "Rotina Estruturada", desc: "Flexibilidade e respeito ao ritmo.", icon: <Clock size={24} /> }
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden relative">
      
      {/* Background sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full filter blur-3xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium italic text-2xl font-serif mb-2"
          >
            Nossos Diferenciais
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl uppercase font-bold text-gray-800 tracking-widest relative"
          >
            A ESCOLA IDEAL PARA O SEU FILHO
            <div className="w-16 h-0.5 bg-gray-300 absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
            <div className="w-2 h-2 border border-gray-400 bg-white rotate-45 flex items-center justify-center absolute -bottom-5 left-1/2 -translate-x-1/2"></div>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          
          {/* Esquerda */}
          <div className="flex flex-col gap-10 lg:w-1/3 text-center lg:text-right w-full items-center lg:items-end">
            {leftServices.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="flex flex-col lg:flex-row items-center justify-end gap-6 max-w-xs group cursor-default"
              >
                <div className="order-2 lg:order-1">
                  <h4 className="font-bold text-gray-800 group-hover:text-brand-yellow transition-colors">{service.title}</h4>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </div>
                <div className="order-1 lg:order-2 w-16 h-16 shrink-0 bg-white border border-gray-100/50 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(229,201,116,0.3)] group-hover:shadow-[0_15px_40px_rgba(229,201,116,0.5)] group-hover:scale-110 transition-all relative">
                  <div className="hidden lg:block absolute right-[-40px] top-1/2 w-[40px] border-t border-dashed border-gray-300 -z-10"></div>
                  {React.cloneElement(service.icon, { className: "text-brand-blue group-hover:text-brand-yellow font-bold transition-colors" })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTRO (Círculo Principal) - COM A FOTO DE INTERAÇÃO REAL */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="lg:w-1/3 flex justify-center py-10 lg:py-0 relative z-20"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-4 bg-white shadow-2xl relative border border-gray-100 flex items-center justify-center group overflow-hidden">
               <div className="w-full h-full rounded-full overflow-hidden absolute inset-2 bg-gray-100">
                 {/* 📸 Usando a foto real da professora com aluno */}
                 <img 
                    src="/teacher_child_orbit.png" 
                    alt="Interação Afetiva Boomi Kids" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
               </div>
            </div>
          </motion.div>

          {/* Direita */}
          <div className="flex flex-col gap-10 lg:w-1/3 text-center lg:text-left w-full items-center lg:items-start">
            {rightServices.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="flex flex-col lg:flex-row items-center gap-6 max-w-xs group cursor-default"
              >
                <div className="w-16 h-16 shrink-0 bg-white border border-gray-100/50 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(229,201,116,0.3)] group-hover:shadow-[0_15px_40px_rgba(229,201,116,0.5)] group-hover:scale-110 transition-all relative">
                  <div className="hidden lg:block absolute left-[-40px] top-1/2 w-[40px] border-t border-dashed border-gray-300 -z-10"></div>
                  {React.cloneElement(service.icon, { className: "text-brand-blue group-hover:text-brand-yellow font-bold transition-colors" })}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-brand-yellow transition-colors">{service.title}</h4>
                  <p className="text-sm text-gray-500">{service.desc}</p>
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
