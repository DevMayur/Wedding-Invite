import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';
import EventTemplates from '../components/EventTemplates';
import AdSense from '../components/AdSense';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <AdSense slot="1234567890" className="max-w-7xl mx-auto px-4" />
      <Features />
      <EventTemplates />
      <AdSense slot="0987654321" className="max-w-7xl mx-auto px-4 mb-12" />
    </>
  );
}
