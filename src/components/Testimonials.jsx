import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Smartphone, Utensils, HeartPulse, ChevronDown } from 'lucide-react';

const CommitmentCard = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-gray-800 group-hover:text-brand-purple transition-colors">{question}</span>
        <ChevronDown className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pb-6 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Testimonials = () => {
  const commitments = [
    {
      icon: <Smartphone size={28} />,
      title: "Rotina em Tempo Real",
      desc: "Através do nosso aplicativo exclusivo, os pais acompanham alimentação, sono e atividades pedagógicas ao longo do dia.",
      delay: 0.1
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Segurança Certificada",
      desc: "Ambiente 100% monitorado por câmeras, com redes de proteção em todas as áreas e licenças (AVCB) rigorosamente em dia.",
      delay: 0.2
    },
    {
      icon: <Utensils size={28} />,
      title: "Nutrição Especializada",
      desc: "Cardápio elaborado por nutricionista infantil, focado em comida de verdade, sem ultraprocessados.",
      delay: 0.3
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Primeiros Socorros",
      desc: "Toda a nossa equipe é treinada e certificada em primeiros socorros pediátricos, garantindo tranquilidade absoluta.",
      delay: 0.4
    }
  ];

  const faqs = [
    {
      question: "A escola é aberta para visitas sem aviso prévio?",
      answer: "Sim! Acreditamos na transparência total. Nossas portas estão sempre abertas para os pais da casa conhecerem a vivência real dos seus filhos."
    },
    {
      question: "Como funciona o processo de adaptação?",
      answer: "Trabalhamos com o conceito de 'Adaptação Suave'. Respeitamos o tempo de cada criança e permitimos a presença dos pais no início para gerar segurança emocional."
    }
  ];

  return (
    <section id="commitments" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-brand-text uppercase"
          >
            Nosso Compromisso com <br/><span className="text-brand-purple italic">Segurança & Transparência</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {commitments.map((c, i) => (
            <CommitmentCard key={i} {...c} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
          <h3 className="text-3xl font-black text-brand-text mb-8">Dúvidas Frequentes</h3>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
