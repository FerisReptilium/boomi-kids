import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram as InstaIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'A ESCOLA', href: '#sobre' },
    { name: 'TURMAS', href: '#turmas' },
    { name: 'DIFERENCIAIS', href: '#diferenciais' },
    { name: 'GALERIA', href: '#galeria' },
    { name: 'NUTRIÇÃO', href: '#nutricao' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Barra Superior Corporativa */}
        <div className="bg-brand-blue text-white text-[10px] py-1.5 px-6 lg:px-12 flex justify-between items-center font-bold">
          <div className="flex gap-6 items-center">
            <a href="https://wa.me/5511919597811" target="_blank" className="flex items-center gap-2"><Phone size={12}/> (11) 91959-7811</a>
            <span className="hidden md:flex items-center gap-2"><Mail size={12}/> contato@boomikids.com.br</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="opacity-70">Tatuapé • SP</span>
          </div>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 ${isScrolled ? 'top-0 py-2' : 'top-7 py-3'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Premium */}
          <a href="#inicio" className="relative z-50 transition-transform hover:scale-105">
            <div className="bg-white p-2 rounded-full shadow-lg border border-gray-50">
              <img src="/logo.png" alt="Logo Boomi Kids" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
            </div>
          </a>

          {/* Menu de Navegação Central */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-12">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-black text-[10px] uppercase text-brand-text/70 hover:text-brand-blue transition-all tracking-[0.15em]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão de Matrículas */}
          <div className="hidden lg:flex items-center">
            <a href="https://wa.me/5511919597811" target="_blank" className="bg-brand-yellow text-brand-text px-6 py-2.5 rounded-full font-black text-[10px] tracking-widest uppercase shadow-md hover:scale-105 transition-all">
              MATRÍCULAS 2026
            </a>
          </div>

          <button className="lg:hidden text-brand-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="font-bold text-xs py-2 uppercase text-brand-text" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
