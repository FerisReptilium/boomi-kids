import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 bg-transparent">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO BOOMI KIDS - CÍRCULO PREMIUM */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <img 
            src="/logo.png" 
            alt="Logo Boomi Kids" 
            className="h-28 w-28 md:h-36 md:w-36 object-cover rounded-full border-[6px] border-white shadow-2xl bg-white"
            style={{ 
              filter: "contrast(1.05) brightness(1.02)",
            }}
          />
        </motion.div>

        {/* NAVEGAÇÃO NÍTIDA */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Início', 'Sobre', 'Diferenciais', 'Contato'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-black text-brand-text uppercase text-sm tracking-tight hover:text-brand-purple transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5511919597811" 
            className="bg-brand-purple text-white px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:shadow-brand-purple/40 transition-all border-2 border-transparent hover:border-white"
          >
            Agendar Visita
          </motion.a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
