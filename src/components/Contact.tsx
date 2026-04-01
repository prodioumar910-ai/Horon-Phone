import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/produits';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Passez nous voir</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Notre équipe est à votre disposition pour vous conseiller et vous aider à trouver le téléphone parfait.
            </p>

            <div className="space-y-8">
              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 cursor-default">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Adresse</h3>
                  <p className="text-gray-600">Grand Marché, Immeuble Sylla<br />Bamako, Mali</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 cursor-default">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Téléphone</h3>
                  <p className="text-gray-600">+223 71 88 32 07</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 cursor-default">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Heures d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Samedi : 09h00 - 19h00<br />Dimanche : Fermé</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-500/30"
              >
                <MessageCircle size={24} />
                Discuter sur WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-8">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow bg-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow bg-white"
                    placeholder="Votre numéro"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow bg-white"
                  placeholder="Ex: Renseignement sur iPhone 15"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow bg-white resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
