
import React from 'react';

interface ImageLightboxProps {
  url: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-all">
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>
      
      <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4">
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 md:-right-12 text-white/50 hover:text-white transition p-2"
        >
          <i className="fa-solid fa-xmark text-3xl"></i>
        </button>

        <img 
          src={url} 
          className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg animate-in zoom-in duration-300" 
          alt="Full Size View" 
        />
        
        <div className="flex gap-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-tactical-accent text-tactical-900 px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-emerald-400 transition flex items-center gap-2"
          >
            <i className="fa-solid fa-up-right-from-square"></i> Open Original Image
          </a>
          <button 
            onClick={onClose}
            className="bg-white/10 text-white px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-white/20 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
