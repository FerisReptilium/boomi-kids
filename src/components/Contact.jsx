import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Ícone manual para garantir que o build não falhe
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Contact = () => {
  return (
    <section id="contato" className="bg-white py-32 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Venha nos visitar</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="text-[#00A8E8]" /> <span>Rua Dr. Miguel Vieira Ferreira, 107 – Tatuapé, SP</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Phone className="text-[#00A8E8]" /> <span>(11) 91959-7811</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <InstagramIcon /> <span>@escolaboomikids</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Mande uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nome" className="w-full p-4 rounded-xl border border-gray-200" />
              <input type="email" placeholder="E-mail" className="w-full p-4 rounded-xl border border-gray-200" />
              <textarea placeholder="Mensagem" className="w-full p-4 rounded-xl border border-gray-200 h-32"></textarea>
              <button className="w-full bg-[#00A8E8] text-white font-bold py-4 rounded-xl uppercase tracking-widest">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
