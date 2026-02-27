import { motion } from 'motion/react';
import { Palette, Smartphone, Zap, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-6 h-6 text-orange-600" />,
    title: 'Stunning Designs',
    description: 'Choose from a wide variety of premium, culturally authentic templates.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-rose-600" />,
    title: 'Mobile Friendly',
    description: 'Your invitations will look perfect on any device, from phones to desktops.',
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    title: 'Instant Creation',
    description: 'Customize and publish your invitation in minutes with our easy editor.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-pink-600" />,
    title: 'Easy Sharing',
    description: 'Share instantly via WhatsApp, Email, or social media with a single link.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why Choose Sagarbhai?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make creating your perfect digital wedding invitation simple, elegant, and memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50 hover:shadow-md hover:border-orange-100 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
