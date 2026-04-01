import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InstaIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'A ESCOLA', href: '#sobre' },
    { name: 'TURMAS', href: '#turmas' },
    { name: 'GALERIA', href: '#galeria' },
    { name: 'NUTRIÇÃO', href: '#nutricao' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="bg-[#1EA1F2] text-white text-[10px] py-1.5 px-6 lg:px-12 flex justify-between items-center font-bold">
          <div className="flex gap-6 items-center">
            <a href="https://wa.me/5511919597811" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-80"><Phone size={12}/> (11) 91959-7811</a>
            <a href="mailto:contato@boomikids.com.br" className="hidden md:flex items-center gap-2 hover:opacity-80"><Mail size={12}/> contato@boomikids.com.br</a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://instagram.com/escolaboomikids" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform"><InstaIcon size={14}/></a>
            <span className="opacity-70">Tatuapé • SP</span>
          </div>
        </div>
      </div>

      <header className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 ${isScrolled ? 'top-0 py-2' : 'top-7 py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="bg-white p-2 rounded-full shadow-lg border border-gray-50 transition-transform hover:scale-105">
            <img src="/logo.png" alt="Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
          </a>
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-12 text-brand-text">
            <ul className="flex gap-6 uppercase font-black text-[10px] tracking-widest">
              {navLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-[#1EA1F2] transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </nav>
          <a href="https://wa.me/5511919597811" target="_blank" rel="noreferrer" className="hidden lg:block bg-[#FFD500] text-gray-900 px-6 py-2.5 rounded-full font-black text-[10px] tracking-widest uppercase">MATRÍCULAS 2026</a>
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
