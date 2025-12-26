
export interface MarketingData {
  taglines: string[];
  prompts: string[];
  captions: string[];
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  price: string;
  image: string; // Featured image
  images: string[]; // All gallery images
  description: string;
  specs: string[];
  marketing: MarketingData;
}

// Fixed: Added 'gallery' to TabType to match usage in components
export type TabType = 'taglines' | 'prompts' | 'captions' | 'poster' | 'gallery';
