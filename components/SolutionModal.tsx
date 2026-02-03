import React from 'react';
import { Solution, Category } from '../types';
import { X, Share2, Bookmark, CheckCircle, AlertTriangle } from 'lucide-react';

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
}

const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose }) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image/Banner Area */}
        <div className="h-32 bg-gradient-to-r from-slate-900 to-slate-800 relative border-b border-slate-700 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
            <h2 className="relative text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white opacity-20 tracking-widest uppercase">
                {solution.category}
            </h2>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-slate-900/50 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-fix-accent text-slate-900">
                    FIX-#{solution.id.toString().padStart(3, '0')}
                </span>
                <span className="text-slate-400 text-sm">
                    {new Date().toLocaleDateString()}
                </span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{solution.title}</h2>
            
            <div className="prose prose-invert prose-sm max-w-none mb-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {solution.shortDescription}
                </p>
                
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-fix-accent font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Solution Protocol
                    </h4>
                    <div className="text-slate-200 whitespace-pre-line leading-7">
                        {solution.fullContent}
                    </div>
                </div>

                {solution.category === Category.HEALTH && (
                     <div className="mt-4 flex items-start gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-200 text-xs">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                        <p>Disclaimer: This information is for educational purposes only and does not constitute medical advice. Always consult a healthcare professional.</p>
                     </div>
                )}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        <Bookmark className="w-4 h-4" /> Save
                    </button>
                </div>
                <button 
                    onClick={onClose}
                    className="bg-fix-accent hover:bg-fix-accent-hover text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                    Done
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
