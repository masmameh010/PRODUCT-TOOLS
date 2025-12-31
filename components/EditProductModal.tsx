
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

  // --- GALLERY MANAGEMENT ---
  const handleGalleryChange = (index: number, value: string) => {
    const updated = [...formData.images];
    updated[index] = value;
    setFormData(prev => ({ ...prev, images: updated }));
  };

  const addGalleryField = () => {
    if (formData.images.length >= 15) return; // Maksimal 15 gambar
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ""]
    }));
  };

  const removeGalleryField = (index: number) => {
    // Kita biarkan gallery kosong jika user mau, karena Featured Image akan jadi slide 1 tetap.
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
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Editing: {product.name} (ID: {product.id})</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="p-8 space-y-10">
          {/* SECTION 1: IDENTITY */}
          <section className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-tactical-accent"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Informasi Utama</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2 tracking-widest">Nama Produk</label>
                  <input 
                    value={formData.name} 
                    onChange={e => handleChange('name', e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded p-3 text-white focus:border-tactical-accent outline-none transition-colors"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2 tracking-widest">Label Tombol (CTA)</label>
                  <input 
                    value={formData.price} 
                    onChange={e => handleChange('price', e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded p-3 text-tactical-gold font-bold focus:border-tactical-accent outline-none"
                    placeholder="Contoh: DAPATKAN DI SINI"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-[10px] font-bold text-blue-500 uppercase mb-2 tracking-widest">Shop Link (URL)</label>
                  <input 
                    value={formData.shopLink} 
                    onChange={e => handleChange('shopLink', e.target.value)}
                    className="w-full bg-slate-900/50 border border-blue-500/20 rounded p-3 text-blue-400 text-xs focus:border-blue-500 outline-none"
                    placeholder="https://..."
                  />
                </div>
             </div>
             <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2 tracking-widest">Deskripsi (Mendukung Multi-line)</label>
                <textarea 
                  value={formData.description} 
                  onChange={e => handleChange('description', e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded p-3 text-sm text-gray-300 h-32 focus:border-tactical-accent outline-none resize-none"
                />
             </div>
          </section>

          {/* SECTION 2: MEDIA MANAGEMENT */}
          <section className="space-y-4">
             <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-1 bg-tactical-accent"></div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Media & Gambar Galeri</h3>
                </div>
                <button 
                  type="button"
                  onClick={addGalleryField}
                  className="text-[10px] bg-tactical-accent/20 text-tactical-accent px-4 py-2 rounded border border-tactical-accent/40 hover:bg-tactical-accent hover:text-black transition-all font-bold uppercase tracking-widest"
                >
                  <i className="fa-solid fa-plus mr-2"></i> Tambah Link Gambar Galeri
                </button>
             </div>
             <div className="space-y-4 bg-black/20 p-6 rounded-xl border border-white/5">
                <div>
                  <label className="block text-[10px] font-bold text-emerald-500 uppercase mb-2 tracking-widest">URL Utama (Thumbnail & Slide 1)</label>
                  <input 
                    value={formData.image} 
                    onChange={e => handleChange('image', e.target.value)}
                    className="w-full bg-slate-900 border border-emerald-500/30 rounded p-3 text-xs text-blue-400 font-mono outline-none focus:border-emerald-500"
                    placeholder="Masukkan Link URL Gambar Utama disini"
                  />
                  <p className="text-[9px] text-gray-600 mt-1 uppercase italic">*Gambar ini akan menjadi yang pertama kali dilihat user.</p>
                </div>
                <div className="space-y-3 mt-6">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2 tracking-widest">Gambar Tambahan (Galeri Slide)</label>
                  <div className="grid grid-cols-1 gap-3">
                    {formData.images.map((img, i) => (
                      <div key={i} className="flex gap-2 group/field">
                        <span className="bg-slate-800 text-gray-500 w-10 flex items-center justify-center text-[10px] rounded font-bold">{i+1}</span>
                        <input 
                          value={img} 
                          onChange={e => handleGalleryChange(i, e.target.value)}
                          className="flex-1 bg-slate-900 border border-white/10 rounded p-3 text-[11px] text-gray-400 font-mono outline-none focus:border-tactical-accent"
                          placeholder="https://i.imgur.com/..."
                        />
                        <button 
                          type="button"
                          onClick={() => removeGalleryField(i)}
                          className="w-12 bg-red-500/10 text-red-500 border border-red-500/20 rounded hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
                          title="Hapus Gambar Ini"
                        >
                          <i className="fa-solid fa-trash-can text-sm"></i>
                        </button>
                      </div>
                    ))}
                    {formData.images.length === 0 && (
                      <div className="text-center py-4 bg-slate-900/30 border border-dashed border-white/5 rounded">
                        <p className="text-[10px] text-gray-600 uppercase font-bold">Galeri Tambahan Kosong</p>
                      </div>
                    )}
                  </div>
                </div>
             </div>
          </section>

          {/* SECTION 3: SPECS */}
          <section className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-tactical-accent"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Spesifikasi Teknis</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {formData.specs.map((spec, i) => (
                  <input 
                    key={i}
                    value={spec} 
                    onChange={e => handleSpecChange(i, e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded p-3 text-sm text-gray-300 focus:border-tactical-accent outline-none"
                    placeholder={`Spec ${i+1}`}
                  />
                ))}
             </div>
          </section>

          {/* SECTION 4: MARKETING */}
          <section className="space-y-8">
             <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-tactical-accent"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Marketing Suite</h3>
             </div>
             
             <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Headlines / Taglines</label>
                  <button onClick={() => addMarketingField('taglines')} className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500 hover:text-black transition">
                    + Tambah Baris
                  </button>
                </div>
                {formData.marketing.taglines.map((item, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <textarea 
                      value={item} 
                      onChange={e => handleMarketingChange('taglines', i, e.target.value)}
                      className="flex-1 bg-slate-900/50 border border-white/10 rounded p-3 text-sm text-gray-300 h-20 focus:border-tactical-accent outline-none resize-none"
                    />
                    <button onClick={() => removeMarketingField('taglines', i)} className="text-red-500/50 hover:text-red-500 px-2">
                      <i className="fa-solid fa-trash-can text-xs"></i>
                    </button>
                  </div>
                ))}
             </div>

             <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest">AI Visual Prompts</label>
                  <button onClick={() => addMarketingField('prompts')} className="text-[9px] bg-blue-500/10 text-blue-500 px-2 py-1 rounded border border-blue-500/20 hover:bg-blue-500 hover:text-white transition">
                    + Tambah Prompt
                  </button>
                </div>
                {formData.marketing.prompts.map((item, i) => (
                  <div key={i} className="flex gap-2 mb-4">
                    <textarea 
                      value={item} 
                      onChange={e => handleMarketingChange('prompts', i, e.target.value)}
                      className="flex-1 bg-black/40 border border-blue-500/20 rounded p-4 text-[11px] text-blue-400 font-mono h-48 focus:border-blue-500 outline-none resize-none"
                    />
                    <button onClick={() => removeMarketingField('prompts', i)} className="text-red-500/50 hover:text-red-500 px-2">
                      <i className="fa-solid fa-trash-can text-xs"></i>
                    </button>
                  </div>
                ))}
             </div>

             <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Long Captions</label>
                  <button onClick={() => addMarketingField('captions')} className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500 hover:text-black transition">
                    + Tambah Caption
                  </button>
                </div>
                {formData.marketing.captions.map((item, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <textarea 
                      value={item} 
                      onChange={e => handleMarketingChange('captions', i, e.target.value)}
                      className="flex-1 bg-slate-900/50 border border-white/10 rounded p-3 text-sm text-gray-400 h-32 focus:border-tactical-accent outline-none resize-none"
                    />
                    <button onClick={() => removeMarketingField('captions', i)} className="text-red-500/50 hover:text-red-500 px-2">
                      <i className="fa-solid fa-trash-can text-xs"></i>
                    </button>
                  </div>
                ))}
             </div>
          </section>
        </div>

        <div className="sticky bottom-0 bg-[#0f172a] border-t border-white/5 p-6 flex justify-end gap-4 z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
          <button 
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded font-bold uppercase text-[10px] text-gray-500 hover:text-white transition"
          >
            Batalkan
          </button>
          <button 
            type="button"
            onClick={() => onSave(formData)}
            className="px-10 py-2.5 rounded bg-tactical-accent text-tactical-900 font-bold uppercase text-[10px] hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            Update & Simpan Cloud
          </button>
        </div>
      </div>
    </div>
  );
};
