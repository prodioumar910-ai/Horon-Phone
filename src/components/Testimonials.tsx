import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Amadou T.",
      role: "Client Fidèle",
      content: "J'ai acheté mon iPhone 15 Pro Max ici. Service impeccable, téléphone original et scellé. Je recommande vivement Horon Phone !",
      rating: 5
    },
    {
      name: "Fatoumata D.",
      role: "Acheteuse Vérifiée",
      content: "Livraison très rapide à mon bureau. Le livreur était très poli et m'a aidé à configurer mon nouveau Samsung S24 Ultra.",
      rating: 5
    },
    {
      name: "Ousmane K.",
      role: "Client",
      content: "Les meilleurs prix à Bamako pour les produits Apple. Le service après-vente est également très réactif.",
      rating: 5
    },
    {
      name: "Awa S.",
      role: "Acheteuse Vérifiée",
      content: "J'ai pris un Tecno Camon 20 pour ma petite sœur. Très bon rapport qualité/prix et accueil chaleureux à la boutique.",
      rating: 4
    }
  ];

  return (
    <section id="avis" className="py-24 bg-gray-50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-8 mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ce Que Disent Nos Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Votre satisfaction est notre meilleure publicité.</p>
      </motion.div>

      {/* Carousel Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full flex overflow-x-hidden"
      >
        {/* Animated Track */}
        <div className="flex animate-scroll-left gap-6 px-4 md:px-8 w-max">
          {/* Duplicate reviews for infinite scroll effect */}
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 cursor-default"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed italic">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
