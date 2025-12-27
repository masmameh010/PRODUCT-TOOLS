
import { Product } from './types';

const createDummyMarketing = (brand: string, name: string, price: string) => ({
  taglines: [
    `${brand} ${name}: Akurasi Tanpa Kompromi.`,
    `Teknologi Malam Terbaik di Kelasnya.`,
    `Target Terkunci, Hasil Maksimal.`,
    `Pilihan Profesional Hunter Indonesia.`
  ],
  prompts: [
    `A realistic product photograph with [Uploaded image] as the single main subject, centered perfectly in the frame, preserving its original shape, color, texture, branding, and proportions without any alteration. The product stands on a dark gray rugged rocky surface with natural rough texture. Warm golden-hour sunset lighting gently illuminates the scene, creating soft highlights and subtle shadows. The background is softly blurred, revealing a distant hazy mountain landscape with a silhouetted peak and a smooth gradient sky transitioning from soft pink to pale blue.\n\nAt the center-bottom of the frame, the product title text "${name}" appears as a bold visual element. The font style is a military stencil-inspired display font, rough-cut edges, uneven stencil gaps, slightly distressed texture, non-formal, not sans serif, evoking tactical equipment markings. Font color is deep olive drab green mixed with muted army khaki tones, matte finish. The text features a thick dark charcoal-black outline for strong contrast, with a subtle inner shadow to enhance depth. The text feels integrated into the scene, as if printed or stamped onto the environment, not floating or overlay-like.\n\nNo additional objects, no decorative props, clean composition, professional product photography, natural realism.`,
    `A clean professional product photography shot featuring [Uploaded image] as the only subject, placed naturally on a pristine white marble surface with subtle natural veining. The product remains completely unchanged from the original reference, maintaining exact material, color, labeling, and form. The background consists of a soft gray textured studio wall with faint diagonal patterns, slightly out of focus. Gentle natural lighting produces delicate shadows and controlled reflections on the marble surface.\n\nAt the center-bottom of the frame, a bold product title text "${name}" is clearly visible. The typography uses a rugged military-style stencil font with thick block shapes, distressed cuts, and industrial character, non-formal and not sans serif. Font color is muted tactical green leaning toward olive-drab, combined with hints of dark moss green. The text is reinforced with a strong blackened-gunmetal outline, slightly weathered, enhancing legibility against the bright marble surface. The text appears firmly grounded within the composition, like official military labeling, not decorative.\n\nNo additional objects, no plants, no accessories, pure minimalist studio focus, premium realism. 3:4`
  ],
  captions: [
    `Tingkatkan pengalaman berburu Anda dengan ${brand} ${name}. Dirancang khusus untuk ketahanan ekstrem dan akurasi tinggi di segala kondisi cuaca. Segera miliki unitnya!`,
    `Unit ${brand} ${name} kini hadir dengan fitur terbaru. Sensor lebih sensitif dan bodi lebih kokoh. Harga terbaik: ${price}.`,
    `Dapatkan unit original ${brand} hanya di dealer resmi. Garansi terjamin dan pelayanan purna jual terbaik.`
  ]
});

// List produk 3-24
const PRODUCT_LIST_DATA = [
  { id: "3", brand: "STELLAR", name: "AMS650-LRF", price: "Rp27,500,000", cat: "Thermal Scope" },
  { id: "4", brand: "SYTONG", name: "FM06-50LRF", price: "Rp40,000,000", cat: "Multispectral" },
  { id: "5", brand: "SYTONG", name: "MM06-50LRF", price: "Rp27,500,000", cat: "Thermal Scope" },
  { id: "6", brand: "SYTONG", name: "XM2.0-650LRF", price: "Rp45,000,000", cat: "Thermal Scope" },
  { id: "7", brand: "SYTONG", name: "JS06-25", price: "Rp25,000,000", cat: "Digital Night Vision" },
  { id: "8", brand: "SYTONG", name: "JS06-35", price: "Rp27,000,000", cat: "Digital Night Vision" },
  { id: "9", brand: "SYTONG", name: "XS2.0-625LRF", price: "Rp27,500,000", cat: "Thermal Scope" },
  { id: "10", brand: "SYTONG", name: "XS2.0-635LRF", price: "Rp30,000,000", cat: "Thermal Scope" },
  { id: "11", brand: "SYTONG", name: "LM02-19", price: "Rp13,000,000", cat: "Thermal Monocular" },
  { id: "12", brand: "SYTONG", name: "LM02-25", price: "Rp14,000,000", cat: "Thermal Monocular" },
  { id: "13", brand: "SYTONG", name: "LM02-19LRF", price: "Rp13,500,000", cat: "Thermal Monocular" },
  { id: "14", brand: "SYTONG", name: "LM0225LRF", price: "Rp15,000,000", cat: "Thermal Monocular" },
  { id: "15", brand: "SYTONG", name: "AM06-35LRF", price: "Rp24,000,000", cat: "Thermal Scope" },
  { id: "16", brand: "LONGOT", name: "NB335L", price: "Rp22,500,000", cat: "Thermal Scope" },
  { id: "17", brand: "LONGOT", name: "NB650L", price: "Rp27,500,000", cat: "Thermal Scope" },
  { id: "18", brand: "LONGOT", name: "TB335L", price: "Rp25,000,000", cat: "Thermal Scope" },
  { id: "19", brand: "LONGOT", name: "TB650L", price: "Rp32,000,000", cat: "Thermal Scope" },
  { id: "20", brand: "LONGOT", name: "LY335LRF", price: "Rp35,000,000", cat: "Thermal Scope" },
  { id: "21", brand: "LONGOT", name: "LY650LRF", price: "Rp45,000,000", cat: "Thermal Scope" },
  { id: "22", brand: "LONGOT", name: "TR650LRF", price: "Rp75,000,000", cat: "Thermal Scope" },
  { id: "23", brand: "LONGOT", name: "RS75R", price: "Rp110,000,000", cat: "Thermal Scope" },
  { id: "24", brand: "LONGOT", name: "R3", price: "Rp35,000,000", cat: "Thermal Monocular" },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    brand: "STELLAR",
    name: "AMS225-LRF",
    category: "Thermal Scope",
    price: "Rp15,000,000",
    image: "https://i.imgur.com/vJflWnE.png",
    images: [
      "https://i.imgur.com/vJflWnE.png", "https://i.imgur.com/9ROSa6m.png", 
      "https://i.imgur.com/8ZkKjnZ.png", "https://i.imgur.com/nsIKpux.png", 
      "https://i.imgur.com/kbyIyL9.png", "https://i.imgur.com/RjqqpB6.png", 
      "https://i.imgur.com/kevZ689.png"
    ],
    description: "Lensa 25mm, Laser Rangefinder (LRF) Untuk Akurasi Target Yang Lebih Baik, Memiliki Sertifikasi Tahan Air dan Bodi Yang Kokoh Untuk Penggunaan Dalam Cuaca Ekstrem.",
    specs: ["Lensa 25mm", "Laser Rangefinder (LRF)", "IP67 Waterproof", "Siang/Malam", "Fungsi Rekaman"],
    marketing: createDummyMarketing("STELLAR", "AMS225-LRF", "Rp15,000,000")
  },
  {
    id: "2",
    brand: "STELLAR",
    name: "AMS335-LRF",
    category: "Thermal Scope",
    price: "Rp20,000,000",
    image: "https://i.imgur.com/OIGuFwX.png",
    images: [
      "https://i.imgur.com/OIGuFwX.png", "https://i.imgur.com/HLw3vrN.png", 
      "https://i.imgur.com/kN5kqia.png", "https://i.imgur.com/SNaKdFJ.png", 
      "https://i.imgur.com/XjxOqc6.png", "https://i.imgur.com/5XsWbvy.png", 
      "https://i.imgur.com/owMCfBN.png"
    ],
    description: "Teropong pencitraan termal canggih yang dirancang untuk presisi tinggi di medan berburu atau observasi malam hari. Seri 335 menawarkan resolusi sensor yang lebih tinggi untuk detail objek yang lebih tajam.",
    specs: ["Lensa 35mm F1.0", "Sensor 384x288", "LRF 1000m", "Tahan Guncangan 1000g", "Baterai 18650"],
    marketing: createDummyMarketing("STELLAR", "AMS335-LRF", "Rp20,000,000")
  },
  ...PRODUCT_LIST_DATA.map(p => ({
    id: p.id,
    brand: p.brand,
    name: p.name,
    category: p.cat,
    price: p.price,
    image: `https://placehold.co/600x400/1e293b/10b981?text=${p.name}`,
    images: [`https://placehold.co/600x400/1e293b/10b981?text=${p.name}`, `https://placehold.co/600x400/1e293b/d97706?text=${p.brand}+${p.name}`],
    description: `Deskripsi untuk ${p.brand} ${p.name} akan diperbarui segera. Produk ini menawarkan performa ${p.cat} yang stabil.`,
    specs: ["Lensa Premium", "Sensor Sensitif", "IP67 Rating", "Desain Ergonomis", "Garansi Resmi"],
    marketing: createDummyMarketing(p.brand, p.name, p.price)
  }))
];

export const PRODUCTS = INITIAL_PRODUCTS;
