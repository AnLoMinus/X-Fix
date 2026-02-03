import React from 'react';
import { Category } from '../types';
import { Activity, Cpu, Home, Truck, Bot, Grid } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  
  const getIcon = (cat: Category) => {
    switch (cat) {
      case Category.HEALTH: return <Activity className="w-4 h-4" />;
      case Category.TECH: return <Cpu className="w-4 h-4" />;
      case Category.HOME: return <Home className="w-4 h-4" />;
      case Category.LOGISTICS: return <Truck className="w-4 h-4" />;
      case Category.AI: return <Bot className="w-4 h-4" />;
      default: return <Grid className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full overflow-x-auto py-4 no-scrollbar">
      <div className="flex space-x-2 px-4 sm:px-0 min-w-max">
        {Object.values(Category).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              ${selectedCategory === category
                ? 'bg-fix-accent text-white border-fix-accent shadow-lg shadow-fix-accent/25 scale-105'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600'
              }
            `}
          >
            {getIcon(category)}
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
