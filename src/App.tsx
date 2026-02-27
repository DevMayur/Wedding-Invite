/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TemplatePreview from './pages/TemplatePreview';
import TemplateDemo from './pages/TemplateDemo';
import CreateInvitation from './pages/CreateInvitation';
import Blog from './pages/Blog';
import Support from './pages/Support';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-orange-50/30">
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/templates/:id/preview" element={<TemplatePreview />} />
                <Route path="/templates/:id/demo" element={<TemplateDemo />} />
                <Route path="/create/:id" element={<CreateInvitation />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}
