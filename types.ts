
export interface MarketingData {
  taglines: string[];
  prompts: string[];
  captions: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  specs: string[];
  marketing: MarketingData;
  posterSettings?: {
    logoUrl?: string;
    customBottomText?: string;
  };
}

export type TabType = 'taglines' | 'prompts' | 'captions' | 'poster';
