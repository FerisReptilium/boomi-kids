import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO COM TRATAMENTO ESPECIAL */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <img 
            src="/logo.png" 
            alt="Logo Boomi Kids" 
            className={`transition-all duration-300 object-contain drop-shadow-md ${isScrolled ? 'h-16' : 'h-24'} hover:scale-110`}
            style={{ filter: "contrast(1.1) brightness(1.05)" }} // Deixa a logo mais "viva"
          />
        </motion.div>

        <nav className="hidden lg:flex items-center gap-8">
          {['Início', 'Sobre', 'Diferenciais', 'Contato'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-bold transition-colors ${isScrolled ? 'text-brand-text hover:text-brand-purple' : 'text-brand-text hover:text-brand-purple'}`}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md">
            Agendar Visita
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
