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
      title: "Plataforma Digital",
      desc: "Agenda digital moderna com registro instantâneo de alimentação, sono e cada descoberta pedagógica dos bebês e crianças.",
      delay: 0.1
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Segurança & Alvarás",
      desc: "Licenciada pela DRE Penha, com AVCB (Bombeiro) e Vigilância Sanitária rigorosamente em dia para tranquilidade total.",
      delay: 0.2
    },
    {
      icon: <Utensils size={28} />,
      title: "Nutrição In natura",
      desc: "Alimentação preparada no local sob supervisão de nutricionista, focada em ingredientes frescos e desenvolvimento biopsicossocial.",
      delay: 0.3
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Equipe Graduada",
      desc: "Corpo docente 100% graduado em Pedagogia, com treinamento certificado em Primeiros Socorros Pediátricos.",
      delay: 0.4
    }
  ];

  const faqs = [
    {
      question: "A escola é aberta para visitas sem aviso prévio?",
      answer: "Sim! Acreditamos na transparência total. Embora o agendamento garanta a disponibilidade da diretora para conversar, nossas portas estão sempre abertas para os pais conhecerem a vivência real da escola."
    },
    {
      question: "Como funciona a 'Adaptação Suave'?",
      answer: "Respeitamos o tempo individual da criança e da família. Permitimos a presença acompanhada no início para fortalecer o vínculo de confiança entre escola, bebê e responsáveis."
    },
    {
      question: "Como o cardápio é acompanhado?",
      answer: "Temos nutricionista dedicada que elabora menus sazonais e acompanha a introdução alimentar, respeitando os ritmos, seletividades e demandas nutricionais individuais."
    }
  ];

  return (
    <section id="commitments" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-brand-text uppercase leading-tight"
          >
            Compromisso Boomi: <br/><span className="text-brand-purple italic tracking-tight">Segurança & Transparência</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {commitments.map((c, i) => (
            <CommitmentCard key={i} {...c} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-3xl font-black text-brand-text mb-8 uppercase tracking-tight">Perguntas para a Escola</h3>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
          
          <div className="mt-12 text-center p-8 bg-brand-blue/5 rounded-3xl border border-dashed border-brand-blue/30">
            <p className="text-gray-600 font-medium mb-6 italic">Onde a sabedoria encontra o cuidado.</p>
            <a 
              href="https://wa.me/5511919597811" 
              className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-brand-purple transition-all transform hover:-translate-y-1"
            >
              FALAR COM A COORDENAÇÃO
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
