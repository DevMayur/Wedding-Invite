import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Sagarbhai | Create Beautiful Digital Wedding Invitations Online',
  description = 'Create stunning, animated digital wedding invitations for Indian weddings. Choose from Royal, Marathi, Punjabi, Gujarati, and South Indian templates.',
  keywords = 'wedding invitations, digital wedding cards, Indian wedding invitations, Punjabi wedding cards, Gujarati wedding invitations, South Indian wedding cards, Royal wedding invitations, Marathi wedding cards, wedding RSVP, WhatsApp wedding invitations, animated wedding cards, shaadi card online',
  image = 'https://sagarbhai.com/og-image.jpg',
  url = 'https://sagarbhai.com',
}: SEOProps) {
  const siteTitle = title.includes('Sagarbhai') ? title : `${title} | Sagarbhai`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sagarbhai Wedding Invitations",
          "url": "https://sagarbhai.com",
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sagarbhai.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
}
