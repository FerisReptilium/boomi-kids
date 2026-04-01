import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    // Mudamos de 'fixed' para 'absolute' para ele ficar parado no topo
    <header className="absolute top-0 left-0 w-full z-50 py-6 bg-transparent">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO BOOMI KIDS - TRATAMENTO PREMIUM E MAIOR */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center"
        >
          <img 
            src="/logo.png" 
            alt="Logo Boomi Kids" 
            className="h-28 md:h-32 object-contain hover:scale-105 transition-transform drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
            style={{ 
              filter: "contrast(1.1) brightness(1.05) saturate(1.1)",
              imageRendering: "crisp-edges"
            }}
          />
        </motion.div>

        {/* NAVEGAÇÃO - MAIS NÍTIDA */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Início', 'Sobre', 'Diferenciais', 'Contato'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-black text-brand-text uppercase text-sm tracking-widest hover:text-brand-purple transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5511919597811" 
            className="bg-brand-purple text-white px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:shadow-brand-purple/40 transition-all"
          >
            Agendar Visita
          </motion.a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
