
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
  shopLink: string; // Tautan ke toko online
  image: string; // Featured image
  images: string[]; // All gallery images
  description: string;
  specs: string[];
  marketing: MarketingData;
}

export type TabType = 'taglines' | 'prompts' | 'captions' | 'poster' | 'gallery';
