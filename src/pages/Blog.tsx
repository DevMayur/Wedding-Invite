import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Indian Wedding Invitation Trends for 2026',
    excerpt: 'Discover the latest trends in digital wedding invitations, from animated royal motifs to minimalist pastel designs.',
    date: 'February 24, 2026',
    author: 'Sagarbhai Editorial',
    image: 'https://picsum.photos/seed/wedding-trends/800/400'
  },
  {
    id: 2,
    title: 'How to Write the Perfect Wedding Invitation Wording',
    excerpt: 'A comprehensive guide to traditional and modern wording for your Indian wedding invitations across different cultures.',
    date: 'February 18, 2026',
    author: 'Priya Sharma',
    image: 'https://picsum.photos/seed/wedding-wording/800/400'
  },
  {
    id: 3,
    title: 'The Significance of Colors in Indian Weddings',
    excerpt: 'Learn about the cultural meaning behind red, gold, green, and pastel colors in Indian wedding ceremonies and invitations.',
    date: 'February 10, 2026',
    author: 'Rahul Verma',
    image: 'https://picsum.photos/seed/wedding-colors/800/400'
  }
];

export default function Blog() {
  return (
    <>
      <SEO title="Blog | Sagarbhai Wedding Invitations" description="Read the latest articles, tips, and trends about Indian wedding invitations, planning, and culture." />
      
      <div className="bg-stone-50 py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Wedding Inspiration & Tips</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Everything you need to know about planning your perfect wedding and creating memorable invitations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-stone-900 mb-3 font-serif line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-stone-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
