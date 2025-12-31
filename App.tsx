
import React, { useState, useMemo, useEffect } from 'react';
import { INITIAL_PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { Toast } from './components/Toast';
import { EditProductModal } from './components/EditProductModal';
import { Product } from './types';
import { db, isCloudConnected } from './firebase';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';

const STORAGE_KEY = 'SYTONG_INDONESIA_MARKETING_KIT';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminMode(window.location.hash === '#/admin-access' || window.location.hash.includes('admin-access'));
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isCloudConnected && db) {
      const productsCol = collection(db, 'products');
      const unsubscribe = onSnapshot(productsCol, (snapshot) => {
        const cloudData = snapshot.docs.map(doc => doc.data() as Product);
        if (cloudData.length > 0) {
          setProducts(cloudData);
        } else {
          setProducts(INITIAL_PRODUCTS);
          INITIAL_PRODUCTS.forEach(async (p) => {
            await setDoc(doc(db, 'products', p.id), p);
          });
        }
        setIsLoading(false);
      }, (error) => {
        console.error("Firebase Sync Error:", error);
        loadFromLocalStorage();
      });
      return () => unsubscribe();
    } else {
      loadFromLocalStorage();
    }
  }, []);

  const loadFromLocalStorage = () => {
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
    setIsLoading(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('Teks berhasil disalin!');
      setIsToastVisible(true);
    });
  };

  const handleSaveProduct = async (updated: Product) => {
    const updatedList = products.map(p => p.id === updated.id ? updated : p);
    setProducts(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    
    if (isCloudConnected && db) {
      await setDoc(doc(db, 'products', updated.id), updated);
    }

    setEditingProduct(null);
    setToastMessage('Perubahan Berhasil Disimpan!');
    setIsToastVisible(true);
  };

  const handleExportData = () => {
    const dataString = JSON.stringify(products, null, 2);
    const fileContent = `import { Product } from './types';

// FILE INI DIHASILKAN OTOMATIS DARI EXPORT ADMIN ACCESS
// SALIN DAN TEMPEL KE constants.ts UNTUK MENJADIKAN DATA INI DEFAULT

export const INITIAL_PRODUCTS: Product[] = ${dataString};

export const PRODUCTS = INITIAL_PRODUCTS;`;

    const blob = new Blob([fileContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'constants.ts';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setToastMessage('File constants.ts berhasil diunduh!');
    setIsToastVisible(true);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  return (
    <div className="bg-tactical-900 text-slate-100 font-sans min-h-screen selection:bg-tactical-accent selection:text-tactical-900">
      <header className="bg-tactical-800 border-b border-tactical-700 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-tactical-accent/10 p-2 rounded-lg border border-tactical-accent/30">
               <i className="fa-solid fa-crosshairs text-tactical-accent text-2xl"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-display font-bold text-white tracking-wider leading-none uppercase">
                  SYTONG <span className="text-tactical-accent">INDONESIA</span>
                </h1>
              </div>
              <p className="text-[9px] text-emerald-500 tracking-[0.3em] uppercase font-bold mt-1 opacity-80">
                KATALOG PRODUK
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

          <div className="flex items-center gap-3">
            {isAdminMode && (
              <button 
                onClick={handleExportData}
                className="flex items-center gap-2 px-5 py-2.5 bg-tactical-gold text-white text-[10px] font-bold uppercase rounded-lg hover:brightness-110 transition-all shadow-lg animate-pulse"
              >
                <i className="fa-solid fa-download"></i>
                Export Constants.ts
              </button>
            )}
            {isAdminMode && (
              <div className="text-[9px] font-bold text-tactical-accent border border-tactical-accent/30 px-3 py-2 rounded bg-tactical-accent/5 uppercase tracking-widest">
                Admin Mode
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-3 uppercase tracking-tighter">
            AKSESORIS BERBURU <span className="text-tactical-gold">PALING DICARI</span>
          </h2>
          <p className="text-emerald-500 font-bold text-xs tracking-[0.4em] uppercase opacity-60">
             Premium Tactical Night Vision & Thermal
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {!isLoading && filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCopy={handleCopy}
              isAdmin={isAdminMode}
              onEdit={setEditingProduct}
            />
          ))}
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-30">
               <i className="fa-solid fa-circle-notch fa-spin text-4xl text-tactical-accent"></i>
               <p className="uppercase tracking-[0.3em] font-bold text-xs">Memuat Database...</p>
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
    </div>
  );
}
