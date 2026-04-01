import React, { useState, useEffect } from 'react';
import { produits, formatPrice, WHATSAPP_NUMBER, Produit } from '../data/produits';
import { ShoppingBag, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Products = () => {
  const [activeTab, setActiveTab] = useState<'iPhone' | 'Samsung' | 'Tecno'>('iPhone');
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);

  const filteredProducts = produits.filter(p => p.categorie === activeTab);
  
  // Group products by series
  const seriesMap = new Map<string, Produit[]>();
  filteredProducts.forEach(product => {
    const seriesName = product.sousCategorie || 'Autres';
    if (!seriesMap.has(seriesName)) {
      seriesMap.set(seriesName, []);
    }
    seriesMap.get(seriesName)!.push(product);
  });

  const seriesList = Array.from(seriesMap.keys());

  // Handle closing modal on external events (hash change, Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSeries(null);
    };
    
    const handleHashChange = () => {
      setSelectedSeries(null);
    };

    if (selectedSeries) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('hashchange', handleHashChange);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [selectedSeries]);

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Bonjour Horon Phone, je suis intéressé par le ${productName}. Est-il toujours disponible ?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="produits" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 via-[#111] to-black text-white">
      {/* Crystal / Glassmorphism Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-gray-700/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Nos Produits</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Découvrez notre sélection de smartphones haut de gamme, garantis originaux.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['iPhone', 'Samsung', 'Tecno'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as any);
                setSelectedSeries(null);
              }}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 backdrop-blur-md border ${
                activeTab === tab 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105 border-transparent' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Series Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {seriesList.map((seriesName, index) => {
              const seriesProducts = seriesMap.get(seriesName)!;
              const coverImage = seriesProducts[0]?.image || 'https://picsum.photos/400/500';
              
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  key={seriesName}
                  onClick={() => setSelectedSeries(seriesName)}
                  className="group cursor-pointer bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 border border-white/10 hover:border-white/30 flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-black p-6 flex items-center justify-center">
                    <img 
                      src={coverImage} 
                      alt={seriesName} 
                      loading="lazy"
                      className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full shadow-lg">
                        {seriesProducts.length} Modèles
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-transparent to-black/50">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">{seriesName}</h3>
                      <p className="text-sm text-gray-400">Cliquez pour voir tous les modèles et prix.</p>
                    </div>
                    <div className="mt-6 flex items-center text-sm font-bold text-white group-hover:text-gray-300">
                      Voir la série <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Series Details */}
        <AnimatePresence>
          {selectedSeries && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" style={{ perspective: '1200px' }}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-xl cursor-pointer"
                onClick={() => setSelectedSeries(null)}
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 100, rotateX: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-black/90 backdrop-blur-3xl border border-white/20"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 relative z-10">
                  <h3 className="text-2xl font-display font-bold text-white">{selectedSeries}</h3>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSeries(null);
                    }}
                    className="p-3 hover:bg-white/20 rounded-full transition-colors text-gray-300 hover:text-white cursor-pointer relative z-50"
                    aria-label="Fermer"
                  >
                    <X size={28} className="pointer-events-none" />
                  </button>
                </div>
                
                {/* Modal Body (Scrollable) */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {seriesMap.get(selectedSeries)?.map((product, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: idx * 0.1, type: "spring", stiffness: 150 }}
                        key={product.id} 
                        className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 flex flex-col hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                      >
                        <div className="relative aspect-square mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-black/50 p-6 flex items-center justify-center shadow-inner">
                          <img 
                            src={product.image} 
                            alt={product.nom} 
                            loading="lazy"
                            className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border ${
                              product.statut === 'Disponible' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                              product.statut === 'Stock limité' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                              'bg-gray-500/20 text-gray-300 border-gray-500/30'
                            }`}>
                              {product.statut}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-lg leading-tight mb-2 text-white">{product.nom}</h4>
                            <p className="text-2xl font-display font-bold text-gray-300 mb-6">{formatPrice(product.prix)}</p>
                          </div>
                          
                          <a 
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour Horon Phone, je suis intéressé par le ${product.nom}. Est-il toujours disponible ?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-4 py-4 bg-[#25D366] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.03] active:scale-95"
                          >
                            <ShoppingBag size={20} /> Commander sur WhatsApp
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
