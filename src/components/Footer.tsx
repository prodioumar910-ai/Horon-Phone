import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#accueil" 
              className="inline-block"
            >
              <img 
                src="/images/logo.jpg" 
                alt="Horon Phone" 
                className="h-16 md:h-20 w-auto rounded-xl shadow-md hover:opacity-90 transition-opacity"
              />
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre boutique de confiance à Bamako pour l'achat de smartphones originaux (iPhone, Samsung, Tecno) et d'accessoires de qualité.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }}><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#produits" className="text-gray-400 hover:text-white transition-colors">Nos Produits</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#accessoires" className="text-gray-400 hover:text-white transition-colors">Accessoires</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#avis" className="text-gray-400 hover:text-white transition-colors">Avis Clients</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></motion.li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Catégories</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }}><a href="#produits" className="text-gray-400 hover:text-white transition-colors">Apple iPhone</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#produits" className="text-gray-400 hover:text-white transition-colors">Samsung Galaxy</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#produits" className="text-gray-400 hover:text-white transition-colors">Tecno Mobile</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#accessoires" className="text-gray-400 hover:text-white transition-colors">Écouteurs & Audio</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#accessoires" className="text-gray-400 hover:text-white transition-colors">Chargeurs & Câbles</a></motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Grand Marché, Immeuble Sylla<br />Bamako, Mali</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>+223 71 88 32 07</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <span>contact@horonphone.ml</span>
              </motion.li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} Horon Phone. Tous droits réservés.</p>
          <div className="flex gap-6">
            <motion.a whileHover={{ color: '#fff' }} href="#" className="hover:text-white transition-colors">Politique de confidentialité</motion.a>
            <motion.a whileHover={{ color: '#fff' }} href="#" className="hover:text-white transition-colors">Conditions générales</motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
