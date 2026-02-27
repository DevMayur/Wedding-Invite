import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Smartphone, Monitor, Edit3 } from 'lucide-react';
import { useState } from 'react';
import { templates } from '../data/templates';
import SEO from '../components/SEO';

export default function TemplateDemo() {
  const { id } = useParams<{ id: string }>();
  const template = templates.find(t => t.id === id);
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile');

  if (!template) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Template Not Found</h2>
        <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Templates
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={`Live Demo: ${template.title} | Sagarbhai`} />
      
      <div className="min-h-screen bg-stone-100 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <Link to={`/templates/${template.id}/preview`} className="text-stone-500 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-sm font-bold text-stone-900">{template.title}</h1>
              <p className="text-xs text-stone-500">Live Demo</p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setDevice('mobile')}
              className={`p-2 rounded-md transition-colors ${device === 'mobile' ? 'bg-white shadow-sm text-orange-600' : 'text-stone-500 hover:text-stone-900'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice('desktop')}
              className={`p-2 rounded-md transition-colors ${device === 'desktop' ? 'bg-white shadow-sm text-orange-600' : 'text-stone-500 hover:text-stone-900'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
          
          <Link
            to={`/create/${template.id}`}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <Edit3 className="w-4 h-4" />
            <span className="hidden sm:inline">Use Template</span>
          </Link>
        </div>
        
        {/* Demo Area */}
        <div className="flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative bg-white shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
              device === 'mobile' 
                ? 'w-full max-w-[375px] h-[812px] rounded-[3rem] border-[12px] border-stone-900' 
                : 'w-full max-w-5xl aspect-video rounded-xl border border-stone-200'
            }`}
          >
            {/* Simulated Template Content */}
            <div className="absolute inset-0 bg-stone-50 overflow-y-auto overflow-x-hidden">
              <div className="min-h-[150%] flex flex-col items-center justify-center text-center p-8 relative">
                
                {/* Simulated Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <img src={template.image} alt="" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
                </div>
                
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="relative z-10 space-y-8"
                >
                  <div className="text-orange-600 font-serif italic text-xl">Together with their families</div>
                  
                  <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900">Rahul</h2>
                    <div className="text-3xl font-serif text-orange-500">&</div>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-900">Priya</h2>
                  </div>
                  
                  <div className="w-24 h-[1px] bg-orange-300 mx-auto my-8"></div>
                  
                  <div className="space-y-2 text-stone-600 uppercase tracking-widest text-sm md:text-base">
                    <p>Invite you to celebrate their wedding</p>
                    <p className="font-bold text-stone-900 mt-4">Sunday, 24th November 2026</p>
                    <p>At 7:00 PM in the evening</p>
                  </div>
                  
                  <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-orange-100 inline-block">
                    <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">The Grand Palace</h3>
                    <p className="text-stone-600 text-sm">123 Royal Avenue, Heritage City</p>
                  </div>
                </motion.div>
                
                {/* Floating elements simulation */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
