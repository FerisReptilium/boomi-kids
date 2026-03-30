import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Soup, Coffee, Heart, CheckCircle2 } from 'lucide-react';

const Nutrition = () => {
  const benefits = [
    {
      icon: <Apple className="text-brand-green" size={24} />,
      title: "Menu Balanceado",
      desc: "Cardápio elaborado por nutricionista especializada, respeitando cada fase do crescimento."
    },
    {
      icon: <Soup className="text-brand-orange" size={24} />,
      title: "Cozinha Própria",
      desc: "Refeições fresquinhas preparadas diariamente em nossa cozinha, com ingredientes selecionados."
    },
    {
      icon: <Coffee className="text-brand-yellow" size={24} />,
      title: "Introdução Alimentar",
      desc: "Acompanhamento cuidadoso na descoberta de novos sabores, texturas e cores."
    },
    {
      icon: <Heart className="text-brand-red" size={24} />,
      title: "Hábitos Saudáveis",
      desc: "Educação alimentar que estimula a autonomia e o prazer em comer bem desde cedo."
    }
  ];

  return (
    <section id="nutrition" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" 
                alt="Alimentação Saudável" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-green/10 p-3 rounded-full">
                  <CheckCircle2 className="text-brand-green" size={24} />
                </div>
                <div>
                  <p className="font-black text-brand-text uppercase text-xs tracking-wider">100% Caseiro</p>
                  <p className="text-sm text-gray-500">Sem ultraprocessados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-bold tracking-widest uppercase text-sm mb-2 block font-sans"
            >
              Nutrição & Saúde
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-brand-text mb-8 leading-tight font-fun uppercase"
            >
              Crescendo com <span className="text-brand-green italic">Sabor e Alegria</span>
            </motion.h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Na Boomi Kids, acreditamos que a alimentação é um ato de cuidado e aprendizado. Nosso compromisso é oferecer refeições que nutrem o corpo e despertam a curiosidade, sempre com o acompanhamento de especialistas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-50 border border-gray-100/50 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 inline-block p-2 bg-white rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-brand-text mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Nutrition;
