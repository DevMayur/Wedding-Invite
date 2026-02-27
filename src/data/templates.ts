export interface Template {
  id: string;
  title: string;
  price: number;
  type: string;
  tag?: string;
  image: string;
  description: string;
  features: string[];
}

export const templates: Template[] = [
  { 
    id: 'w1', 
    title: 'Royal Heritage', 
    price: 299, 
    type: 'Royal', 
    tag: 'Bestseller', 
    image: 'https://picsum.photos/seed/royal-heritage/400/600',
    description: 'A majestic and royal design inspired by the grand palaces of Rajasthan. Perfect for a grand Indian wedding.',
    features: ['Animated Palace Gates', 'Royal Elephant Motifs', 'Traditional Music Integration', 'RSVP Form']
  },
  { 
    id: 'w2', 
    title: 'Floral Elegance', 
    price: 499, 
    type: 'Floral', 
    tag: 'New', 
    image: 'https://picsum.photos/seed/floral-elegance/400/600',
    description: 'Soft pastel colors and delicate floral animations for a modern and elegant wedding.',
    features: ['Falling Petals Animation', 'Pastel Color Theme', 'Photo Gallery', 'Map Integration']
  },
  { 
    id: 'w3', 
    title: 'Golden Luxe', 
    price: 799, 
    type: 'Golden', 
    tag: 'Premium', 
    image: 'https://picsum.photos/seed/golden-luxe/400/600',
    description: 'Luxurious golden accents and elegant typography for a premium feel.',
    features: ['Gold Foil Effect', 'Elegant Typography', 'Multiple Event Pages', 'Countdown Timer']
  },
  { 
    id: 'w4', 
    title: 'Paithani Grace', 
    price: 499, 
    type: 'Marathi', 
    tag: 'Traditional', 
    image: 'https://picsum.photos/seed/paithani-grace/400/600',
    description: 'Inspired by the beautiful Paithani sarees of Maharashtra. Authentic and traditional.',
    features: ['Paithani Border Design', 'Marathi Calligraphy', 'Traditional Haldi Page', 'Family Tree']
  },
  { 
    id: 'w5', 
    title: 'Punjabi Dhol', 
    price: 450, 
    type: 'Punjabi', 
    tag: 'Fun', 
    image: 'https://picsum.photos/seed/punjabi-dhol/400/600',
    description: 'Vibrant and energetic design capturing the spirit of a big fat Punjabi wedding.',
    features: ['Dhol Animations', 'Vibrant Colors', 'Sangeet Playlist Integration', 'Bhangra Elements']
  },
  { 
    id: 'w6', 
    title: 'Royal Rajwada', 
    price: 899, 
    type: 'Royal', 
    tag: 'Luxury', 
    image: 'https://picsum.photos/seed/royal-rajwada/400/600',
    description: 'The ultimate luxury invitation with intricate Rajputana architecture and royal motifs.',
    features: ['3D Palace Walkthrough', 'Custom Royal Crest', 'Multi-day Itinerary', 'VIP RSVP']
  },
  { 
    id: 'w7', 
    title: 'Gujarati Garba', 
    price: 350, 
    type: 'Gujarati', 
    tag: 'Festive', 
    image: 'https://picsum.photos/seed/gujarati-garba/400/600',
    description: 'Colorful and festive design perfect for a traditional Gujarati wedding and Garba night.',
    features: ['Dandiya Animations', 'Bandhani Patterns', 'Garba Night Details', 'Gujarati Fonts']
  },
  { 
    id: 'w8', 
    title: 'Temple Vows', 
    price: 599, 
    type: 'South Indian', 
    tag: 'Divine', 
    image: 'https://picsum.photos/seed/temple-vows/400/600',
    description: 'Divine and serene design featuring traditional South Indian temple architecture and banana leaves.',
    features: ['Temple Bell Sounds', 'Kolam Designs', 'Muhurtham Details', 'Traditional Chants']
  },
  { 
    id: 'w9', 
    title: 'Modern White', 
    price: 299, 
    type: 'Modern', 
    tag: 'Elegant', 
    image: 'https://picsum.photos/seed/modern-white/400/600',
    description: 'Minimalist and clean design with ample white space and modern typography.',
    features: ['Clean Layout', 'Minimalist Animations', 'Monochrome Theme', 'Simple RSVP']
  },
  { 
    id: 'w10', 
    title: 'Love Story Motion', 
    price: 999, 
    type: 'Western', 
    tag: 'Video', 
    image: 'https://picsum.photos/seed/love-story-motion/400/600',
    description: 'A cinematic video-style invitation that tells your unique love story.',
    features: ['Video Background', 'Story Timeline', 'Cinematic Transitions', 'Custom Soundtrack']
  }
];

export const mainCategories = [
  'Wedding',
  'Birthday',
  'Engagement',
  'Party',
  'Bachelor Party',
  'Haldi',
  'Office Party'
];

export const weddingSubFilters = [
  'All',
  'Royal',
  'Animated',
  'Marathi',
  'Punjabi',
  'North Indian',
  'Gujarati',
  'South Indian',
  'Western'
];
