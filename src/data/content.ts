import { Product, TeamMember, FactItem } from '../types';

export const SITE_INFO = {
  name: 'Juplu',
  tagline: 'Healthy & Nutrient-Rich Roasted Makhana Snacks',
  email: 'juplu.business@gmail.com',
  phone: '+91-9341460719',
  phoneFormatted: '+91 93414 60719',
  whatsappUrl: 'https://api.whatsapp.com/send?phone=919341460719&text=Hello%20Juplu%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20products.',
  bulkOrderUrl: 'https://forms.gle/g3eT2JWHq4oSV5EZ6',
  youtubeVideoId: '2IS-Ui7yWfM',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100065682000551',
    twitter: 'https://twitter.com/Jupluofficial?s=09',
    linkedin: 'https://www.linkedin.com/in/juplugroup/',
    instagram: 'https://instagram.com/jupluofficial?utm_medium=copy_link',
    youtube: 'https://www.youtube.com/channel/UCZ_NaOav-amjDtfXTOjmrHw'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'mirch-masala',
    title: 'Mirch Masala',
    subtitle: 'Roasted Makhana (Spicy Indian Blend)',
    image: '/img/p23072x3072.jpg',
    fallbackImage: '/img/p_3072x3072_OyC6DP0.jpg',
    badge: 'Bestseller',
    flavorProfile: 'Fiery, tangy & aromatic traditional Indian spice blend',
    shortDescription: 'Makhana (foxnuts or lotus seeds) are a healthy, nutrient & antioxidant-packed alternative to chips & popcorn. Roasted to perfection with an aromatic spicy crunch.',
    description: `Mirch Masala Makhana is a healthy, spicy flavored snack made from handpicked water lily seeds (foxnuts). Loaded with natural nutrients, protein, calcium, and iron, it makes the perfect anytime munchy for both children and adults. We have combined centuries-old superfood benefits with authentic Indian aromatic spices to bring you an irresistible savory crunch without guilt.`,
    benefits: [
      'Rich in anti-aging enzyme that helps repair damaged proteins',
      'Low in calories — ideal super-snack for healthy weight management',
      'Low Glycemic Index (GI), making it a smart snack for diabetics',
      'High magnesium and low sodium content helps regulate blood pressure & heart health',
      'Good source of natural calcium, potassium, phosphorus & zinc',
      'Zero cholesterol & trans-fat free'
    ],
    nutritionalHighlights: [
      'High Dietary Fiber',
      'Rich in Plant Protein',
      'Naturally Gluten Free',
      'No Artificial Flavours'
    ],
    ingredients: 'Makhana (Fox Nuts / Water Lily Seeds), Edible Vegetable Oil, Red Chilli Powder, Black Salt, Cumin Powder, Dry Mango Powder, Coriander Powder, Spices & Condiments.',
    netWeight: '70g / 150g'
  },
  {
    id: 'salt-pepper',
    title: 'Salt & Pepper',
    subtitle: 'Roasted Makhana (Classic Herb & Cracked Peppercorn)',
    image: '/img/p3072x3072.jpg',
    fallbackImage: '/img/p2_3072x3072_jYUr3YW.jpg',
    badge: 'Classic Favorite',
    flavorProfile: 'Crisp cracked black pepper with Himalayan rock salt',
    shortDescription: 'Slow-roasted crispy foxnuts seasoned with freshly cracked black peppercorns and refined rock salt. A clean, subtle, yet addictive everyday crunch.',
    description: `Salt & Pepper Makhana is a delightfully light, savory snack crafted from top-grade lotus seeds. Lightly tossed in premium oil and dusted with Himalayan rock salt and coarsely ground black pepper, each bite offers an airy, delicate crunch that satisfies mid-meal cravings while nourishing your body.`,
    benefits: [
      'Black pepper piperine aids digestion and nutrient absorption',
      'Packed with natural plant protein, magnesium, and dietary fiber',
      'Low calorie density makes it a guilt-free movie or study companion',
      'Recommended for weight watchers and heart-conscious individuals',
      'Low sodium profile with balancing minerals',
      'Free from artificial colors and synthetic preservatives'
    ],
    nutritionalHighlights: [
      'High Plant Protein',
      'Zero Trans Fat',
      'Digestive Friendly',
      '100% Vegetarian'
    ],
    ingredients: 'Makhana (Fox Nuts / Water Lily Seeds), Edible Vegetable Oil, Black Pepper Powder, Himalayan Pink Salt, Rock Salt.',
    netWeight: '70g / 150g'
  }
];

export const FACTS: FactItem[] = [
  {
    id: 'roasted',
    title: 'ROASTED NOT FRIED',
    image: '/img/3926x1080facts-1.jpg',
    description: 'Slow-roasted to lock in natural crunch without saturated cooking oils.'
  },
  {
    id: 'natural',
    title: 'NO ARTIFICIAL COLORS & FLAVOURS',
    image: '/img/3926x1080facts-2.jpg',
    description: '100% honest kitchen spices and pure natural ingredients.'
  },
  {
    id: 'hygiene',
    title: 'PACKED WITH HYGIENE',
    image: '/img/3926x1080facts-3.jpg',
    description: 'Automated clean-room packaging ensuring freshness and safety.'
  },
  {
    id: 'cholesterol',
    title: 'FAT FREE ZERO CHOLESTEROL',
    image: '/img/3926x1080facts-4.jpg',
    description: 'Heart-healthy nutrition so you can indulge anytime guilt-free.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'avinash',
    name: 'Avinash Kumar',
    role: 'Administrator',
    image: '/img/Avinashkumar.png',
    bio: 'Oversees operations, strategic direction, and sustainable growth for Juplu.'
  },
  {
    id: 'aman',
    name: 'Aman Kumar',
    role: 'Marketing Head',
    image: '/img/Amankumar.png',
    bio: 'Leads brand strategy, distribution outreach, and customer connection across India.'
  },
  {
    id: 'raja',
    name: 'Raja Rajwanshi',
    role: 'Product Developer',
    image: '/img/Rajarajwanshi.png',
    bio: 'Crafts the perfect flavor profiles and roast curves for peak crunchiness.'
  },
  {
    id: 'surbhi',
    name: 'Surbhi Sia',
    role: 'Product Designer',
    image: '/img/Surbhisia.png',
    bio: 'Designs eye-catching packaging and customer experience touchpoints.'
  },
  {
    id: 'rishabh',
    name: 'Rishabh Kumar',
    role: 'Social Media Executive',
    image: '/img/Rishabhkumar.png',
    bio: 'Connects healthy snacking communities across Instagram, YouTube, and X.'
  },
  {
    id: 'priyanka',
    name: 'Priyanka Pathak',
    role: 'Content Writer',
    image: '/img/Priyankapathak.png',
    bio: 'Shares nutritious insights, recipes, and wellness stories with our audience.'
  },
  {
    id: 'sujit',
    name: 'Sujit Ranjan',
    role: 'Mechanical Engineer',
    image: '/img/SujitRanjan.png',
    bio: 'Optimizes roasting machinery, thermal control, and packaging lines.'
  },
  {
    id: 'volkova',
    name: 'Volkova Yelyzaveta',
    role: 'Graphic Designer',
    image: '/img/VolkovaYelyzaveta.png',
    bio: 'Brings Juplu visual identity, banners, and digital creatives to life.'
  }
];

export const HERO_SLIDES = [
  {
    image: '/img/banner16000x4000.jpg',
    fallback: '/img/1st-banner.jpg',
    title: 'The Healthiest, Tastiest Snack',
    subtitle: 'Handpicked Makhana roasted with aromatic Indian spices'
  },
  {
    image: '/img/6000x4000b2.jpg',
    fallback: '/img/1st-banner.jpg',
    title: 'Roasted Not Fried',
    subtitle: 'Zero cholesterol, high protein, and nutrient-dense foxnuts'
  },
  {
    image: '/img/1st-banner.jpg',
    fallback: '/img/banner16000x4000.jpg',
    title: 'Crunch into Wellness',
    subtitle: 'Available in Mirch Masala & Salt and Pepper flavors'
  }
];

export const SECONDARY_SLIDES = [
  {
    image: '/img/STUDY BUDDY.jpg',
    title: 'Your Ultimate Study & Work Buddy',
    subtitle: 'Keep your mind sharp and energy steady with guilt-free snacking'
  },
  {
    image: '/img/B3 3926X1080.jpg',
    title: 'Anytime, Anywhere Nutrition',
    subtitle: 'Perfect for travel, late nights, fitness sessions, and family tea time'
  },
  {
    image: '/img/4 b3.jpg',
    title: 'A Flavour For Every Mood',
    subtitle: 'Handpicked quality, roasted to crisp perfection'
  }
];

