import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, Sparkles, User, MessageSquare, ShieldCheck, RefreshCcw } from "lucide-react";
import { RECRUITER_KNOWLEDGE_BASE, CHAT_SUGGESTIONS } from "../../constants/recruiterData";
import { getGeminiResponse } from "../../services/gemini";

interface Message {
  role: "assistant" | "user";
  content: string;
  isFallback?: boolean;
}

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am Ananya's Hybrid AI Assistant. I can provide verified details from her portfolio or use AI to answer custom queries. How can I assist you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const query = text.toLowerCase().trim();

    // 1. Check Local Knowledge Base (Primary Mode)
    const localMatch = Object.keys(RECRUITER_KNOWLEDGE_BASE).find(key => query.includes(key));

    if (localMatch) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: RECRUITER_KNOWLEDGE_BASE[localMatch]
        }]);
        setIsTyping(false);
      }, 800);
      return;
    }

    // 2. Secondary Mode: Gemini API
    try {
      const context = JSON.stringify(RECRUITER_KNOWLEDGE_BASE);
      const aiResponse = await getGeminiResponse(text, context);

      setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      // 3. Fallback Mode
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I'm currently operating in offline mode. However, I can still tell you all about Ananya's projects and skills! Try asking 'Show projects' or 'Why hire Ananya?'",
        isFallback: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center text-white-100 z-[999] border-2 border-white/10"
        style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)', boxShadow: '0 5px 25px rgba(214, 155, 170, 0.3)' }}
      >
        <Bot size={32} />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-background shadow-[0_0_10px_#D69BAA]"
          style={{ backgroundColor: '#D69BAA' }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-120px)] glassmorphism rounded-[2.5rem] overflow-hidden z-[999] shadow-2xl border border-white/5 flex flex-col backdrop-blur-3xl bg-[#241B24]/90"
          >
            {/* Header */}
            <div
              className="p-6 flex items-center justify-between"
              style={{ background: 'linear-gradient(to right, #D69BAA, #C89ABF)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={20} className="text-white-100" />
                </div>
                <div>
                  <h3 className="text-white-100 font-bold text-base leading-tight">Ananya's Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FFF5F7' }} />
                    <p className="text-white-100/70 text-[10px] uppercase tracking-widest font-bold">Intelligent Core</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-white-100 hover:bg-black/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "text-white-100 rounded-tr-none shadow-sm"
                        : "bg-white/5 text-white-100/90 rounded-tl-none border border-white/5"
                    }`}
                    style={msg.role === "user" ? { background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)', color: '#241B24', fontWeight: '500' } : {}}
                  >
                    {msg.content.split('\n').map((line, j) => (
                      <p key={j} className={j > 0 ? "mt-2" : ""}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none border border-white/5 flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#D69BAA' }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0.2s]" style={{ backgroundColor: '#C89ABF' }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0.4s]" style={{ backgroundColor: '#B79AC8' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="px-6 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {CHAT_SUGGESTIONS.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(suggestion)}
                  className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-[10px] text-white-100/60 font-bold uppercase tracking-wider transition-all whitespace-nowrap"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-black/20 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Inquire about Ananya's expertise..."
                  className="w-full bg-white/5 border border-white/5 rounded-2xl pl-4 pr-12 py-4 text-sm text-white-100 focus:outline-none transition-all placeholder:text-white-100/20"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 w-10 h-10 rounded-xl flex items-center justify-center text-white-100 disabled:opacity-50 transition-all hover:scale-105 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)' }}
                >
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
