import React from 'react';
import { CheckCircle2, Truck, CreditCard, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const Features = () => {
  const features = [
    {
      icon: <CheckCircle2 size={40} strokeWidth={1.5} />,
      title: "100% Original",
      description: "Tous nos produits sont authentiques, scellés et garantis par le constructeur."
    },
    {
      icon: <Truck size={40} strokeWidth={1.5} />,
      title: "Livraison Rapide",
      description: "Livraison express à Bamako et expédition sécurisée partout au Mali."
    },
    {
      icon: <CreditCard size={40} strokeWidth={1.5} />,
      title: "Paiement Sécurisé",
      description: "Payez à la livraison, par Orange Money, Moov Money ou virement bancaire."
    },
    {
      icon: <Wrench size={40} strokeWidth={1.5} />,
      title: "SAV Réactif",
      description: "Une équipe technique dédiée pour vous accompagner après votre achat."
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Pourquoi Choisir Horon Phone ?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">L'excellence au service de votre satisfaction.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
