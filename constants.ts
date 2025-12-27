
import { Product } from './types';

const createDummyMarketing = (brand: string, name: string, price: string) => ({
  taglines: [
    `${brand} ${name}: Akurasi Tanpa Kompromi.`,
    `Teknologi Malam Terbaik di Kelasnya.`,
    `Target Terkunci, Hasil Maksimal.`,
    `Pilihan Profesional Hunter Indonesia.`,
    `Kualitas Premium, Harga Kompetitif.`
  ],
  prompts: [
    `Professional tactical marketing poster for ${brand} ${name}. Dark background, emerald green lighting, 8k resolution.`
  ],
  captions: [
    `Tingkatkan pengalaman berburu Anda dengan ${brand} ${name}. Dirancang khusus untuk ketahanan ekstrem dan akurasi tinggi di segala kondisi cuaca. Segera miliki unitnya!`,
    `Unit ${brand} ${name} kini hadir dengan fitur terbaru. Sensor lebih sensitif dan bodi lebih kokoh. Harga terbaik: ${price}.`,
    `Dapatkan unit original ${brand} hanya di dealer resmi. Garansi terjamin dan pelayanan purna jual terbaik.`
  ]
});

// List produk 3-24 sesuai permintaan user (Data Dummy Berstruktur Serupa)
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
    description: "Lensa 25mm, Laser Rangefinder (LRF) Untuk Akurasi Target Yang Lebih Baik, Memiliki Sertifikasi Tahan Air dan Bodi Yang Kokoh Untuk Penggunaan Dalam Cuaca Ekstrem.\n\nDeteksi Panas Akurat: Menggunakan teknologi pencitraan termal yang memungkinkan pengguna mendeteksi tanda panas (manusia atau hewan) dalam kondisi gelap total, kabut, atau melalui vegetasi rapat.\n\nFitur LRF Terintegrasi: Berbeda dengan teropong biasa, adanya Laser Rangefinder membantu pengguna mengukur jarak objek secara presisi.\n\nDesain Ergonomis dan Tahan Cuaca: Didesain untuk penggunaan jangka panjang di lapangan dengan ketahanan terhadap air, sehingga aman digunakan saat hujan atau salju.\n\nPenggunaan Siang dan Malam: Teknologi termal pada perangkat ini dapat digunakan dengan aman pada siang hari.",
    specs: ["Lensa 25mm", "Laser Rangefinder (LRF)", "IP67 Waterproof", "Siang/Malam", "Fungsi Rekaman"],
    marketing: {
      taglines: ["Under 20Jt , Akurasi Maksimal", "Harga BPJS, Dipake Anti Ngenes", "Murah, Tapi Nggak Murahan"],
      prompts: ["Tactical marketing poster for Stellar AMS225-LRF. Tactical aesthetic."],
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
    description: "Teropong pencitraan termal canggih yang dirancang untuk presisi tinggi di medan berburu atau observasi malam hari. Seri 335 menawarkan resolusi sensor yang lebih tinggi untuk detail objek yang lebih tajam.\n\nResolusi Sensor: 384 x 288 piksel dengan ukuran piksel 12μm.\nLensa Objektif: 35mm F1.0 untuk penangkapan cahaya yang optimal.\nLaser Rangefinder (LRF): Jangkauan hingga 1000 meter dengan akurasi tinggi.\n\nKeunggulan:\nKejelasan Visual Superior: Memberikan gambar yang jauh lebih detail, memudahkan identifikasi target.\nKalkulasi Balistik Pintar: Membantu pengguna menyesuaikan titik bidik otomatis.",
    specs: ["Lensa 35mm F1.0", "Sensor 384x288", "LRF 1000m", "Tahan Guncangan 1000g", "Baterai 18650"],
    marketing: {
      taglines: ["Precision in Every Pixel, Clarity in Every Night.", "Stellar AMS335LRF: See Beyond the Shadows.", "Target Akurat, Jarak Bukan Lagi Penghambat."],
      prompts: ["Tactical marketing poster for Stellar AMS335-LRF. High-end lighting."],
      captions: ["Jangan biarkan kegelapan membatasi pandanganmu. Dengan Stellar AMS335LRF, setiap detail panas terlihat nyata. Dilengkapi Laser Rangefinder 1000m dan kalkulasi balistik pintar."]
    }
  },
  ...PRODUCT_LIST_DATA.map(p => ({
    id: p.id,
    brand: p.brand,
    name: p.name,
    category: p.cat,
    price: p.price,
    image: `https://placehold.co/600x400/1e293b/10b981?text=${p.name}`,
    images: [`https://placehold.co/600x400/1e293b/10b981?text=${p.name}`, `https://placehold.co/600x400/1e293b/d97706?text=${p.brand}+${p.name}`],
    description: `Deskripsi untuk ${p.brand} ${p.name} akan diperbarui segera. Produk ini menawarkan performa ${p.cat} yang stabil untuk kebutuhan berburu malam hari Anda. Dirancang dengan teknologi sensor terkini di kelasnya.`,
    specs: ["Lensa Premium", "Sensor Sensitif", "IP67 Rating", "Desain Ergonomis", "Garansi Resmi"],
    marketing: createDummyMarketing(p.brand, p.name, p.price)
  }))
];

export const PRODUCTS = INITIAL_PRODUCTS;
