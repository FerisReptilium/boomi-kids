import React from 'react';
import { motion } from 'framer-motion';

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl border-4 border-white relative z-10 bg-white p-2 transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
              {/* 📸 FOTO ULTRA-REALISTA - O IDEAL DE EDUCAÇÃO */}
              <img 
                src="/about_philosophy_real.png" 
                alt="O Ideal de Educação Boomi Kids" 
                className="w-full h-auto rounded-[32px] max-h-[600px] object-cover"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-green/20 p-3 rounded-full text-brand-green text-xl font-bold">B!</div>
                <div>
                  <p className="font-bold text-gray-800">Escola Autorizada</p>
                  <p className="text-sm text-gray-500">Segurança Total</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-7/12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-text leading-tight">
              Nosso ideal de <span className="text-brand-purple">Educação</span>
            </h2>
            <div className="text-lg text-gray-600 mb-6 leading-relaxed space-y-4 font-medium">
              <p>
                A Escola Boomi Kids é fruto de um sonho compartilhado. Idealizada pelo mantenedor <strong>Badwi Jean Semaan</strong>...
              </p>
              {/* Restante do seu texto biográfico aqui */}
            </div>
            {/* ... Licensing Info ... */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
