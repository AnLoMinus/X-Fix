import React from 'react';
import { Wrench, Search, Zap } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-fix-blue/90 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-fix-accent/10 p-2 rounded-lg group-hover:bg-fix-accent/20 transition-all duration-300">
              <Wrench className="h-8 w-8 text-fix-accent transform group-hover:-rotate-12 transition-transform" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter text-white">X-FIX</h1>
              <p className="text-xs text-slate-400 uppercase tracking-widest hidden sm:block">The Solution Engine</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500 group-focus-within:text-fix-accent transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-800/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:ring-2 focus:ring-fix-accent focus:border-transparent transition-all duration-300 sm:text-sm"
                placeholder="Search for a problem (e.g., 'Headache', 'CSS Grid', 'Route Optimization')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <div className="hidden sm:flex border border-slate-600 rounded px-1.5 py-0.5 text-xs text-slate-500">
                  CTRL + K
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Action */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-fix-accent flex items-center gap-1">
                <Zap className="h-4 w-4" /> 500+
              </span>
              <span className="text-xs text-slate-500">Active Fixes</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
