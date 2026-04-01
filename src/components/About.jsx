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
        
        {/* Row Superior: Imagem e Ideal de Educação */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl border-4 border-white relative z-10 bg-white p-2 transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
              {/* 📸 SUA FOTO REALISTA AQUI */}
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
                <div className="bg-brand-green/20 p-3 rounded-full text-brand-green text-xl font-bold">
                  B!
                </div>
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
                A Escola Boomi Kids é fruto de um sonho compartilhado. Idealizada pelo mantenedor <strong>Badwi Jean Semaan</strong>, que buscou para outras famílias a excelência e o afeto que desejava para a educação de seus próprios filhos, a escola nasceu para ser um refúgio de aprendizado real.
              </p>
              <p>
                Sob a liderança da Diretora Pedagógica <strong>Madalena</strong>, que traz consigo décadas de experiênica dedicada à Educação Infantil e ao Ensino Fundamental, nossa proposta funde o "educar" e o "cuidar" como atos indissociáveis.
              </p>
              <p>
                Aqui, bebês e crianças são vistos como sujeitos potentes. Nossa metodologia, inspirada em gigantes como <strong>Piaget, Vygotsky e Emmi Pikler</strong>, garante que cada descoberta seja feita através da investigação, do respeito ao tempo individual e da alegria de brincar. Localizada no coração do Tatuapé, somos o elo entre a sabedoria e a infância.
              </p>
            </div>

            {/* Licensing Info */}
            <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-6 rounded-r-xl mt-8">
              <div className="flex items-center gap-3 mb-2">
                <ShieldIcon />
                <h4 className="font-bold text-xl text-brand-blue">Totalmente Licenciada</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                A escola Boomi Kids esta licenciada junto à Diretoria Regional de Educação da Penha, atendendo a todas as exigências legais para seu funcionamento. Possui AVCB (autorização do Bombeiro) e da Vigilância Sanitária. Os profissionais que atuam na Boomi Kids estão alinhados com os ideais da escola, buscando oferecer uma Educação onde “a sabedoria abraça a infância”.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row Inferior: Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Missão */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDFBF7] p-8 rounded-3xl border border-brand-red/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-red">
               <TargetIcon />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-text">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Oferecer aos bebês e crianças um ambiente acolhedor, seguro e estimulante, baseado no cuidado, no respeito à diversidade e na parceria com as famílias, promovendo o desenvolvimento integral – cognitivo, emocional e social – por meio de práticas pedagógicas intencionais, nas quais a criança é protagonista desde a mais tenra idade.
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#FDFBF7] p-8 rounded-3xl border border-brand-blue/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-blue">
               <EyeIcon />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-text">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Ser uma instituição reconhecida por respeitar a infância, pela forte parceria com as famílias e pelo profundo compromisso com o desenvolvimento integral de bebês e crianças em toda nossa região comunitária.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#FDFBF7] p-8 rounded-3xl border border-brand-yellow/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden lg:col-span-1 md:col-span-2"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-yellow">
               <StarIcon />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-text">Nossos Valores</h3>
            <ul className="flex flex-col gap-3 text-gray-600 font-medium">
              <li className="flex gap-2 items-start"><span className="text-brand-yellow font-bold mt-1">•</span> <p><strong>Afeto e acolhimento:</strong> cuidado respeitoso às necessidades das crianças.</p></li>
              <li className="flex gap-2 items-start"><span className="text-brand-yellow font-bold mt-1">•</span> <p><strong>Brincar e aprender:</strong> o brincar como eixo central.</p></li>
              <li className="flex gap-2 items-start"><span className="text-brand-yellow font-bold mt-1">•</span> <p><strong>Desenvolvimento integral:</strong> aspectos físicos, emocionais, sociais e cognitivos.</p></li>
              <li className="flex gap-2 items-start"><span className="text-brand-yellow font-bold mt-1">•</span> <p><strong>Parceria familiar:</strong> diálogo, confiança e responsabilidade.</p></li>
              <li className="flex gap-2 items-start"><span className="text-brand-yellow font-bold mt-1">•</span> <p><strong>Intencionalidade pedagógica:</strong> práticas e ações significativas.</p></li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
