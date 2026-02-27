import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white font-serif">Sagarbhai</span>
            </Link>
            <p className="text-stone-400 max-w-md mb-6 leading-relaxed">
              Create beautiful, animated digital wedding invitations online. Share your love story with elegance and tradition across all Indian cultures.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/sagarbhai" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/sagarbhai" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com/sagarbhai" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#templates" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Help & Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@sagarbhai.com" className="hover:text-white transition-colors">support@sagarbhai.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Sagarbhai Wedding Invitations. All rights reserved.
          </p>
          <p className="text-sm text-stone-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
