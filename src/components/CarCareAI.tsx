import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Sparkles, ExternalLink, Loader2 } from 'lucide-react';
import { getCarCareAdvice } from '../services/geminiService';

export default function CarCareAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ text: string; sources: any[] } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await getCarCareAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group border border-white/10"
      >
        <Sparkles className="w-6 h-6 text-brand-orange group-hover:rotate-12 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Car Care Advisor</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Powered by Gemini AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-96 overflow-y-auto p-6 bg-gray-50/50">
              {!response && !loading ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <MessageSquare className="w-12 h-12 text-gray-200" />
                  <div>
                    <p className="font-bold text-brand-navy">How can I help you today?</p>
                    <p className="text-xs text-gray-500 mt-1">Ask about maintenance, detailing tips, or service recommendations.</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Best wax for black cars?', 'When to change oil?', 'Ceramic coating benefits'].map(q => (
                      <button
                        key={q}
                        onClick={() => setQuery(q)}
                        className="text-[10px] font-bold uppercase tracking-wider bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-brand-orange transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {loading ? (
                    <div className="flex items-center gap-3 text-brand-navy">
                      <Loader2 className="w-5 h-5 animate-spin text-brand-orange" />
                      <span className="text-sm font-semibold italic">Consulting expert data...</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-brand-blue/5 border border-brand-blue/10 p-4 rounded-xl text-sm leading-relaxed text-brand-navy">
                        {response?.text}
                      </div>
                      
                      {response?.sources && response.sources.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Sources & Further Reading</p>
                          <div className="flex flex-wrap gap-2">
                            {response.sources.map((source, idx) => (
                              <a
                                key={idx}
                                href={source.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[10px] font-bold text-brand-blue hover:underline bg-brand-blue/5 px-2 py-1 rounded"
                              >
                                {source.title}
                                <ExternalLink className="w-2 h-2" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                placeholder="Ask your car care question..."
                className="flex-grow p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-brand-orange text-white p-3 rounded-lg hover:bg-brand-orange/90 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
