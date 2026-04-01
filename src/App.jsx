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
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="font-sans antialiased text-brand-text w-full overflow-x-hidden pt-20 relative bg-[#FDFDFF]">
      {/* O HEADER APARECE AQUI NO TOPO */}
      <Header />
      
      <main>
        <Hero />
        <FeaturesStrip />
        
        <div id="sobre">
          <About />
        </div>

        <div id="turmas">
          <Classes />
        </div>

        <div id="diferenciais" className="bg-gray-50/50">
          <Differentiators />
        </div>

        <div id="galeria">
          <Gallery />
        </div>

        <div id="nutricao">
          <Nutrition />
        </div>

        <FAQ />
        
        <div id="contato" className="bg-brand-blue shadow-inner relative overflow-hidden">
           <Contact />
        </div>
      </main>
      
      {/* WHATSAPP FLUTUANTE PREMIUM */}
      <a 
        href="https://wa.me/5511919597811" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center border-4 border-white"
        aria-label="Falar conosco via WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
