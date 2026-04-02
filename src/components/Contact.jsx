// 3. src/components/Contact.jsx
// Restaurado seu layout de visita original - REMOVIDO o ícone de clipe
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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
                <MapPin className="text-[#00A8E8]" /> 
                <a href="https://maps.google.com/?q=Rua+Dr+Miguel+Vieira+Ferreira+107+Tatuape" target="_blank" rel="noreferrer" className="hover:text-[#00A8E8] transition-colors font-bold text-lg">Rua Dr. Miguel Vieira Ferreira, 107 – Tatuapé, SP</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Phone className="text-[#00A8E8]" /> 
                <a href="https://wa.me/5511919597811" target="_blank" rel="noreferrer" className="hover:text-[#00A8E8] transition-colors font-bold text-lg">(11) 91959-7811</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <InstagramIcon /> 
                <a href="https://www.instagram.com/escolaboomikids/" target="_blank" rel="noreferrer" className="hover:text-[#00A8E8] transition-colors font-bold text-lg">@escolaboomikids</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Mail className="text-[#00A8E8]" /> 
                <a href="mailto:escolaboomikids@gmail.com" className="hover:text-[#00A8E8] transition-colors font-bold text-lg">escolaboomikids@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-10 rounded-[3rem] shadow-inner">
            <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-[#1EA1F2]">Mande uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Seu Nome" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#1EA1F2]" />
              <input type="email" placeholder="E-mail" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#1EA1F2]" />
              <textarea placeholder="Como podemos ajudar?" className="w-full p-5 rounded-2xl border border-gray-200 h-32 outline-none focus:border-[#1EA1F2]"></textarea>
              <button className="w-full bg-[#1EA1F2] text-white font-black py-5 rounded-2xl uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
