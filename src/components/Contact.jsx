import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const InstaIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Contact = () => {
  return (
    <section id="contato" className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-10">Venha fazer parte da família</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#00A8E8] shrink-0" />
                <p className="text-sm text-gray-600 font-medium">Rua Dr. Miguel Vieira Ferreira, 107 – Tatuapé, SP</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#00A8E8] shrink-0" />
                <p className="text-sm text-gray-600 font-medium">(11) 91959-7811</p>
              </div>
              <div className="flex items-start gap-4">
                <InstaIcon size={24} className="text-[#00A8E8] shrink-0" />
                <p className="text-sm text-gray-600 font-medium">@escolaboomikids</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#00A8E8] shrink-0" />
                <p className="text-sm text-gray-600 font-medium">contato@boomikids.com.br</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 rounded-[2rem] p-10 border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100" placeholder="Nome Completo" />
              <input type="email" className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100" placeholder="Seu E-mail" />
              <textarea rows="4" className="w-full bg-white px-6 py-4 rounded-xl border border-gray-100" placeholder="Sua Mensagem"></textarea>
              <button type="submit" className="w-full bg-gray-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
