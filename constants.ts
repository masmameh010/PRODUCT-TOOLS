
import { Product } from './types';

const createDummyMarketing = (brand: string, name: string, price: string) => ({
  taglines: [
    `${brand} ${name}: Akurasi Maksimal, Harga Minimal.`,
    `Teknologi Thermal Canggih Untuk Berburu Malam.`,
    `Target Terdeteksi Jelas di Segala Kondisi.`,
    `Andalan Pemburu Profesional Indonesia.`,
    `Unit Tangguh, Performa Gahar.`
  ],
  prompts: [
    `Professional tactical photography of ${brand} ${name} thermal scope, cinematic lighting, 8k.`
  ],
  captions: [
    `Dapatkan unit ${brand} ${name} original hanya di sini. Teknologi thermal terbaru dengan sensor sensitif yang memudahkan deteksi target di kegelapan total. Harga: ${price}.`,
    `Siap untuk petualangan malam? ${brand} ${name} hadir dengan fitur LRF presisi dan bodi tahan cuaca ekstrem. Jangan sampai kehabisan!`,
    `Solusi berburu cerdas dengan ${brand} ${name}. Kualitas gambar jernih, baterai awet, dan garansi resmi.`
  ]
});

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
    description: "Lensa 25mm, Laser Rangefinder (LRF) Untuk Akurasi Target Yang Lebih Baik, Memiliki Sertifikasi Tahan Air dan Bodi Yang Kokoh Untuk Penggunaan Dalam Cuaca Ekstrem.\n\nDeteksi Panas Akurat: Menggunakan teknologi pencitraan termal yang memungkinkan pengguna mendeteksi tanda panas (manusia atau hewan) dalam kondisi gelap total, kabut, atau melalui vegetasi rapat.\n\nFitur LRF Terintegrasi: Membantu pengguna mengukur jarak objek secara presisi, krusial bagi pemburu untuk menentukan akurasi tembakan.\n\nDesain Ergonomis: Aman digunakan saat hujan atau salju.\n\nSiang & Malam: Aman digunakan pada siang hari tanpa merusak sensor.\n\nFungsi Rekaman: Mendukung fitur pengambilan foto dan video.",
    specs: ["Lensa 25mm", "Laser Rangefinder (LRF)", "IP67 Waterproof", "Video Recording", "Siang/Malam"],
    marketing: {
      taglines: ["Under 20Jt , Akurasi Maksimal", "Harga BPJS, Dipake Anti Ngenes", "Murah, Tapi Nggak Murahan"],
      prompts: ["Tactical marketing poster for Stellar AMS225-LRF."],
      captions: ["Perangkat Yang sangat cocok bagi pengguna yang mencari keseimbangan antara performa deteksi termal menengah dan fitur navigasi jarak jauh dalam satu paket praktis."]
    }
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
    description: "Teropong pencitraan termal canggih yang dirancang untuk presisi tinggi di medan berburu atau observasi malam hari. Seri 335 menawarkan resolusi sensor yang lebih tinggi untuk detail objek yang lebih tajam.\n\nResolusi Sensor: 384 x 288 piksel (12μm).\nLensa Objektif: 35mm F1.0.\nLaser Rangefinder: Jangkauan hingga 1000 meter.\nBaterai: 8 jam+ (18650).\n\nKeunggulan:\nVisual Superior: Identifikasi target jarak jauh lebih mudah.\nKalkulasi Balistik: Menyesuaikan titik bidik otomatis berdasarkan jarak LRF.\nBodi Ringan: Berat kurang dari 600g.\nRecoil Resistance: Tahan guncangan hingga 1000g.",
    specs: ["Sensor 384x288", "Lensa 35mm F1.0", "LRF 1000m", "Balistik Pintar", "Recoil 1000g"],
    marketing: {
      taglines: ["Precision in Every Pixel, Clarity in Every Night.", "Stellar AMS335LRF: See Beyond the Shadows.", "Target Akurat, Jarak Bukan Lagi Penghambat."],
      prompts: ["Tactical marketing poster for Stellar AMS335-LRF."],
      captions: ["Jangan biarkan kegelapan membatasi pandanganmu. Dengan Stellar AMS335LRF, setiap detail panas terlihat nyata. Dilengkapi Laser Rangefinder 1000m dan kalkulasi balistik pintar, setiap bidikan kini lebih presisi."]
    }
  },
  ...[
    { id: "3", brand: "STELLAR", name: "AMS650-LRF", price: "Rp27,500,000", cat: "Thermal Scope" },
    { id: "4", brand: "SYTONG", name: "FM06-50LRF", price: "Rp40,000,000", cat: "Multispectral" },
    { id: "5", brand: "SYTONG", name: "MM06-50LRF", price: "Rp27,500,000", cat: "Thermal Scope" },
    { id: "6", brand: "SYTONG", name: "XM2.0-650LRF", price: "Rp45,000,000", cat: "Thermal Scope" },
    { id: "7", brand: "SYTONG", name: "JS06-25", price: "Rp25,000,000", cat: "Digital NV" },
    { id: "8", brand: "SYTONG", name: "JS06-35", price: "Rp27,000,000", cat: "Digital NV" },
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
  ].map(p => ({
    id: p.id,
    brand: p.brand,
    name: p.name,
    category: p.cat,
    price: p.price,
    image: `https://placehold.co/600x400/1e293b/10b981?text=${p.name}`,
    images: [`https://placehold.co/600x400/1e293b/10b981?text=${p.name}`, `https://placehold.co/600x400/1e293b/d97706?text=${p.name}+Gallery`],
    description: `Unit ${p.brand} seri ${p.name} merupakan perangkat ${p.cat} profesional dengan build quality premium. Dirancang untuk memberikan akurasi terbaik dan kemudahan operasional di lapangan. Detail spesifikasi sedang diperbarui sesuai katalog resmi terbaru Indonesia.`,
    specs: ["Standard Premium Lens", "Sensitive Thermal Sensor", "IP67 Protection", "Garansi Resmi"],
    marketing: createDummyMarketing(p.brand, p.name, p.price)
  }))
];

export const PRODUCTS = INITIAL_PRODUCTS;
