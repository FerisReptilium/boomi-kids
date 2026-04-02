// 2. Arquivo: src/components/OrbitServices.jsx
import React from 'react';
import { Award, BookOpen, Eye, Heart, Clock, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const OrbitServices = () => {
  const leftServices = [
    { title: "Equipe Capacitada", desc: "Formação técnica constante.", icon: <Award /> },
    { title: "Metodologias Ativas", desc: "Brincar investigativo.", icon: <BookOpen /> },
    { title: "Observação Contínua", desc: "Registro diário.", icon: <Eye /> }
  ];

  const rightServices = [
    { title: "Parceria com Famílias", desc: "Comunicação transparente.", icon: <Link /> },
    { title: "Ambiente Acolhedor", desc: "Espaço seguro e afetivo.", icon: <Heart /> },
    { title: "Rotina Estruturada", desc: "Respeito ao ritmo da criança.", icon: <Clock /> }
  ];

  return (
    <section id="servicos" className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-premium text-brand-text mb-20">A Escola <span className="text-brand-blue italic">Ideal</span> Para Seu Filho</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="flex flex-col gap-12 lg:w-1/3 items-end">
            {leftServices.map((s, i) => (
              <div key={i} className="flex items-center gap-6 text-right">
                <div><h4 className="font-bold text-xs uppercase mb-1">{s.title}</h4><p className="text-[11px] text-gray-500">{s.desc}</p></div>
                <div className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-brand-blue">{s.icon}</div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full p-4 bg-white shadow-2xl border-4 border-white overflow-hidden">
               {/* 📸 FOTO DA PROFESSORA LENDO COM ALUNO AQUI */}
               <img src="/teacher_child_orbit.png" alt="Leitura Afetiva" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:w-1/3 items-start">
            {rightServices.map((s, i) => (
              <div key={i} className="flex items-center gap-6 text-left">
                <div className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-brand-blue">{s.icon}</div>
                <div><h4 className="font-bold text-xs uppercase mb-1">{s.title}</h4><p className="text-[11px] text-gray-500">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrbitServices;
