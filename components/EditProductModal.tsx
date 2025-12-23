
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

  const handleSpecChange = (index: number, value: string) => {
    const updated = [...formData.specs];
    updated[index] = value;
    setFormData(prev => ({ ...prev, specs: updated }));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-[#252830] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#333640] shadow-2xl custom-scroll">
        <div className="sticky top-0 bg-[#252830] border-b border-[#333640] p-6 flex justify-between items-center z-10">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wider flex items-center gap-3">
            <i className="fa-solid fa-pen-to-square text-[#f97316]"></i>
            Edit Product Content
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Product Name</label>
              <input 
                value={formData.name} 
                onChange={e => handleChange('name', e.target.value)}
                className="w-full bg-[#1a1c23] border border-[#333640] rounded p-3 text-white focus:border-[#f97316] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Price Label</label>
              <input 
                value={formData.price} 
                onChange={e => handleChange('price', e.target.value)}
                className="w-full bg-[#1a1c23] border border-[#333640] rounded p-3 text-white focus:border-[#f97316] outline-none"
              />
            </div>
          </div>

          {/* Specs */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Technical Specifications</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {formData.specs.map((spec, i) => (
                <input 
                  key={i}
                  value={spec} 
                  onChange={e => handleSpecChange(i, e.target.value)}
                  className="w-full bg-[#1a1c23] border border-[#333640] rounded p-2 text-sm text-gray-300 focus:border-[#f97316] outline-none"
                />
              ))}
            </div>
          </div>

          {/* Marketing Content */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Taglines</label>
              {formData.marketing.taglines.map((item, i) => (
                <textarea 
                  key={i}
                  value={item} 
                  onChange={e => handleMarketingChange('taglines', i, e.target.value)}
                  className="w-full bg-[#1a1c23] border border-[#333640] rounded p-3 text-sm text-gray-300 mb-2 h-20 focus:border-[#f97316] outline-none"
                />
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-3">AI Prompts (Professional Photography Style)</label>
              {formData.marketing.prompts.map((item, i) => (
                <textarea 
                  key={i}
                  value={item} 
                  onChange={e => handleMarketingChange('prompts', i, e.target.value)}
                  className="w-full bg-[#1a1c23] border border-[#333640] rounded p-3 text-xs font-mono text-[#f97316]/80 mb-2 h-24 focus:border-[#f97316] outline-none"
                />
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-3">Social Media Captions</label>
              {formData.marketing.captions.map((item, i) => (
                <textarea 
                  key={i}
                  value={item} 
                  onChange={e => handleMarketingChange('captions', i, e.target.value)}
                  className="w-full bg-[#1a1c23] border border-[#333640] rounded p-3 text-sm text-gray-300 mb-2 h-32 focus:border-[#f97316] outline-none"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-[#252830] border-t border-[#333640] p-6 flex justify-end gap-4 z-10">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded font-bold uppercase text-xs text-gray-400 hover:text-white transition"
          >
            Discard
          </button>
          <button 
            onClick={() => onSave(formData)}
            className="px-8 py-2 rounded bg-[#f97316] text-black font-bold uppercase text-xs hover:bg-[#ea580c] transition shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
