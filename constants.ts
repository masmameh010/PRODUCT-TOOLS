
import { Product } from './types';

const generatePrompts = (name: string, category: string, tagline: string, price: string) => [
  `A professional tactical marketing poster for "${name}". Layout requirements: 
  - Top Left Corner: A sleek minimalist white "SYTONG" logo.
  - Top Center: Bold typography text saying "${category}".
  - Center: High-end professional product photography of the ${name} device, matte black finish, dramatic rim lighting.
  - Below Product: Elegant text display of the tagline "${tagline}".
  - Bottom Footer: Prominent text display of "${price}".
  - Overall Style: Dark tactical theme, dark grey textured background, 8k resolution, cinematic commercial photography --ar 3:4`,
  
  `Marketing visual for ${name} ${category}. 
  - Header: Category name "${category}" in modern tactical font.
  - Main Subject: The ${name} device on a clean carbon fiber surface.
  - Logo: "SYTONG" branding in the upper left corner.
  - Subtext: Tagline "${tagline}" centered below the device.
  - Price: "${price}" displayed at the very bottom.
  - Environment: Professional studio lighting with orange accent glows --ar 3:4`,

  `Tactical promo poster: ${name}. 
  - Top: Display the type "${category}".
  - Upper Left: White Sytong Logo.
  - Center: The product ${name} with sharp mechanical details.
  - Bottom: Tagline "${tagline}" followed by custom footer "${price}".
  - Mood: Foggy forest background, blue hour lighting, extremely detailed --ar 3:4`
];

export const INITIAL_PRODUCTS: Product[] = [
    {
        id: "AMS 225-LRF",
        name: "Sytong AMS 225-LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1595111162444-14987ba6284f?auto=format&fit=crop&q=80&w=800",
        price: "Rp 15.000.000",
        description: "Scope thermal ringkas dengan lensa 25mm dan Laser Rangefinder terintegrasi untuk akurasi maksimal.",
        specs: ["Lensa: 25mm", "Resolusi: 256x192", "NETD: <25mK", "Deteksi: 1100m", "Fitur: LRF, WiFi, Video Record, BC"],
        marketing: {
            taglines: ["Akurasi Dalam Setiap Tembakan.", "Kekuatan Thermal Dalam Genggaman.", "Partner Hunting Sejati."],
            prompts: generatePrompts("Sytong AMS 225-LRF", "Thermal Scope", "Akurasi Dalam Setiap Tembakan.", "Rp 15.000.000"),
            captions: ["Tingkatkan pengalaman hunting Anda dengan AMS 225-LRF! Presisi tinggi, deteksi tajam. #SytongIndonesia #ThermalScope"]
        }
    },
    {
        id: "AMS 335-LRF",
        name: "Sytong AMS 335-LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
        price: "Rp 20.000.000",
        description: "Scope thermal menengah dengan lensa 35mm, memberikan jangkauan deteksi yang lebih luas dan detail.",
        specs: ["Lensa: 35mm", "Resolusi: 384x288", "NETD: <25mK", "Deteksi: 1900m", "Fitur: LRF, WiFi, Video Record, BC"],
        marketing: {
            taglines: ["Lihat Target Dari Kejauhan.", "Detail Thermal Tanpa Kompromi.", "Kuasai Medan Hunting."],
            prompts: generatePrompts("Sytong AMS 335-LRF", "Thermal Scope", "Lihat Target Dari Kejauhan.", "Rp 20.000.000"),
            captions: ["Jangkauan deteksi hingga 1900m! AMS 335-LRF adalah solusi hunting jarak menengah terbaik Anda. #Sytong #ThermalHunt"]
        }
    },
    {
        id: "AMS 650-LRF",
        name: "Sytong AMS 650-LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        price: "Rp 27.500.000",
        description: "Varian tertinggi seri AMS dengan lensa 50mm dan sensor resolusi tinggi untuk deteksi jarak jauh.",
        specs: ["Lensa: 50mm", "Resolusi: 640x512", "NETD: <25mK", "Deteksi: 3000m", "Fitur: LRF, WiFi, Video Record, BC"],
        marketing: {
            taglines: ["Raja Deteksi Jarak Jauh.", "Kejernihan 640px Tanpa Batas.", "Teknologi Thermal Puncak."],
            prompts: generatePrompts("Sytong AMS 650-LRF", "Thermal Scope", "Raja Deteksi Jarak Jauh.", "Rp 27.500.000"),
            captions: ["Deteksi target hingga 3km! Tidak ada yang bisa bersembunyi dari AMS 650-LRF. #SytongFlagship #ThermalVision"]
        }
    },
    {
        id: "FM 06-50 LRF",
        name: "Sytong FM 06-50 LRF",
        category: "Multispectral",
        image: "https://images.unsplash.com/photo-1614352235021-2e20d44fb1c2?auto=format&fit=crop&q=80&w=800",
        price: "Rp 40.000.000",
        description: "Sytong FM06-50LRF adalah teropong/monokuler pencitraan termal yang andal dengan sensor 640x512, lensa 50mm, dan Laser Rangefinder (LRF) terintegrasi untuk pengukuran jarak yang tepat hingga 1000m (atau lebih), menawarkan deteksi termal resolusi tinggi untuk berburu dan pengawasan, dengan fitur-fitur seperti pembesaran 5-20x, perekaman video, Wi-Fi, dan konstruksi tahan air yang tahan lama, sempurna untuk kondisi cahaya rendah dan kondisi buruk.",
        specs: ["🔭 Sensor Termal Resolusi Tinggi 640x512", "📏 LRF Terintegrasi – Pengukuran Jangkauan 1000m untuk jarak target yang tepat", "🔍 Lensa 50mm – Deteksi termal jarak jauh & kejernihan kristal", "🌧️ Konstruksi tahan lama berperingkat IP – Siap untuk lingkungan berburu apa pun", "🌙 Ideal untuk operasi siang atau malam"],
        marketing: {
            taglines: ["Handal di Segala Kondisi", "Ideal Untuk Operasi Siang Maupun Malam", "Pelacakan Mudah, Versatile Untuk Sniper atau Riffle"],
            prompts: generatePrompts("Sytong FM 06-50 LRF", "Multispectral", "Dominasi Hybrid Dua Dunia.", "Rp 40.000.000"),
            captions: ["Gabungkan thermal dan night vision dalam satu layar. FM 06-50 LRF adalah masa depan! #Multispectral #SytongTech"]
        }
    },
    {
        id: "MM 06-50 LRF",
        name: "Sytong MM 06-50 LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=800",
        price: "Rp 27.500.000",
        description: "Scope thermal dengan ketahanan getaran (recoil) sangat tinggi hingga 10.000 Joule.",
        specs: ["Lensa: 50mm", "Resolusi: 640x512", "NETD: <18mK", "Tahan Recoil: 10000J", "Fitur: 800m LRF, Auto BC"],
        marketing: {
            taglines: ["Tangguh Menahan Hentakan Besar.", "Stabilitas Thermal Mutlak.", "Kualitas Tanpa Getar."],
            prompts: generatePrompts("Sytong MM 06-50 LRF", "Thermal Scope", "Tangguh Menahan Hentakan Besar.", "Rp 27.500.000"),
            captions: ["Butuh scope yang tahan hentakan keras? MM 06-50 LRF siap hadapi unit kaliber besar Anda. #HighRecoil #Sytong"]
        }
    },
    {
        id: "XM2.0-0650LRF",
        name: "Sytong XM2.0-0650LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1595111162444-14987ba6284f?auto=format&fit=crop&q=80&w=800",
        price: "Rp 45.000.000",
        description: "Evolusi seri XM dengan core 2.0 yang lebih responsif dan jernih.",
        specs: ["Lensa: 50mm", "Core: XM 2.0 Enhanced", "Resolusi: 640x512", "Fitur: LRF Integrated", "Deteksi: Maksimal"],
        marketing: {
            taglines: ["Evolusi Menuju Kesempurnaan.", "Kejernihan Core 2.0.", "Performa Thermal Kelas Atas."],
            prompts: generatePrompts("Sytong XM2.0-0650LRF", "Thermal Scope", "Evolusi Menuju Kesempurnaan.", "Rp 45.000.000"),
            captions: ["Rasakan perbedaan core 2.0 pada XM2.0-0650LRF. Lebih cepat, lebih tajam! #XM2 #SytongPremium"]
        }
    },
    {
        id: "JS 06-25",
        name: "Sytong JS 06-25",
        category: "Digital NV",
        image: "https://images.unsplash.com/photo-1614352235021-2e20d44fb1c2?auto=format&fit=crop&q=80&w=800",
        price: "Rp 25.000.000",
        description: "Scope night vision digital dengan performa stabil untuk hunting malam hari.",
        specs: ["Lensa: 25mm", "Tipe: Digital NV", "Resolusi: Full HD", "Fitur: WiFi, Video Record", "Mode: Day/Night"],
        marketing: {
            taglines: ["Malam Menjadi Terang Benderang.", "Detail Malam Digital HD.", "Hunting Malam Tanpa Ragu."],
            prompts: generatePrompts("Sytong JS 06-25", "Digital Night Vision", "Malam Menjadi Terang Benderang.", "Rp 25.000.000"),
            captions: ["Ubah malam menjadi siang dengan JS 06-25. Digital night vision andalan para pro. #NightVision #SytongJS"]
        }
    },
    {
        id: "JS 06-35",
        name: "Sytong JS 06-35",
        category: "Digital NV",
        image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
        price: "Rp 27.000.000",
        description: "Varian lensa 35mm dari seri JS untuk pandangan yang lebih jauh dan fokus.",
        specs: ["Lensa: 35mm", "Tipe: Digital NV", "Resolusi: Full HD", "Fitur: WiFi, Video Record", "Mode: Day/Night"],
        marketing: {
            taglines: ["Fokus Tajam Di Kegelapan.", "Pandangan Digital Lebih Jauh.", "Kualitas Malam Premium."],
            prompts: generatePrompts("Sytong JS 06-35", "Digital Night Vision", "Fokus Tajam Di Kegelapan.", "Rp 27.000.000"),
            captions: ["Dapatkan detail lebih tajam dengan lensa 35mm pada JS 06-35. Hunter malam wajib punya! #SytongIndonesia #TacticalNV"]
        }
    },
    {
        id: "XS2.0-0625LRF",
        name: "Sytong XS2.0-0625LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        price: "Rp 27.500.000",
        description: "Thermal scope ultra-ringkas dengan sensor 640px dan rangefinder laser.",
        specs: ["Lensa: 25mm", "Resolusi: 640x512", "NETD: <18mK", "Deteksi: 1250m", "Fitur: LRF, WiFi, Video"],
        marketing: {
            taglines: ["Kecil Namun Mematikan.", "Performa Besar Dalam Bentuk Ringkas.", "Mobilitas Tanpa Batas."],
            prompts: generatePrompts("Sytong XS2.0-0625LRF", "Thermal Scope", "Kecil Namun Mematikan.", "Rp 27.500.000"),
            captions: ["Siapa bilang kecil tidak bertenaga? XS2.0-0625LRF membuktikannya dengan sensor 640px! #CompactTactical #Sytong"]
        }
    },
    {
        id: "XS2.0-0635LRF",
        name: "Sytong XS2.0-0635LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800",
        price: "Rp 30.000.000",
        description: "Versi 35mm dari seri XS2.0, menawarkan keseimbangan antara portabilitas dan jarak deteksi.",
        specs: ["Lensa: 35mm", "Resolusi: 640x512", "NETD: <18mK", "Deteksi: 1750m", "Fitur: LRF, WiFi, Video"],
        marketing: {
            taglines: ["Keseimbangan Performa Sempurna.", "Deteksi Tajam, Bentuk Ringkas.", "Siap Untuk Segala Medan."],
            prompts: generatePrompts("Sytong XS2.0-0635LRF", "Thermal Scope", "Keseimbangan Performa Sempurna.", "Rp 30.000.000"),
            captions: ["XS2.0-0635LRF: Deteksi hingga 1750m dalam genggaman. Pilihan cerdas hunter modern. #XS2 #SytongThermal"]
        }
    },
    {
        id: "LM 02-19",
        name: "Sytong LM 02-19",
        category: "Thermal Monocular",
        image: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?auto=format&fit=crop&q=80&w=800",
        price: "Rp 13.000.000",
        description: "Monocular thermal ekonomis untuk pemula dengan kualitas sensor VOX yang handal.",
        specs: ["Lensa: 19mm", "Resolusi: 256x192", "NETD: <30mK", "Deteksi: 900m", "Fitur: WiFi, Video Record"],
        marketing: {
            taglines: ["Gerbang Menuju Dunia Thermal.", "Hemat Biaya, Kaya Fitur.", "Spotting Mudah Di Mana Saja."],
            prompts: generatePrompts("Sytong LM 02-19", "Thermal Monocular", "Gerbang Menuju Dunia Thermal.", "Rp 13.000.000"),
            captions: ["Butuh thermal berkualitas harga bersahabat? LM 02-19 jawabannya. Spotting jadi lebih mudah! #BudgetThermal #Sytong"]
        }
    },
    {
        id: "LM 02-25",
        name: "Sytong LM 02-25",
        category: "Thermal Monocular",
        image: "https://images.unsplash.com/photo-1595111162444-14987ba6284f?auto=format&fit=crop&q=80&w=800",
        price: "Rp 14.000.000",
        description: "Varian lensa 25mm dari seri LM untuk pandangan yang lebih jauh dan luas.",
        specs: ["Lensa: 25mm", "Resolusi: 256x192", "NETD: <30mK", "Deteksi: 1300m", "Tahan Recoil: 1200g"],
        marketing: {
            taglines: ["Pandangan Thermal Lebih Luas.", "Handal Untuk Spotting Jarak Menengah.", "Kualitas VOX Terpercaya."],
            prompts: generatePrompts("Sytong LM 02-25", "Thermal Monocular", "Pandangan Thermal Lebih Luas.", "Rp 14.000.000"),
            captions: ["Upgrade spotting harianmu dengan LM 02-25. Deteksi lebih jauh, lebih jelas! #ThermalSpotter #SytongIndonesia"]
        }
    },
    {
        id: "LM 02-19LRF",
        name: "Sytong LM 02-19LRF",
        category: "Thermal Monocular",
        image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
        price: "Rp 13.500.000",
        description: "Monocular thermal 19mm yang dilengkapi dengan Laser Rangefinder.",
        specs: ["Lensa: 19mm", "Resolusi: 256x192", "Fitur: LRF Integrated", "Deteksi: 900m", "WiFi, Video Record"],
        marketing: {
            taglines: ["Ukur Jarak Seketika.", "Spotting Dan Ukur Dalam Satu Alat.", "Fitur Premium Harga Terjangkau."],
            prompts: generatePrompts("Sytong LM 02-19LRF", "Thermal Monocular", "Ukur Jarak Seketika.", "Rp 13.500.000"),
            captions: ["Gak perlu tebak-tebak jarak lagi. LM 02-19LRF kasih info presisi buat kamu! #LRFThermal #SytongTech"]
        }
    },
    {
        id: "LM 02-25LRF",
        name: "Sytong LM 02-25LRF",
        category: "Thermal Monocular",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        price: "Rp 15.000.000",
        description: "Monocular thermal 25mm dengan LRF, ideal untuk hunter yang butuh mobilitas tinggi.",
        specs: ["Lensa: 19mm (PDF Data)", "Resolusi: 256x192", "NETD: <30mK", "Deteksi: 1300m", "Fitur: LRF, WiFi, Video"],
        marketing: {
            taglines: ["Partner Mobilitas Hunter.", "Jarak Terukur, Target Terkunci.", "Kombinasi Lensa Dan LRF."],
            prompts: generatePrompts("Sytong LM 02-25LRF", "Thermal Monocular", "Partner Mobilitas Hunter.", "Rp 15.000.000"),
            captions: ["LM 02-25LRF: Temukan target, ukur jaraknya, dan eksekusi dengan tepat! #HunterGear #Sytong"]
        }
    },
    {
        id: "AM 06-35LRF",
        name: "Sytong AM 06-35LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800",
        price: "Rp 24.000.000",
        description: "Scope thermal seri AM dengan lensa 35mm dan rangefinder laser untuk performa solid.",
        specs: ["Lensa: 35mm", "Resolusi: 384x288", "Fitur: LRF Integrated", "NETD: <25mK", "Ballistic Calc Support"],
        marketing: {
            taglines: ["Performa Solid Di Setiap Medan.", "Teknologi AM Yang Teruji.", "Akurasi Thermal Presisi."],
            prompts: generatePrompts("Sytong AM 06-35LRF", "Thermal Scope", "Performa Solid Di Setiap Medan.", "Rp 24.000.000"),
            captions: ["Siap hadapi tantangan hunting dengan AM 06-35LRF. Teknologi terpercaya untuk hasil maksimal. #SytongAM #ThermalOptics"]
        }
    },
    {
        id: "NB 335L",
        name: "Longot NB 335L",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1614352235021-2e20d44fb1c2?auto=format&fit=crop&q=80&w=800",
        price: "Rp 22.500.000",
        description: "Scope thermal Longot dengan sensor VOX dan fitur Auto Ballistic Calculation.",
        specs: ["Lensa: 35mm", "Resolusi: 384x288", "NETD: ≤25mk", "Deteksi: 1800m", "Fitur: Auto Ballistic, PIP"],
        marketing: {
            taglines: ["Akurasi Balistik Otomatis.", "Teknologi Longot Terunggul.", "Detail VOX Tajam."],
            prompts: generatePrompts("Longot NB 335L", "Thermal Scope", "Akurasi Balistik Otomatis.", "Rp 22.500.000"),
            captions: ["Tembak lebih percaya diri dengan Auto Ballistic Calculation dari NB 335L. #LongotIndonesia #ThermalPrecision"]
        }
    },
    {
        id: "NB 650L",
        name: "Longot NB 650L",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1595111162444-14987ba6284f?auto=format&fit=crop&q=80&w=800",
        price: "Rp 27.500.000",
        description: "Varian flagship Longot NB dengan lensa 50mm dan jangkauan deteksi fantastis.",
        specs: ["Lensa: 50mm", "Resolusi: 640x512", "NETD: <18mK", "Deteksi: 2600m", "Fitur: Auto Ballistic, WiFi"],
        marketing: {
            taglines: ["Kekuatan Longot Tertinggi.", "Jangkauan Deteksi Luar Biasa.", "Ketajaman Thermal 640px."],
            prompts: generatePrompts("Longot NB 650L", "Thermal Scope", "Kekuatan Longot Tertinggi.", "Rp 27.500.000"),
            captions: ["Jangkau lebih jauh dengan NB 650L. Deteksi hingga 2.6km dengan kejernihan maksimal! #LongotFlagship #ThermalHunt"]
        }
    },
    {
        id: "TB 335L",
        name: "Longot TB 335L",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
        price: "Rp 25.000.000",
        description: "Scope thermal dengan desain bentuk tube (tabung) klasik namun bermesin modern.",
        specs: ["Lensa: 35mm", "Resolusi: 384x288", "NETD: ≤20mk", "Identifikasi: 860m", "Desain: Tube Classic"],
        marketing: {
            taglines: ["Desain Klasik, Teknologi Modern.", "Gaya Tradisional Performa Masa Depan.", "Instalasi Mudah Dan Kuat."],
            prompts: generatePrompts("Longot TB 335L", "Tube Thermal Scope", "Desain Klasik, Teknologi Modern.", "Rp 25.000.000"),
            captions: ["Suka gaya klasik? TB 335L hadir with bentuk tube tradisional tapi performa thermal gila! #ClassicScope #LongotTB"]
        }
    },
    {
        id: "TB 650L",
        name: "Longot TB 650L",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        price: "Rp 32.000.000",
        description: "Tube scope thermal dengan lensa 50mm untuk identifikasi target lebih detail.",
        specs: ["Lensa: 50mm", "Resolusi: 640x512", "NETD: ≤20mk", "Identifikasi: 1229m", "Fitur: Auto Ballistic, PIP"],
        marketing: {
            taglines: ["Identifikasi Lebih Jelas.", "Tube Scope Resolusi Tinggi.", "Performa Profesional."],
            prompts: generatePrompts("Longot TB 650L", "Tube Thermal Scope", "Identifikasi Lebih Jelas.", "Rp 32.000.000"),
            captions: ["Dapatkan pandangan terbaik dengan TB 650L. Identifikasi target hingga 1.2km! #LongotThermal #ProHunter"]
        }
    },
    {
        id: "LY 335LRF",
        name: "Longot LY 335LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800",
        price: "Rp 35.000.000",
        description: "Scope thermal seri LY dengan sensor VOX premium dan rangefinder laser.",
        specs: ["Lensa: 35mm", "Resolusi: 384x288", "NETD: ≤35mk", "Identifikasi: 1500m", "Fitur: PIP, WiFi, Video"],
        marketing: {
            taglines: ["Citra Thermal Lebih Alami.", "Presisi Jarak Laser.", "Handal Di Segala Kondisi Cuaca."],
            prompts: generatePrompts("Longot LY 335LRF", "Thermal Scope", "Citra Thermal Lebih Alami.", "Rp 35.000.000"),
            captions: ["Identifikasi target hingga 1500m dengan LY 335LRF. Performa thermal yang natural dan tajam. #LongotLY #ThermalGear"]
        }
    },
    {
        id: "LY 650LRF",
        name: "Longot LY 650LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?auto=format&fit=crop&q=80&w=800",
        price: "Rp 45.000.000",
        description: "Scope thermal varian tertinggi seri LY dengan lensa 50mm untuk jangkauan ekstrem.",
        specs: ["Lensa: 50mm", "Resolusi: 640x512", "NETD: ≤35mk", "Identifikasi: 2500m", "Fitur: PIP, WiFi, Video"],
        marketing: {
            taglines: ["Puncak Performa Seri LY.", "Deteksi Dan Identifikasi Jarak Jauh.", "Ketajaman Citra Tanpa Batas."],
            prompts: generatePrompts("Longot LY 650LRF", "Thermal Scope", "Puncak Performa Seri LY.", "Rp 45.000.000"),
            captions: ["Kuasai medan dengan LY 650LRF. Jangkauan identifikasi hingga 2.5km! #LongotOptics #UltimateThermal"]
        }
    },
    {
        id: "TR 650LRF",
        name: "Sytong TR 650LRF",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1595111162444-14987ba6284f?auto=format&fit=crop&q=80&w=800",
        price: "Rp 75.000.000",
        description: "Perangkat thermal profesional dengan resolusi layar super tinggi 2560x2560.",
        specs: ["Lensa: 50mm", "Resolusi: 640x512", "Display: 2560x2560", "NETD: ≤20mk", "Fitur: LRF, Auto Ballistic"],
        marketing: {
            taglines: ["Layar Thermal Terjernih Di Dunia.", "Visual Tanpa Piksel Terlihat.", "Akurasi Tanpa Kompromi."],
            prompts: generatePrompts("Sytong TR 650LRF", "Professional Thermal", "Layar Thermal Terjernih Di Dunia.", "Rp 75.000.000"),
            captions: ["Layar 2560x2560! Kamu belum pernah melihat thermal seperti ini sebelumnya. TR 650LRF adalah jawaranya. #SytongTR #UltraHDThermal"]
        }
    },
    {
        id: "RS 75R",
        name: "Sytong RS 75R",
        category: "Thermal Scope",
        image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
        price: "Rp 110.000.000",
        description: "Puncak teknologi thermal dengan sensor resolusi 1280x1024 yang luar biasa.",
        specs: ["Lensa: 75mm", "Resolusi: 1280x1024", "NETD: ≤25mk", "Deteksi: 3600 Yards", "Core: iRay Micro II"],
        marketing: {
            taglines: ["Rajanya Teknologi Thermal.", "Deteksi 3600 Yard Tanpa Cela.", "Resolusi 1280px Yang Menakjubkan."],
            prompts: generatePrompts("Sytong RS 75R", "Extreme Thermal", "Rajanya Teknologi Thermal.", "Rp 110.000.000"),
            captions: ["Rasakan resolusi 1280x1024. Ini bukan sekadar scope, ini adalah mata masa depan. #RS75R #LuxuryTactical"]
        }
    },
    {
        id: "R3",
        name: "Longot R3",
        category: "Thermal Monocular",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800",
        price: "Rp 35.000.000",
        description: "Monocular thermal compact dengan rating IP67 untuk ketahanan cuaca ekstrem.",
        specs: ["Lensa: 25mm", "Resolusi: 384x288", "NETD: ≤40mk", "Identifikasi: 1000m", "Rating: IP67 Waterproof"],
        marketing: {
            taglines: ["Tahan Cuaca, Tahan Medan.", "Compact Dan Tangguh.", "Spotting Di Mana Saja."],
            prompts: generatePrompts("Longot R3", "Rugged Monocular", "Tahan Cuaca, Tahan Medan.", "Rp 35.000.000"),
            captions: ["Hujan badai bukan halangan dengan Longot R3. Rating IP67 siap temani petualanganmu! #RuggedThermal #Longot"]
        }
    },
    {
        id: "ROVER R1+",
        name: "Longot ROVER R1+",
        category: "Thermal Monocular",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800",
        price: "Rp 12.500.000",
        description: "Monocular thermal spotter portabel untuk pemula dan profesional.",
        specs: ["Desain: Handheld Spotter", "Tipe: Budget Friendly", "Koneksi: WiFi Support", "Baterai: Tahan Lama", "Desain: Ergonomis"],
        marketing: {
            taglines: ["Temukan Target Dengan Cepat.", "Thermal Spotter Ringan Dan Murah.", "Mata Malam Portabel Anda."],
            prompts: generatePrompts("Longot ROVER R1+", "Thermal Spotter", "Temukan Target Dengan Cepat.", "Rp 12.500.000"),
            captions: ["Spotter murah tapi gak murahan. ROVER R1+ bantu kamu temuin target dalam hitungan detik! #ThermalSpotting #BudgetGear"]
        }
    }
];

export const PRODUCTS = INITIAL_PRODUCTS;
