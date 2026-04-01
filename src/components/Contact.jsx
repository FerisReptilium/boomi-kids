import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="py-24 container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-brand-blue/10 rounded-[3rem] p-8 md:p-12 shadow-sm border border-brand-blue/20"
        >
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-5/12">
              <h2 className="text-4xl font-bold text-brand-text mb-6">Venha fazer parte da família.</h2>
              <p className="text-gray-600 mb-10 text-lg">Estamos de portas abertas no Tatuapé. Agende uma visita ou tire suas dúvidas rapidamente.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand-purple"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Endereço</h4>
                    <p className="text-gray-600 mt-1">Rua Dr. Miguel Vieira Ferreira, 107 – Tatuapé, SP<br/>CEP: 03071-080</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand-purple"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-800">WhatsApp / Telefone</h4>
                    <a href="https://wa.me/5511919597811" className="text-gray-600 hover:text-brand-purple font-medium transition-colors mt-1 block">(11) 91959-7811</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand-purple"><Instagram size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Instagram</h4>
                    <a href="https://instagram.com/escolaboomikids" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand-purple font-medium transition-colors mt-1 block">@escolaboomikids</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-brand-purple"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-800">E-mail</h4>
                    {/* NOVO E-MAIL ADICIONADO ABAIXO */}
                    <a href="mailto:escolaboomikids@gmail.com" className="text-gray-600 hover:text-brand-purple font-medium transition-colors mt-1 block">escolaboomikids@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="Como podemos chamar você?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 resize-none" placeholder="Gostaria de agendar uma visita..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-purple text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all hover:-translate-y-1">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center md:text-left">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/logo.png" alt="Logo Boomi Kids" className="h-10 w-auto" />
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Boomi Kids Tatuapé. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/escolaboomikids" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-purple font-medium">Instagram</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
