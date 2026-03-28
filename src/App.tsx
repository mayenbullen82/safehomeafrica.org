/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { 
  X, 
  MessageSquare,
  Sparkles,
  Send,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import YouthChampion from "./pages/YouthChampion";

// Initialize Gemini for the "Impact Assistant"
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

// --- Helper Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ImpactAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([
    { role: "model", text: "Hello! I'm the SAFE HOME AFRICA assistant. How can I help you learn about our impact today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ parts: [{ text: `You are an assistant for SAFE HOME AFRICA, a Refugees’ Youth led-Community Based organization. 
        Context: Founded 2011, impacts 50+ communities, 5000+ families. 
        Location: Headquarters in Nyumanzi Refugee Settlement, Adjumani District, Uganda.
        Programs: Health Promotion, Mental Health & Psychosocial Support (MHPSS), Sustainable Livelihoods, Peace Building, Climate & Environment, and Quality Education.
        Mission: Mobilize, support, empower, nurture and transform youth to become pillars of providing health care & psychosocial services.
        User asked: ${userMsg}` }] }],
      });
      setMessages(prev => [...prev, { role: "model", text: result.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", text: "I'm having trouble connecting right now. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl w-[calc(100vw-2rem)] max-w-[400px] h-[500px] flex flex-col overflow-hidden border border-gray-100 mb-4"
          >
            <div className="bg-brand-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center" aria-hidden="true">
                  <Sparkles size={16} />
                </div>
                <h2 className="font-serif font-medium">Impact Assistant</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat assistant"
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-bg/50"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === "user" ? "bg-brand-accent text-white rounded-tr-none" : "bg-white text-brand-ink shadow-sm rounded-tl-none"}`}
                    aria-label={`${m.role === "user" ? "You" : "Assistant"} said:`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start" aria-label="Assistant is typing...">
                  <div className="bg-white p-3 rounded-2xl shadow-sm rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-brand-primary" aria-hidden="true" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <label htmlFor="chat-input" className="sr-only">Ask about our work</label>
              <input 
                id="chat-input"
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our work..."
                className="flex-1 bg-gray-50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent"
              />
              <button 
                onClick={handleSend}
                aria-label="Send message"
                className="bg-brand-primary text-white p-2 rounded-xl hover:bg-brand-ink transition-colors"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        className="bg-brand-accent text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <MessageSquare size={24} aria-hidden="true" />}
      </button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-brand-accent selection:text-white flex flex-col">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/youth-champion" element={<YouthChampion />} />
          </Routes>
        </main>

        <Footer />
        <ImpactAssistant />

        {/* Background patterns */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(#5A5A40 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        </div>
      </div>
    </BrowserRouter>
  );
}
