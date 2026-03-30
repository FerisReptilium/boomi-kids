import React from 'react';
import { Puzzle, Users, Eye, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Differentiators = () => {
  const cards = [
    {
      title: "O Brincar como Eixo Central",
      description: "Entendemos o brincar como a linguagem primeira da infância. É explorando, montando e desmontando que os saberes se constroem organicamente.",
      icon: <Puzzle size={32} />,
      color: "bg-brand-blue/20",
      textColor: "text-blue-600",
      borderColor: "border-brand-blue/30"
    },
    {
      title: "Parceria com as Famílias",
      description: "A escola é extensão do lar. Valorizamos a comunicação aberta, encontros literários e vivências conjuntas para fortalecer essa aliança essencial.",
      icon: <Users size={32} />,
      color: "bg-brand-yellow/30",
      textColor: "text-yellow-700",
      borderColor: "border-brand-yellow/40"
    },
    {
      title: "Observação e Registro",
      description: "Acompanhamos o percurso individual e coletivo. Os portfólios e diários garantem a documentação pedagógica e atestam os progressos visíveis de cada um.",
      icon: <Eye size={32} />,
      color: "bg-brand-purple/20",
      textColor: "text-purple-600",
      borderColor: "border-brand-purple/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="differentiators" className="py-24 bg-[#FCFBFF]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-brand-purple font-bold uppercase tracking-wider text-sm mb-2 block">Por que a Boomi Kids?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6">Nossos Diferenciais</h2>
          <p className="text-gray-600 text-lg">Metodologias ativas desenhadas para despertar a curiosidade e o protagonismo dos pequenos, passo a passo.</p>
        </motion.div>

        {/* Info Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {cards.map((card, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 border-b-4 ${card.borderColor} group`}
            >
              <div className={`${card.color} ${card.textColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Motor Development Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-brand-blue/30 to-brand-green/30 rounded-[3rem] p-8 md:p-12 shadow-inner border border-white relative overflow-hidden"
        >
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full mix-blend-overlay filter blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 shadow-sm mb-6">
                <Activity size={18} className="text-teal-600" />
                <span className="text-sm font-bold text-teal-800 uppercase tracking-wider">O Grande Diferencial</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">O Movimento como Matéria-Prima: <span className="text-teal-700">Desenvolvimento Motor Especializado</span></h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A neurociência comprova: o cérebro da criança se desenvolve muito mais rápido quando atrelado ao lado motor. Na Boomi Kids, fomos além.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-teal-500 rounded-full p-1 mt-1"><Activity size={14} className="text-white" /></div>
                  <span className="text-gray-700 font-medium">Circuitos psicomotores diários incorporados à rotina;</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-teal-500 rounded-full p-1 mt-1"><Activity size={14} className="text-white" /></div>
                  <span className="text-gray-700 font-medium">Espaços com mobiliário Pikler promotores do movimento livre;</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-teal-500 rounded-full p-1 mt-1"><Activity size={14} className="text-white" /></div>
                  <span className="text-gray-700 font-medium">Equipe qualificada com foco na correta maturação neurolocomotora.</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src="/motor_activities_1774845019261.png" 
                  alt="Circuito motor para educação infantil, estimulando autonomia" 
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Differentiators;
