
import React, { useState, useMemo, useEffect } from 'react';
import { INITIAL_PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { Toast } from './components/Toast';
import { EditProductModal } from './components/EditProductModal';
import { Product } from './types';

const STORAGE_KEY = 'SYTONG_MARKETING_PRODUCTS_V2';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Check for hidden admin route via hash
  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminMode(window.location.hash === '#/admin-helper');
    };
    
    // Initial check
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize data
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure we don't accidentally save an empty list
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProducts(parsed);
        } else {
          setProducts(INITIAL_PRODUCTS);
        }
      } catch (e) {
        setProducts(INITIAL_PRODUCTS);
      }
    } else {
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  // Save data whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('Teks berhasil disalin!');
      setIsToastVisible(true);
    });
  };

  const handleSaveProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
    setEditingProduct(null);
    setToastMessage('Perubahan berhasil disimpan!');
    setIsToastVisible(true);
  };

  const resetToDefault = () => {
    if (confirm('Reset semua data ke pengaturan awal?')) {
      setProducts(INITIAL_PRODUCTS);
      setToastMessage('Data telah di-reset!');
      setIsToastVisible(true);
    }
  };

  return (
    <div className="bg-[#1a1c23] text-[#e2e8f0] font-sans min-h-screen">
      {/* Header */}
      <header className="bg-[#252830] border-b border-[#333640] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-crosshairs text-[#f97316] text-3xl"></i>
            <div>
              <h1 className="text-3xl font-display font-bold text-white tracking-wide leading-none uppercase">
                SYTONG <span className="text-[#f97316]">INDONESIA</span>
              </h1>
              <p className="text-xs text-gray-400 tracking-widest uppercase">
                Internal Marketing Kit
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {isAdminMode && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f97316]/20 border border-[#f97316]/50 rounded text-[10px] font-bold text-[#f97316] uppercase tracking-widest">
                <i className="fa-solid fa-shield-halved"></i>
                Admin Mode Active
              </div>
            )}
            
            {/* Search */}
            <div className="hidden md:block relative w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Model (mis: HT-60)..."
                className="w-full pl-10 pr-4 py-2 bg-[#1a1c23] border border-[#333640] rounded text-sm focus:outline-none focus:border-[#f97316] text-white placeholder-gray-600 transition"
              />
              <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-600"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Intro */}
        <div className="mb-10 text-center">
          <div className="inline-block bg-[#f97316]/10 text-[#f97316] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-[#f97316]/20">
            Professional Sales & Marketing Resource
          </div>
          <h2 className="text-5xl font-display font-bold text-white mb-2 uppercase tracking-wider">
            Product Database Kit
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Pusat data konten visual dan copywriting premium untuk Sytong Indonesia. Gunakan prompt AI profesional untuk hasil foto produk kelas dunia.
          </p>
          
          {isAdminMode && (
            <div className="mt-8 p-4 bg-[#252830] border border-[#f97316]/30 rounded-xl max-w-lg mx-auto">
              <h3 className="text-xs font-bold text-[#f97316] uppercase mb-3 tracking-widest">Admin Helper Controls</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={resetToDefault}
                  className="text-[10px] font-bold text-red-500 hover:bg-red-500 hover:text-white transition uppercase tracking-widest border border-red-900/30 px-4 py-2 rounded"
                >
                  Reset All Data
                </button>
                <a 
                  href="#"
                  className="text-[10px] font-bold text-gray-400 hover:text-white transition uppercase tracking-widest border border-gray-700 px-4 py-2 rounded"
                >
                  Exit Admin Mode
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Search */}
        <div className="md:hidden flex flex-col gap-3 mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Model..."
              className="w-full pl-10 pr-4 py-3 bg-[#252830] border border-[#333640] rounded-xl text-sm focus:outline-none focus:border-[#f97316] text-white placeholder-gray-600 transition"
            />
            <i className="fa-solid fa-search absolute left-3 top-3.5 text-gray-600"></i>
          </div>
        </div>

        {/* Product Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCopy={handleCopy}
              isAdmin={isAdminMode}
              onEdit={setEditingProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-[#252830]/50 rounded-2xl border border-dashed border-[#333640]">
            <i className="fa-solid fa-ghost text-4xl text-gray-700 mb-4 block"></i>
            <p className="text-gray-500 font-display text-2xl uppercase">Tidak ada produk ditemukan</p>
          </div>
        )}
      </main>

      {/* Admin Edit Modal */}
      {editingProduct && (
        <EditProductModal 
          product={editingProduct} 
          onSave={handleSaveProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onHide={() => setIsToastVisible(false)}
      />

      <footer className="mt-20 py-10 border-t border-[#333640] text-center bg-[#1a1c23]">
        <div className="flex justify-center gap-6 mb-4">
          <i className="fa-brands fa-instagram text-gray-600 hover:text-[#f97316] cursor-pointer transition"></i>
          <i className="fa-brands fa-facebook text-gray-600 hover:text-[#f97316] cursor-pointer transition"></i>
          <i className="fa-brands fa-youtube text-gray-600 hover:text-[#f97316] cursor-pointer transition"></i>
        </div>
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
          Sytong Indonesia Tactical Division | &copy; 2024
        </p>
      </footer>
    </div>
  );
}
