import React from 'react';
import { Solution, Category } from '../types';
import { ArrowRight, ThumbsUp, Activity, Cpu, Home, Truck } from 'lucide-react';

interface SolutionCardProps {
  solution: Solution;
  onClick: (solution: Solution) => void;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onClick }) => {
  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case Category.HEALTH: return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case Category.TECH: return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case Category.HOME: return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case Category.LOGISTICS: return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  const getCategoryIcon = (cat: Category) => {
    switch (cat) {
      case Category.HEALTH: return <Activity className="w-3 h-3" />;
      case Category.TECH: return <Cpu className="w-3 h-3" />;
      case Category.HOME: return <Home className="w-3 h-3" />;
      case Category.LOGISTICS: return <Truck className="w-3 h-3" />;
      default: return <Activity className="w-3 h-3" />;
    }
  };

  return (
    <div 
      className="group relative bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-fix-accent/50 hover:shadow-xl hover:shadow-fix-accent/10 transition-all duration-300 flex flex-col h-full"
    >
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-slate-700 p-2 rounded-full cursor-pointer hover:bg-slate-600">
            <ArrowRight className="w-4 h-4 text-fix-accent" />
        </div>
      </div>

      <div className="flex items-start justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(solution.category)}`}>
          {getCategoryIcon(solution.category)}
          {solution.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fix-accent transition-colors line-clamp-2">
        {solution.title}
      </h3>

      <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
        {solution.shortDescription}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700 mt-auto">
        <div className="flex gap-2">
           {solution.tags.slice(0, 2).map((tag, i) => (
             <span key={i} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">#{tag}</span>
           ))}
        </div>
        
        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
          <ThumbsUp className="w-3 h-3" />
          {solution.likes.toLocaleString()}
        </div>
      </div>

      <button 
        onClick={() => onClick(solution)}
        className="absolute inset-0 w-full h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-fix-accent focus:ring-offset-2 focus:ring-offset-slate-900"
        aria-label={`View solution for ${solution.title}`}
      />
    </div>
  );
};

export default SolutionCard;
