import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ArrowLeft, MonitorPlay, Edit3 } from 'lucide-react';
import { templates } from '../data/templates';
import SEO from '../components/SEO';
import AdSense from '../components/AdSense';

export default function TemplatePreview() {
  const { id } = useParams<{ id: string }>();
  const template = templates.find(t => t.id === id);

  if (!template) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Template Not Found</h2>
        <p className="text-gray-600 mb-8">The template you are looking for does not exist.</p>
        <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Templates
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${template.title} - Wedding Invitation Template`} 
        description={template.description}
        image={template.image}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/#templates" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Templates
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full"
              >
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                {template.tag && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-orange-600 shadow-sm">
                    {template.tag}
                  </div>
                )}
              </motion.div>
            </div>
            
            {/* Details Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    {template.type}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                  {template.title}
                </h1>
                
                <div className="text-3xl font-bold text-orange-600 mb-6">
                  ₹{template.price}
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Features Included:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/templates/${template.id}/demo`}
                    className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium rounded-xl transition-colors shadow-md"
                  >
                    <MonitorPlay className="w-5 h-5" />
                    Live Demo
                  </Link>
                  <Link
                    to={`/create/${template.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-orange-600 to-rose-500 hover:from-orange-700 hover:to-rose-600 text-white text-lg font-medium rounded-xl transition-colors shadow-md shadow-orange-500/20"
                  >
                    <Edit3 className="w-5 h-5" />
                    Customize Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <AdSense slot="1122334455" className="mt-12" />
      </div>
    </>
  );
}
