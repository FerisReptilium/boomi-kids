import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const CorujinhaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M9 12c.5-1.5 2-2.5 3-2.5s2.5 1 3 2.5"></path><circle cx="9" cy="11" r="1.5"></circle><circle cx="15" cy="11" r="1.5"></circle><path d="M12 14v2"></path></svg>
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
                <a href="https://maps.google.com/?q=Rua+Dr+Miguel+Vieira+Ferreira+107+Tatuape" target="_blank" rel="noreferrer" className="hover:text-[#00A8E8] font-medium transition-colors">Rua Dr. Miguel Vieira Ferreira, 107 – Tatuapé, SP</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Phone className="text-[#00A8E8]" /> 
                <a href="https://wa.me/5511919597811" target="_blank" rel="noreferrer" className="hover:text-[#00A8E8] font-medium transition-colors">(11) 91959-7811</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <CorujinhaIcon /> 
                <a href="https://www.instagram.com/escolaboomikids/" target="_blank" rel="noreferrer" className="hover:text-[#00A8E8] font-medium transition-colors">@escolaboomikids</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Mail className="text-[#00A8E8]" /> 
                <a href="mailto:escolaboomikids@gmail.com" className="hover:text-[#00A8E8] font-medium transition-colors">escolaboomikids@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-10 rounded-[3rem]">
            <h3 className="text-xl font-bold mb-6">Mande uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nome" className="w-full p-4 rounded-2xl border border-gray-100 outline-none focus:border-[#00A8E8]" />
              <input type="email" placeholder="E-mail" className="w-full p-4 rounded-2xl border border-gray-100 outline-none focus:border-[#00A8E8]" />
              <textarea placeholder="Mensagem" className="w-full p-4 rounded-2xl border border-gray-100 h-32 outline-none focus:border-[#00A8E8]"></textarea>
              <button className="w-full bg-[#1EA1F2] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-600 transition-colors uppercase tracking-widest">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
