import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      q: "Como funciona o período de adaptação?",
      a: "A adaptação é gradual e personalizada. Respeitamos o tempo de cada criança e família, com horários reduzidos nos primeiros dias e acompanhamento próximo da coordenação."
    },
    {
      q: "Qual a segurança da escola?",
      a: "Temos controle rigoroso de acesso com portão eletrônico e câmeras. Apenas pessoas autorizadas pelos pais podem retirar as crianças após identificação."
    },
    {
      q: "A alimentação está inclusa nos planos?",
      a: "Sim, para os períodos integral e semi-integral. Nossas refeições são preparadas na hora com supervisão de nutricionista, focando em alimentos frescos e zero ultraprocessados."
    },
    {
      q: "Como é feita a comunicação com os pais?",
      a: "Utilizamos agenda digital em tempo real. Você recebe notificações sobre alimentação, sono, trocas e as atividades pedagógicas do dia do seu filho."
    },
    {
      q: "A escola aceita crianças de qual idade?",
      a: "Atendemos bebês a partir de 4 meses (Berçário I) até crianças de 5 anos (Jardim II)."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FFF5F1] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-6"
          >
            <HelpCircle className="text-brand-orange" size={32} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-text font-fun uppercase"
          >
            Dúvidas <span className="text-brand-orange italic">Frequentes</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-sm">Acolhendo as inseguranças das famílias</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-7 text-left transition-colors hover:bg-slate-50"
              >
                <span className="font-bold text-lg text-brand-text">{item.q}</span>
                <ChevronDown 
                  className={`text-brand-orange transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-7 pt-0 text-gray-600 leading-relaxed font-medium bg-white">
                       <div className="w-full h-[1px] bg-gray-100 mb-6" />
                       {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
          <p className="text-brand-text font-bold text-lg mb-6">Ainda tem dúvidas?</p>
          <a 
             href="https://wa.me/5511919597811" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
          >
            FALAR COM A COORDENAÇÃO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
