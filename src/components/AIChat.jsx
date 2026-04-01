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
- Se o pai quiser agendar visita, ver preço ou matricular, diga para ele clicar no botão verde de WhatsApp que fica no outro canto da tela.

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: SYSTEM_PROMPT,
          messages: chatHistory.map(msg => ({
            role: msg.type === 'bot' ? 'assistant' : 'user',
            content: msg.text
          }))
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erro na API');
      return data.content || data.choices?.[0]?.message?.content;
    } catch (error) {
      return "Puxa, minha conexão deu um tropeço! 🦉 Clique no botão verde do WhatsApp no outro canto para falar com nossa equipe!";
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

  return (
    <>
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-[#1EA1F2] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center border-4 border-white group w-16 h-16 ${isOpen ? 'hidden' : 'block'}`}
      >
        <Sparkles size={16} className="absolute -top-1 -right-1 text-brand-yellow animate-pulse" />
        <span className="text-[28px] leading-none">🦉</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-6 right-6 lg:right-10 w-[350px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[85vh] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[100] flex flex-col overflow-hidden border border-gray-100"
          >
            <div className="bg-[#1EA1F2] p-5 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full relative flex items-center justify-center">
                  <span className="text-[22px] leading-none">🦉</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-[#1EA1F2] absolute bottom-0 right-0"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Corujinha Assistente</h3>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Online Agora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-[#1EA1F2] text-white rounded-br-none' : 'bg-white text-gray-700 rounded-bl-none shadow-sm border border-gray-100'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-xs text-gray-400 ml-2 animate-pulse font-bold uppercase tracking-widest">Corujinha está digitando...</div>}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-2 pl-4 border border-gray-200">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Olá! Como posso ajudar?"
                  className="flex-1 bg-transparent text-sm outline-none"
                />
                <button onClick={handleSend} className="bg-[#FFD500] text-gray-900 p-3 rounded-xl hover:scale-105 transition-transform">
                  <Send size={18} />
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
