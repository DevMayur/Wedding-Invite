import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Mail, MessageCircle, HelpCircle, FileText } from 'lucide-react';

const faqs = [
  {
    question: 'How do I create a digital wedding invitation?',
    answer: 'Simply browse our templates, select your favorite, click "Customize", fill in your event details, and publish. You will get a unique link to share with your guests.'
  },
  {
    question: 'Can I change the language of the invitation?',
    answer: 'Yes! Our editor supports multiple Indian languages including Hindi, Gujarati, Marathi, Punjabi, Tamil, Telugu, and Kannada.'
  },
  {
    question: 'How do I share the invitation with my guests?',
    answer: 'Once published, you can share your invitation link directly via WhatsApp, SMS, Email, or any social media platform.'
  },
  {
    question: 'Is there a limit to how many guests I can invite?',
    answer: 'No, there is no limit. You can share your digital invitation link with as many people as you like.'
  },
  {
    question: 'Can I track RSVPs?',
    answer: 'RSVP tracking is currently in development and will be available soon. You will be able to manage guest responses directly from your dashboard.'
  }
];

export default function Support() {
  return (
    <>
      <SEO title="Help & Support | Sagarbhai Wedding Invitations" description="Get help with creating your digital wedding invitations. Read our FAQs or contact our support team." />
      
      <div className="bg-stone-50 py-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">How can we help you?</h1>
            <p className="text-lg text-stone-600">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">Email Support</h3>
                <p className="text-sm text-stone-600 mb-3">Get help via email within 24 hours.</p>
                <a href="mailto:support@sagarbhai.com" className="text-orange-600 font-medium text-sm hover:underline">support@sagarbhai.com</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">WhatsApp Support</h3>
                <p className="text-sm text-stone-600 mb-3">Chat with our team for quick answers.</p>
                <a href="#" className="text-green-600 font-medium text-sm hover:underline">Chat Now</a>
              </div>
            </motion.div>
          </div>
          
          {/* FAQs */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-stone-900 font-serif">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="border-b border-stone-100 pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <FileText className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 pl-7 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
