import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';

const SYSTEM_PROMPT = `Você é a Corujinha Assistente IA, a inteligência oficial da "Escola Boomi Kids" (Tatuapé - SP).
Seu papel é conversar amigavelmente com os pais interessados, tirar dúvidas rápidas e levá-los a agendar uma visita guiada presencial.

**Conhecimento Institucional (Baseado no PPP):**
- **Fundação:** Idealizada pelo Mantenedor Badwi Jean Semaan e pela Diretora Pedagógica Madalena (com ampla experiência na educação básica).
- **Filosofia:** Baseada em Piaget, Vygotsky, Wallon, Malaguzzi, Pikler e Stanley Greenspan. Acreditamos que "Educar e Cuidar são indissociáveis".
- **Conceito:** Visão "Biopsicossocial" do bebê e da criança. Foco no protagonismo, autonomia e brincadeira.
- **Horários:** 
  - 1º Turno (Manhã): 7h às 11h.
  - 2º Turno (Tarde): 13h às 17h.
  - Período Integral: 7h às 19h.
  - Possibilidades de Semi-integral (6h ou 8h).
- **Turmas:** Berçário, Mini Maternal, Maternal, Jardim I e Jardim II.
- **Localização:** Rua Dr. Miguel Vieira Ferreira, 107 – Tatuapé (próximo ao Metrô Carrão e Radial Leste).

**Diretrizes de Personalidade:**
- Seja muito acolhedora, empática, educada e lúdica. Use emojis sutis 🦉✨.
- Responda de forma EXTREMAMENTE CURTA E DIRETA (máximo de 2 a 3 frases por resposta).
- Se o pai quiser agendar visita, ver preço ou matricular, **Diga para ele clicar no botão verde de WhatsApp ao lado**.

Responda sempre à última pergunta do usuário levando em consideração este conhecimento oficial.`;

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Olá! Seja bem-vindo(a) à Escola Boomi Kids. Sou a Corujinha, sua assistente virtual 🦉 Que ótimo ter você aqui! Gostaria de saber mais sobre nosso método de ensino, estrutura, turmas ou agendar uma visita?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const fetchGroqResponse = async (chatHistory) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemPrompt: SYSTEM_PROMPT,
          messages: chatHistory.map(msg => ({
            role: msg.type === 'bot' ? 'assistant' : 'user',
            content: msg.text
          }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro na API');
      }

      return data.content || data.choices?.[0]?.message?.content;
    } catch (error) {
      console.error("Chat Error:", error);
      return "Puxa, minha conexão com a internet deu um pequeno tropeço! 🦉 Você se importa de clicar no botão verde do WhatsApp ali do lado para falar rapidinho com nossa equipe humana?";
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: inputValue };
    const updatedHistory = [...messages, userMsg];
    
    setMessages(updatedHistory);
    setInputValue('');
    setIsTyping(true);

    const botAnswerText = await fetchGroqResponse(updatedHistory);

    setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botAnswerText }]);
    setIsTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-brand-blue text-white p-4 rounded-full shadow-2xl hover:bg-blue-800 transition-all z-50 flex items-center justify-center border-4 border-white group w-16 h-16 ${isOpen ? 'hidden' : 'block'}`}
      >
        <Sparkles size={16} className="absolute -top-1 -right-1 text-brand-yellow animate-pulse" />
        <span className="text-[28px] leading-none">🦉</span>
        <span className="absolute right-20 bg-white text-gray-800 border-l-4 border-brand-blue px-4 py-2 text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none rounded-r-xl">
          Corujinha IA
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 lg:right-10 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.2)] z-[60] flex flex-col overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-brand-blue to-blue-800 p-4 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full relative flex items-center justify-center">
                  <span className="text-[20px] leading-none flex items-center justify-center pt-0.5">🦉</span>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-brand-blue absolute bottom-0 right-0"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Corujinha IA</h3>
                  <p className="text-xs text-white/70">Atendimento Inteligente 24h</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-red-200 transition-colors bg-black/10 rounded-full p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mr-2 border border-brand-blue/20">
                      <span className="text-[14px] leading-none">🦉</span>
                    </div>
                  )}

                  <div 
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.type === 'user' 
                        ? 'bg-brand-blue text-white rounded-br-none' 
                        : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mr-2 border border-brand-blue/20">
                    <span className="text-[14px] leading-none">🦉</span>
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="bg-white p-3 border-t border-gray-200 shrink-0">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full p-1 pl-4 focus-within:ring-2 focus-within:ring-brand-blue/50 focus-within:border-brand-blue transition-all">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escreva sua pergunta..."
                  className="flex-1 bg-transparent text-sm text-gray-700 outline-none"
                  disabled={isTyping}
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className={`p-2.5 rounded-full transition-all flex items-center justify-center shrink-0 ${inputValue.trim() && !isTyping ? 'bg-brand-yellow text-white shadow-md cursor-pointer hover:bg-yellow-500 hover:scale-105' : 'bg-gray-200 text-gray-400'}`}
                >
                  <Send size={16} className="-ml-1" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
