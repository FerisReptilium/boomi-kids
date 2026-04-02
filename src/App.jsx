import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturesStrip from './components/FeaturesStrip.jsx';
import OrbitServices from './components/OrbitServices.jsx';
import About from './components/About.jsx';
import Classes from './components/Classes.jsx';
import Differentiators from './components/Differentiators.jsx';
import Gallery from './components/Gallery.jsx';
import Nutrition from './components/Nutrition.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import AIChat from './components/AIChat.jsx';
import AccessibilityWidget from './components/AccessibilityWidget.jsx'; // ♿ VOLTOU!
import WaveDivider from './components/WaveDivider.jsx'; // 🌊 PARA O DESIGN PREMIUM
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="font-sans antialiased text-brand-text w-full overflow-x-hidden pt-12 relative bg-[#FDFDFF]">
      
      {/* ACESSIBILIDADE SEMPRE VISÍVEL NO LADO ESQUERDO */}
      <AccessibilityWidget />

      <Header />
      
      <main>
        <div id="inicio">
          <Hero />
          <FeaturesStrip />
        </div>
        
        {/* TRANSIÇÃO SUAVE PARA O SETOR DA FOTO REDONDA */}
        <div id="servicos" className="bg-white">
          <WaveDivider color="#FDFDFF" flip={true} />
          <OrbitServices />
          <WaveDivider color="#FDFDFF" />
        </div> 
        
        <div id="about"><About /></div>
        
        <div id="turmas" className="bg-gray-50/30">
           <WaveDivider color="#FDFDFF" flip={true} />
           <Classes />
           <WaveDivider color="#FDFDFF" />
        </div>

        <div id="diferenciais"><Differentiators /></div>
        <div id="galeria"><Gallery /></div>
        <div id="nutricao"><Nutrition /></div>
        <div id="faq"><FAQ /></div>
        <div id="contato"><Contact /></div>
      </main>
      
      {/* WHATSAPP NO CANTO ESQUERDO */}
      <a 
        href="https://wa.me/5511919597811" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center border-4 border-white animate-pulse-gentle w-16 h-16"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      <AIChat />
    </div>
  );
}

export default App;
