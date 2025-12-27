
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
    <article className="bg-tactical-800 rounded-xl overflow-hidden border border-tactical-700 shadow-xl flex flex-col lg:flex-row h-full lg:h-auto group hover:border-tactical-accent/40 transition duration-300 relative">
      {isAdmin && (
        <button 
          onClick={() => onEdit(product)}
          className="absolute top-3 right-3 z-40 bg-black/60 hover:bg-tactical-accent text-white w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all scale-0 group-hover:scale-100 shadow-lg"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      )}

      {/* MEDIA PREVIEW (SISI KIRI) */}
      <div className="lg:w-5/12 bg-black relative flex flex-col border-r border-tactical-700">
        <div className="relative h-64 lg:h-[400px] bg-slate-950 group/gallery overflow-hidden">
          
          {/* Scroller Utama */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing"
          >
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                className="min-w-full h-full snap-center flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`${product.name} ${idx}`}
                  className="w-full h-full object-contain pointer-events-none" 
                />
              </div>
            ))}
          </div>

          {/* Navigasi Manual */}
          {product.images.length > 1 && (
            <>
              <button 
                onClick={scrollPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20 hover:bg-tactical-accent"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button 
                onClick={scrollNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20 hover:bg-tactical-accent"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </>
          )}

          {/* Indicators Dot */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
            {product.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${scrollIndex === idx ? 'w-6 bg-tactical-accent' : 'w-1.5 bg-white/20'}`}
              ></div>
            ))}
          </div>

          {/* Labels Overlay */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="bg-tactical-gold text-white px-3 py-1 rounded-md font-bold shadow-lg text-[11px] tracking-wider uppercase border border-white/10">
              {product.price}
            </span>
          </div>
          
          <div className="absolute top-4 right-4 bg-tactical-accent/90 backdrop-blur text-tactical-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md z-10 border border-white/20">
            {product.brand}
          </div>
        </div>

        {/* Informasi Produk */}
        <div className="p-6 bg-slate-900 flex-1 border-t border-tactical-700/50">
          <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-1">
            {product.name}
          </h3>
          <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-4">
            {product.category}
          </p>
          
          <div className="space-y-2 mb-4">
            {product.specs.slice(0, 5).map((spec, i) => (
              <div key={i} className="flex items-center gap-3 text-[11px] text-gray-400 border-b border-white/5 pb-1.5 last:border-0">
                <i className="fa-solid fa-crosshairs text-tactical-accent text-[9px]"></i>
                <span className="line-clamp-1">{spec}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed italic line-clamp-4 whitespace-pre-line">
             {product.description}
          </p>
        </div>
      </div>

      {/* MARKETING PANEL (SISI KANAN) */}
      <div className="lg:w-7/12 p-6 flex flex-col bg-tactical-800">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-tactical-700 pb-4 mb-6 flex items-center justify-between">
          <span><i className="fa-solid fa-bolt text-tactical-accent mr-2"></i>Marketing Suite</span>
          <span className="text-[9px] bg-slate-900 px-2 py-0.5 rounded text-gray-500 font-mono">ID: {product.id}</span>
        </h4>

        {/* Tabs Menu */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
          {[
            { id: 'taglines', label: 'Headline' },
            { id: 'captions', label: 'Caption' },
            { id: 'gallery', label: 'Galeri Media' },
            { id: 'poster', label: 'Poster Visual' },
            { id: 'prompts', label: 'AI Prompt' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-shrink-0 px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded transition-all border ${
                activeTab === tab.id
                  ? 'bg-tactical-accent text-tactical-900 border-tactical-accent shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900 text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Konten Tabs */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scroll max-h-[480px]">
          {activeTab === 'taglines' && (
            <div className="space-y-3">
              {product.marketing.taglines.map((text, i) => (
                <div key={i} className="bg-slate-900/50 p-4 rounded-lg border border-tactical-700 hover:border-tactical-accent/50 hover:bg-slate-900 transition group cursor-pointer relative" onClick={(e) => handleCopy(e, text)}>
                  <p className="text-sm text-gray-300 pr-8 font-medium italic leading-relaxed">"{text}"</p>
                  <i className="fa-regular fa-copy absolute top-4 right-4 text-gray-700 group-hover:text-tactical-accent transition-colors"></i>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'captions' && (
            <div className="space-y-4">
              {product.marketing.captions.map((text, i) => (
                <div key={i} className="bg-slate-900/50 p-4 rounded-lg border border-tactical-700 hover:border-tactical-accent/50 hover:bg-slate-900 transition group cursor-pointer relative" onClick={(e) => handleCopy(e, text)}>
                  <p className="text-[12px] text-gray-400 whitespace-pre-line leading-relaxed pr-6">{text}</p>
                  <div className="mt-4 flex justify-end">
                     <span className="text-[9px] font-bold text-tactical-accent tracking-widest uppercase border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/5">Salin Konten</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-tactical-700 group/item bg-slate-950">
                  <img src={img} className="w-full h-full object-contain" alt={`View ${i}`} />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-3 opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setLightboxUrl(img)}
                      className="w-9 h-9 bg-tactical-accent text-tactical-900 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg"
                      title="Perbesar"
                    >
                      <i className="fa-solid fa-expand text-xs"></i>
                    </button>
                    <a 
                      href={img} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg backdrop-blur-md border border-white/20"
                      title="Buka Link"
                    >
                      <i className="fa-solid fa-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'prompts' && (
            <div className="space-y-3">
              <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-bold">Midjourney / DALL-E Prompt:</p>
              {product.marketing.prompts.map((text, i) => (
                <div key={i} className="bg-slate-900/50 p-4 rounded-lg border border-tactical-700 hover:border-tactical-accent transition group cursor-pointer relative" onClick={(e) => handleCopy(e, text)}>
                  <p className="text-[10px] text-gray-500 font-mono italic pr-6 leading-relaxed">{text}</p>
                  <i className="fa-regular fa-copy absolute top-4 right-4 text-gray-700 group-hover:text-tactical-accent"></i>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'poster' && (
            <div className="flex flex-col items-center py-4">
              <div className="relative w-full max-w-[280px] aspect-[3/4] bg-slate-950 border border-tactical-700 shadow-2xl overflow-hidden flex flex-col p-6">
                <div className="absolute top-5 left-5 flex items-center gap-2 z-20">
                   <i className="fa-solid fa-crosshairs text-tactical-accent text-lg"></i>
                   <span className="text-[12px] font-bold text-white tracking-[0.2em] uppercase font-display">{product.brand}</span>
                </div>
                <div className="mt-10 text-center z-10">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">{product.category}</span>
                </div>
                <div className="flex-1 flex items-center justify-center my-6 overflow-hidden">
                  <img 
                    src={product.image} 
                    className="w-full h-48 object-contain filter brightness-110 drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                    alt="Poster Preview" 
                  />
                </div>
                <div className="text-center mb-10 z-10 px-2">
                  <h5 className="text-[13px] font-display font-bold text-white uppercase tracking-wider leading-tight py-2 border-l-3 border-tactical-accent pl-4 text-left">
                    {product.marketing.taglines[0]}
                  </h5>
                </div>
                <div className="mt-auto pt-4 border-t border-white/10 text-center bg-black/60 -mx-6 pb-4">
                  <p className="text-tactical-gold font-bold text-base tracking-widest font-display uppercase">
                    Mulai {product.price}
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
              <p className="text-[10px] text-gray-600 mt-6 uppercase tracking-[0.3em] font-bold">Tactical Poster Layout</p>
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
