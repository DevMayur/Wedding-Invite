import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-orange-600 font-serif">Sagarbhai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</Link>
            <Link to="/#templates" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Templates</Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Blog</Link>
            <Link to="/support" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Support</Link>
            
            <div className="flex items-center gap-2 text-gray-600 border-l border-gray-200 pl-6">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="gu">ગુજરાતી</option>
                <option value="mr">मराठी</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-orange-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/#templates" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Templates</Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/support" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Support</Link>
            <div className="px-3 py-2 flex items-center gap-2 text-gray-600">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent text-base font-medium focus:outline-none w-full">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="gu">ગુજરાતી</option>
                <option value="mr">मराठी</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
