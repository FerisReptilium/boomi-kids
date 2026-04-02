// 1. src/App.jsx
// Restaurado seu layout original com o WhatsApp na esquerda e IDs de navegação corretos
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturesStrip from './components/FeaturesStrip.jsx';
import About from './components/About.jsx';
import Classes from './components/Classes.jsx';
import Differentiators from './components/Differentiators.jsx';
import Gallery from './components/Gallery.jsx';
import Nutrition from './components/Nutrition.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import AIChat from './components/AIChat.jsx';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="font-sans antialiased text-brand-text w-full overflow-x-hidden pt-12 relative bg-[#FDFDFF]">
      <Header />
      
      <main>
        <div id="inicio"><Hero /></div>
        <FeaturesStrip />
        <div id="sobre"><About /></div>
        <div id="turmas"><Classes /></div>
        <div id="diferenciais"><Differentiators /></div>
        <div id="galeria"><Gallery /></div>
        <div id="nutricao"><Nutrition /></div>
        <div id="faq"><FAQ /></div>
        <div id="contato"><Contact /></div>
      </main>
      
      {/* WHATSAPP NO CANTO ESQUERDO (FIXADO) */}
      <a 
        href="https://wa.me/5511919597811" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center border-4 border-white animate-pulse-gentle"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* CORUJINHA IA NO CANTO DIREITO */}
      <AIChat />
    </div>
  );
}

export default App;
