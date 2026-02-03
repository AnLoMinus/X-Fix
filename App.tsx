import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import SolutionCard from './components/SolutionCard';
import SolutionModal from './components/SolutionModal';
import AIFixer from './components/AIFixer';
import { MOCK_SOLUTIONS } from './data/mockSolutions';
import { Category, Solution } from './types';
import { SearchX, Github, ExternalLink, Code2 } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [solutions, setSolutions] = useState<Solution[]>(MOCK_SOLUTIONS);
  
  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredSolutions = useMemo(() => {
    return solutions.filter((solution) => {
      const matchesSearch = 
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === Category.ALL || solution.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, solutions]);

  const handleAiSolutionGenerated = (aiSolution: Solution) => {
    setSolutions(prev => [aiSolution, ...prev]);
    setSelectedSolution(aiSolution);
  };

  return (
    <div className="min-h-screen bg-fix-blue text-slate-200 font-sans selection:bg-fix-accent selection:text-white flex flex-col">
      
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 flex-grow w-full">
        
        {/* Hero / Intro Text */}
        <div className="mb-10 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Fix anything. <span className="text-fix-accent">Fast.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A curated database of 500+ solutions for health, code, home, and logistics. 
            Powered by community wisdom and artificial intelligence.
          </p>
        </div>

        {/* AI Generator Section */}
        {selectedCategory === Category.AI || selectedCategory === Category.ALL ? (
             <AIFixer onSolutionGenerated={handleAiSolutionGenerated} />
        ) : null}

        {/* Filters */}
        <div className="sticky top-20 z-30 bg-fix-blue/95 backdrop-blur-sm py-4 mb-6 border-b border-slate-800/50">
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        </div>

        {/* Results Grid */}
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
            {filteredSolutions.map((solution) => (
              <SolutionCard 
                key={solution.id} 
                solution={solution} 
                onClick={setSelectedSolution}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95">
            <div className="bg-slate-800/50 p-6 rounded-full mb-4">
                <SearchX className="w-12 h-12 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No fixes found</h3>
            <p className="text-slate-400 max-w-md mx-auto mb-6">
              We couldn't find a static solution for "{searchTerm}". 
              Try the AI Fixer above to generate a custom solution instantly.
            </p>
            <button 
                onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(Category.ALL);
                }}
                className="text-fix-accent hover:text-fix-accent-hover font-medium"
            >
                Clear filters
            </button>
          </div>
        )}

      </main>

      {/* Detail Modal */}
      {selectedSolution && (
        <SolutionModal 
          solution={selectedSolution} 
          onClose={() => setSelectedSolution(null)} 
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              X-FIX <span className="text-xs font-normal text-slate-500 px-2 py-0.5 border border-slate-700 rounded-full">v1.0.0</span>
            </span>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} AnLoMinus. Built for the future.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/AnLoMinus/X-Fix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <div className="p-2 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Source Code</span>
            </a>

            <div className="h-8 w-px bg-slate-800 hidden md:block"></div>

            <a 
              href="https://ai.google.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-fix-accent transition-colors group"
            >
              <div className="p-2 bg-slate-800 rounded-full group-hover:bg-slate-800 transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Powered by Gemini</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default App;