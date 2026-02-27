import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { templates, mainCategories, weddingSubFilters } from '../data/templates';
import { Eye, Edit3, Tag } from 'lucide-react';

export default function EventTemplates() {
  const [activeCategory, setActiveCategory] = useState('Wedding');
  const [activeSubFilter, setActiveSubFilter] = useState('All');

  // Filter templates based on active category and sub-filter
  const filteredTemplates = templates.filter(template => {
    if (activeCategory !== 'Wedding') return false; // Only Wedding has real templates for now
    if (activeSubFilter === 'All') return true;
    return template.type === activeSubFilter;
  });

  return (
    <section id="templates" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Explore Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect template that matches your style and culture.
          </p>
        </div>

        {/* Main Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {mainCategories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveSubFilter('All');
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Wedding Sub-Filters */}
        {activeCategory === 'Wedding' && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {weddingSubFilters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveSubFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSubFilter === filter
                    ? 'bg-orange-100 text-orange-800 border border-orange-200'
                    : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Template Grid */}
        {activeCategory === 'Wedding' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {template.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 flex items-center gap-1 shadow-sm">
                      <Tag className="w-3 h-3" />
                      {template.tag}
                    </div>
                  )}
                  
                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <Link
                      to={`/templates/${template.id}/preview`}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-orange-50 hover:text-orange-600 transition-colors shadow-lg"
                      title="Preview Template"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <Link
                      to={`/create/${template.id}`}
                      className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors shadow-lg"
                      title="Create Invitation"
                    >
                      <Edit3 className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 font-serif">{template.title}</h3>
                      <span className="text-lg font-bold text-orange-600">₹{template.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{template.description}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/templates/${template.id}/demo`}
                      className="flex-1 text-center py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-lg transition-colors border border-gray-200"
                    >
                      Live Demo
                    </Link>
                    <Link
                      to={`/create/${template.id}`}
                      className="flex-1 text-center py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                    >
                      Customize
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-serif text-gray-400 mb-2">Coming Soon</h3>
            <p className="text-gray-500">Templates for {activeCategory} are currently being designed.</p>
          </div>
        )}
      </div>
    </section>
  );
}
