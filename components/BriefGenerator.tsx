import React, { useState } from 'react';
import { X, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateBrief } from '../services/geminiService';

interface BriefGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

const BriefGenerator: React.FC<BriefGeneratorProps> = ({ isOpen, onClose }) => {
  const [idea, setIdea] = useState('');
  const [brief, setBrief] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    const result = await generateBrief(idea);
    setBrief(result);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-900/10 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-navy-900">AI Project Scope Generator</h3>
                  <p className="text-sm text-gray-500">Powered by Gemini 2.5 Flash</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-navy-900 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              {!brief ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Describe your app idea in a few sentences
                    </label>
                    <textarea
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      placeholder="e.g., A mobile app for dog walkers that uses AI to track routes and suggest parks..."
                      className="w-full h-32 bg-white border border-gray-200 rounded-lg p-4 text-navy-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none placeholder-gray-400 transition-all"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleGenerate}
                      disabled={loading || !idea.trim()}
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all
                        ${loading || !idea.trim() 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-primary text-navy-900 hover:bg-primary-hover shadow-[0_4px_15px_rgba(247,168,129,0.3)]'}
                      `}
                    >
                      {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                      {loading ? 'Analyzing...' : 'Generate AI Brief'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="prose prose-orange max-w-none">
                     <pre className="whitespace-pre-wrap font-sans text-gray-600 text-sm leading-relaxed">
                        {brief}
                     </pre>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <button 
                      onClick={() => setBrief('')}
                      className="text-sm text-gray-500 hover:text-navy-900 transition-colors"
                    >
                      Start Over
                    </button>
                    <button 
                        onClick={onClose}
                        className="flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-full font-bold hover:bg-navy-700 transition-all shadow-lg"
                    >
                      Use This Brief <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BriefGenerator;