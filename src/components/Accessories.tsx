import React from 'react';
import { Headphones, BatteryCharging, Smartphone, Shield } from 'lucide-react';
import { accessoires, formatPrice } from '../data/produits';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ReactNode> = {
  Headphones: <Headphones size={32} className="text-black" />,
  BatteryCharging: <BatteryCharging size={32} className="text-black" />,
  Smartphone: <Smartphone size={32} className="text-black" />,
  Shield: <Shield size={32} className="text-black" />,
};

const Accessories = () => {
  return (
    <section id="accessoires" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Accessoires Originaux</h2>
            <p className="text-gray-600">Complétez votre expérience avec notre sélection d'accessoires de qualité supérieure.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 font-bold hover:underline underline-offset-4">
            Voir tout le catalogue →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessoires.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-black hover:text-white transition-colors duration-300 flex flex-col items-center text-center cursor-pointer shadow-sm hover:shadow-xl"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
              >
                {/* Clone the icon to change its color on hover if needed, but here we keep it black inside the white circle */}
                {iconMap[item.icon]}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{item.nom}</h3>
              <p className="text-lg font-display font-bold text-gray-500 group-hover:text-gray-300 mb-6">
                {formatPrice(item.prix)}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto px-6 py-2 rounded-full border border-gray-200 group-hover:border-white/30 text-sm font-bold transition-colors"
              >
                Ajouter
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center md:hidden"
        >
          <a href="#contact" className="inline-flex items-center gap-2 font-bold hover:underline underline-offset-4">
            Voir tout le catalogue →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Accessories;
