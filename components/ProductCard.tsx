
import React, { useState } from 'react';
import { Product, TabType } from '../types';
import { GoogleGenAI } from "@google/genai";

interface ProductCardProps {
  product: Product;
  onCopy: (text: string) => void;
  isAdmin: boolean;
  onEdit: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCopy, isAdmin, onEdit }) => {
  const [activeTab, setActiveTab] = useState<TabType>('taglines');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    const element = e.currentTarget as HTMLElement;
    element.classList.add('border-green-500', 'bg-gray-800');
    onCopy(text);
    setTimeout(() => {
      element.classList.remove('border-green-500', 'bg-gray-800');
    }, 500);
  };

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: product.marketing.prompts[0],
            },
          ],
        },
      });
      
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert("Gagal membuat gambar AI. Pastikan API Key valid.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <article className="bg-[#252830] rounded-xl overflow-hidden border border-[#333640] shadow-xl flex flex-col md:flex-row h-full md:h-auto group hover:border-[#f97316]/50 transition duration-300 relative">
      {/* Admin Action */}
      {isAdmin && (
        <button 
          onClick={() => onEdit(product)}
          className="absolute top-3 right-3 z-30 bg-black/60 hover:bg-[#f97316] text-white w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all scale-0 group-hover:scale-100"
          title="Edit Product Content"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      )}

      {/* Left: Image & Specs */}
      <div className="md:w-5/12 bg-black relative flex flex-col">
        <div className="relative h-56 md:h-full group overflow-hidden bg-[#1a1c23]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute top-0 left-0 bg-[#f97316] text-[#1a1c23] text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-md z-10">
            {product.category}
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-gray-400 text-[10px] px-2 py-0.5 rounded font-mono border border-gray-700">
            ID: {product.id}
          </div>
        </div>
        <div className="p-4 bg-[#1a1c23] border-t border-[#333640] flex-1">
          <h3 className="text-xl font-display font-bold text-white mb-1 leading-tight uppercase tracking-wide">
            {product.name}
          </h3>
          <p className="text-[#f97316] font-bold mb-3 text-sm">{product.price}</p>
          <div className="space-y-1">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Technical Specs:</p>
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                <i className="fa-solid fa-square-check text-[#f97316] mt-0.5 text-[10px]"></i>
                <span className="line-clamp-1">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Marketing Tools */}
      <div className="md:w-7/12 p-4 flex flex-col bg-[#252830]">
        <div className="mb-2 h-full flex flex-col">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-[#333640] pb-2 mb-3 flex items-center justify-between">
            <span>
              <i className="fa-solid fa-layer-group text-[#f97316] mr-2"></i>Marketing Tools
            </span>
            <span className="text-[10px] text-gray-600">Click to Copy</span>
          </h4>

          {/* TABS NAVIGATION */}
          <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
            {(['taglines', 'prompts', 'captions', 'poster'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border transition ${
                  activeTab === tab
                    ? 'bg-[#333640] text-gray-200 border-[#333640]'
                    : 'bg-[#1a1c23] text-gray-500 border-transparent hover:text-gray-300'
                }`}
              >
                {tab === 'taglines' ? 'Taglines' : tab === 'prompts' ? 'AI Prompts' : tab === 'captions' ? 'Captions' : 'Poster Preview'}
              </button>
            ))}
          </div>

          {/* TAB CONTENTS */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scroll">
            {activeTab === 'taglines' && (
              <div className="space-y-2">
                {product.marketing.taglines.map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1c23] p-3 rounded border border-[#333640] hover:border-green-500 hover:bg-gray-800 transition group cursor-pointer relative"
                    onClick={(e) => handleCopy(e, text)}
                  >
                    <p className="text-sm text-gray-300 pr-6 font-medium">"{text}"</p>
                    <i className="fa-regular fa-copy absolute top-3 right-3 text-gray-600 group-hover:text-green-500 text-xs"></i>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'prompts' && (
              <div className="space-y-2">
                {product.marketing.prompts.map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1c23] p-3 rounded border border-[#333640] hover:border-green-500 hover:bg-gray-800 transition group cursor-pointer relative"
                    onClick={(e) => handleCopy(e, text)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-purple-900/50 text-purple-300 px-1.5 rounded border border-purple-800 uppercase tracking-tighter">
                        PRO POSTER STYLE
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono pr-6 leading-relaxed italic line-clamp-4">{text}</p>
                    <i className="fa-regular fa-copy absolute top-3 right-3 text-gray-600 group-hover:text-green-500 text-xs"></i>
                  </div>
                ))}
                <button 
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="w-full mt-4 py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-black font-bold uppercase text-xs rounded shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
                >
                  {isGenerating ? (
                    <><i className="fa-solid fa-spinner fa-spin"></i> Generating Image...</>
                  ) : (
                    <><i className="fa-solid fa-wand-sparkles"></i> Generate AI Poster Content</>
                  )}
                </button>
              </div>
            )}

            {activeTab === 'captions' && (
              <div className="space-y-2">
                {product.marketing.captions.map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#1a1c23] p-3 rounded border border-[#333640] hover:border-green-500 hover:bg-gray-800 transition group cursor-pointer relative"
                    onClick={(e) => handleCopy(e, text)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-blue-900/50 text-blue-200 px-1.5 rounded border border-blue-800 uppercase tracking-tighter">
                        SOCMED POST
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 whitespace-pre-line pr-6 leading-relaxed">
                      {text}
                    </p>
                    <i className="fa-regular fa-copy absolute top-3 right-3 text-gray-600 group-hover:text-green-500 text-xs"></i>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'poster' && (
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] bg-[#0a0b0e] border border-gray-800 shadow-2xl overflow-hidden flex flex-col p-4 poster-container">
                  {/* Logo Top Left */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                     <i className="fa-solid fa-crosshairs text-[#f97316] text-sm"></i>
                     <span className="text-[10px] font-bold text-white tracking-widest uppercase">SYTONG</span>
                  </div>

                  {/* Type Text Top Center */}
                  <div className="mt-4 text-center">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em]">{product.category}</span>
                  </div>

                  {/* Product Image Center */}
                  <div className="flex-1 flex items-center justify-center my-4">
                    {generatedImageUrl ? (
                       <img src={generatedImageUrl} className="w-full h-full object-contain" alt="AI Generated" />
                    ) : (
                       <img src={product.image} className="w-full h-48 object-contain opacity-70 filter brightness-110 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]" alt="Preview" />
                    )}
                  </div>

                  {/* Tagline Below Product */}
                  <div className="text-center mb-6">
                    <h5 className="text-sm font-display font-bold text-white uppercase tracking-wider leading-tight px-4">
                      {product.marketing.taglines[0]}
                    </h5>
                  </div>

                  {/* Custom Text / Price Bottom */}
                  <div className="mt-auto pt-2 border-t border-gray-800 text-center">
                    <p className="text-[#f97316] font-bold text-sm tracking-widest uppercase">
                      {product.price}
                    </p>
                  </div>
                  
                  {/* Overlay for aesthetic */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest font-bold">Preview Template Layout</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
