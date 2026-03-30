import React, { useState, useEffect } from 'react';
import { Eye, Type, Contrast, Accessibility, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Base html font-size
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);

  // Manipulação de Fonte Global
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Manipulação de Filtros Globais (Daltonismo e Contraste)
  useEffect(() => {
    const htmlElement = document.documentElement;
    let filters = '';
    
    if (isHighContrast) {
      filters += 'contrast(1.2) saturate(1.5) brightness(0.9) ';
    }
    if (isGrayscale) {
      filters += 'grayscale(1) ';
    }
    
    htmlElement.style.filter = filters.trim();
  }, [isHighContrast, isGrayscale]);

  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-[100] flex">
      {/* Botão de abrir/fechar o painel */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-blue text-white p-3 rounded-r-xl shadow-lg hover:bg-opacity-90 transition-colors flex items-center justify-center border border-l-0 border-white/20"
        aria-label="Opções de Acessibilidade"
      >
        <Accessibility size={28} />
      </button>

      {/* Painel Interno */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white/95 backdrop-blur-md shadow-2xl rounded-r-2xl border border-gray-200 border-l-0 ml-1 p-5 flex flex-col gap-4 w-64"
          >
            <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-2">
              <h3 className="font-bold text-brand-text flex items-center gap-2">
                <Accessibility size={18} />
                Acessibilidade
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-brand-red">
                <X size={20} />
              </button>
            </div>

            {/* Aumentar Fontes */}
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold text-gray-500 tracking-wider flex items-center gap-1">
                <Type size={12} /> Tamanho do Texto
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setFontSize(prev => Math.max(12, prev - 2))}
                  className="flex-1 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded shadow-sm transition-colors text-sm"
                >
                  A-
                </button>
                <button 
                  onClick={() => setFontSize(16)}
                  className="flex-1 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded shadow-sm transition-colors text-sm"
                >
                  Padrão
                </button>
                <button 
                  onClick={() => setFontSize(prev => Math.min(24, prev + 2))}
                  className="flex-1 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded shadow-sm transition-colors text-lg"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Filtros Visuais */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs uppercase font-bold text-gray-500 tracking-wider flex items-center gap-1">
                <Eye size={12} /> Opções Visuais
              </span>
              
              <button 
                onClick={() => setIsHighContrast(!isHighContrast)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-colors ${isHighContrast ? 'bg-brand-blue text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <Contrast size={16} />
                Alto Contraste
              </button>

              <button 
                onClick={() => setIsGrayscale(!isGrayscale)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-colors ${isGrayscale ? 'bg-brand-purple text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <Eye size={16} />
                Tons de Cinza (Daltonismo)
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 mt-2 italic text-center">A Boomi Kids se preocupa em incluir a todos.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilityWidget;
