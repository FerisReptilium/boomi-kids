import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturesStrip from './components/FeaturesStrip.jsx';
import About from './components/About.jsx';
import OrbitServices from './components/OrbitServices.jsx';
import Classes from './components/Classes.jsx';
import Differentiators from './components/Differentiators.jsx';
import Gallery from './components/Gallery.jsx';
import Nutrition from './components/Nutrition.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import AIChat from './components/AIChat.jsx';
import AccessibilityWidget from './components/AccessibilityWidget.jsx';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="font-sans antialiased text-brand-text w-full overflow-x-hidden pt-12 relative">
      <AccessibilityWidget />
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <About />
        <OrbitServices />
        <Classes />
        <Differentiators />
        <Gallery />
        <Nutrition />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      {/* WhatsApp Floating CTA (Symmetrical to AIChat) */}
      <a 
        href="https://wa.me/5511919597811" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-40 flex items-center justify-center group w-16 h-16 border-2 border-white"
        aria-label="Falar conosco via WhatsApp"
      >
        <MessageCircle size={32} strokeWidth={2.5} />
        <span className="absolute left-20 bg-white text-gray-800 border-l-4 border-[#25D366] px-4 py-2 text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none rounded-r-xl">
          Conversar Agora
        </span>
      </a>

      {/* Chat Atendente IA (Canto Direito) */}
      <AIChat />
    </div>
  );
}

export default App;
