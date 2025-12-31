
import { Product } from './types';

// Helper untuk membuat marketing kit tanpa menampilkan nominal harga
const createOfficialMarketing = (brand: string, name: string, officialTagline: string) => ({
  taglines: [
    officialTagline,
    `${brand} ${name}: Akurasi Tanpa Kompromi.`,
    `Teknologi Malam Terbaik di Kelasnya.`,
    `Pilihan Profesional Hunter Indonesia.`
  ],
  prompts: [
    `A realistic product photograph with [Uploaded image] as the single main subject, centered perfectly in the frame, preserving its original shape, color, texture, branding, and proportions without any alteration. The product stands on a dark gray rugged rocky surface with natural rough texture. Warm golden-hour sunset lighting gently illuminates the scene, creating soft highlights and subtle shadows. The background is softly blurred, revealing a distant hazy mountain landscape with a silhouetted peak and a smooth gradient sky transitioning from soft pink to pale blue.\n\nAt the center-bottom of the frame, the product title text "${name}" appears as a bold visual element. The font style is a military stencil-inspired display font, rough-cut edges, uneven stencil gaps, slightly distressed texture, non-formal, not sans serif, evoking tactical equipment markings. Font color is deep olive drab green mixed with muted army khaki tones, matte finish. The text features a thick dark charcoal-black outline for strong contrast, with a subtle inner shadow to enhance depth. The text feels integrated into the scene, as if printed or stamped onto the environment, not floating or overlay-like.\n\nNo additional objects, no decorative props, clean composition, professional product photography, natural realism.`,
    `A clean professional product photography shot featuring [Uploaded image] as the only subject, placed naturally on a pristine white marble surface with subtle natural veining. The product remains completely unchanged from the original reference, maintaining exact material, color, labeling, and form. The background consists of a soft gray textured studio wall with faint diagonal patterns, slightly out of focus. Gentle natural lighting produces delicate shadows and controlled reflections on the marble surface.\n\nAt the center-bottom of the frame, a bold product title text "${name}" is clearly visible. The typography uses a rugged military-style stencil font with thick block shapes, distressed cuts, and industrial character, non-formal and not sans serif. Font color is muted tactical green leaning toward olive-drab, combined with hints of dark moss green. The text is reinforced with a strong blackened-gunmetal outline, slightly weathered, enhancing legibility against the bright marble surface. The text appears firmly grounded within the composition, like official military labeling, not decorative.\n\nNo additional objects, no plants, no accessories, pure minimalist studio focus, premium realism. 3:4`
  ],
  captions: [
    `Tingkatkan pengalaman berburu Anda dengan ${brand} ${name}. Dirancang khusus untuk ketahanan ekstrem dan akurasi tinggi di segala kondisi cuaca. Segera miliki unitnya!`,
    `Unit ${brand} ${name} kini hadir dengan fitur terbaru. Sensor lebih sensitif dan bodi lebih kokoh. Dapatkan penawaran terbaik sekarang.`,
    `Dapatkan unit original ${brand} hanya di dealer resmi. Garansi terjamin dan pelayanan purna jual terbaik.`
  ]
});

const DUMMY_SHOP = "https://shopee.co.id/search?keyword=";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    brand: "SYTONG",
    name: "STELLAR AMS-225 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+STELLAR+AMS-225+LRF",
    image: "https://i.imgur.com/vJflWnE.png",
    images: ["https://i.imgur.com/vJflWnE.png", "https://i.imgur.com/9ROSa6m.png", "https://i.imgur.com/8ZkKjnZ.png"],
    description: "Sytong Stellar AMS-225 adalah monokular thermal canggih yang menggabungkan kemampuan penglihatan malam dengan pengukur jarak laser (LRF). Didesain dengan lensa objektif 35mm, perangkat ini ideal untuk pengamatan jarak menengah dan navigasi di malam hari.\n\nKEUNGGULAN:\n• Sudah dilengkapi LRF presisi.\n• Responsif (Refresh rate 50Hz).\n• Body kokoh premium.\n\nKELEMAHAN:\n• Resolusi sensor standar (bukan HD).\n• Lensa 35mm terbatas untuk jarak sangat jauh.",
    specs: ["Sensor: 384x288 piksel", "NETD: ≤35mK", "Lensa: 35mm (f/1.2)", "Magnifikasi: 2.5x - 20x", "LRF: Ya, terintegrasi", "Jarak Deteksi: 1200m", "Layar: OLED 1024x768"],
    marketing: createOfficialMarketing("SYTONG", "STELLAR AMS-225 LRF", "Sytong AMS-225: Teknologi LRF Presisi di Setiap Langkah.")
  },
  {
    id: "2",
    brand: "SYTONG",
    name: "STELLAR AMS-335LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+STELLAR+AMS-335LRF",
    image: "https://i.imgur.com/OIGuFwX.png",
    images: ["https://i.imgur.com/OIGuFwX.png", "https://i.imgur.com/HLw3vrN.png", "https://i.imgur.com/kN5kqia.png"],
    description: "Evolusi dari seri AMS dengan kode 335. Tetap menggunakan sensor resolusi standar namun dengan peningkatan pemrosesan gambar dan sensitivitas netd. Tetap mengusung fitur LRF dan lensa 35mm untuk performa all-around.\n\nKEUNGGULAN:\n• Kualitas gambar ditingkatkan dari seri 225.\n• Sangat seimbang antara harga dan fitur.\n\nKELEMAHAN:\n• Resolusi masih 384x288 (tidak full HD).",
    specs: ["Sensor: 384x288 piksel", "NETD: ≤35mK", "Lensa: 35mm", "Magnifikasi: 2.5x - 20x", "LRF: Ya, terintegrasi", "Jarak Deteksi: Hingga 1300m"],
    marketing: createOfficialMarketing("SYTONG", "STELLAR AMS-335LRF", "AMS-335LRF: Peningkatan Performa, Kestabilan Terjamin.")
  },
  {
    id: "3",
    brand: "SYTONG",
    name: "STELLAR AMS-650LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+STELLAR+AMS-650LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=AMS-650LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=AMS-650LRF"],
    description: "Varian tertinggi (Flagship) dari seri Stellar. Menggunakan kode 650 yang menandakan penggunaan sensor resolusi tinggi 640x512. Memberikan detail gambar yang luar biasa tajam (HD) dibandingkan seri 225/335.\n\nKEUNGGULAN:\n• Resolusi HD membuat gambar tidak pecah saat di-zoom.\n• NETD rendah mampu menembus kabut/hujan tipis.\n\nKELEMAHAN:\n• Harga jauh lebih mahal dari varian 225/335.",
    specs: ["Sensor: 640x512 piksel (HD)", "NETD: ≤25mK", "Lensa: 35mm", "Magnifikasi: 2.5x - 20x", "LRF: Ya, terintegrasi", "Jarak Deteksi: Hingga 2600m"],
    marketing: createOfficialMarketing("SYTONG", "STELLAR AMS-650LRF", "AMS-650: Mahakarya Resolusi HD di Kegelapan.")
  },
  {
    id: "4",
    brand: "SYTONG",
    name: "FM06 - 50 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+FM06-50+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=FM06-50",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=FM06-50"],
    description: "Sytong FM06-50 adalah thermal scope terpopuler dengan lensa 50mm besar. Lensa besar ini memberikan jangkauan deteksi yang jauh dan gambar yang lebih terang. Dilengkapi LRF untuk membantu pemburu menentukan jarak sasaran.\n\nKEUNGGULAN:\n• Lensa 50mm sangat baik untuk jarak menengah-jauh.\n• Fitur LRF akurat.\n• Nilai jual tinggi (Best Seller).\n\nKELEMAHAN:\n• Fisik memanjang ke depan (nose heavy).\n• Resolusi 384 standar.",
    specs: ["Sensor: 384x288 piksel", "Lensa: 50mm (Jerman)", "FOV: 10.5° x 7.9°", "Magnifikasi: 3.1x - 12.4x", "LRF: Ya, built-in", "Jarak Deteksi: Hingga 1800m"],
    marketing: createOfficialMarketing("SYTONG", "FM06 - 50 LRF", "FM06-50: Jangkauan Jauh, Bidikan Maut.")
  },
  {
    id: "5",
    brand: "SYTONG",
    name: "MM06 - 50 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+MM06-50+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=MM06-50",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=MM06-50"],
    description: "Seri MM06-50 LRF adalah alternatif dari FM06 dengan spesifikasi inti yang sama, namun seringkali hadir dengan perbedaan pada desain body (metal body) atau tipe reticle. Menggunakan lensa 50mm and sensor standar yang handal.\n\nKEUNGGULAN:\n• Performa setara FM06 dengan alternatif desain body.\n• Lensa 50mm mengumpulkan cahaya lebih banyak.\n\nKELEMAHAN:\n• Tidak menggunakan sensor HD 640 (masih 384).\n• Sama-sama memiliki fisik yang besar.",
    specs: ["Sensor: 384x288 piksel", "Lensa: 50mm", "Magnifikasi: 3x - 12x", "LRF: Ya, built-in", "Jarak Deteksi: Hingga 1800m"],
    marketing: createOfficialMarketing("SYTONG", "MM06 - 50 LRF", "MM06-50: Kekokohan Metal, Presisi LRF.")
  },
  {
    id: "6",
    brand: "SYTONG",
    name: "XM2.0 - 650 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+XM2.0-650+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=XM2.0-650",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=XM2.0-650"],
    description: "Legenda dari Sytong. XM2.0-650 menggabungkan lensa 50mm dengan sensor resolusi tinggi 640x512. Ini adalah pilihan utama bagi mereka yang menginginkan kualitas gambar kelas atas tanpa mengeluarkan biaya brand Eropa.\n\nKEUNGGULAN:\n• Kombonasi Sempurna: Sensor HD + Lensa 50mm + LRF.\n• Gambar sangat tajam, detail hewan terlihat jelas.\n\nKELEMAHAN:\n• Harga premium.\n• Konsumsi baterai lebih boros karena sensor HD.",
    specs: ["Sensor: 640x512 piksel (HD)", "NETD: <25mK", "Lensa: 50mm", "Magnifikasi: 2.5x - 20x", "LRF: Ya, terintegrasi", "Refresh Rate: 50Hz"],
    marketing: createOfficialMarketing("SYTONG", "XM2.0 - 650 LRF", "XM2.0-650: Standar Baru Kualitas Thermal.")
  },
  {
    id: "7",
    brand: "SYTONG",
    name: "AM 06 - 35 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+AM06-35+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=AM06-35",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=AM06-35"],
    description: "AM06-35 LRF dirancang untuk berburu jarak menengah dengan lensa 35mm yang ringkas. Memiliki bidang pandang yang lebih lebar dibanding seri 50mm, cocok untuk hutan lebat.\n\nKEUNGGULAN:\n• Ringan dan balance di senapan.\n• FOV lebar memudahkan scanning area.\n\nKELEMAHAN:\n• Zoom dan jarak deteksi lebih pendek dari seri 50mm.",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm", "Magnifikasi: 2.5x - 10x", "LRF: Ya, terintegrasi", "Jarak Deteksi: Hingga 1200m"],
    marketing: createOfficialMarketing("SYTONG", "AM 06 - 35 LRF", "AM06-35: Lincah, Ringkas, Siap Tempur.")
  },
  {
    id: "8",
    brand: "SYTONG",
    name: "JS06 - 25",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+JS06-25",
    image: "https://placehold.co/600x400/1e293b/10b981?text=JS06-25",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=JS06-25"],
    description: "Model entry-level paling ekonomis dari Sytong. JS06-25 menggunakan lensa kecil 25mm and sensor dasar, sangat cocok untuk pemula atau penggunaan jarak sangat dekat (kurang dari 100m).\n\nKEUNGGULAN:\n• Harga sangat murah.\n• Ukuran kecil/mungil.\n\nKELEMAHAN:\n• Resolusi rendah, gambar kasar.\n• Jangkauan sangat dekat.",
    specs: ["Sensor: 256x192 piksel", "Lensa: 25mm", "Magnifikasi: 2x - 8x", "Jarak Deteksi: Hingga 500m", "LRF: Tidak Ada"],
    marketing: createOfficialMarketing("SYTONG", "JS06 - 25", "JS06-25: Solusi Hemat untuk Pemula.")
  },
  {
    id: "9",
    brand: "SYTONG",
    name: "JS06 - 35",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+JS06-35",
    image: "https://placehold.co/600x400/1e293b/10b981?text=JS06-35",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=JS06-35"],
    description: "Upgrade dari JS06-25 dengan lensa 35mm. Memberikan jangkauan pandang sedikit lebih jauh and gambar sedikit lebih terang, namun tetap menggunakan sensor kelas pemula.\n\nKEUNGGULAN:\n• Lebih baik dari versi 25mm.\n• Tetap ramah kantong.\n\nKELEMAHAN:\n• Resolusi sensor masih 256x192 (limitasi zoom).",
    specs: ["Sensor: 256x192 piksel", "Lensa: 35mm", "Magnifikasi: 2.5x - 10x", "Jarak Deteksi: Hingga 800m", "LRF: Tidak Ada"],
    marketing: createOfficialMarketing("SYTONG", "JS06 - 35", "JS06-35: Sedikit Lebih Jauh, Tetap Terjangkau.")
  },
  {
    id: "10",
    brand: "SYTONG",
    name: "XS 2.0 - 625 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+XS2.0-625+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=XS2.0-625",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=XS2.0-625"],
    description: "Seri XS 2.0 hadir dengan desain body baru yang modern. Varian 625 menggunakan sensor standar 384x288 dengan fitur LRF. Lensa 35mm memberikan keseimbangan yang baik antara ukuran dan performa.\n\nKEUNGGULAN:\n• Desain baru lebih ergonomis.\n• Sudah include LRF.\n\nKELEMAHAN:\n• Tidak menggunakan sensor HD.",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm", "Magnifikasi: 2.5x - 20x", "LRF: Ya", "Refresh Rate: 50Hz"],
    marketing: createOfficialMarketing("SYTONG", "XS 2.0 - 625 LRF", "XS 2.0-625: Desain Baru, Fungsi Teruji.")
  },
  {
    id: "11",
    brand: "SYTONG",
    name: "XS 2.0 - 635 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+XS2.0-635+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=XS2.0-635",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=XS2.0-635"],
    description: "Varian upgrade dari XS 2.0 dengan kode 635. Biasanya menandakan peningkatan pada fitur software atau sensitivitas NETD dibandingkan 625, namun spesifikasi hardware intinya tetap sama.\n\nKEUNGGULAN:\n• Fitur pemrosesan gambar lebih baik.\n• Nilai lebih tinggi dari seri 625.\n\nKELEMAHAN:\n• Tetap sensor 384x288.",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm", "Magnifikasi: 2.5x - 20x", "LRF: Ya"],
    marketing: createOfficialMarketing("SYTONG", "XS 2.0 - 635 LRF", "XS 2.0-635: Performa Optimal, Gaya Futuristik.")
  },
  {
    id: "12",
    brand: "SYTONG",
    name: "LM 02 - 19",
    category: "Thermal Monocular",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+LM02-19",
    image: "https://placehold.co/600x400/1e293b/10b981?text=LM02-19",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=LM02-19"],
    description: "Thermal scope ukuran mikro super ringan dengan lensa 19mm. Dapat berfungsi sebagai scope senapan (clip-on) atau monokuler tangan. Ideal untuk senapan angin.\n\nKEUNGGULAN:\n• Sangat kecil and ringan.\n• Harga sangat murah.\n\nKELEMAHAN:\n• Jangkauan sangat pendek (Cocok untuk 50-80m).\n• Resolusi rendah.",
    specs: ["Sensor: 256x192 piksel", "Lensa: 19mm", "Magnifikasi: 1x - 4x (Digital)", "LRF: Tidak Ada"],
    marketing: createOfficialMarketing("SYTONG", "LM 02 - 19", "LM02-19: Mungil, Praktis, Tak Bebankan.")
  },
  {
    id: "13",
    brand: "SYTONG",
    name: "LM 02 - 25",
    category: "Thermal Monocular",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+LM02-25",
    image: "https://placehold.co/600x400/1e293b/10b981?text=LM02-25",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=LM02-25"],
    description: "Versi upgrade dari LM02 dengan lensa sedikit lebih besar (25mm) untuk memberikan jangkauan deteksi yang lebih baik, namun tetap dalam bentuk yang ultra-kompak.\n\nKEUNGGULAN:\n• Jarak pandang lebih baik dari versi 19mm.\n• Tetap sangat ringan.\n\nKELEMAHAN:\n• Resolusi sensor masih 256x192.",
    specs: ["Sensor: 256x192 piksel", "Lensa: 25mm", "Magnifikasi: 1x - 8x (Digital)", "LRF: Tidak Ada"],
    marketing: createOfficialMarketing("SYTONG", "LM 02 - 25", "LM02-25: Kompak dengan Jangkauan Lebih Luas.")
  },
  {
    id: "14",
    brand: "SYTONG",
    name: "LM 02 - 19 LRF",
    category: "Thermal Monocular",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+LM02-19+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=LM02-19LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=LM02-19LRF"],
    description: "Kejutan dari Sytong: Micro Thermal dengan fitur LRF. Memadukan lensa kecil 19mm dengan kemampuan mengukur jarak, cocok untuk permainan angin-anginan atau pest control jarak dekat.\n\nKEUNGGULAN:\n• Satu-satunya micro thermal yang punya LRF.\n• Unik and fungsional untuk jarak dekat.\n\nKELEMAHAN:\n• Jarak deteksi and LRF sangat terbatas.",
    specs: ["Sensor: 256x192 piksel", "Lensa: 19mm", "LRF: Ya (jarak pendek, biasa <300m)"],
    marketing: createOfficialMarketing("SYTONG", "LM 02 - 19 LRF", "LM02-19 LRF: Kecil Berteknologi Besar.")
  },
  {
    id: "15",
    brand: "SYTONG",
    name: "LM 02 - 25 LRF",
    category: "Thermal Monocular",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "SYTONG+LM02-25+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=LM02-25LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=LM02-25LRF"],
    description: "Varian terbaik dari seri LM02. Menggabungkan lensa 25mm untuk jarak yang lumayan dengan fitur LRF. Ini adalah paket lengkap dalam ukuran mungil.\n\nKEUNGGULAN:\n• LRF membantu di jarak menengah dekat.\n• Ukuran tetap pocket-friendly.\n\nKELEMAHAN:\n• Resolusi 256x192 kurang maksimal untuk zoom tinggi.",
    specs: ["Sensor: 256x192 piksel", "Lensa: 25mm", "LRF: Ya (terintegrasi)"],
    marketing: createOfficialMarketing("SYTONG", "LM 02 - 25 LRF", "LM02-25 LRF: Presisi Mini untuk Jarak Fungsional.")
  },
  {
    id: "16",
    brand: "LONGOT",
    name: "NB335 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+NB335+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=NB335LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=NB335LRF"],
    description: "Longot NB335 adalah thermal scope serbaguna dengan kode '335' yang mengindikasikan penggunaan sensor resolusi standar 384x288. Dilengkapi LRF and lensa standar.\n\nKEUNGGULAN:\n• Kualitas gambar standar yang handal.\n• Fitur lengkap dengan LRF.\n\nKELEMAHAN:\n• Bukan resolusi HD (640).",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm / 50mm", "Magnifikasi: 2.5x - 20x", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "NB335 LRF", "Longot NB335: Handal, Ekonomis, Berkelas.")
  },
  {
    id: "17",
    brand: "LONGOT",
    name: "NB650 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+NB650+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=NB650LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=NB650LRF"],
    description: "Versi upgrade dari seri NB dengan kode '650'. Menggunakan sensor resolusi tinggi 640x512 yang memberikan detail gambar superior untuk pemburu serius.\n\nKEUNGGULAN:\n• Resolusi HD untuk pengalaman visual terbaik.\n• Sangat baik untuk identifikasi target.\n\nKELEMAHAN:\n• Harga lebih tinggi dari NB335.",
    specs: ["Sensor: 640x512 piksel (HD)", "Lensa: 35mm / 50mm", "NETD: <25mK", "Magnifikasi: 2.5x - 20x", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "NB650 LRF", "Longot NB650: Resolusi HD, Jarak Tanpa Batas.")
  },
  {
    id: "18",
    brand: "LONGOT",
    name: "TB335 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+TB335+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=TB335LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=TB335LRF"],
    description: "Seri TB (Tactical Body) Longot dengan sensor 384x288. Biasanya hadir dengan desain body yang sedikit berbeda atau fitur reticle militeristik.\n\nKEUNGGULAN:\n• Desain ergonomis khas Longot.\n• Performa stabil di segala cuaca.\n\nKELEMAHAN:\n• Resolusi standar 384.",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm / 50mm", "Magnifikasi: Digital Zoom tinggi", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "TB335 LRF", "TB335: Desain Taktis, Performa Tempur.")
  },
  {
    id: "19",
    brand: "LONGOT",
    name: "TB650 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+TB650+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=TB650LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=TB650LRF"],
    description: "Varian taktis Longot dengan sensor HD 640x512. TB650 menggabungkan keunggulan desain body TB dengan kejernihan gambar sensor 650.\n\nKEUNGGULAN:\n• Kualitas gambar terbaik di kelas taktis.\n• Fitur LRF akurat.\n\nKELEMAHAN:\n• Konsumsi baterai tinggi.",
    specs: ["Sensor: 640x512 piksel", "Lensa: 35mm / 50mm", "Magnifikasi: Hingga 20x", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "TB650 LRF", "TB650: Dominasi Visual Medan Tempur.")
  },
  {
    id: "20",
    brand: "LONGOT",
    name: "LY335 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+LY335+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=LY335LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=LY335LRF"],
    description: "Seri LY (Light Year?) dengan sensor 384x288. Variasi model Longot lainnya yang menawarkan pilihan estetika and fitur pemrograman yang berbeda dari seri NB/TB.\n\nKEUNGGULAN:\n• Alternatif model untuk variasi pasar.\n• Spesifikasi inti sama-sama andal.\n\nKELEMAHAN:\n• Sensor standar (bukan HD).",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm / 50mm", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "LY335 LRF", "LY335: Pilihan Cerdas untuk Kebutuhan Standar.")
  },
  {
    id: "21",
    brand: "LONGOT",
    name: "LY650 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+LY650+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=LY650LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=LY650LRF"],
    description: "Versi HD dari seri LY. Menggunakan sensor 640x512 untuk pengguna yang menginginkan kualitas gambar terbaik dalam chassis seri LY.\n\nKEUNGGULAN:\n• Resolusi tinggi dengan desain yang elegan.\n• Fitur premium.\n\nKELEMAHAN:\n• Harga premium.",
    specs: ["Sensor: 640x512 piksel", "Lensa: 35mm / 50mm", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "LY650 LRF", "LY650: Elegan, Jernih, dan Mematikan.")
  },
  {
    id: "22",
    brand: "LONGOT",
    name: "TR650 LRF",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+TR650+LRF",
    image: "https://placehold.co/600x400/1e293b/10b981?text=TR650LRF",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=TR650LRF"],
    description: "Seri TR (Thermal Rifle) Longot fokus pada performa tinggi dengan sensor HD 640x512. Model ini dirancang khusus untuk penggunaan taktis and berburu jarak jauh.\n\nKEUNGGULAN:\n• Didedikasikan untuk performa jarak jauh.\n• Sensor HD memastikan identifikasi target akurat.\n\nKELEMAHAN:\n• Harga sangat mahal.",
    specs: ["Sensor: 640x512 piksel", "Lensa: 50mm (Umum untuk seri TR)", "Magnifikasi: Tinggi", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "TR650 LRF", "TR650: Spesialis Jarak Jauh Tanpa Kompromi.")
  },
  {
    id: "23",
    brand: "LONGOT",
    name: "RS 75",
    category: "Thermal Scope",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+RS75",
    image: "https://placehold.co/600x400/1e293b/10b981?text=RS75",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=RS75"],
    description: "Raja jarak jauh dari Longot. Menggunakan lensa raksasa 75mm dengan sensor HD 640x512. Dirancang untuk berburu di padang terbuka yang luas di mana target berada di jarak ekstrem.\n\nKEUNGGULAN:\n• Jangkauan deteksi terjauh di kelasnya.\n• Gambar sangat terang berkat lensa besar.\n\nKELEMAHAN:\n• Fisik sangat besar and berat (mengganggu keseimbangan).\n• Harga paling mahal.",
    specs: ["Sensor: 640x512 piksel", "Lensa: 75mm", "Jarak Deteksi: Hingga 3000+ meter", "LRF: Ya"],
    marketing: createOfficialMarketing("LONGOT", "RS 75", "RS 75: Tak Ada yang Bisa Sembunyi dari RS 75.")
  },
  {
    id: "24",
    brand: "LONGOT",
    name: "R3",
    category: "Thermal Monocular",
    price: "DAPATKAN DI SINI",
    shopLink: DUMMY_SHOP + "LONGOT+R3",
    image: "https://placehold.co/600x400/1e293b/10b981?text=Longot+R3",
    images: ["https://placehold.co/600x400/1e293b/10b981?text=Longot+R3"],
    description: "Model kompak Longot seri R3. Biasanya menggunakan lensa 35mm dengan sensor standar, dirancang untuk penggunaan serbaguna yang tidak membutuhkan lensa besar 50mm.\n\nKEUNGGULAN:\n• Ukuran ideal (tidak terlalu panjang).\n• Cukup ringan untuk dibawa hunting.\n\nKELEMAHAN:\n• Bukan varian HD (640).",
    specs: ["Sensor: 384x288 piksel", "Lensa: 35mm", "Magnifikasi: 2.5x - 20x", "Fitur: LRF (Opsional)"],
    marketing: createOfficialMarketing("LONGOT", "R3", "Longot R3: Simpel, Ringkas, Siap Membidik.")
  }
];

export const PRODUCTS = INITIAL_PRODUCTS;
