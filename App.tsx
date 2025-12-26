
import React, { useState, useMemo, useEffect } from 'react';
import { INITIAL_PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { Toast } from './components/Toast';
import { EditProductModal } from './components/EditProductModal';
import { Product } from './types';

const STORAGE_KEY = 'ATIRA_MARKETING_KIT_V4';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminMode(window.location.hash === '#/admin-access');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProducts(parsed.length > 0 ? parsed : INITIAL_PRODUCTS);
      } catch (e) {
        setProducts(INITIAL_PRODUCTS);
      }
    } else {
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('Teks berhasil disalin ke clipboard!');
      setIsToastVisible(true);
    });
  };

  const handleSaveProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
    setEditingProduct(null);
    setToastMessage('Perubahan data berhasil disimpan!');
    setIsToastVisible(true);
  };

  return (
    <div className="bg-tactical-900 text-slate-100 font-sans min-h-screen selection:bg-tactical-accent selection:text-tactical-900">
      <header className="bg-tactical-800 border-b border-tactical-700 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-tactical-accent/10 p-2 rounded-lg border border-tactical-accent/30">
               <i className="fa-solid fa-crosshairs text-tactical-accent text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white tracking-wider leading-none uppercase">
                ATIRA <span className="text-tactical-accent">DIVISION</span>
              </h1>
              <p className="text-[9px] text-emerald-500 tracking-[0.3em] uppercase font-bold mt-1 opacity-80">
                Marketing Tactical Kit
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Produk atau Brand..."
                className="w-full pl-10 pr-4 py-2.5 bg-tactical-900/50 border border-tactical-700 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-tactical-accent text-white placeholder-gray-600 transition-all"
              />
              <i className="fa-solid fa-search absolute left-4 top-3 text-gray-600"></i>
            </div>
          </div>

          {isAdminMode && (
             <div className="text-[10px] font-bold text-tactical-accent border border-tactical-accent/30 px-3 py-1 rounded bg-tactical-accent/5">
                ADMIN ACCESS ACTIVE
             </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h2 className="text-6xl font-display font-bold text-white mb-3 uppercase tracking-tighter">
            TACTICAL <span className="text-tactical-gold">DATABASE</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-tactical-accent/30"></div>
             <p className="text-emerald-500 font-bold text-xs tracking-[0.4em] uppercase">
                Temukan Produkmu disini !
             </p>
             <div className="h-px w-12 bg-tactical-accent/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCopy={handleCopy}
              isAdmin={isAdminMode}
              onEdit={setEditingProduct}
            />
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-tactical-800 rounded-3xl border border-dashed border-tactical-700">
               <i className="fa-solid fa-box-open text-5xl text-gray-700 mb-4"></i>
               <p className="text-gray-500 font-bold uppercase tracking-widest">Produk tidak ditemukan</p>
            </div>
          )}
        </div>
      </main>

      {editingProduct && (
        <EditProductModal 
          product={editingProduct} 
          onSave={handleSaveProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}

      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onHide={() => setIsToastVisible(false)}
      />

      <footer className="mt-20 py-16 border-t border-tactical-700 text-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
           <i className="fa-solid fa-crosshairs text-emerald-900 text-4xl mb-2"></i>
           <p className="font-display font-bold text-2xl text-emerald-700 uppercase tracking-widest">ATIRA HUNTING DIVISION</p>
           <p className="text-gray-700 text-[9px] uppercase tracking-[0.5em] font-bold">
             Premium Optical Instruments &copy; 2026.
           </p>
        </div>
      </footer>
    </div>
  );
}
