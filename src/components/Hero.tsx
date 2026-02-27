import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 text-orange-700 font-medium text-sm mb-8 border border-orange-200"
          >
            <Sparkles className="w-4 h-4" />
            <span>Over 10,000+ Happy Couples</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6"
          >
            Create Beautiful <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-500">
              Digital Wedding Invitations
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Share your love story with elegance and tradition. Choose from our premium collection of animated templates for every Indian culture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#templates"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-orange-600 to-rose-500 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
            >
              Browse Templates
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-orange-200 hover:bg-orange-50 transition-all"
            >
              How it works
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
