import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Save, Send, Image as ImageIcon, Type, Layout, Music, Settings, CheckCircle2 } from 'lucide-react';
import { templates } from '../data/templates';
import SEO from '../components/SEO';

export default function CreateInvitation() {
  const { id } = useParams<{ id: string }>();
  const template = templates.find(t => t.id === id);
  const [activeTab, setActiveTab] = useState('details');
  const [isSaved, setIsSaved] = useState(false);

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

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <>
      <SEO title={`Create Invitation: ${template.title} | Sagarbhai`} />
      
      <div className="min-h-screen bg-stone-50 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-4">
            <Link to={`/templates/${template.id}/preview`} className="text-stone-500 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-sm font-bold text-stone-900 hidden sm:block">Editing: {template.title}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-stone-700 bg-stone-100 hover:bg-stone-200 text-sm font-medium rounded-lg transition-colors border border-stone-200"
            >
              {isSaved ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Save className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save Draft'}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-rose-500 hover:from-orange-700 hover:to-rose-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shadow-orange-500/20">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Publish</span>
            </button>
          </div>
        </header>

        {/* Editor Layout */}
        <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
          
          {/* Sidebar Tools */}
          <div className="w-full lg:w-80 bg-white border-r border-stone-200 flex flex-col h-[calc(100vh-65px)] overflow-y-auto">
            <div className="flex border-b border-stone-100 p-2 gap-1 overflow-x-auto">
              {[
                { id: 'details', icon: <Type className="w-4 h-4" />, label: 'Details' },
                { id: 'design', icon: <Layout className="w-4 h-4" />, label: 'Design' },
                { id: 'media', icon: <ImageIcon className="w-4 h-4" />, label: 'Media' },
                { id: 'settings', icon: <Settings className="w-4 h-4" />, label: 'Settings' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-orange-50 text-orange-600' 
                      : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {tab.icon}
                  <span className="mt-1">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-6 flex-grow">
              {activeTab === 'details' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wider">Couple Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-500 mb-1">Bride's Name</label>
                        <input type="text" defaultValue="Priya" className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-stone-500 mb-1">Groom's Name</label>
                        <input type="text" defaultValue="Rahul" className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-stone-100"></div>

                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wider">Event Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-500 mb-1">Date</label>
                        <input type="date" defaultValue="2026-11-24" className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-stone-500 mb-1">Time</label>
                        <input type="time" defaultValue="19:00" className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-stone-500 mb-1">Venue Name</label>
                        <input type="text" defaultValue="The Grand Palace" className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-stone-500 mb-1">Address</label>
                        <textarea rows={3} defaultValue="123 Royal Avenue, Heritage City" className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab !== 'details' && (
                <div className="h-full flex flex-col items-center justify-center text-center text-stone-400">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                    {activeTab === 'design' && <Layout className="w-6 h-6" />}
                    {activeTab === 'media' && <ImageIcon className="w-6 h-6" />}
                    {activeTab === 'settings' && <Settings className="w-6 h-6" />}
                  </div>
                  <p className="text-sm">This feature is coming soon.</p>
                </div>
              )}
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-grow bg-stone-100/50 p-4 sm:p-8 flex items-center justify-center overflow-y-auto relative">
            {/* Grid Background */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative w-full max-w-[375px] h-[812px] bg-white shadow-2xl rounded-[3rem] border-[12px] border-stone-900 overflow-hidden transform scale-90 sm:scale-100 origin-center transition-transform">
              {/* Simulated Live Preview */}
              <div className="absolute inset-0 bg-stone-50 overflow-y-auto overflow-x-hidden">
                <div className="min-h-[150%] flex flex-col items-center justify-center text-center p-8 relative">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src={template.image} alt="" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="text-orange-600 font-serif italic text-xl">Together with their families</div>
                    
                    <div className="space-y-4">
                      <h2 className="text-5xl font-serif font-bold text-stone-900">Rahul</h2>
                      <div className="text-3xl font-serif text-orange-500">&</div>
                      <h2 className="text-5xl font-serif font-bold text-stone-900">Priya</h2>
                    </div>
                    
                    <div className="w-24 h-[1px] bg-orange-300 mx-auto my-8"></div>
                    
                    <div className="space-y-2 text-stone-600 uppercase tracking-widest text-sm">
                      <p>Invite you to celebrate their wedding</p>
                      <p className="font-bold text-stone-900 mt-4">Sunday, 24th November 2026</p>
                      <p>At 7:00 PM in the evening</p>
                    </div>
                    
                    <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-orange-100 inline-block w-full">
                      <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">The Grand Palace</h3>
                      <p className="text-stone-600 text-sm">123 Royal Avenue, Heritage City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
