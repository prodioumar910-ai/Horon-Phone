import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

import logoImg from '../assets/images/logo.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={logoImg} 
          alt="Horon Phone Store" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide">📍 Bamako · Mali</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 leading-tight"
        >
          Votre Boutique <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            de Confiance
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
        >
          iPhones, Samsung, Tecno — Originaux & Garantis. Le meilleur de la technologie au meilleur prix.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#produits" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors hover:bg-gray-200"
          >
            Voir les Produits <ArrowRight size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/22371883207" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={20} /> WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
