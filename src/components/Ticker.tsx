import React from 'react';

const Ticker = () => {
  const items = [
    "NOUVEAU : IPHONE 17 PRO MAX",
    "•",
    "GARANTIE 12 MOIS",
    "•",
    "LIVRAISON RAPIDE",
    "•",
    "PRODUITS 100% ORIGINAUX",
    "•",
    "SAMSUNG S24 ULTRA DISPONIBLE",
    "•",
    "SERVICE APRÈS-VENTE",
    "•"
  ];

  return (
    <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-y border-white/10 group relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className="inline-block animate-ticker group-hover:[animation-play-state:paused]">
        {/* We duplicate the items to create a seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className={`inline-block mx-4 text-sm md:text-base font-display font-bold tracking-widest ${item === '•' ? 'text-gray-600' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
