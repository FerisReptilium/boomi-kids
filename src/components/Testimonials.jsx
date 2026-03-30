import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      relation: "Mãe do Luca (Maternal)",
      text: "A Boomi Kids foi a melhor escolha que fizemos. O acolhimento é real, não é só marketing. Sinto que meu filho é visto e respeitado em seu tempo.",
      color: "bg-brand-blue/10",
      iconColor: "text-brand-blue"
    },
    {
      name: "Ricardo Mendes",
      relation: "Pai da Bia (Berçário)",
      text: "Tinha muito receio de deixar a Bia tão cedo na escola, mas a equipe me passou total segurança. A estrutura é impecável e o carinho das professoras é evidente.",
      color: "bg-brand-pink/10",
      iconColor: "text-brand-pink"
    },
    {
      name: "Carla Antunes",
      relation: "Mãe do Theo (Jardim I)",
      text: "O desenvolvimento do Theo na parte motora e social foi incrível em poucos meses. Ele ama o 'dia da horta' e o ateliê de artes!",
      color: "bg-brand-yellow/10",
      iconColor: "text-brand-yellow"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-2 block font-sans"
          >
            Família Boomi Kids
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-text font-fun uppercase"
          >
            O que dizem os <span className="text-brand-pink italic">Nossos Pais</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`${rev.color} p-10 rounded-[3rem] relative shadow-sm border border-white hover:shadow-xl transition-all duration-500 group`}
            >
              <div className="absolute top-8 right-10 opacity-20 transform group-hover:scale-110 transition-transform">
                <Quote size={60} className={rev.iconColor} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={16} className={`fill-current ${rev.iconColor}`} />
                ))}
              </div>

              <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative z-10">
                "{rev.text}"
              </p>

              <div className="relative z-10 flex items-center gap-4">
                <div className={`w-12 h-12 ${rev.iconColor} bg-white rounded-full flex items-center justify-center font-bold text-xl uppercase`}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-text">{rev.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{rev.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="bg-slate-50 p-6 md:p-10 rounded-[3rem] border-2 border-dashed border-gray-200 text-center max-w-2xl">
             <h3 className="text-2xl font-bold text-brand-text mb-4">Faça parte da nossa história!</h3>
             <p className="text-gray-500 mb-6 font-medium">Junte-se a dezenas de famílias que escolheram a melhor educação do Tatuapé.</p>
             <a 
               href="https://wa.me/5511919597811" 
               target="_blank" 
               rel="noreferrer"
               className="bg-brand-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform inline-block"
             >
               AGENDAR VISITA AGORA
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
