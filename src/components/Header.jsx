import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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
    { name: 'INÍCIO', href: '#home' },
    { name: 'A ESCOLA', href: '#about' },
    { name: 'TURMAS', href: '#plans' },
    { name: 'GALERIA', href: '#gallery' },
    { name: 'NUTRIÇÃO', href: '#nutrition' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTATO', href: '#contact' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Top Bar - Estilo Corporativo Fino Azul */}
        <div className="bg-brand-blue text-white text-xs py-2 px-6 lg:px-12 flex justify-between items-center font-medium">
          <div className="flex gap-6 items-center">
            <a href="https://wa.me/5511919597811" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors"><Phone size={14}/> (11) 91959-7811</a>
            <a href="https://instagram.com/escolaboomikids" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors"><Instagram size={14}/> @escolaboomikids</a>
            <span className="hidden md:flex items-center gap-2"><Mail size={14}/> contato@boomikids.com.br</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="cursor-pointer hover:text-white/80">Carreira</span>
            <span className="text-white/40">|</span>
            <span className="cursor-pointer hover:text-white/80">Área do Aluno</span>
          </div>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 ${isScrolled ? 'top-0 py-2' : 'top-8 py-3'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Centralizada no Mobile, Esquerda no Desktop */}
          <a href="#home" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Logo Boomi Kids" 
              className="h-12 md:h-16 w-auto object-contain transition-transform" 
            />
          </a>

          {/* Nav Centralizada Estilo Template Misto */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-auto">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-bold text-[11px] xl:text-xs text-brand-text hover:text-brand-blue transition-colors tracking-widest relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-brand-blue after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search/CTA Canto Direito */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://wa.me/5511919597811" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-yellow text-brand-text px-6 py-2 rounded-sm font-bold text-sm shadow-sm hover:shadow-md hover:bg-yellow-400 hover:-translate-y-0.5 transition-all"
            >
              MATRÍCULAS 2026
            </a>
          </div>

          <button 
            className="lg:hidden text-brand-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden flex flex-col"
            >
              <div className="py-4 px-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="font-bold text-sm py-3 border-b border-gray-100 text-brand-text hover:text-brand-blue tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="https://wa.me/5511919597811" 
                  className="bg-brand-yellow text-brand-text text-center px-6 py-3 rounded-sm font-bold mt-2 shadow-sm uppercase text-sm"
                >
                  Matrículas Abertas via Zap
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
