
import React, { useState } from 'react';
import { Product } from '../types';

interface EditProductModalProps {
  product: Product;
  onSave: (updatedProduct: Product) => void;
  onClose: () => void;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState<Product>({ ...product });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMarketingChange = (field: 'taglines' | 'prompts' | 'captions', index: number, value: string) => {
    const updated = [...formData.marketing[field]];
    updated[index] = value;
    setFormData(prev => ({
      ...prev,
      marketing: { ...prev.marketing, [field]: updated }
    }));
  };

  const addMarketingField = (field: 'taglines' | 'prompts' | 'captions') => {
    setFormData(prev => ({
      ...prev,
      marketing: { 
        ...prev.marketing, 
        [field]: [...prev.marketing[field], ""] 
      }
    }));
  };

  const removeMarketingField = (field: 'taglines' | 'prompts' | 'captions', index: number) => {
    const updated = [...formData.marketing[field]];
    updated.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      marketing: { ...prev.marketing, [field]: updated }
    }));
  };

  const handleSpecChange = (index: number, value: string) => {
    const updated = [...formData.specs];
    updated[index] = value;
    setFormData(prev => ({ ...prev, specs: updated }));
  };

  const handleGalleryChange = (index: number, value: string) => {
    const updated = [...formData.images];
    updated[index] = value;
    setFormData(prev => ({ ...prev, images: updated }));
  };

  const addGalleryField = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ""]
    }));
  };

  const removeGalleryField = (index: number) => {
    const updated = [...formData.images];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, images: updated }));
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
      <div className="bg-[#0f172a] w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl border border-tactical-accent/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] custom-scroll">
        <div className="sticky top-0 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-display font-bold uppercase tracking-wider flex items-center gap-3 text-white">
              <i className="fa-solid fa-screwdriver-wrench text-tactical-accent"></i>
              Data Management
            </h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Editing: {product.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onSave(formData)}
              className="px-6 py-2 rounded bg-tactical-accent text-tactical-900 font-bold uppercase text-[10px] hover:bg-emerald-400 transition"
            >
              Simpan Perubahan
            </button>
            <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
        </div>

        <div className="p-8 space-y-10">
          {/* IDENTITAS UTAMA */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-tactical-accent pl-3">Informasi Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Nama Produk</label>
                <input value={formData.name} onChange={e => handleChange('name', e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded p-3 text-white outline-none focus:border-tactical-accent" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Brand</label>
                <input value={formData.brand} onChange={e => handleChange('brand', e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded p-3 text-white outline-none focus:border-tactical-accent" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">Link Toko (Shopee/Lainnya)</label>
              <input value={formData.shopLink} onChange={e => handleChange('shopLink', e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded p-3 text-blue-400 text-xs font-mono outline-none focus:border-tactical-accent" />
            </div>
          </section>

          {/* MEDIA */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-tactical-accent pl-3">Media & Galeri</h3>
              <button onClick={addGalleryField} className="text-[9px] bg-white/5 px-3 py-1 rounded text-gray-400 hover:text-white uppercase font-bold">+ Tambah Galeri</button>
            </div>
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg space-y-4">
               <div>
                <label className="block text-[10px] font-bold text-emerald-500 uppercase mb-2 tracking-widest">Gambar Utama (Featured)</label>
                <input value={formData.image} onChange={e => handleChange('image', e.target.value)} className="w-full bg-slate-900 border border-emerald-500/20 rounded p-3 text-xs text-blue-300 font-mono" />
               </div>
               <div className="grid grid-cols-1 gap-2">
                 <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">Foto Tambahan (Slide)</label>
                 {formData.images.map((img, i) => (
                   <div key={i} className="flex gap-2">
                     <input value={img} onChange={e => handleGalleryChange(i, e.target.value)} className="flex-1 bg-slate-900 border border-white/5 rounded p-2 text-[10px] font-mono" placeholder="URL Gambar..." />
                     <button onClick={() => removeGalleryField(i)} className="px-3 bg-red-500/10 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all"><i className="fa-solid fa-trash text-xs"></i></button>
                   </div>
                 ))}
               </div>
            </div>
          </section>

          {/* MARKETING HUB */}
          <section className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-tactical-accent pl-3">Marketing Hub Content</h3>
            
            {/* Taglines */}
            <div className="space-y-3">
              <div className="flex justify-between items-center"><label className="text-[10px] font-bold text-gray-500 uppercase">Headlines / Taglines</label><button onClick={() => addMarketingField('taglines')} className="text-[9px] text-tactical-accent">+ Add</button></div>
              {formData.marketing.taglines.map((text, i) => (
                <div key={i} className="flex gap-2">
                  <input value={text} onChange={e => handleMarketingChange('taglines', i, e.target.value)} className="flex-1 bg-slate-900 border border-white/5 rounded p-3 text-sm italic" />
                  <button onClick={() => removeMarketingField('taglines', i)} className="text-gray-600 hover:text-red-500"><i className="fa-solid fa-times"></i></button>
                </div>
              ))}
            </div>

            {/* Captions */}
            <div className="space-y-3">
              <div className="flex justify-between items-center"><label className="text-[10px] font-bold text-gray-500 uppercase">Captions / Copywriting</label><button onClick={() => addMarketingField('captions')} className="text-[9px] text-tactical-accent">+ Add</button></div>
              {formData.marketing.captions.map((text, i) => (
                <div key={i} className="flex gap-2">
                  <textarea value={text} onChange={e => handleMarketingChange('captions', i, e.target.value)} className="flex-1 bg-slate-900 border border-white/5 rounded p-3 text-xs h-24 resize-none" />
                  <button onClick={() => removeMarketingField('captions', i)} className="text-gray-600 hover:text-red-500 self-start mt-2"><i className="fa-solid fa-times"></i></button>
                </div>
              ))}
            </div>

            {/* Prompts */}
            <div className="space-y-3">
              <div className="flex justify-between items-center"><label className="text-[10px] font-bold text-gray-500 uppercase">AI Image Prompts</label><button onClick={() => addMarketingField('prompts')} className="text-[9px] text-tactical-accent">+ Add</button></div>
              {formData.marketing.prompts.map((text, i) => (
                <div key={i} className="flex gap-2">
                  <textarea value={text} onChange={e => handleMarketingChange('prompts', i, e.target.value)} className="flex-1 bg-slate-900 border border-white/5 rounded p-3 text-[10px] font-mono h-20 text-emerald-600" />
                  <button onClick={() => removeMarketingField('prompts', i)} className="text-gray-600 hover:text-red-500 self-start mt-2"><i className="fa-solid fa-times"></i></button>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-6 border-t border-white/5 flex justify-end gap-4">
             <button onClick={onClose} className="px-6 py-3 rounded bg-white/5 text-gray-400 font-bold uppercase text-[10px] hover:bg-white/10 transition">Batal</button>
             <button onClick={() => onSave(formData)} className="px-10 py-3 rounded bg-tactical-accent text-tactical-900 font-bold uppercase text-[10px] hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.3)]">Simpan & Terapkan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
