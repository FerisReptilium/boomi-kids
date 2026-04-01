import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 bg-transparent">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <img 
            src="/logo.png" 
            alt="Logo Boomi Kids" 
            className="h-28 w-28 md:h-36 md:w-36 object-cover rounded-full border-[6px] border-white shadow-2xl bg-white"
          />
        </motion.div>
        {/* ... restante do menu ... */}
      </div>
    </header>
  );
};
export default Header;
