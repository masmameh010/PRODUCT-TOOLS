
import React, { useState, useRef } from 'react';
import { Product, TabType } from '../types';
import { ImageLightbox } from './ImageLightbox';

interface ProductCardProps {
  product: Product;
  onCopy: (text: string) => void;
  isAdmin: boolean;
  onEdit: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCopy, isAdmin, onEdit }) => {
  const [activeTab, setActiveTab] = useState<TabType>('taglines');
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    const element = e.currentTarget as HTMLElement;
    element.classList.add('border-emerald-500', 'bg-slate-800');
    onCopy(text);
    setTimeout(() => {
      element.classList.remove('border-emerald-500', 'bg-slate-800');
    }, 500);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
      setScrollIndex(index);
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <article className="bg-tactical-800 rounded-2xl overflow-hidden border border-tactical-700 shadow-2xl flex flex-col lg:flex-row h-full lg:min-h-[500px] group hover:border-tactical-accent/40 transition-all duration-500 relative">
      {isAdmin && (
        <button 
          onClick={() => onEdit(product)}
          className="absolute top-4 right-4 z-40 bg-tactical-accent text-tactical-900 w-12 h-12 rounded-full flex items-center justify-center border border-white/20 transition-all scale-100 lg:scale-0 lg:group-hover:scale-100 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          title="Edit Data Produk"
        >
          <i className="fa-solid fa-pen-to-square text-lg"></i>
        </button>
      )}

      {/* LEFT PANEL: MEDIA & SPECS */}
      <div className="lg:w-[450px] xl:w-[500px] flex-shrink-0 bg-slate-950 relative flex flex-col border-r border-white/5">
        <div className="relative h-72 lg:h-[400px] overflow-hidden group/gallery">
          
          {/* Main Scroller */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing"
          >
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                className="min-w-full h-full snap-center flex items-center justify-center p-4"
              >
                <img
                  src={img}
                  alt={`${product.name} ${idx}`}
                  className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
                />
              </div>
            ))}
          </div>

          {/* Navigation Overlay */}
          {product.images.length > 1 && (
            <>
              <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 lg:group-hover/gallery:opacity-100 transition-all hover:bg-tactical-accent hover:text-black z-20">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 lg:group-hover/gallery:opacity-100 transition-all hover:bg-tactical-accent hover:text-black z-20">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {product.images.map((_, idx) => (
              <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${scrollIndex === idx ? 'w-8 bg-tactical-accent' : 'w-2 bg-white/10'}`}></div>
            ))}
          </div>

          {/* Labels - PRICE NOW A CTA TEXT */}
          <div className="absolute top-6 left-6 z-10">
            <a 
              href={product.shopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tactical-gold text-white px-5 py-2 rounded-lg font-bold shadow-2xl text-xs tracking-wider uppercase border border-white/10 flex items-center gap-2 hover:bg-amber-600 transition-colors group/price"
            >
              <i className="fa-solid fa-cart-shopping text-[10px] group-hover/price:animate-bounce"></i>
              DAPATKAN DI SINI
            </a>
          </div>
        </div>

        {/* Specs Overlay */}
        <div className="p-8 bg-gradient-to-t from-slate-900 to-slate-950 flex-1 border-t border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-1">
                {product.name}
              </h3>
              <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.3em]">
                {product.brand} • {product.category}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-2 mb-6">
            {product.specs.slice(0, 5).map((spec, i) => (
              <div key={i} className="flex items-center gap-3 text-[11px] text-gray-400 border-b border-white/5 pb-2 last:border-0">
                <i className="fa-solid fa-check text-tactical-accent text-[9px]"></i>
                <span className="line-clamp-1">{spec}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed italic line-clamp-3 whitespace-pre-line border-l border-tactical-accent/30 pl-4">
             {product.description}
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: MARKETING CONTENT */}
      <div className="flex-1 p-8 flex flex-col bg-tactical-800">
        <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-tactical-accent/10 flex items-center justify-center border border-tactical-accent/20">
                 <i className="fa-solid fa-rocket text-tactical-accent text-sm"></i>
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">Marketing Hub</h4>
           </div>
           <span className="text-[9px] bg-slate-900 px-3 py-1 rounded text-gray-500 font-mono border border-white/5 uppercase">Unit ID: {product.id}</span>
        </div>

        {/* Tabs Desktop Nav */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          {[
            { id: 'taglines', label: 'Headline', icon: 'fa-heading' },
            { id: 'captions', label: 'Caption', icon: 'fa-align-left' },
            { id: 'gallery', label: 'Assets', icon: 'fa-images' },
            { id: 'poster', label: 'Visual', icon: 'fa-palette' },
            { id: 'prompts', label: 'AI', icon: 'fa-robot' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-shrink-0 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all border flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-tactical-accent text-tactical-900 border-tactical-accent shadow-lg'
                  : 'bg-slate-900/50 text-gray-500 border-white/5 hover:border-white/20 hover:text-gray-300'
              }`}
            >
              <i className={`fa-solid ${tab.icon} text-[10px]`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Viewport */}
        <div className="flex-1 overflow-y-auto pr-3 custom-scroll max-h-[500px]">
          {activeTab === 'taglines' && (
            <div className="space-y-4">
              {product.marketing.taglines.map((text, i) => (
                <div key={i} className="bg-slate-900/40 p-5 rounded-xl border border-white/5 hover:border-tactical-accent/40 hover:bg-slate-900 transition-all group cursor-pointer relative" onClick={(e) => handleCopy(e, text)}>
                  <p className="text-sm text-gray-300 pr-10 font-medium italic leading-relaxed">"{text}"</p>
                  <i className="fa-regular fa-copy absolute top-5 right-5 text-gray-700 group-hover:text-tactical-accent transition-colors"></i>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'captions' && (
            <div className="space-y-5">
              {product.marketing.captions.map((text, i) => (
                <div key={i} className="bg-slate-900/40 p-6 rounded-xl border border-white/5 hover:border-tactical-accent/40 hover:bg-slate-900 transition-all group cursor-pointer relative" onClick={(e) => handleCopy(e, text)}>
                  <p className="text-[13px] text-gray-400 whitespace-pre-line leading-relaxed pr-8">{text}</p>
                  <div className="mt-5 pt-4 border-t border-white/5 flex justify-end">
                     <span className="text-[9px] font-bold text-tactical-accent tracking-[0.2em] uppercase bg-emerald-500/5 px-3 py-1.5 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all">Salin Deskripsi</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group/item bg-slate-950 shadow-lg">
                  <img src={img} className="w-full h-full object-contain p-2" alt={`View ${i}`} />
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 backdrop-blur-sm">
                    <button 
                      onClick={() => setLightboxUrl(img)}
                      className="w-10 h-10 bg-tactical-accent text-black rounded-full flex items-center justify-center hover:scale-110 transition shadow-xl"
                    >
                      <i className="fa-solid fa-expand"></i>
                    </button>
                    <a href={img} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:scale-110 transition border border-white/20">
                      <i className="fa-solid fa-link text-xs"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'prompts' && (
            <div className="bg-slate-900/40 p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 mb-6">
                 <i className="fa-solid fa-wand-magic-sparkles text-tactical-accent"></i>
                 <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">AI Visual Prompt</span>
              </div>
              <div className="space-y-4">
                {product.marketing.prompts.map((text, i) => (
                  <div key={i} className="bg-black/40 p-5 rounded-lg border border-white/5 hover:border-tactical-accent transition group cursor-pointer relative" onClick={(e) => handleCopy(e, text)}>
                    <p className="text-[11px] text-emerald-600 font-mono italic pr-10 leading-relaxed">{text}</p>
                    <i className="fa-regular fa-copy absolute top-5 right-5 text-gray-700 group-hover:text-tactical-accent"></i>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'poster' && (
            <div className="flex flex-col items-center py-6">
              <div className="relative w-full max-w-[300px] aspect-[3/4] bg-slate-950 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-8 rounded-sm">
                <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
                   <div className="w-1 h-4 bg-tactical-accent"></div>
                   <span className="text-[14px] font-bold text-white tracking-[0.2em] uppercase font-display">{product.brand}</span>
                </div>
                <div className="mt-12 text-center z-10">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] opacity-50">{product.category}</span>
                </div>
                <div className="flex-1 flex items-center justify-center my-8">
                  <img 
                    src={product.image} 
                    className="w-full h-56 object-contain filter brightness-110 drop-shadow-[0_0_30px_rgba(16,185,129,0.15)]" 
                    alt="Poster Preview" 
                  />
                </div>
                <div className="z-10 px-2 mb-12">
                  <h5 className="text-[14px] font-display font-bold text-white uppercase tracking-wider leading-tight border-l-2 border-tactical-accent pl-4">
                    {product.marketing.taglines[0]}
                  </h5>
                </div>
                <a 
                  href={product.shopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/5 text-center bg-black/80 backdrop-blur-md hover:bg-tactical-gold/20 transition-all block"
                >
                  <p className="text-tactical-gold font-bold text-xl tracking-[0.1em] font-display uppercase">
                    DAPATKAN DI SINI
                  </p>
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest block mt-1">Klik Untuk Beli</span>
                </a>
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-tactical-accent/10 rounded-full blur-[80px]"></div>
              </div>
              <p className="text-[9px] text-gray-600 mt-8 uppercase tracking-[0.5em] font-bold">Standard Distribution Format</p>
            </div>
          )}
        </div>
      </div>

      {lightboxUrl && (
        <ImageLightbox url={lightboxUrl} onClose={() => setLightboxUrl(null)} />
      )}
    </article>
  );
};
